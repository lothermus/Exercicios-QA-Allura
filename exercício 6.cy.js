describe('Página de login do Adopet', ()=>{
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.contains('Fazer login').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400.}).as('stubPOST')
    })  
    it('Não deve conseguir fazer login na página do Adopet', ()=>{
        cy.contains('button', 'Entrar').click()
        cy.contains('É necessário informar um endereço de email')
        .should('be.visible')
    })
    it('Não deve conseguir fazer login mesmo com os campos corretos', ()=>{
        cy.login('ana@email.com', 'Senha123')
        cy.contains('button', 'Entrar').click()
        cy.wait('@stubPOST')
        cy.contains('Falha no login. Consulte suas credenciais.')
        .should('be.visible')
    })
})