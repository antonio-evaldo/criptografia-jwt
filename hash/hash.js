import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (this.nome === nome && this.hash === criaHash(senha)) {
      console.log("Usuário autenticado!");
      return true;
    }

    console.log("A senha não confere com o usuário.");
    return false;
  }
}

const usuario = new Usuario("João Manoel", "minhaSenha");

usuario.autentica(usuario.nome, "minhaSenha");

usuario.autentica(usuario.nome, "minhasenha");
usuario.autentica("jm", "minhaSenha");
