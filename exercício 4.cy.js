describe('Página de Cadastro da Adopet', ()=>{
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-iota.vercel.app/')
    })

    it('Não deve conseguir fazer cadastro',()=>{
        cy.contains('Cadastrar').click()
        cy.cadastro('teste','teste@','testeA1','testeA1') //Criado comando customizado no commands.js
        cy.get('[data-test="submit-button"]')
    })
})

    it('Deve conseguir fazer o cadastro',()=>{
        cy.visit('https://adopet-frontend-iota.vercel.app/')
        cy.contains('Cadastrar').click()
        cy.cadastro('teste','teste@teste.com.br','testeA1','testeA1') //Criado comando customizado no commands.js
        cy.get('[data-test="submit-button"]')
    })