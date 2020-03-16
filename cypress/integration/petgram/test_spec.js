/* global describe, it, cy */

describe('Petgram', function () {
  it('Para ver si la app funciona', function () {
    cy.visit('/')
  })

  it('Navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegar con la navbar al home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it(`Los usuarios no registrados ven el formulario de 
      inicio de sesion al ir a favs`, function () {
    cy.visit('/favs')
    cy.get('form')
  })
})
