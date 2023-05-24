# Projeto Labeddit Front-end

> Status: Em Desenvolvimento

### Descrição:

Aplicação React desenvolvida com Next.js integrada a Back-end com Node.js com funcionalidades de login, cadastro, visualização de feed de posts e rota dinâmica para post específico com lista de comentários integrada. Páginas protegidas por JWT Token salvo em Cookies. Usuário pode registrar, logar, visualizar lista de posts, criar post, dar like ou dislike em post, visualizar post único com comentários, criar comentário, dar like ou dislike em comentário e dar logout. 

### Deploy:

https://labeddit-delta.vercel.app/

### Repositório Back-end:

https://github.com/nlperri/labeddit-backend

### Documentação da API

https://documenter.getpostman.com/view/25826606/2s93m344F2

### RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível ver lista de posts;
- [x] Deve ser possível ver página de post com comentários;
- [x] Deve ser possível criar um post;
- [x] Deve ser possível dar like/dislike em um post;
- [x] Deve ser possível dar like/dislike em um comentário;
- [x] Deve ser possível comentar em um post;

### RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário só pode acessar página de login caso estiver logado;
- [x] O usuário não pode acessar página de login caso esteja logado;
- [x] O usuário não pode acessar página de registro caso esteja logado;
- [x] O usuário não deve poder dar like/dislike no próprio post;
- [x] Caso usuário dê um dislike em um post que já tenha dado dislike, o dislike é desfeito;
- [x] Caso usuário dê um like em um post que já tenha dado like, o like é desfeito;
- [x] Caso usuário dê um like em um post que tenha dado dislike, o like sobrescreve o dislike.
- [x] Caso usuário dê um dislike em um post que tenha dado like, o dislike sobrescreve o like.
- [x] O usuário não deve poder dar like/dislike no próprio comentário;
- [x] Caso usuário dê um dislike em um comentário que já tenha dado dislike, o dislike é desfeito;
- [x] Caso usuário dê um like em um comentário que já tenha dado like, o like é desfeito;
- [x] Caso usuário dê um like em um comentário que tenha dado dislike, o like sobrescreve o dislike.
- [x] Caso usuário dê um dislike em um comentário que tenha dado like, o dislike sobrescreve o like.

### RNFs (Requisitos não-funcionais)

- [x] O usuário deve ser identificado por um JJWT (JSON Web Token);
- [x] Token deve ficar guardado em Cookies;
- [ ] Testes unitários;


### Tecnologias utilizadas:

<table>
<tr>

<td>React</td>
  <td>Next.js</td>
<td>Typescript</td>
<td>Node</td>
<td>Axios</td>



</tr>
<tr>

<td>18.2.6</td>
  <td>13.4.3</td>
<td>5.0.4</td>
<td>20.2.1</td>
<td>1.4.0</td>


</tr>
</table>

## Dependências:

<table>
<tr>
<td>TailwindCSS</td>
<td>Zod</td>
<td>React Hook Form</td>
<td>React Toastify</td>


</tr>
<tr>
<td>3.3.2</td>
<td>3.21.4</td>
<td>^7.43.9</td>
<td>^9.1.3</td>

</tr>
</table>

## Como rodar a aplicação

```ubuntu
$ git clone linkrep

$ npm install

$ npm run dev || $ npm run build && npm run start

```

### Contato:

e-mail: lnataliaperri@gmail.om

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/natalia-perri/)
