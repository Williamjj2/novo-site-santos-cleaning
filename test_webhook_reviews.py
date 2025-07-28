#!/usr/bin/env python3
"""
Script de teste para validar o webhook de reviews
Testa a nova funcionalidade sem quebrar o sistema existente
"""

import requests
import json
from datetime import datetime, timedelta
import sys

# Configurações
BASE_URL = "https://santoscsolutions.com"  # Mude para localhost:8001 para teste local
WEBHOOK_ENDPOINT = f"{BASE_URL}/api/webhook/reviews-update"

def test_webhook_payload():
    """Cria payload de teste idêntico ao que o n8n enviará"""
    test_reviews = [
        {
            "author_name": "Teste Webhook",
            "author_url": "https://google.com/maps/contrib/test",
            "profile_photo_url": "https://ui-avatars.com/api/?name=Teste+Webhook&background=4285F4&color=fff&size=128",
            "rating": 5,
            "text": "Review de teste para validar o webhook. Se você está vendo isso, o sistema está funcionando!",
            "relative_time_description": "Agora mesmo",
            "review_time": datetime.now().isoformat() + "Z",
            "language": "pt",
            "original_language": "pt",
            "translated": False
        },
        {
            "author_name": "Maria Test Silva",
            "rating": 4,
            "text": "Segundo review de teste com menos campos para validar robustez.",
            "relative_time_description": "5 minutos atrás",
            "review_time": (datetime.now() - timedelta(minutes=5)).isoformat() + "Z"
        }
    ]
    
    payload = {
        "action": "reviews_updated",
        "timestamp": datetime.now().isoformat() + "Z",
        "business_name": "Santos Cleaning Solutions",
        "total_reviews": len(test_reviews),
        "average_rating": 4.5,
        "user_ratings_total": 47,
        "reviews": test_reviews
    }
    
    return payload

def test_webhook():
    """Testa o webhook com dados de exemplo"""
    print("🧪 TESTANDO WEBHOOK DE REVIEWS")
    print("=" * 50)
    
    payload = test_webhook_payload()
    
    print(f"📤 Enviando {len(payload['reviews'])} reviews de teste para:")
    print(f"   {WEBHOOK_ENDPOINT}")
    print()
    
    try:
        headers = {
            "Content-Type": "application/json",
            "User-Agent": "Santos-Webhook-Test/1.0"
        }
        
        response = requests.post(
            WEBHOOK_ENDPOINT,
            json=payload,
            headers=headers,
            timeout=30
        )
        
        print(f"📊 Status Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            print("✅ WEBHOOK FUNCIONOU!")
            print(f"   💾 Reviews salvos: {result.get('reviews_saved', 'N/A')}")
            print(f"   ⏭️ Reviews ignorados: {result.get('reviews_skipped', 'N/A')}")
            print(f"   ❌ Erros: {result.get('reviews_errors', 'N/A')}")
            print(f"   📈 Rating médio: {result.get('average_rating', 'N/A')}")
            print()
            print("🎯 RESULTADO:", result.get('message', 'Sucesso'))
            
            return True
            
        elif response.status_code == 422:
            print("❌ ERRO DE VALIDAÇÃO (campos obrigatórios)")
            try:
                error_details = response.json()
                print("   Detalhes:", json.dumps(error_details, indent=2))
            except:
                print("   Response:", response.text)
                
        elif response.status_code == 500:
            print("❌ ERRO INTERNO DO SERVIDOR")
            print("   Verifique os logs do backend")
            print("   Response:", response.text[:200])
            
        else:
            print(f"❌ ERRO INESPERADO: {response.status_code}")
            print("   Response:", response.text[:200])
            
        return False
        
    except requests.exceptions.ConnectionError:
        print("❌ ERRO DE CONEXÃO")
        print("   Verifique se o backend está rodando")
        print(f"   URL: {WEBHOOK_ENDPOINT}")
        return False
        
    except requests.exceptions.Timeout:
        print("❌ TIMEOUT")
        print("   Webhook demorou mais de 30 segundos")
        return False
        
    except Exception as e:
        print(f"❌ ERRO INESPERADO: {str(e)}")
        return False

def test_existing_api():
    """Testa se a API existente ainda funciona"""
    print("🔍 TESTANDO API EXISTENTE")
    print("=" * 50)
    
    try:
        # Testar rota de reviews existente
        response = requests.get(f"{BASE_URL}/api/reviews", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            reviews = data.get('reviews', [])
            print(f"✅ API de reviews funcionando: {len(reviews)} reviews")
            
            # Testar rota de health
            health_response = requests.get(f"{BASE_URL}/api/health", timeout=5)
            if health_response.status_code == 200:
                print("✅ Health check OK")
            else:
                print("⚠️ Health check com problemas")
                
            return True
        else:
            print(f"❌ API de reviews com problemas: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Erro testando API existente: {str(e)}")
        return False

def main():
    """Executa todos os testes"""
    print("🚀 TESTE COMPLETO DO SISTEMA DE REVIEWS")
    print("🕐", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print("=" * 60)
    print()
    
    # Teste 1: API existente
    api_ok = test_existing_api()
    print()
    
    # Teste 2: Novo webhook
    webhook_ok = test_webhook()
    print()
    
    # Resultado final
    print("📋 RESUMO DOS TESTES")
    print("=" * 50)
    print(f"✅ API existente: {'OK' if api_ok else 'FALHOU'}")
    print(f"✅ Novo webhook: {'OK' if webhook_ok else 'FALHOU'}")
    print()
    
    if api_ok and webhook_ok:
        print("🎉 TODOS OS TESTES PASSARAM!")
        print("   Sistema pronto para produção!")
        sys.exit(0)
    else:
        print("⚠️ ALGUNS TESTES FALHARAM")
        print("   Verifique os logs antes do deploy")
        sys.exit(1)

if __name__ == "__main__":
    main() 