# New Doctor App
## Patients List

Para realizar seus testes desta aplicação, você pode entrar no [demo](https://luismgil.github.io/PatientsList-vue).

É um sistema bem simples onde um médico pode acompanhar seus pacientes (adicionando novos pacientes, modificando pacientes existentes e eliminando pacientes inativos).

**Nota:** Os campos "CPF" e "E-mail" devem ser únicos e não podem ser alterados novamente. Se o médico precisar fazer uma exceção e alterar as informações em um desses campos, ele deve apagar o registro do paciente e adicioná-lo novamente com os novos valores.

No momento os dados do paciente inseridos são armazenados no [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) de seu navegador, ou seja, se você os abrir de outro computador, não terá mais as mesmas informações.

## Instruções para sua instalação local

O usuário que quiser usar este projeto, basta fazer um Git clone do repositorio, e uma vez baixado só entrar no seu IDE de preferencia e fazer um `npm install` para baixar os pacotes de Node.

Uma vez pronto, basta ir até o terminal e se posicionar em seu projeto e fazer um `npm run serve` isto abrirá a aplicação no servidor local, basta colocar `Localhost://8080` em seu navegador de escolha.

## Tecnologias utilizadas para este projeto

Eu criei este projeto com `vue create <nome-do-projeto>`.

em seu desenvolvimento, usei:
- [JavaScript](https://www.javascript.com/)
- [Vue CLI](https://cli.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Vuelidate](https://vuelidate.js.org/)
- [moment.js](https://momentjs.com/)
- [fontAwsome](https://fontawesome.com/icons)


