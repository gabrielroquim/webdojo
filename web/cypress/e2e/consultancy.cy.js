describe('Formulaario de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        //Quando não tiver ID use placeholder e o campo for tipo/type texto
        cy.get('input[placeholder="Digite seu nome completo"]').type('Gabriel Roquim')

        //cy.get('#email').type('gabrielroquim@ig.com.br')
        cy.get('input[placeholder="Digite seu email"]').type('gabs@hotmail.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 98530-9988')
            .should('have.value', '(11) 98530-9988') //verificar se foi preenchido conforme a mascara do campo

        // selecionar elemento usando id# e nome (combo)
        // cy.get('#consultancyType').select('In Company')

        // Usando como se fosse xpafh, quando náo tem id, placeholder, usando label
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

    });
});

