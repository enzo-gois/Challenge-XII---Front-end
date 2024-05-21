Como Rodar:

```bash
# Clone o repositório
git clone https://github.com/enzo-gois/Challenge-XII---Front-end

# Navegue até o diretório do projeto
cd Challenge-XII---Front-end

# Instale as dependências
npm install
```

Configuração de ambiente:

```bash

#crie um arquivo .env na raíz do projeto
e coloque o seguinte conteudo

IPGEOLOCATION_API_KEY = chave da sua api do site =>    https://www.ipify.org

```

Inicializando a página

```bash
#Código para iniciar a aplicação
npm run dev
```

Acesse a página  ->   http://localhost:3000

AVISO!!
A api de localização atual do usuário não 
vai estar funcionando após baixar o projeto

para que funcione, abra o arquivo next.config.mjs
e comente a linha:         output: "export"
