/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(() => {
        cy.visit('./src/index.html')

    })    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.eq', 'Central de Atendimento ao Cliente TAT')
  
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){

        const longText = ' Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste.'

        cy.get('#firstName').type('Marisa')
        cy.get('#lastName').type('Mello')
        cy.get('#email').type('marisa.mello@gmail.com')

        cy.get('#open-text-area').type(longText, { delay:0 })
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function (){

        cy.get('#firstName').type('Marisa')
        cy.get('#lastName').type('Mello')
        cy.get('#email').type('marisagmail.com')

        cy.get('#open-text-area').type('123 testando')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })

    it('campo de telefone continua vazio quando preencher não numerico', function (){
       
        cy.get('#phone')
        .type('euwurhfeuhv').should('have.value', '')

    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function (){

        cy.get('#firstName').type('Marisa')
        cy.get('#lastName').type('Mello')
        cy.get('#email').type('marisa_mello@gmail.com')


        cy.get('#open-text-area').type('123 testando')
        cy.get('#phone-checkbox').check()
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')

    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function (){

        cy.get('#firstName').type('Marisa').should('have.value', 'Marisa').clear().should('have.value', '')
        cy.get('#lastName').type('Mello').should('have.value', 'Mello').clear().should('have.value', '')
        cy.get('#email').type('marisa_mello@gmail.com').should('have.value', 'marisa_mello@gmail.com').clear().should('have.value', '')
        cy.get('#phone').type('11967182610').should('have.value', '11967182610').clear().should('have.value', '')


        cy.get('#open-text-area').type('123 testando').should('have.value', '123 testando').clear().should('have.value', '')
       

    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', function (){

        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
      

    })
    it('envia o formuário com sucesso usando um comando customizado', function (){

        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
      

    })
    it('seleciona um produto (YouTube) por seu texto', function (){

        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
       

    })
    it('seleciona um produto (Mentoria) por seu valor (value)', function (){

         cy.get('#product')
         .select('mentoria')
         .should('have.value', 'mentoria')
    })   
    it('seleciona um produto (Blog) por seu índice', function (){

        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
   }) 
   it('marca o tipo de atendimento "Feedback"', function (){

    //cy.get('input[type="radio"]').check('feedback')
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value' , 'feedback')
}) 

it('marca cada tipo de atendimento', function (){

    //cy.get('input[type="radio"]').check('feedback')
    cy.get('input[type="radio"]')
    .should('have.length' , 3)
    .each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
    })
}) 
it('marca ambos checkboxes, depois desmarca o último', function (){

    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('be.not.checked')
})
it('marca ultimo checkboxe, depois desmarca ', function (){

    cy.get('input[type="checkbox"]')
    .last()
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('be.not.checked')
})
it.only(' exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function (){

    cy.get('#firstName').type('Marisa')
    cy.get('#lastName').type('Mello')
    cy.get('#email').type('marisa_mello@gmail.com')


    cy.get('#open-text-area').type('123 testando')
    cy.get('#phone-checkbox').check()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

})

  })
  
