describe('Displaying data of Game of Thrones books', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('is expected to show details of books', () => {
    cy.get('[data-cy=title]').should('contain', 'Game of Thrones Books');
    cy.get('[data-cy=books-details]').click();
    cy.get('[data-cy=book-number]').should('contain', '1')
    cy.get('[data-cy=book-name]').should('contain', 'A Game of Thrones')
    cy.get('[data-cy=author]').should('contain', 'George R. R. Martin');
    cy.get('[data-cy=number-of-pages]').should('contain', '694');
    cy.get('[data-cy=country]').should('contain', 'United States');
    cy.get('[data-cy=release-date]').should('contain', 'Hardcover');
  });
});
