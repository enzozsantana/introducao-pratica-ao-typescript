"use strict";
/* Desafio 2:
Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.atriz
};
const pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.padeiro
};
const pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.atriz
};
const pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.padeiro
};
