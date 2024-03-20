/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade pré cadastro', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let primeiroNome = faker.name.firstName()
        let ultimoNome = faker.name.lastName()
        let email = faker.internet.email(primeiroNome)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('Teste@1234')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(primeiroNome)
        cy.get('#account_last_name').type(ultimoNome)
        cy.get('#account_display_name').clear()
        cy.get('#account_display_name').type('leticiacastilho19')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve completar o pré cadastro com sucesso - utilizando comandos customizados', () => {
        let primeiroNome = faker.person.firstName()
        let ultimoNome = faker.person.lastName()
        let email = faker.internet.email(primeiroNome)

        cy.preCadastro(email, 'Teste@1234', primeiroNome, ultimoNome)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});