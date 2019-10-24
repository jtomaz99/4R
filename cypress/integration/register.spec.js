context('Register', ()=>{
    it ('register login(Sad_way)', ()=>{
        cy.visit('https://fourr.herokuapp.com/register/')
        cy.get('#email').type('ifsl2')
        cy.url().should('eq', 'https://fourr.herokuapp.com/register/')
    })
})

context('Register_2', ()=>{
    it ('register login(Happy_way))', ()=>{
        cy.visit('https://fourr.herokuapp.com/register/')
        cy.get('#name').type('Ivan')
        cy.get('#email').type('ifsl2@cin.ufpe')
        cy.get('#password').type('ivanadmin')
        cy.get('#password_2').type('ivanadmin')
        cy.url().should('eq', 'https://fourr.herokuapp.com/')
    })
})