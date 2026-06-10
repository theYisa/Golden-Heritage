'use client';

import { useState } from 'react';
import './about.css';
import { 
  MapPin, 
  Globe, 
  Mail, 
  Phone, 
  Clock, 
  Award, 
  BookOpen, 
  UserCheck, 
  Calendar, 
  Trophy, 
  Heart,
  Spade,
  Activity
} from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  // Estado para controlar qual sub-álbum de fotos está ativo
  const [albumAtivo, setAlbumAtivo] = useState('graduation');

  // Dados das Fotos dos Eventos (2025 - 2026)
  const fotosEventos = {
    graduation: [
      { src: "/art (7).jpg", year: "2025", title: "Upper Basic Commencement", desc: "Celebrating our pioneering batch transition." },
      { src: "/art (1).jpg", year: "2025", title: "Bilingual Excellence Award", desc: "Honoring top fluency performers." },
      { src: "/art (3).jpg", year: "2026", title: "Senior WAEC Track Induction", desc: "The official launch ceremony of our high school wing." },
      { src: "/art (8).jpg", year: "2026", title: "Valedictorian Keynote", desc: "Inspiring speeches from the terminal class leaders." }
    ],
    party: [
      { src: "/art (4).jpg", year: "2025", title: "Inter-Cultural Gala Night", desc: "Showcasing regional African and European arts." },
      { src: "/art (9).jpg", year: "2025", title: "Annual Music & Drama Fest", desc: "Live student orchestra and local theatrical plays." },
      { src: "/art (2).jpg", year: "2026", title: "Bissau Unity Banquet", desc: "End of year social dinner with parents and staff." },
      { src: "/art (5).jpg", year: "2026", title: "Bilingual Carols & Lights", desc: "A spectacular multi-language closing presentation." }
    ]
  };

  // Dados do Perfil dos Professores
  const professores = [
    { name: "Mr. Emmanuel Kwesi", role: "Head of WAEC English Track", bio: "Over 12 years of West African curriculum mastery, specializing in lexical structures.", img: "/api/placeholder/300/350" },
    { name: "Dr. Amadu Djau", role: "Director of Science & STEM Lab", bio: "Ph.D. in Chemical Engineering. Passionate about practical chemistry setups.", img: "/api/placeholder/300/350" },
    { name: "Madame Chantal Mendy", role: "Coordinator of French Linguistics", bio: "Bilingual diplomat specialist training students for regional commercial fluency.", img: "/api/placeholder/300/350" },
    { name: "Eng. Paulo Sani", role: "Lead Information Engineering Coach", bio: "Full-stack developer architecting our hardware and computational logic tracks.", img: "/api/placeholder/300/350" }
  ];

  // Dados dos Esportes Escolares (Ícones Lucide corrigidos)
  const esportes = [
    { title: "Championship Football", desc: "Tactical training on our dedicated green pitches, developing regional tournament teams.", icon: <Trophy size={24} /> },
    { title: "Agricultural Orientation", desc: "Enhancing tactical agility, height physics, and quick decision-making under stress.", icon: <Spade size={24} /> },
    { title: "Track & Field Agility", desc: "Rigorously training speed, focus, and cardiovascular strength over standard metrics.", icon: <Activity size={24} /> },
    { title: "Religious Upliftments", desc: "Strategic board tournaments designed to sharpen executive planning and spatial logic.", icon: <BookOpen size={24} /> }
  ];

  return (
    <div className="aboutPageContainer">
      <Header/>
      
      {/* 1. HERO SECTION WITH IMAGE & 4-LINE TARGET GOAL */}
      <header className="aboutHero">
        <div className="heroImageOverlay">
          <img src="/art (2).jpg" alt="Campus Grande Casa" className="heroGrandeCasa" />
          <div className="darkBlendedFilter"></div>
        </div>
        <div className="heroTextContent centralMax">
          <span className="heroMiniBadge">About Our Institution</span>
          <h1>International Model School</h1>
          <p className="fourLineTarget">
            Our absolute target is to systematically construct a premier bilingual ecosystem in Guinea-Bissau that bridges the gap between basic literacy and international corporate competence. By embedding meticulous linguistic mastery, practical sciences, and strict analytical discipline directly into our standard framework, we engineer multi-talented students ready to dictate solutions across West Africa and the global landscape.
          </p>
        </div>
      </header>

      {/* 2. INSTITUTIONAL METRICS & DATA HUB */}
      <section className="sectionWrapper dataHubBg">
        <div className="centralMax dataGrid">
          
          {/* Coluna de Contato e Localização */}
          <div className="dataCard infoListCard">
            <h3>Official Corporate Registry</h3>
            <div className="cardLine"></div>
            <ul className="corporateDetailsList">
              <li>
                <MapPin className="detIcon" size={20} />
                <div>
                  <strong>Campus Location:</strong>
                  <span>Bairro Militar (Moved from Avenida), Bissau, Guinea-Bissau</span>
                </div>
              </li>
              <li>
                <Globe className="detIcon" size={20} />
                <div>
                  <strong>Global Web Portal:</strong>
                  <span>www.internationmodelschool.com</span>
                </div>
              </li>
              <li>
                <Mail className="detIcon" size={20} />
                <div>
                  <strong>Admissions Desk Email:</strong>
                  <span>admissions@internationalmodelschool.com</span>
                </div>
              </li>
              <li>
                <Phone className="detIcon" size={20} />
                <div>
                  <strong>Administrative Hotlines:</strong>
                  <span>+245 96X XXX XXX / +245 95X XXX XXX</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna de Metadados / Coisas Necessárias Pensadas */}
          <div className="dataCard statsOverviewCard">
            <h3>Operational Baseline</h3>
            <div className="cardLine"></div>
            <div className="metricsGridMinimal">
              <div className="metricBox">
                <Clock className="mIcon" size={20} />
                <h4>Schedules</h4>
                <p>Morning & Intensive Night Tracks Active</p>
              </div>
              <div className="metricBox">
                <UserCheck className="mIcon" size={20} />
                <h4>Ratio</h4>
                <p>Low Student-to-Teacher Careful Learning Metrics</p>
              </div>
              <div className="metricBox">
                <BookOpen className="mIcon" size={20} />
                <h4>Tracks</h4>
                <p>WAEC Exams Standards & Local Legal Equivalency</p>
              </div>
              <div className="metricBox">
                <Heart className="mIcon" size={20} />
                <h4>Health</h4>
                <p>Full Immunization Clearance Audit Required</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. EVENT ALBUMS */}
      <section className="sectionWrapper lightGreyBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>School Historic Memory Logs</h2>
            <div className="customLine"></div>
            <p>Explore our historical event albums documenting active student excellence across the 2025 and 2026 calendar years.</p>
          </div>

          {/* Abas de Navegação dos Sub-Álbuns */}
          <div className="albumTabsContainer">
            <button 
              className={`tabBtn ${albumAtivo === 'graduation' ? 'tabBtnActive' : ''}`}
              onClick={() => setAlbumAtivo('graduation')}
            >
              <Award size={18} /> Graduation Ceremonies
            </button>
            <button 
              className={`tabBtn ${albumAtivo === 'party' ? 'tabBtnActive' : ''}`}
              onClick={() => setAlbumAtivo('party')}
            >
              <Calendar size={18} /> End of the Year Parties
            </button>
          </div>

          {/* Grid de Renderização Dinâmica do Álbum */}
          <div className="albumGridDisplay">
            {fotosEventos[albumAtivo].map((foto, idx) => (
              <div key={idx} className="photoAlbumCard">
                <div className="albumImgWrapper">
                  <img src={foto.src} alt={foto.title} />
                  <span className="albumYearTag">{foto.year}</span>
                </div>
                <div className="albumCardText">
                  <h4>{foto.title}</h4>
                  <p>{foto.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SPORTS INFRASTRUCTURE */}
      <section className="sectionWrapper defaultBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>Physical Development & Sports Clubs</h2>
            <div className="customLine"></div>
            <p>Our curriculum mandates physical mastery to build high teamwork intelligence and mental endurance metrics.</p>
          </div>

          <div className="sportsGridSystem">
            {esportes.map((esp, idx) => (
              <div key={idx} className="sportsCardItem">
                <div className="sportsIconCircle">{esp.icon}</div>
                <h3>{esp.title}</h3>
                <p>{esp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR TEACHERS' PROFILE */}
      <section className="sectionWrapper lightGreyBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>The Elite Faculty Node</h2>
            <div className="customLine"></div>
            <p>Meet the top-tier multilingual mentors executing the Careful Learning System daily.</p>
          </div>

          <div className="teachersGridSystem">
            {professores.map((prof, idx) => (
              <div key={idx} className="teacherProfileCard">
                <div className="teacherImageSpace">
                  <img src={prof.img} alt={prof.name} />
                </div>
                <div className="teacherMetaDetails">
                  <h4>{prof.name}</h4>
                  <span className="teacherRoleBadge">{prof.role}</span>
                  <p>{prof.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER EMBEDDED */}
      <footer className="embeddedFooter">
        <div className="footerInner centralMax">
          <p>© 2026 International Model School. Bairro Militar, Bissau. Built for bilingual distinction and leadership development.</p>
        </div>
      </footer>

    </div>
  );
}