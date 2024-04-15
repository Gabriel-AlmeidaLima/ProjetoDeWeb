# :checkered_flag: MOVIEREVIEW

MovieReview é uma plataforma que permite aos amantes do cinema registrar, avaliar e compartilhar suas experiências cinematográficas. 

## :technologist: Membros da equipe

César Gabriel de Almeida Lima, 537274, Ciência da Computação.
Lucas Cavalcante Maciel, 535635, Ciência da Computação.
João Victor Moraes Castelo Branco, 536990, Ciência da Computação.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

Usuário não registrado.
Usuário logado.
Administrador.


## :spiral_calendar: Entidades ou tabelas do sistema

Usuário.
Filmes
Avaliação.

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

Usuários não registrados poderão ver o catálogo de filmes, ver os comentarios de usuários registrados e suas avaliações.
Usuários registrados poderão avaliar, comentar e favoritar filmes.
Administradores poderão remover, adicionare editar filmes do catálogos, além de poderem remover comentários e avaliações de outros usuários.

## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

VueJS v3.0, Vue-Router e Pinia.
Axios

**Backend:**

Strapi


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade               | Criação | Leitura | Atualização | Remoção |
| ---------------------- | ------- | ------- | ----------- | ------- |
| Usuário                |         |         |             |         |
| Filmes                 |  X      |  X      |      X      |    X    |
| Avaliação              | X       |         |      X      |    X    | 

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/entidade1/|
| POST | api/entidade2 |
