describe('Login', function() {
    it('Load home page content', function() {
      cy.visit('/login')
      cy.get('.content').should('contain', 'LOGIN')
    })
  })
  