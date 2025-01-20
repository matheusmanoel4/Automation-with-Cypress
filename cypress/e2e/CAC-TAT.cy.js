describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT") 
  })

  it('Preenchimento do formulario', () => {
  cy.get('#firstName').type('Matheus', { delay: 100 })
  cy.get('#lastName').type('Manoel',{ delay: 100 })
  cy.get('#email').type('Teste@gmail.com',{ delay: 100 })
  cy.get('#phone').type('11999999999',{ delay: 100 })
  cy.get("#product",{ delay: 1000 }).select("Cursos")
  cy.get(':nth-child(4) > input').check()
  cy.get('#open-text-area').type('Teste de mensagem', { delay: 100 })
  cy.get('Button[type=Submit]').click()

  
  cy.get(".success").should("be.visible"), cy.wait(1000)
})

it('Teste para verificar a validação do campo de email ao digitar um email invalido', () => {
  cy.get('#firstName').type('Matheus', { delay: 100 })
  cy.get('#lastName').type('Manoel',{ delay: 100 })
  cy.get('#email').type('Teste',{ delay: 100 })
  cy.get("#product",{ delay: 1000 }).select("Cursos")
  cy.get('#phone').type('11999999999',{ delay: 100 })
  cy.get('#open-text-area').type('Teste de mensagem', { delay: 100 })
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible'), cy.wait(2000)
})

it('Teste para validação de campo numerico no telefone', () => {
  cy.get('#firstName').type('Matheus', { delay: 100 })
  cy.get('#lastName').type('Manoel',{ delay: 100 })
  cy.get('#email').type('Teste@gmail.com',{ delay: 100 })
  cy.get('#phone').type('.Teste',{ delay: 100 })
  cy.get('#open-text-area').type('Teste de mensagem', { delay: 100 })
  cy.get('Button[type=Submit]').click()

  cy.get(".success").should("be.visible"), cy.wait(2000)
})




it('Teste para verificar a exibição da mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
  cy.get('#firstName').type('Matheus', { delay: 100 })
  cy.get('#lastName').type('Manoel',{ delay: 100 })
  cy.get('#email').type('Teste@gmail.com',{ delay: 100 })
  cy.get('#phone-checkbox').click()
  cy.get('#open-text-area').type('Teste de mensagem', { delay: 100 })
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible'), cy.wait(2000)
})

it('Teste para verificar se o sistema exibe uma mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible'), cy.wait(2000) 
})


it('Validação de campos obrigatorios', () => {
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible'), cy.wait(3000)
  cy.get('#firstName').type('Matheus', { delay: 100 }), cy.wait(3000)
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible'), cy.wait(3000)
  cy.get('#lastName').type('Manoel',{ delay: 100 }), cy.wait(3000)
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible'), cy.wait(3000)
  cy.get('#email').type('Teste@gmail.com', { delay: 100 }), cy.wait(3000)
  cy.get('Button[type=Submit]').click()
  cy.get('.error > strong').should('be.visible') , cy.wait(3000)
  cy.get('#open-text-area').type('Teste de mensagem', { delay: 100 })
  cy.get('Button[type=Submit]').click()
  cy.get(".success").should("be.visible"), cy.wait(2000)
})


 it.only('Anexando um Arquivo ao Formulario', () => {
  cy.get('#firstName').type('Matheus', { delay: 100 })
  cy.get('#lastName').type('Manoel',{ delay: 100 })
  cy.get('#email').type('Teste@gmail.com',{ delay: 100 })
  cy.get('#phone').type('11999999999',{ delay: 100 })
  cy.get("#product",{ delay: 1000 }).select("Cursos")
  cy.get(':nth-child(4) > input').check()
  cy.get('#open-text-area').type('Teste de mensagem', { delay: 100 })
  cy.get('#file-upload').selectFile('C:/Users/olive/Desktop/Cypress/cypress/fixtures/example.json')
  cy.wait(2000)
})

})