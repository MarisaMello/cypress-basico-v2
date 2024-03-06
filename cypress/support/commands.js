Cypress.Commands.add('fillMandatoryFieldsAndSubmit' , function (){

    cy.get('#firstName').type('Marisa')
        cy.get('#lastName').type('Mello')
        cy.get('#email').type('marisa_mello@gmail.com')
        cy.get('#open-text-area').type('123 testando')
        cy.contains('button', 'Enviar').click()
})
