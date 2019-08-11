describe('Home', function() {
  it('Load home page content', function() {
    cy.visit('')
    cy.get('.content').should('contain', 'Welcome to Dev Day-Book.')
  })
})
