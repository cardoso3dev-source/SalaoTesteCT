import React from "react";

const TelaAgendados = ({ agendamentos, setTela }) => {
  return (
    <div className="tela-agendados">
      <h2>Agendamentos</h2>

      {agendamentos.length === 0 ? (
        <p>Nenhum agendamento feito ainda.</p>
      ) : (
        <div className="lista-agendamentos">
          {agendamentos.map((a, index) => (
            <div key={index} className="card-agendamento">
              <p><strong>Serviço:</strong> {a.servico.nome}</p>
              <p><strong>Valor:</strong> {a.servico.valor}</p>
              <p><strong>Profissional:</strong> {a.profissional}</p>
              <p><strong>Dia:</strong> {a.dia}</p>
              <p><strong>Horário:</strong> {a.horario}</p>
              <p><strong>Nome:</strong> {a.nome}</p>
              <p><strong>Telefone:</strong> {a.telefone}</p>
            </div>
          ))}
        </div>
      )}

      <button onClick={() => setTela(1)}>Voltar para Tela Inicial</button>
    </div>
  );
};

export default TelaAgendados;
