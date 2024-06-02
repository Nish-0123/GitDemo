describe('MyFirstTest', () => {
  it('test-1', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  })
})