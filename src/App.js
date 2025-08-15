import React, { useState } from "react";
import TelaInicial from "./components/TelaInicial";
import TelaAgendamento from "./components/TelaAgendamento";
import TelaConfirmacao from "./components/TelaConfirmacao";
import TelaCadastro from "./components/TelaCadastro";
import TelaAgendados from "./components/TelaAgendados";

function App() {
  const [tela, setTela] = useState(1);

  const [servicos, setServicos] = useState([
    // Exemplo inicial, você pode cadastrar novos na TelaCadastro
    { id: 1, nome: "Unha", duracao: "30Min", valor: "R$30,00" },
    { id: 2, nome: "Cabelo", duracao: "1h", valor: "R$50,00" },
    { id: 3, nome: "Maquiagem", duracao: "45Min", valor: "R$40,00" },
  ]);

  const [profissionais, setProfissionais] = useState([
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Beatriz" },
  ]);

  const [reserva, setReserva] = useState({});
  const [agendamentos, setAgendamentos] = useState([]);

  // Função para salvar reserva
  const adicionarAgendamento = (novaReserva) => {
    setAgendamentos([...agendamentos, novaReserva]);
  };

  return (
    <div className="App">
      {tela === 1 && (
        <TelaInicial
          setTela={setTela}
          setReserva={setReserva}
          servicos={servicos}
        />
      )}

      {tela === 2 && (
        <TelaAgendamento
          reserva={reserva}
          setReserva={setReserva}
          setTela={setTela}
          profissionais={profissionais}
          adicionarAgendamento={adicionarAgendamento}
        />
      )}

      {tela === 3 && (
        <TelaConfirmacao
          reserva={reserva}
          setTela={setTela}
        />
      )}

      {tela === 4 && (
        <TelaCadastro
          servicos={servicos}
          setServicos={setServicos}
          profissionais={profissionais}
          setProfissionais={setProfissionais}
          setTela={setTela}
        />
      )}

      {tela === 5 && (
        <TelaAgendados
          agendamentos={agendamentos}
          setTela={setTela}
        />
      )}

      {/* Botão rápido para ver todos agendamentos */}
      {tela !== 5 && (
        <button
          style={{ position: "fixed", top: 20, right: 20 }}
          onClick={() => setTela(5)}
        >
          Ver Agendamentos
        </button>
      )}
    </div>
  );
}

export default App;
