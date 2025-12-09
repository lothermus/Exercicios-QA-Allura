describe('Api Adopet', () => {
    const tempoEsperado = Math.random() * 1000
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMWI5OThlYi04YmIzLTQ2ZTItYWYxOC03NGNjMWQ4ODRhZmIiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc2NDk1MjgwNSwiZXhwIjoxNzY1MjEyMDA1fQ.1BrSC8Luc5zP-3HiXf03upFfwBs0GDgczLUIz_FrK98`

 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
         headers: { authorization }
        }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
        
    })



})
})