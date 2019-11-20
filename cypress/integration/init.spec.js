//Verificando se o cypress está funcionando

describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
  })
//Verifica se o site está rodando
  it('visits the app', () => {
    cy.visit(' https://fourr.herokuapp.com/')
  })