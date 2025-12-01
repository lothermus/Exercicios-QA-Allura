describe('Deve acessar a página', () => {
  it('Acessou a página', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app'); //Visita a url requisitada

    cy.contains('a', 'Cadastrar').click(); //Clilca no botão 'Cadastrar' na tela

    cy.contains('label', 'Nome') //Procura o texto chamado 'Nome'
      .get('input[name="nome"]').type('1234'); //Digita o caampo 'Nome'

    cy.contains('label', 'E-mail')//Consulta se o rótulo 'E-mail' existe
      .get('input[name="email"]').type('111111@11111.com.br'); //Digita no campo 'Email'

    cy.contains('label', 'Senha')//Consulta se o rótulo 'Senha' existe
      .get('input[name="password"]').type('12345678Ad');//Digita no campo 'Senha'

    //cy.contains('span', "pass__view").click()
    cy.contains('label', 'Confirme sua senha') //Consulta se o rótulo 'Confirme sua senha' existe
      .get('input[name="confirm_password"]').type('12345678Ad'); //Digita a senha no campo 'Confirme sua senha
  
    cy.contains('button','Cadastrar').click(); //Clica no botão 'Cadastrar'

  })
})