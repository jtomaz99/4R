context('Login', ()=>{
    it ('login scenario(Happy way)', ()=>{
        cy.visit('https://fourr.herokuapp.com/')
        cy.get('#email').type('ifsl2@gmail.com')
        cy.get('#password').type('ivan1234')
        cy.get('#SubmitLogin').click()
        cy.url().should('eq', 'https://fourr.herokuapp.com/home/')
    })
})

context('Login', ()=>{
    it ('login scenario(Sad way)', ()=>{
        cy.visit('https://fourr.herokuapp.com/')
        cy.get('#email').type('ifsl2gmail.com')
        cy.get('#password').type('ivan1234')
        cy.get('#SubmitLogin').click()
        cy.url().should('eq', 'https://fourr.herokuapp.com/')
    })
})