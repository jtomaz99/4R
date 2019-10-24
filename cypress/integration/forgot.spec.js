context('Forgot the password', ()=>{
    it ('forgot the password', ()=>{
        cy.visit('https://fourr.herokuapp.com/')
        cy.get('#forgot').click()
        cy.url().should('eq', 'https://fourr.herokuapp.com/forgot/')
        cy.get('#token').type('ifsl2@gmail.com')
    })
})