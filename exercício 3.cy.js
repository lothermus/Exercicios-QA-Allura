describe('Login no site Adopet', () => {
    it('Deve falhar ao logar no site', () => {
        cy.visit('https://adopet-frontend-iota.vercel.app/');

        cy.get('[data-test="login-button"]').click()

        cy.login('teste@', '123')

        cy.contains('button', 'Entrar').click()
        .should('be.visible');

        cy.get('p.error')
        .should('be.visible')
        .and('contain.text', 'Por favor, verifique o email digitado');
        
        cy.get('p.error')
        .should('be.visible')
        .and('contain.text','A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    })
})