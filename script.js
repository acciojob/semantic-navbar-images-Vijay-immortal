describe("Example Image Test", () => {
    beforeEach(() => {
        cy.visit("/main.html"); // Ensure baseUrl is correctly set in cypress.config.js
    });

    it("3 images with heading are there", () => {
        cy.contains("3 random images");

        cy.get("img").should($imgs => {
            expect($imgs).to.have.length(3);
            const srcs = $imgs.map((i, el) => Cypress.$(el).attr("src"));
            expect(srcs.get()).to.deep.eq([
                "https://picsum.photos/id/123/200/300",
                "https://picsum.photos/id/124/200/300",
                "https://picsum.photos/id/125/200/300"
            ]);
        });
    });
});

module.exports = {
  e2e: {
    baseUrl: "http://localhost:3000"
  }
};

Cypress.on("uncaught:exception", (err, runnable) => {
    return false; // Prevent test failure due to unrelated application errors
});
