describe('Profile', function() {
  it('Load profile content', function() {
    cy.visit('/gWFjYEaan2UHyKezlyWcyZXFQdM2')
    cy.get('.post-list-item h3').should('contain', 'Hi there!')
    cy.get('.post-list-item .content').should('contain', 'Here is my first post!')
    cy.get('.post-list-item .date').should('contain', '1564948933')
  })
})
