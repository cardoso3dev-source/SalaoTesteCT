import React, { useState } from "react";

const TelaCadastro = ({ servicos, setServicos, profissionais, setProfissionais, setTela }) => {
  const [novoProfissional, setNovoProfissional] = useState("");
  const [novoServico, setNovoServico] = useState({ nome: "", duracao: "", valor: "" });

  const cadastrarProfissional = () => {
    if (novoProfissional.trim() === "") return;
    setProfissionais([...profissionais, { id: Date.now(), nome: novoProfissional }]);
    setNovoProfissional("");
  };

  const cadastrarServico = () => {
    if (!novoServico.nome || !novoServico.duracao || !novoServico.valor) return;
    setServicos([...servicos, { id: Date.now(), ...novoServico }]);
    setNovoServico({ nome: "", duracao: "", valor: "" });
  };

  return (
    <div className="tela-cadastro">
      <h2>Cadastro de Profissionais</h2>
      <input type="text" placeholder="Nome completo" value={novoProfissional} onChange={(e) => setNovoProfissional(e.target.value)} />
      <button onClick={cadastrarProfissional}>Cadastrar Profissional</button>

      <h2>Cadastro de Serviços</h2>
      <input type="text" placeholder="Nome do serviço" value={novoServico.nome} onChange={(e) => setNovoServico({ ...novoServico, nome: e.target.value })} />
      <input type="text" placeholder="Duração" value={novoServico.duracao} onChange={(e) => setNovoServico({ ...novoServico, duracao: e.target.value })} />
      <input type="text" placeholder="Valor" value={novoServico.valor} onChange={(e) => setNovoServico({ ...novoServico, valor: e.target.value })} />
      <button onClick={cadastrarServico}>Cadastrar Serviço</button>

      <button style={{ marginTop: "20px" }} onClick={() => setTela(1)}>Voltar para Tela Inicial</button>
    </div>
  );
};

export default TelaCadastro;
