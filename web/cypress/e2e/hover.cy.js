describe('Simulando mouse', () => {
    it('Deve mostrar um texto ao passar mouse no link instagran', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.contains('Isso é Mouseover!').should('not.exist') // pois náo deve aparecer, se não passar o mouse   
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist') // usando exist vc garante que ele esta no DOM
    })

})