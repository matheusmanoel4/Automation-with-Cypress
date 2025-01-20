# 🌲 Cypress, do Zero à Nuvem ☁️

👋 Seja bem-vindo(a)!

Automação de teste com cypress

Este repositório contém um conjunto de testes automatizados para a Central de Atendimento ao Cliente TAT, desenvolvido utilizando Cypress.

Descrição
Os testes automatizados cobrem diversos cenários de validação e interação do usuário, garantindo a qualidade e a robustez da aplicação. Veja abaixo um resumo dos cenários de teste implementados.

Cenários de Teste
Verificação do Título da Aplicação

Certifica-se de que o título da página esteja correto.

Preenchimento do Formulário

Preenche todos os campos obrigatórios, seleciona um produto, marca opções e verifica se o formulário é enviado com sucesso.

Validação do Campo de E-mail

Garante que um e-mail inválido exibe uma mensagem de erro apropriada.

Validação de Campo Numérico no Telefone

Assegura que caracteres não numéricos no campo de telefone não sejam aceitos.

Verificação de Mensagem de Erro quando o Telefone é Obrigatório

Testa a exibição da mensagem de erro quando o telefone é obrigatório, mas não preenchido.

Erro ao Submeter Formulário sem Campos Obrigatórios

Verifica se o sistema exibe uma mensagem de erro ao tentar submeter o formulário sem preencher os campos obrigatórios.

Validação de Campos Obrigatórios

Certifica-se de que os campos obrigatórios são preenchidos um a um, e que a mensagem de erro só desaparece quando todos estão preenchidos corretamente.

Anexando um Arquivo ao Formulário

Testa a funcionalidade de anexar um arquivo ao formulário e envia-o com sucesso.

Como Executar os Testes
Clone este repositório para a sua máquina local:

bash
git clone https://github.com/matheusmanoel4/Automation-with-Cypress.git
Navegue até o diretório do projeto:

bash
cd seu-projeto
Instale as dependências necessárias:

bash
npm install
Execute os testes:

bash
npx cypress open
No painel do Cypress, selecione o arquivo de teste desejado para iniciar a execução dos testes.

Tecnologias Utilizadas
Cypress - Ferramenta de automação de testes end-to-end.

Contribuições
Contribuições são bem-vindas! Se você tiver alguma sugestão ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a [Nome da Licença].

Contato
Para mais informações ou perguntas, entre em contato:

Seu Nome

Email: seuemail@example.com