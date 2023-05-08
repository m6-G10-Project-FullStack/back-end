<h1 align="center">Motors Shop API</h1>

<h2 align="center">Índice</h2>

<ul>
  <li>
    <a href="#deps">Instalando dependências</a>
  </li>
  <li>
    <a href="#env">Configurando variáveis de ambiente</a>
  </li>
  <li>
    <a href="#client">Gerando cliente do Prisma e rodando migrações</a>
  </li>
  <li>
    <a href="#run">Rodando a aplicação</a>
  </li>
  <li>
    <a href="#doc">Documentação</a>
  </li>
</ul>

<p>
  Para rodar a API primeiro você precisa ter em sua máquina:
</p>

<ul>
  <li>
    <a href="https://nodejs.org/en/download" target="_blank">Node.js</a>
  </li>
  <li>
    Administrador de pacotes (<a href="https://docs.npmjs.com/getting-started" target="_blank">npm</a> ou <a href="https://yarnpkg.com/getting-started" target="_blank">yarn</a>)
  </li>
  <li>
    <a href="https://www.postgresql.org/download/" target="_blank">Banco de dados PostgreSQL</a>
  </li>
</ul>

<br />

<h2 align="center" id="deps">Instalando dependências</h2>

<p>
  A instalação de dependências é algo de grande importância para o funcionamento correto da aplicação, basta seguir os comandos a seguir e as dependências serão automaticamente instaladas:
</p>

<h3>npm</h3>

```bash
npm install
```

<h3>yarn</h3>

```bash
yarn
```

<br />

<h2 align="center" id="env">Configurando variáveis de ambiente</h2>

<p>
  Variáveis de ambiente servem para a configuração local da sua aplicação, como URL para conexão com banco de dados, secret key, email para envio automátio e etc.
</p>

<p>
  Basta criar um arquivo <strong>'.env'</strong> na raiz do projeto e seguir o conteúdo presente no arquivo '.env.example'.
</p>

<br />

<h2 align="center" id="client">Gerando cliente do Prisma e rodando migrações</h2>

<p>
  O Prisma é um ORM robusto, e para utilizá-lo corretamente primeiro precisamos instalar o Prisma Client e em seguida rodar as migrations para criar nossas tabelas e relacionamentos.
</p>

<h3>npm</p>

```bash
npx prisma generate
```

```bash
npx prisma migrate dev
```

<h3>yarn</h3>

```bash
yarn prisma generate
```

```bash
yarn prisma migrate dev
```

<br />

<h2 align="center" id="run">Rodando a aplicação</h2>

<p>
  Agora que as dependências foram instaladas, o Prisma Client foi instalado corretamente e as migrations foram executadas no banco de dados, agora basta rodar o seguinte comando para iniciar nossa aplicação:
</p>

<h3>npm</h3>

```bash
npm run dev
```

<h3>yarn</h3>

```bash
yarn dev
```

<br />

<h2 align="center" id="doc">Documentação</h2>

<p>
  A documentação foi feita usando o Swagger, e pode ser encontrada na rota <strong>'/api/docs/'</strong>, basta iniciar a aplicação com os comando supracitados
</p>

<a href="#top">Voltar ao topo</a>
