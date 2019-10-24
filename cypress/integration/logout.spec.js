context('Login', ()=>{
    it ('login scenario', ()=>{
        cy.visit('https://fourr.herokuapp.com/home/')
        cy.get('#logout').click()
        cy.url().should('eq', 'https://fourr.herokuapp.com/')
    })
})