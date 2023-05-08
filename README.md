<h1 align="center" id="top">Motors Shop</h1>

<p>
    Bem vindo ao <strong>Motors Shop</strong>! A aplicação foi desenvolvida utilizando tecnologias recentes e atualizadas, para funcionar corretamente em sua máquina é necessário ter instalado:
</p>

<ul>
    <li>Node.js</li>
    <li>Administrador de pacotes (npm ou yarn)</li>
</ul>

<h3 align="center">Índice:</h3>

<blockquote>
  <a href="#init">Iniciando a aplicação</a>
  <br />
  <a href="#techs">Tecnologias</a>
  <br/>
  <a href="#pages">Pagínas</a>
  <br/>
  <a href="#funcs">Funcionalidades</a>
  <br/>
  <a href="#team">Time</a>
</blockquote>

<br/>

<h2 align="center" id="init">Iniciando a aplicação</h2>

<p>
  Para iniciar a aplicação localmente primeiro é necessário ter a API do Motors Shop rodando e um banco de dados disponível, você pode encontrar mais informações no seguinte link:
</p>

<a href="https://github.com/m6-G10-Project-FullStack/back-end" target="_blank">Motors Shop API</a>

<p>
  Uma vez que a API estiver conectada com o banco de dados e estiver rodando, você pode seguir com os seguintes comandos para a instalação de dependências:
</p>

<h3>npm</h3>

```bash
npm install
```

<h3>yarn</h3>

```bash
yarn
```

<p>
  Agora, basta apenas rodar mais um comando e a aplicação estará rodando localmente:
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

<h2 align="center" id="techs">Tecnologias</h3>

<p>
  Como citado anteriormente, o time de desenvolvimento escolheu algumas das tecnologias mais recentes e robustas do cenário para construção do projeto. Para instalar o Node.js e algum dos administradores de pacote, recomendamos as documentações oficiais:
</p>

<ul>
  <li>
    <a href="https://nodejs.org/pt-br" target="_blank">Node.js</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/" target="_blank">Npm</a>
  </li>
  <li>
    <a href="https://yarnpkg.com/" target="_blank">Yarn</a>
  </li>
</ul>

<p>
  Lista de tecnologias usadas para construção do projeto:
</p>

<ul>
    <li>Next.js v13.2.4</li>
    <li>Typescript v5.0.3</li>
    <li>Tailwindcss v3.3.1</li>
    <li>Axios v1.3.6</li>
    <li>Eslint v8.37.0</li>
    <li>Jwt Decode v3.1.2</li>
    <li>React Hook Form v7.43.9</li>
    <li>React Icons v4.8.0</li>
    <li>React Toastify v9.1.2</li>
    <li>Nookies v2.5.2</li>
    <li>Yup v1.0.2</li>
    <li>@hookform/resolvers v3.0.0</li>
</ul>

<h2 align="center" id="pages">Páginas</h2>

<p>
    Atualmente contamos com as seguintes páginas na aplicação:
</p>

<ul>
    <li>
        <h3>Home Page:</h3>
        <p>
            É a página principal, onde são exibidos os anúncios dos carros e o usuário pode ir para as outras páginas da aplicação.
        </p>
    </li>
    <li>
        <h3>Car Page:</h3>
        <p>
            Vindo da Home Page, é a página onde são exibidos os detalhes de um carro, como descrição, comentários, fotos e acesso ao perfil do anunciante.
        </p>
    </li>
    <li>
        <h3>User Page:</h3>
        <p>
            É a página onde são exibidas informações do anunciante e todos os seus carros anunciados por aquele vendedor. 
        </p>
    </li>
    <li>
        <h3>Login e Registro:</h3>
        <p>
            São as páginas base para cadastro, login e recuperação de senha de um usuário, o portal de entrada para demais funcionalidades do site.
        </p>
    </li>
</ul>

<h2 align="center" id="funcs">Funcionalidades</h2>

<p>
    O site possui diversos componentes que aparecem em várias páginas, e algumas regras de negócio que vamos citar a seguir:
</p>

<ul>
    <li>
        <h3>Header:</h3>
        <p>
            Permite o usuário não logado navegar para as páginas de registro e login, e uma vez logado tem acesso a um menu onde pode editar suas informações de endereço e anúncios caso seja um usuário anunciante
        </p>
    </li>
    <li>
        <h3>Car Card:</h3>
        <p>
            O card padrão de anúncio, onde resume diversas informações do carro e do anunciante. Ao ser clicado encaminha o usuário para a página do carro, e mostra a opção de atualização do carro quando o usuário anunciante acessa seu perfil. Caso seu preço esteja próximo da FIPE ele exibe um ícone verde demonstrando ser uma boa compra, e caso seu anunciante determine, ele fica desativado sendo apenas exibido na página do anunciado ao usuário logado.
        </p>
    </li>
    <li>
        <h3>Filter List:</h3>
        <p>
            O componente de filtro está presente na Home Page, onde traz diversas formas para o usuário achar o carro desejado, como filtragem por marca, modelo, cor, tipo de combustível, ano, quilometragem e preço.
        </p>
    </li>
    <li>
        <h3>Modal:</h3>
        <p>
            É um componente que pode ser usado de diversas formas, porém serve mais como um "componente base" para criar todos os modais da aplicação.
        </p>
    </li>
    <li>
        <h3>Input e Select:</h3>
        <p>
            Componentes de input e select que funcionam de forma simples mas facilitam os formulários da aplicação.
        </p>
    </li>
    <li>
        <h3>Button:</h3>
        <p>
            É um componente que facilita a estilização, não interfere em nada nas funcionalidades do evento de clique e está presente praticametne em todas as páginas.
        </p>
    </li>
</ul>

<h2 align="center" id="team">Time</h2>

<p>
    Primeiro gostaríamos de ressaltar que essa aplicação é de cunho didático, não tem propósito lucrativo ou de divulgação! Segue aqui o time de desenvolvimento:
</p>

<ul>
    <li>Bruno Paulin</li>
    <li>Daniel Carvalho</li>
    <li>Roberto Jr</li>
    <li>Róger Aguiar</li>
</ul>

<a href="#top">Voltar ao topo</a>
