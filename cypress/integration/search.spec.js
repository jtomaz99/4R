context('search', ()=>{
    it ('search scenario(Happy way)', ()=>{
        cy.visit('http://localhost:3000/search')
        cy.get('#search').type('Mac')
        cy.get('#SubmitSearch').click()
        cy.url().should('eq', 'https://fourr.herokuapp.com/produtos-busca')
        cy.contains('Macbook')  
    })
})
