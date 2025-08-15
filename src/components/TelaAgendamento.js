import React, { useState } from "react";

const TelaAgendamento = ({ reserva, setReserva, setTela, profissionais, adicionarAgendamento }) => {
  const [profissional, setProfissional] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [inicioSemana, setInicioSemana] = useState(new Date());

  const gerarSemana = (dataInicial) => {
    const semana = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(dataInicial);
      d.setDate(d.getDate() + i);
      semana.push(d);
    }
    return semana;
  };

  const semana = gerarSemana(inicioSemana);
  const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

  const avancarSemana = () => {
    const novaSemana = new Date(inicioSemana);
    novaSemana.setDate(novaSemana.getDate() + 7);
    setInicioSemana(novaSemana);
  };

  const voltarSemanaAtual = () => setInicioSemana(new Date());

  const salvarReserva = () => {
    const novaReserva = {
      ...reserva,
      profissional,
      dia: diaSelecionado.toLocaleDateString(),
      horario: horarioSelecionado,
      nome,
      telefone,
    };
    adicionarAgendamento(novaReserva);
    setReserva(novaReserva);
    setTela(3); // vai para TelaConfirmacao
  };

  return (
    <div className="tela-agendamento">
      <h2>Serviço selecionado: {reserva.servico.nome}</h2>

      <label>Profissional:</label>
      <select value={profissional} onChange={(e) => setProfissional(e.target.value)}>
        <option value="">Selecione</option>
        {profissionais.map((p) => (
          <option key={p.id} value={p.nome}>{p.nome}</option>
        ))}
      </select>

      <h3>Escolha o dia:</h3>
      <div className="calendario">
        {semana.map((d, i) => (
          <button
            key={i}
            onClick={() => setDiaSelecionado(d)}
            className={diaSelecionado === d ? "selecionado" : ""}
          >
            {d.toLocaleDateString("pt-BR")}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={avancarSemana} style={{ marginRight: "10px" }}>Próxima Semana</button>
        <button onClick={voltarSemanaAtual}>Voltar para Semana Atual</button>
      </div>

      {diaSelecionado && (
        <>
          <h3>Escolha o horário:</h3>
          <select value={horarioSelecionado} onChange={(e) => setHorarioSelecionado(e.target.value)}>
            <option value="">Selecione</option>
            {horarios.map((h, i) => (
              <option key={i} value={h}>{h}</option>
            ))}
          </select>
        </>
      )}

      {horarioSelecionado && (
        <>
          <h3>Seus dados:</h3>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <button onClick={salvarReserva}>Confirmar Reserva</button>
        </>
      )}

      <button style={{ marginTop: "10px" }} onClick={() => setTela(1)}>Voltar para Tela Inicial</button>
    </div>
  );
};

export default TelaAgendamento;
