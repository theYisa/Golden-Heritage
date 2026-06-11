'use client';

import { useState } from 'react';
import './apply.css';
import { BookOpen, Camera, MapPin, Send, User, Users } from 'lucide-react';

export default function ApplyNowPage() {
  const [nivel, setNivel] = useState("");
  const [idGen, changeIdGen] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  const isEscolar = nivel === "infantil" || nivel === "primario" || nivel === "secundario";

  const [dadosDoAluno, trocoDadosDoAlunos] = useState({
    foto: '', nome: '', apelido: '', nacimentoData: '', naturalDe: '', sector: '', morada: '', 
    sexo: '', idade: '', escolaridadeAtual: '', estadoCivil: '', profissão: '', nomePai: '', nomeMae: '', 
    contactoPrincipal: '', nomeResponsável: '', grauParentesco: '', contactoEmergência: '', email: '',
    alunoID: '', pagamento: 'trimestral', secretariaNome: '', dataInscricao: ''
  });

  function mudarTextos(conteudo) {
    const { value, name } = conteudo.target;
    trocoDadosDoAlunos({ ...dadosDoAluno, [name]: value });
  }

  function mudarFoto(conteudo) {
    const file = conteudo.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => trocoDadosDoAlunos({ ...dadosDoAluno, foto: reader.result });
      reader.readAsDataURL(file);
    }
  }

  // Função para simular a criação de ID estudantil corporativo da escola
  function handleGenerateId() {
    if (!idGen) {
      const randomId = "IMS-" + 2026 + "-" + Math.floor(1000 + Math.random() * 9000);
      setGeneratedId(randomId);
      trocoDadosDoAlunos({ ...dadosDoAluno, alunoID: randomId });
      changeIdGen(true);
    }
  }

  const opcoes = [
    { label: "Select Academic Track / Escolha o Nível", value: "" },
    { label: "Bilingual Nursery System (Infantil)", value: "infantil" },
    { label: "Primary Education Block (Primário)", value: "primario" },
    { label: "Secondary WAEC Alignment (Secundário)", value: "secundario" },
    { label: "Intensive Language Tracks (Avançado)", value: "portugues" },
    { label: "Executive / Corporate Training Node", value: "executivo" },
  ];

  const geraiAluno = [
    { value: 'foto', nome: "Upload Student Photo", tipo: 'file', req: true },
    { value: 'nome', nome: "First Name / Nome", tipo: 'text', req: true },
    { value: 'apelido', nome: "Last Name / Apelido", tipo: 'text', req: true },
    { value: 'nacimentoData', nome: "Date of Birth / Data de Nascimento", tipo: 'text', req: true },
    { value: 'naturalDe', nome: "Place of Birth / Natural de", tipo: 'text', req: true },
    { value: 'sector', nome: "Administrative Sector / Sector", tipo: 'text', req: true },
    { value: 'morada', nome: "Residential Address / Morada", tipo: 'text', req: true },
    { value: 'sexo', nome: "Gender / Sexo", tipo: 'select', req: true },
    { value: 'idade', nome: "Age / Idade", tipo: 'text', req: true },
    { value: 'escolaridadeAtual', nome: "Current Grade Level / Escolaridade Atual", tipo: 'text', req: true },
    { value: 'estadoCivil', nome: "Marital Status / Estado Civil (For Executives)", tipo: 'text', req: false },
    { value: 'profissão', nome: "Profession / Profissão (For Executives)", tipo: 'text', req: false }
  ];

  const familiaAluno = [
    { value: 'nomePai', nome: "Father's Full Name / Nome do Pai", tipo: 'text', req: true },
    { value: 'nomeMae', nome: "Mother's Full Name / Nome da Mãe", tipo: 'text', req: true },
    { value: 'contactoPrincipal', nome: "Primary Family Contact / Contacto Principal", tipo: 'tel', req: true },
  ];

  const encarregado = [
    { value: 'nomeResponsável', nome: "Legal Guardian Name / Encarregado de Educação", tipo: 'text', req: true },
    { value: 'grauParentesco', nome: "Relationship Degree / Grau de Parentesco", tipo: 'text', req: true },
    { value: 'contactoEmergência', nome: "Emergency Hotline / Contacto de Emergência", tipo: 'text', req: true },
    { value: 'email', nome: "Guardian Corporate Email Address", tipo: 'email', req: true },
  ];

  return (
    <div className="inscricao-page">
      <header className="inscricao-header">
        <span className="apply-badge">Admissions Open — Academic Cycle 2026</span>
        <h1>International Application Gateway</h1>
        <p>Register your profile within our premium multilingual educational ecosystem.</p>
      </header>
      <div className="divider"></div>

      <div className="form-container-viva">
        <form className="form-dinamico" onSubmit={(e) => e.preventDefault()}>

          {/* SESSÃO 1: ESCOLHA DE NÍVEL */}
          <div className="form-section">
            <h3 className="section-title"><BookOpen /> 1. Academic Track Evaluation</h3>
            <select className="input-viva select-track" value={nivel} onChange={(e) => setNivel(e.target.value)} required>
              {opcoes.map((e, idx) => <option key={idx} value={e.value}>{e.label}</option>)}
            </select>
          </div>

          {/* SESSÃO 2: DADOS DO ALUNO */}
          <div className="form-section">
            <h3 className="section-title"><User /> 2. Student Biographical Profile</h3>
            <div className="grid-inputs">
              {geraiAluno.map((e, i) => {
                if (i === 0) {
                  return (
                    <label key={i} htmlFor='passaporte' className='input-viva foto-uploader'> 
                      {dadosDoAluno.foto ? (
                        <img src={dadosDoAluno.foto} className='fotoAtual' alt="Preview" />
                      ) : (
                        <div className="upload-placeholder">
                          <Camera size={32} />
                          <p>{e.nome}</p>
                        </div>
                      )}
                      <input style={{ display: 'none' }} name={e.value} onChange={mudarFoto} id='passaporte' type={e.tipo} /> 
                    </label>
                  );
                }
                
                if (i < 7) {
                  return <input key={i} name={e.value} onChange={mudarTextos} type={e.tipo} placeholder={e.nome} className='input-viva' required={e.req} />;
                }
                
                if (i === 7) {
                  return (
                    <select key={i} name={e.value} onChange={mudarTextos} className="input-viva" required={e.req}>
                      <option value="">{e.nome}</option>
                      <option value="M">Male / Masculino</option>
                      <option value="F">Female / Feminino</option>
                    </select>
                  );
                }

                // Campos opcionais/condicionais baseados se NÃO for infantil/primario/secundario
                if (!isEscolar && nivel !== '') {
                  return <input key={i} name={e.value} onChange={mudarTextos} type={e.tipo} placeholder={e.nome} className="input-viva" required={e.req} />;
                }
                
                // Se for escolar, mostra apenas a idade e escolaridade atual
                if (isEscolar && (i === 8 || i === 9)) {
                  return <input key={i} name={e.value} onChange={mudarTextos} type={e.tipo} placeholder={e.nome} className="input-viva" required={e.req} />;
                }

                return null;
              })}
            </div>
          </div>

          {/* SESSÃO 3: PARENTESCOS PRIMÁRIOS */}
          <div className="form-section">
            <h3 className="section-title"><Users /> 3. Primary Lineage / Filiação</h3>
            <div className="grid-inputs"> 
              {familiaAluno.map((e, idx) => (
                <input key={idx} name={e.value} onChange={mudarTextos} type={e.tipo} placeholder={e.nome} className="input-viva" required={e.req}/>
              ))} 
            </div>
          </div>

          {/* SESSÃO 4: ENCARREGADO (CONDICIONAL SE FOR ESCOLAR) */}
          {isEscolar && (
            <div className="form-section encarregado-alerta">
              <h3 className="section-title"><Users /> 4. Appointed Legal Guardian / Encarregado</h3>
              <div className="grid-inputs"> 
                {encarregado.map((e, idx) => (
                  <input key={idx} name={e.value} onChange={mudarTextos} type={e.tipo} placeholder={e.nome} className="input-viva" required={e.req} />
                ))} 
              </div>
            </div>
          )}

          {/* SESSÃO 5: ÁREA ADMINISTRATIVA / MATRÍCULA INTERNA */}
          <div className="form-section adm-area">
            <h3 className="section-title"><MapPin /> {isEscolar ? "5." : "4."} Internal Registrar & Clearance</h3>
            <div className="grid-inputs">
              <div className="gerar-container">
                <div className={`gerar-btn ${idGen ? 'btn-desativado' : ''}`} onClick={handleGenerateId}>
                  <p>{idGen ? "Generated" : "Generate ID"}</p>
                </div>
                <input 
                  name='alunoID' 
                  type="text" 
                  placeholder="Student Matrix ID Code" 
                  className="input-viva readOnlyInput" 
                  value={generatedId} 
                  readOnly 
                />
              </div>
              <select name='pagamento' onChange={mudarTextos} value={dadosDoAluno.pagamento} className="input-viva">
                <option value="trimestral">Termly / Trimestral Clearance</option> 
                <option value="mensal">Monthly / Mensal Installments</option> 
              </select>
              <input name='secretariaNome' onChange={mudarTextos} type="text" placeholder="Desk Officer Signature / Secretário" className="input-viva" />
              <input name='dataInscricao' onChange={mudarTextos} type="date" className="input-viva" title="Registry Date" />
            </div>
          </div>

          {/* BOTÃO DE ENVIO CONDICIONAL AO ID GERADO */}
          <button type="submit" className={`btn-enviar-inscricao ${idGen ? 'gerado' : 'bloqueado'}`}>
            <span>Submit Official Application</span> <Send />
          </button>

        </form>
      </div>

      <footer className="embeddedFooter">
        <div className="footerInner">
          <p>© 2026 International Model School. Processing Office Nodes — Bairro Militar, Bissau.</p>
        </div>
      </footer>
    </div>
  );
}