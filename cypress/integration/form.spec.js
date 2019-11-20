//teste do formulario de add novo produto
describe('Form', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('it focuses the input', () => {
      cy.focused().should('have.class', 'nome_produto')
    })
  })

  //Testando se o usuário consegue fazer um input
  it('accepts input', () => {
    const input = "MacBook"
    cy.get('input')
      .type(input)
      .should('have.value', input)
  })