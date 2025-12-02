describe('Deve ver os pets disponíveis', () => {
    it('Acessou a página', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
        cy.get('.header__home').click()
        cy.get('.header__message').click()
        cy.get('.header__home').click()
        cy.get('[data-test="login-button"]').click()
        cy.get('.header__home').click()
        cy.contains('a', 'Ver pets disponíveis para adoção').click()//Acessa a página de 'Ver pets para adoção'
        cy.get('.card__contact').click()
    }
    )
}
)