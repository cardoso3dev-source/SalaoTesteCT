import React from "react";

const TelaConfirmacao = ({ reserva, setTela }) => {
  return (
    <div className="tela-confirmacao">
      <h2>Reserva Confirmada!</h2>
      <p><strong>Serviço:</strong> {reserva.servico.nome}</p>
      <p><strong>Valor:</strong> {reserva.servico.valor}</p>
      <p><strong>Profissional:</strong> {reserva.profissional}</p>
      <p><strong>Dia:</strong> {reserva.dia}</p>
      <p><strong>Horário:</strong> {reserva.horario}</p>
      <p><strong>Nome:</strong> {reserva.nome}</p>
      <p><strong>Telefone:</strong> {reserva.telefone}</p>

      <button onClick={() => setTela(1)}>Voltar para Tela Inicial</button>
    </div>
  );
};

export default TelaConfirmacao;
