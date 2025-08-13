# 🎙️ Viagem Backend - API de Transcrição de Áudio com Deepgram

API construída com **Node.js**, **Express** e **TypeScript** para realizar transcrição de áudio utilizando o serviço da Deepgram.  
Conta com upload de arquivos via **Multer**, persistência de dados com **Prisma** e banco PostgreSQL.

---

## 🧰 Tecnologias e Dependências

- **[Node.js v22.18.0](https://nodejs.org/)** — Ambiente de execução.
- **[Express 5](https://expressjs.com/)** — Framework web para API REST.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para JavaScript.
- **[Multer](https://github.com/expressjs/multer)** — Middleware para upload de arquivos.
- **[Cors](https://github.com/expressjs/cors)** — Habilita CORS para segurança.
- **[Deepgram SDK](https://github.com/deepgram/deepgram-node-sdk)** — Cliente oficial para integração com Deepgram.
- **[Prisma](https://www.prisma.io/)** — ORM para banco de dados PostgreSQL.
- **[Tsup](https://tsup.egoist.dev/)** — Build tool para TypeScript.
- **[tsx](https://github.com/esbuild-kit/tsx)** — Execução e watch para arquivos TypeScript.

### Dependências Principais

| Pacote             | Versão  | Finalidade                             |
|--------------------|---------|--------------------------------------|
| @deepgram/sdk      | ^4.11.2 | SDK para comunicação com Deepgram    |
| @prisma/client     | ^6.14.0 | Cliente ORM para PostgreSQL           |
| express            | ^5.1.0  | Framework para construção da API      |
| multer             | ^2.0.2  | Upload de arquivos                    |
| cors               | ^2.8.5  | Habilitação de CORS                   |
| tsconfig-paths     | ^4.2.0  | Resolução de paths no TypeScript      |
| typescript         | ^5.9.2  | Tipagem estática                      |
| tsup               | ^8.5.0  | Bundler para build                    |
| txc                | ^0.0.1  | (Utilitário relacionado a TS, se usado) |

### Dependências de Desenvolvimento

| Pacote          | Versão  | Finalidade                           |
|-----------------|---------|------------------------------------|
| prisma          | ^6.14.0 | CLI do Prisma para migrations e generate|
| tsx             | ^4.20.3 | Executor para arquivos TypeScript   |
| @types/express  | ^5.0.3  | Tipos para Express                   |
| @types/cors     | ^2.8.19 | Tipos para CORS                     |
| @types/multer   | ^2.0.0  | Tipos para Multer                   |

---

### Gere sua apikey no Deepgram

Para obter a API_KEY, acesse https://deepgram.com/, crie uma conta e gere sua chave de API.

## 🔑 Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis:

```env
#Variáveis de Deepgram
DEEPGRAM_API_KEY=your_deepgram_api_key_here

#Variáveis de banco de dados LOCAL (Se estiver usando o banco local)
DATABASE_URL="postgresql://postgres:SEU_SENHA@localhost:5432/SEU_BANCO_DE_DADOS?schema=public"

#Variáveis de banco de dados DOCKER (Se estiver usando o banco docker)
POSTGRES_USER= SEU_USUARIO
POSTGRES_PASSWORD=SEU_SENHA
POSTGRES_DB=SEU_BANCO_DE_DADOS

```

### Usando projeto

Se estiver usando o banco local
```bash
npm install
```
```bash
npx prisma generate
```

```bash
npm run start:dev
```

### Usando docker
```bash
docker-compose up -d
```




