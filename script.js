//your code here
cy.get('img').should('be.visible').should($imgs => {
  expect($imgs).to.have.length(3);
  const srcs = $imgs.map((i, el) => Cypress.$(el).attr('src'));
  expect(srcs.get()).to.deep.eq([
    "https://picsum.photos/id/123/200/300",
    "https://picsum.photos/id/124/200/300",
    "https://picsum.photos/id/125/200/300"
  ]);
});
cy.wait(2000); // Adjust time as needed
cy.get('img').should('have.length', 3).each(($img) => {
  cy.wrap($img).should('have.attr', 'src');
});