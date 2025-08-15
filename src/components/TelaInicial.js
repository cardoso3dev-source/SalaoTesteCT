import React from "react";

const TelaInicial = ({ servicos, setReserva, setTela }) => {
  const selecionarServico = (servico) => {
    setReserva({ servico });
    setTela(2); // Vai para TelaAgendamento
  };

  return (
    <div className="tela-inicial">
      <div className="banner">
        <img src="sua-foto.jpg" alt="Profissional" />
        <h2>Seja bem-vindo(a) ao salão da @NOME_INSTAGRAM</h2>
      </div>

      <h3>Serviços disponíveis:</h3>
      <div className="servicos">
        {servicos.map((s) => (
          <div key={s.id} className="card-servico">
            <p><strong>{s.nome}</strong></p>
            <p>Duração: {s.duracao}</p>
            <p>Valor: {s.valor}</p>
            <button onClick={() => selecionarServico(s)}>RESERVAR</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelaInicial;
