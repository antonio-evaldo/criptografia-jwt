## Aula 02 - Utilizando o módulo crypto

### Funções de Hash

- Transformam uma mensagem em um código irreversível.
- Exemplos:

  - MD5
  - SHA1
  - SHA-256
  - [Tipos de hash](https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107362)

- Propriedades:

  - Sem colisões
  - Tamanho fixo
  - Demore um pouco para ser realizado

- Utilizada para autenticação
  - Usuário cria uma senha que gera uma hash
  - A hash é guardada no sistema
  - Na hora de autenticar, se o usuário digitar a mesma senha que criou, a hash gerada será a mesma do sistema e o usuário é autenticado.

### Vulnerabilidade

- Ataque _Rainbow Table_
  - Consiste na pessoa atacante possuir milhares ou milhões de hashes prontas, onde ela sabe quais cadeias de caracteres geraram essas hashes.
  - Assim, caso um sistema vaze as hashes armazenadas dos usuários, a pessoa atacante pode compará-las com as que as hashes que ela tem guardadas.

### O que aprendemos

- O que são funções de hash e seu funcionamento prático para gerar dados que não podem ser restaurados à seu valor original;

- Quais são algumas de suas aplicações práticas, como o uso em sistemas de autenticação;

- A implementar os métodos do módulo `crypto`, como o `createHash`;

- Como utilizar o “sal” para melhorar a eficácia das hashes, aumentando drasticamente a quantidade de possibilidades existentes para um algoritmo de encriptação.
