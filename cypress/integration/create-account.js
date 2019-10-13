describe('Create Account', function() {
    it('Load create account content', function() {
      cy.visit('/create-account')
      cy.get('.content').should('contain', 'Create Account')
    })
  })