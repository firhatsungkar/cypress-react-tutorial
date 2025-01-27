describe('form', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('it focused the input', () => {
    cy.focused().should('have.class', 'form-control')
  })

  it('accepts input', () => {
    const input = "Learn about Cypress"
    cy.get('.form-control')
      .type(input)
      .should('have.value', input)
  })

  it('displays list of todo', () => {
    cy.get('li')
      .should('have.length', 2)
  })

  it('adds a new todo', () => {
    const input = 'Learn about cypress'
    cy.get('.form-control')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 3)
  })

  it('delete a todo', () => {
    cy.get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('li')
      .should('have.length', 1)
  })

  it('delete all todos', () => {
    cy.get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('li')
      .first()
      .find('.btn-danger')
      .click()
      .get('.no-task')
      .should('have.text', 'No task!')
  }) 

})
