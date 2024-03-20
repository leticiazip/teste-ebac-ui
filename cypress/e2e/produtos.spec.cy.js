/// <reference types="cypress" />
import produtosPage from "../support/page objects/produtos.page"

describe('Funcionalidade página de produtos', () => {

        beforeEach(() => {
//          cy.visit('/produtos/')
            produtosPage.visitarUrl()
        })

        it('Deve selecionar um produto da lista', () => {
            //cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(4)
            //.contains('Ariel Roll Sleeve Sweatshirt')
            //.click()

            produtosPage.buscarProdutoLista('Apollo Running Short')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
        })

        it('Deve adicionar um produto ao carrinho', () =>{
            var quantidade = 3

            cy.get('[class="product-block grid"]')
                .contains('Aero Daily Fitness Tee').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Yellow').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade+' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
        })

        it.only('Deve buscar um produto com sucesso', () => {
            let produto = 'Apollo Running Short'
            
            produtosPage.buscarProduto(produto)
            cy.get('.product_title').should('contain', produto)
        })

        it('Deve visitar a página do produto', () => {

        })

        it('Deve adicionar produto ao carrinho - 2', () => {

        })
})