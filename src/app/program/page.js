'use client';

import { useEffect, useState } from 'react';
import './program.css';
import { Calendar, CheckCircle, ChevronDown, Info, Wallet } from 'lucide-react';
import Header from '../components/Header';

const FotoMutante = ({ fotos }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!fotos || fotos.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [fotos]);

  return (
    <div className="fotoWrapper">
      <img src={fotos[index]} alt="School Facilities" className="fotoSketch" />
      <div className="sketchOverlay"></div>
    </div>
  );
};

export default function ProgramsPage() {
  const [aberto, setAberto] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setAberto(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);
const toggleNivel = (id) => { 
    const novoEstado = aberto === id ? null : id;
    setAberto(novoEstado); 
    
    if (novoEstado) {
      setTimeout(() => {
        const elemento = document.getElementById(id);
        if (elemento) {
          // Faz o elemento se alinhar confortavelmente no topo da tela
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };  const dadosNiveis = [
    { id: "kindergarten",
      titulo: "Kindergarten & Nursery",
      status: "Admissions Open",
      inicio: "September 2026",
      age: "2 - 6 years",
      descricao: "Early childhood development program designed to nurture social skills, cognitive growth, and basic languages in a secure environment.",
      condicoes: [
        "Child must be at least 2 to 5 years old.",
        "Submission of birth certificate copy.",
        "Completed health immunization clearance record."],
      processo: "Pick up an evaluation card from the administration block and confirm registration with the bursar.",
      fotos: ["nivels (8).jpg", "nivels (6).jpeg", "nivels (6).jpeg"]
    },
    { id: "primary",
      titulo: "Primary Education (Grade 1-6)",
      status: "Admissions Open",
      inicio: "September 2026",
      age: "5 - 12 years",
      descricao: "Building essential pillars in mathematics, elementary sciences, and dual-language fluency (English & Portuguese) matching regional standards.",
      condicoes: [
        "Successful presentation of last academic term report sheet.",
        "Interview session with the Head Teacher.",
        "Two recent passport photographs."],
      processo: "Purchase the primary admission file at the reception, clear the basic placement test, and submit documents within 5 working days.",
      fotos: ["nivels (13).jpg", "nivels (1).jpg", "nivels (1).jpeg"]
    },
    { id: "secondary",
      titulo: "Junior & Senior Secondary (WAEC Tracks)",
      status: "Limited Seats",
      inicio: "September 2026",
      age: "12 - 18 years",
      descricao: "Launching comprehensive upper secondary blocks preparing students rigorously for academic excellence and the West African Senior School Certificate.",
      condicoes: [
        "Official transcript or testimonial from the previous school.",
        "Core competency examination in English and Mathematics.",
        "Guarantor documentation from a parent/guardian."],
      processo: "Register online via our enquiry node or walk into the administrative office to schedule an entrance screening calendar slot.",
      fotos: ["nivels (11).jpg", "nivels (14).jpg"]
    },
    { id: "languages",
      titulo: "Language Institute (English & Portuguese)",
      status: "Inscriptions Active",
      inicio: "Rolling Intake 2026",
      age: "Adults",
      descricao: "Specialized dynamic programs targeting professional adult modules and students seeking global integration through bilingual proficiency.",
      condicoes: [
        "Open to adults and secondary student learners.",
        "Placement interview to determine operational baseline tier.",
        "Purchase of official program textbooks."],
      processo: "Walk into our evening desk desk, select your preference hours (morning or intensive night tracks) and receive your curriculum matrix.",
      fotos: ["nivels (9).jpg"]
    },
    { id: "computer",
      titulo: "Computer Training & Information Engineering",
      status: "Admissions Open",
      inicio: "October 2026",
      age: "Any age range",
      descricao: "Pioneering technology steps offering professional foundation blocks in hardware maintenance, safe office computing, and structural software basics.",
      condicoes: [
        "Basic interest in modern technology tracks.",
        "Personal laptop required for intermediate home laboratory practices.",
        "High school diploma or concurrent attendance validation."],
      processo: "Submit an applications card directly to the technological wing director and choose your specific lab system slot allocation.",
      fotos: ["etwise.png", "art (1).jpeg"]
    }
  ];

  return (
    <div className="niveisDetalhePage">
      <Header />
      <header className="detalheHero">
        <h1 className="slideUp">Our Academic & Professional Programs</h1>
        <p className="slideUpDelayed">
          Explore our structured pathways designed to nurture character, intellectual strength, and international opportunities in Bissau.
        </p>
      </header>

      <div className="accordionContainer">
        {dadosNiveis.map((nivel, idx) => (
          <section key={nivel.id} id={nivel.id} className={`nivelItem ${aberto === nivel.id ? 'aberto' : 'fechado'}`} >
            <div className="nivelHeaderClick" onClick={() => toggleNivel(nivel.id)}>
              
              <div className="headerMain">
                <span className="numeroLabel">0{idx + 1}</span>
                <h2>{nivel.titulo}</h2>
              </div>
              <div className="headerMeta">
                <div className={`statusTag ${
                  nivel.status.includes('Closed') ? 'closed' : 
                  nivel.status.includes('Limited') ? 'pend' : 'open'
                }`}>
                  {nivel.status}
                </div>
                <ChevronDown className="iconSeta" />
              </div>
            </div>

            <div className="nivelContentWrapper">
              <div className="nivelGridConteudo">
                
                <div className="colunaTexto">
                  <div className="blocoInfo">
                    <div className="infoCard">
                      <Calendar size={18} /> <span>Start: {nivel.inicio}</span>
                    </div>
                    <div className="infoCard">
                      <Wallet size={18} /> <span>Age Range: {nivel.age}</span>
                    </div>
                  </div>
                  
                  <div className="bloco">
                    <h3><Info size={20} /> About the Track</h3>
                    <p>{nivel.descricao}</p>
                  </div>
                  
                  <div className="bloco">
                    <h3><CheckCircle size={20} /> Admission Prerequisites</h3>
                    <ul>
                      {nivel.condicoes.map((cond, i) => (
                        <li key={i}>{cond}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="colunaMidia">
                  <FotoMutante fotos={nivel.fotos} />
                  
                  <div className="processoCard">
                    <h4>Application Registry Path</h4>
                    {/* <p>{nivel.processo}</p> */}
                    <div className="botoesGrupo">
                      <a href="#enquiry" className="btnMain">Apply Now</a>
                      <span className="btnSub">Download Syllabus</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </section>
        ))}
      </div>

    </div>
  );
}