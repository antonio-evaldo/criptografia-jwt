## Aula 02

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
