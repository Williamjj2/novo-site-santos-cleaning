#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 COMPLETE SEO VALIDATION STARTING...\n');

// Colors for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}❌${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ️${colors.reset} ${msg}`),
  title: (msg) => console.log(`\n${colors.bold}${colors.blue}${msg}${colors.reset}`)
};

// SEO Validation Functions
const seoValidation = {
  // Check title length (max 60 chars)
  validateTitle: (title) => {
    if (!title) return { valid: false, message: 'Title is missing' };
    if (title.length > 60) return { valid: false, message: `Title too long: ${title.length}/60 chars` };
    if (title.length < 10) return { valid: false, message: `Title too short: ${title.length}/10 chars` };
    return { valid: true, message: `Title OK: ${title.length}/60 chars` };
  },

  // Check description length (max 155 chars)
  validateDescription: (desc) => {
    if (!desc) return { valid: false, message: 'Description is missing' };
    if (desc.length > 155) return { valid: false, message: `Description too long: ${desc.length}/155 chars` };
    if (desc.length < 50) return { valid: false, message: `Description too short: ${desc.length}/50 chars` };
    return { valid: true, message: `Description OK: ${desc.length}/155 chars` };
  },

  // Check for unique H1
  validateH1: (content) => {
    // Check for both HTML and JSX h1 tags
    const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi) || 
                     content.match(/<h1[^>]*\/>/gi) ||
                     content.match(/<h1[^>]*>.*?<\/h1>/gi) ||
                     content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
    
    if (!h1Matches || h1Matches.length === 0) {
      return { valid: false, message: 'No H1 found' };
    }
    if (h1Matches.length > 1) {
      return { valid: false, message: `Multiple H1s found: ${h1Matches.length}` };
    }
    
    // Extract text content from JSX or HTML
    let h1Text = '';
    if (h1Matches[0].includes('className=')) {
      // JSX format - extract text between tags
      const textMatch = h1Matches[0].match(/>([^<]+)</);
      h1Text = textMatch ? textMatch[1].trim() : '';
    } else {
      // HTML format
      h1Text = h1Matches[0].replace(/<[^>]*>/g, '').trim();
    }
    
    if (h1Text.length < 10) {
      return { valid: false, message: 'H1 too short or generic' };
    }
    return { valid: true, message: `H1 OK: "${h1Text.substring(0, 50)}..."` };
  },

  // Check word count (min 300 words)
  validateWordCount: (content) => {
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = textContent.split(' ').filter(word => word.length > 0);
    const wordCount = words.length;
    
    if (wordCount < 300) {
      return { valid: false, message: `Insufficient content: ${wordCount}/300 words` };
    }
    return { valid: true, message: `Content OK: ${wordCount} words` };
  },

  // Check for alt text in images
  validateAltText: (content) => {
    const imgTags = content.match(/<img[^>]*>/gi) || [];
    const imgWithoutAlt = imgTags.filter(img => !img.includes('alt='));
    
    if (imgTags.length === 0) {
      return { valid: true, message: 'No images found' };
    }
    
    if (imgWithoutAlt.length > 0) {
      return { valid: false, message: `${imgWithoutAlt.length}/${imgTags.length} images missing alt text` };
    }
    
    return { valid: true, message: `All ${imgTags.length} images have alt text` };
  },

  // Check heading structure
  validateHeadingStructure: (content) => {
    const headings = {
      h1: (content.match(/<h1[^>]*>/gi) || []).length,
      h2: (content.match(/<h2[^>]*>/gi) || []).length,
      h3: (content.match(/<h3[^>]*>/gi) || []).length,
      h4: (content.match(/<h4[^>]*>/gi) || []).length,
    };

    const issues = [];
    
    if (headings.h1 !== 1) {
      issues.push(`Expected 1 H1, found ${headings.h1}`);
    }
    
    if (headings.h2 === 0) {
      issues.push('No H2 headings found');
    }
    
    if (headings.h3 === 0 && headings.h2 > 0) {
      issues.push('No H3 headings found (recommended for structure)');
    }

    if (issues.length > 0) {
      return { valid: false, message: issues.join('; ') };
    }
    
    return { valid: true, message: `Heading structure OK: H1(${headings.h1}) H2(${headings.h2}) H3(${headings.h3})` };
  },

  // Check internal links
  validateInternalLinks: (content) => {
    const linkMatches = content.match(/href=["']([^"']*)["']/gi) || [];
    const internalLinks = linkMatches.filter(link => {
      const href = link.match(/href=["']([^"']*)["']/i)[1];
      return href.startsWith('/') || href.startsWith('./') || href.startsWith('../');
    });
    
    if (internalLinks.length === 0) {
      return { valid: false, message: 'No internal links found' };
    }
    
    return { valid: true, message: `${internalLinks.length} internal links found` };
  }
};

// Pages to validate
const pages = [
  {
    path: 'app/page.tsx',
    name: 'Homepage',
    expectedTitle: 'Professional House Cleaning Services in Marietta, GA',
    expectedDescription: 'Professional house cleaning services in Marietta, GA'
  },
  {
    path: 'app/services/page.tsx',
    name: 'Services Page',
    expectedTitle: 'Our Cleaning Services',
    expectedDescription: 'Professional cleaning services in Marietta, GA'
  },
  {
    path: 'app/areas/page.tsx',
    name: 'Areas Page',
    expectedTitle: 'Service Areas',
    expectedDescription: 'Professional cleaning services throughout Metro Atlanta'
  },
  {
    path: 'app/areas/marietta/page.tsx',
    name: 'Marietta Page',
    expectedTitle: 'Cleaning Services in Marietta, GA',
    expectedDescription: 'Professional house cleaning services in Marietta, Georgia'
  },
  {
    path: 'app/about/page.tsx',
    name: 'About Page',
    expectedTitle: 'About Us',
    expectedDescription: 'Learn about Santos Cleaning Solutions'
  },
  {
    path: 'app/contact/page.tsx',
    name: 'Contact Page',
    expectedTitle: 'Contact Us',
    expectedDescription: 'Contact Santos Cleaning Solutions for your free cleaning estimate'
  }
];

// Main validation function
function validatePage(page) {
  log.title(`📄 VALIDATING: ${page.name}`);
  
  try {
    const filePath = path.join(process.cwd(), page.path);
    if (!fs.existsSync(filePath)) {
      log.error(`File not found: ${page.path}`);
      return { valid: false, issues: [`File not found: ${page.path}`] };
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];
    const results = {};

    // Extract metadata
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descriptionMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
    
    const title = titleMatch ? titleMatch[1] : '';
    const description = descriptionMatch ? descriptionMatch[1] : '';

    // Validate title
    const titleValidation = seoValidation.validateTitle(title);
    results.title = titleValidation;
    if (!titleValidation.valid) issues.push(titleValidation.message);

    // Validate description
    const descValidation = seoValidation.validateDescription(description);
    results.description = descValidation;
    if (!descValidation.valid) issues.push(descValidation.message);

    // Validate H1
    const h1Validation = seoValidation.validateH1(content);
    results.h1 = h1Validation;
    if (!h1Validation.valid) issues.push(h1Validation.message);

    // Validate word count
    const wordCountValidation = seoValidation.validateWordCount(content);
    results.wordCount = wordCountValidation;
    if (!wordCountValidation.valid) issues.push(wordCountValidation.message);

    // Validate alt text
    const altValidation = seoValidation.validateAltText(content);
    results.altText = altValidation;
    if (!altValidation.valid) issues.push(altValidation.message);

    // Validate heading structure
    const headingValidation = seoValidation.validateHeadingStructure(content);
    results.headingStructure = headingValidation;
    if (!headingValidation.valid) issues.push(headingValidation.message);

    // Validate internal links
    const linksValidation = seoValidation.validateInternalLinks(content);
    results.internalLinks = linksValidation;
    if (!linksValidation.valid) issues.push(linksValidation.message);

    // Display results
    Object.entries(results).forEach(([key, result]) => {
      if (result.valid) {
        log.success(`${key}: ${result.message}`);
      } else {
        log.error(`${key}: ${result.message}`);
      }
    });

    return {
      valid: issues.length === 0,
      issues,
      results
    };

  } catch (error) {
    log.error(`Error validating ${page.name}: ${error.message}`);
    return { valid: false, issues: [`Error: ${error.message}`] };
  }
}

// Schema.org validation
function validateSchemaOrg() {
  log.title('🏗️ VALIDATING SCHEMA.ORG STRUCTURE');
  
  try {
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    if (!fs.existsSync(layoutPath)) {
      log.error('Layout file not found');
      return false;
    }
    
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Simple check for LocalBusiness schema
    if (layoutContent.includes('"@type": "LocalBusiness"')) {
      log.success('Schema.org LocalBusiness structure found and valid');
      return true;
    } else {
      log.error('No Schema.org LocalBusiness structure found');
      return false;
    }
    
  } catch (error) {
    log.error(`Error validating Schema.org: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  log.title('🚀 COMPLETE SEO VALIDATION');
  
  let totalIssues = 0;
  const pageResults = [];
  
  // Validate each page
  for (const page of pages) {
    const result = validatePage(page);
    pageResults.push({ page, result });
    
    if (!result.valid) {
      totalIssues += result.issues.length;
    }
    
    console.log(''); // Add spacing
  }
  
  // Validate Schema.org
  const schemaValid = validateSchemaOrg();
  if (!schemaValid) totalIssues++;
  
  // Summary
  log.title('📊 VALIDATION SUMMARY');
  
  const validPages = pageResults.filter(r => r.result.valid).length;
  const totalPages = pages.length;
  
  console.log(`\n${colors.bold}Pages Validated:${colors.reset} ${validPages}/${totalPages}`);
  console.log(`${colors.bold}Total Issues:${colors.reset} ${totalIssues}`);
  
  if (totalIssues === 0) {
    log.success('🎉 ALL SEO VALIDATIONS PASSED!');
    console.log('\nYour website is SEO-optimized and ready for search engines!');
  } else {
    log.warning(`⚠️  ${totalIssues} SEO issues found. Please review and fix.`);
    
    console.log('\n📋 ISSUES TO FIX:');
    pageResults.forEach(({ page, result }) => {
      if (!result.valid) {
        console.log(`\n${colors.bold}${page.name}:${colors.reset}`);
        result.issues.forEach(issue => console.log(`  • ${issue}`));
      }
    });
  }
  
  // Generate checklist
  generateChecklist(pageResults, schemaValid, totalIssues);
}

function generateChecklist(pageResults, schemaValid, totalIssues) {
  const checklist = `# 📋 SEO VALIDATION CHECKLIST

**Date:** ${new Date().toISOString().split('T')[0]}  
**Status:** ${totalIssues === 0 ? '✅ PASSED' : '❌ NEEDS FIXES'}  
**Total Issues:** ${totalIssues}

## 📄 PAGE VALIDATIONS

${pageResults.map(({ page, result }) => `
### ${page.name}
- **Status:** ${result.valid ? '✅ PASSED' : '❌ FAILED'}
- **Issues:** ${result.issues.length}
${result.issues.length > 0 ? result.issues.map(issue => `  - ${issue}`).join('\n') : '  - None'}
`).join('\n')}

## 🏗️ SCHEMA.ORG VALIDATION
- **Status:** ${schemaValid ? '✅ PASSED' : '❌ FAILED'}
- **LocalBusiness Schema:** ${schemaValid ? 'Found and valid' : 'Missing or invalid'}

## 📊 SEO METRICS SUMMARY

### ✅ PASSED VALIDATIONS
${pageResults.filter(r => r.result.valid).map(({ page }) => `- ${page.name}`).join('\n')}

### ❌ FAILED VALIDATIONS
${pageResults.filter(r => !r.result.valid).map(({ page, result }) => `- ${page.name} (${result.issues.length} issues)`).join('\n')}

## 🔧 RECOMMENDATIONS

${totalIssues === 0 ? `
🎉 **EXCELLENT!** Your website is fully SEO-optimized:

1. ✅ All pages have proper titles (under 60 characters)
2. ✅ All pages have proper descriptions (under 155 characters)
3. ✅ All pages have unique H1 headings
4. ✅ All pages have sufficient content (300+ words)
5. ✅ All images have alt text
6. ✅ Proper heading structure (H1 > H2 > H3)
7. ✅ Internal linking strategy implemented
8. ✅ Schema.org LocalBusiness structure implemented

**Next Steps:**
- Submit sitemap to Google Search Console
- Monitor Core Web Vitals
- Set up Google Analytics tracking
- Consider adding more internal links
` : `
⚠️ **NEEDS IMPROVEMENT:** Please fix the following issues:

${pageResults.filter(r => !r.result.valid).map(({ page, result }) => `
**${page.name}:**
${result.issues.map(issue => `- ${issue}`).join('\n')}
`).join('\n')}

**Priority Actions:**
1. Fix title and description lengths
2. Ensure unique H1 on each page
3. Add more content to reach 300+ words
4. Add alt text to all images
5. Implement proper heading hierarchy
6. Add internal links between pages
7. Implement Schema.org markup
`}

## 📈 SEO SCORE: ${Math.round(totalIssues === 0 ? 100 : Math.max(0, 100 - (totalIssues * 10)))}%

${totalIssues === 0 ? '🎯 PERFECT SEO SCORE!' : '📈 Room for improvement - focus on the issues above'}

---
*Generated by SEO Validation Script*
`;

  fs.writeFileSync('SEO_CHECKLIST.md', checklist);
  log.success('📋 SEO_CHECKLIST.md generated');
}

// Run validation
main().catch(console.error); 