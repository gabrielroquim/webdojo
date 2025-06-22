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


        // Clicar no radio usando path
        // //span[text()="Pessoa Fisica"]/..///input *caminho xpaf

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')
        //.click() ou check

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('28965266092')
            .should('have.value', '289.652.660-92')

        // clicar em varios checks juntos
        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]
        //vai percorrer a lista de discovery pra validar
        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })





    });
});

