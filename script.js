"use strict";

function atualizarTempo() {
  const display = document.querySelector(".display");

  let agora = new Date();

  let horario =
    corrigirHorario(agora.getHours()) +
    ":" +
    corrigirHorario(agora.getMinutes()) +
    ":" +
    corrigirHorario(agora.getSeconds());

  display.textContent = horario;
}

function corrigirHorario(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

atualizarTempo();
setInterval(() => {
  atualizarTempo();
}, 1000);
