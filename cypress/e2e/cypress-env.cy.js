describe("Cypress env", () => {
	it("logs 'environmentName' and 'someOtherKey'", () => {
		cy.visit("/");

		cy.log(Cypress.env());

		const { environmentName, someOtherKey } = Cypress.env();

		expect(environmentName).to.not.be.undefined;
		expect(someOtherKey).to.not.be.undefined;
	});
});
