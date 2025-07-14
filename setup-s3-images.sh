#!/bin/bash

echo "🖼️ Setting up AWS S3 for Santos Cleaning Images"
echo "=============================================="

# Variáveis (EDITE ESTES VALORES)
BUCKET_NAME="santos-cleaning-images"
REGION="us-east-1"

echo "📦 Creating S3 bucket..."

# Criar bucket S3
aws s3 mb s3://$BUCKET_NAME --region $REGION

# Configurar bucket para hospedagem web
aws s3 website s3://$BUCKET_NAME --index-document index.html

# Configurar política de acesso público
cat << EOF > bucket-policy.json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

# Aplicar política
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json

# Desabilitar bloqueio de acesso público
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

echo "✅ S3 bucket configured successfully!"
echo "📁 Bucket URL: https://$BUCKET_NAME.s3.$REGION.amazonaws.com/"
echo "📤 Upload your images using:"
echo "   aws s3 cp your-image.jpg s3://$BUCKET_NAME/before-after/"

rm bucket-policy.json