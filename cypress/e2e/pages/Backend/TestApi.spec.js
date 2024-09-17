describe("Testes de API com JSONPlaceholder", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  // Teste de Obtenção de Posts
  it("Obter todos os posts", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/posts`,
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica se a requisição foi bem-sucedida
      expect(response.body).to.be.an("array"); // Verifica se o retorno é um array
      expect(response.body.length).to.be.greaterThan(0); // Verifica se há posts retornados
    });
  });

  // Teste de Obtenção de um Post Específico
  it("Obter um post específico", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/posts/1`, // Obter o post com ID 1
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1); // Verifica se o post tem ID 1
    });
  });

  // Teste de Criação de um Novo Post
  it("Criar um novo post", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/posts`,
      body: {
        title: "Post de Teste",
        body: "Este é um post de teste criado via API.",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(201); // Verifica se o post foi criado (status 201)
      expect(response.body).to.have.property("title", "Post de Teste");
    });
  });

  // Teste de Atualização de um Post
  it("Atualizar um post", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/posts/1`, // Atualiza o post com ID 1
      body: {
        id: 1,
        title: "Post Atualizado",
        body: "Este post foi atualizado via API.",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica se a atualização foi bem-sucedida
      expect(response.body).to.have.property("title", "Post Atualizado");
    });
  });

  // Teste de Exclusão de um Post
  it("Excluir um post", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/posts/1`, // Exclui o post com ID 1
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica se o post foi excluído com sucesso
    });
  });
});
