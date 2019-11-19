context('register', ()=>{
    it ('register scenario without image(sad way)', ()=>{
        cy.visit('http://fourr-develop.herokuapp.com/cadastro_prod')
        cy.get('#name').type('Mouse')
        cy.get('#category').type('Eletrónico')
        cy.get('#description').type('Quebrado')
        cy.get('#SubmitProd').click()
        cy.contains('Não foi possível realizar o cadastro')  
    })
})