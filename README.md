# 🧪🚀 Automação de Testes com Cypress

Este repositório contém um conjunto de testes automatizados desenvolvidos com **Cypress**, com foco na validação de formulários e interações essenciais da aplicação. Os testes têm como objetivo garantir a qualidade e robustez do sistema, cobrindo diferentes cenários de uso real.

---

## 🎯 Objetivo

Demonstrar o uso do Cypress para automação de testes de interface, cobrindo cenários comuns de validação de formulários, preenchimento de campos, anexos e mensagens de erro. Este projeto também é uma excelente base de aprendizado para quem deseja iniciar com automação de testes frontend.

---

## 🔍 Cenários de Teste

1. **✅ Verificação do Título da Aplicação**  
   Garante que o título da página esteja corretamente exibido.

2. **✅ Preenchimento do Formulário**  
   Preenche todos os campos obrigatórios, seleciona um produto, marca opções e envia o formulário com sucesso.

3. **🚫 Validação do Campo de E-mail**  
   Verifica se e-mails inválidos geram a mensagem de erro apropriada.

4. **🚫 Validação de Campo Numérico no Telefone**  
   Garante que caracteres não numéricos não sejam aceitos no campo de telefone.

5. **⚠️ Validação de Telefone Obrigatório**  
   Testa se a mensagem de erro é exibida corretamente quando o telefone não é preenchido.

6. **🚫 Erro ao Submeter sem Campos Obrigatórios**  
   Verifica a exibição de mensagens de erro ao tentar enviar o formulário vazio.

7. **🔄 Validação Progressiva de Campos Obrigatórios**  
   Garante que os campos obrigatórios devem ser preenchidos um a um para que as mensagens de erro desapareçam.

8. **📎 Upload de Arquivo**  
   Testa a funcionalidade de anexar e enviar um arquivo via formulário.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Automação de testes E2E
- JavaScript – Linguagem de programação dos testes
