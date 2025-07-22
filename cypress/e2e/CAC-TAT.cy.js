describe('"Central de Atendimento ao Cliente TAT"', () => {
  it('verifica o titulo da Aplicação', () => {
    cy.visit('http://127.0.0.1:5500/src/index.html')
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
})