# Como Remover o Script SearchAtlas

## Para remover o script de otimização dinâmica:

1. **Abra o arquivo:** `app/layout.tsx`

2. **Procure e remova este bloco de código (linhas ~94-111):**

```tsx
{/* SearchAtlas Dynamic Optimization Script - TEMPORARY TEST */}
<script
  {...{
    'nowprocket': '',
    'nitro-exclude': ''
  } as any}
  type="text/javascript"
  id="sa-dynamic-optimization"
  data-uuid="e818b258-c07f-43f5-b850-c649e9b0d162"
  dangerouslySetInnerHTML={{
    __html: `
      var script = document.createElement("script");
      script.setAttribute("nowprocket", "");
      script.setAttribute("nitro-exclude", "");
      script.src = "https://dashboard.searchatlas.com/scripts/dynamic_optimization.js";
      script.dataset.uuid = "e818b258-c07f-43f5-b850-c649e9b0d162";
      script.id = "sa-dynamic-optimization-loader";
      document.head.appendChild(script);
    `
  }}
/>
```

3. **Salve o arquivo**

## Para restaurar o backup completo:

```bash
# Remover arquivos atuais
rm -rf app components lib public *.json *.js *.ts README.md

# Copiar do backup
cp -R build-20250731-142801/* .
```

## Notas:
- O script foi adicionado em 31/07/2025 às 14:28
- Backup completo disponível em: `build-20250731-142801/`
- O script é carregado dinamicamente do SearchAtlas
- Pode impactar performance e privacidade 