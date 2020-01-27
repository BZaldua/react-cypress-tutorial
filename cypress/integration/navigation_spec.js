describe('Navigation tests', () => {

    before(() => {
        cy.visit('http://localhost:3000');
    })
    
    beforeEach(() => {
        cy.log('New test starting');
    })

    it('visit app', () => {
        cy.contains('Loop')
    });

    it('send data in input', () => {
        cy.get('#simpleForm').type('Hello world!');

        cy.get('#simpleFormSubmit').click();
    });
});