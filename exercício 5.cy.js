describe('Exercício 5: Visitar páginas do Adopet', ()=>{
        beforeEach(()=>{
            cy.visit('https://adopet-frontend-iota.vercel.app/')
        })
    it('Deve verificar se o title com o texto "AdoPet" está presente no html', ()=>{
        cy.title()
        .should('include', 'AdoPet')
    })

    it('Verificar se o texto "Quem ama adota!" está no html', ()=>{
        cy.contains('Quem ama adota!')
    })

    it('Verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está no html', ()=>{
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!')
    })

    it('Login pelo ícone de mensagem na página do AdoPet com dados de login válidos', ()=>{
        cy.get('.header__message').click()
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#pass').type('teste12345678A')
        cy.contains('button', 'Entrar').click()
    })
})