
describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })

  it('Visit the app', () => {
    cy.visit('/')
  })
})