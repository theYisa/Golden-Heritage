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
  Activity,
  ChevronLeft,
  ShieldCheck,
  Bus,
  Home
} from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  // Controle de qual álbum está selecionado para ver as fotos por dentro
  const [albumSelecionado, setAlbumSelecionado] = useState(null);

  // DADOS DOS SERVIÇOS FUTUROS
  const servicosFuturos = [
    {
      title: "Premium Boarding School",
      desc: "An immersive, world-class residential ecosystem launching to foster total focus, strict academic discipline, and multilingual interaction 24/7.",
      icon: <ShieldCheck size={26} />,
      badge: "Coming Soon"
    },
    {
      title: "Golden Transport Fleet",
      desc: "A highly secured, strictly scheduled premium school bus service ensuring comfortable, point-to-point daily transits for elite students across Bissau.",
      icon: <Bus size={26} />,
      badge: "Strategic Plan"
    }
  ];

  // ESTRUTURA REORGANIZADA DE ÁLBUNS DE FOTOS
  const colecaoAlbuns = {
    graduation: {
      title: "Graduation Ceremonies",
      cover: "/art (7).jpg",
      total: "4 Historical Memory Logs",
      desc: "Celebrating pioneer batch accomplishments and WAEC track advancements.",
      photos: [
        { src: "/art (7).jpg", year: "2025", title: "Upper Basic Commencement", desc: "Celebrating our pioneering batch transition." },
        { src: "/art (1).jpg", year: "2025", title: "Bilingual Excellence Award", desc: "Honoring top fluency performers." },
        { src: "/art (3).jpg", year: "2026", title: "Senior WAEC Track Induction", desc: "The official launch ceremony of our high school wing." },
        { src: "/art (8).jpg", year: "2026", title: "Valedictorian Keynote", desc: "Inspiring speeches from the terminal class leaders." }
      ]
    },
    party: {
      title: "End of the Year Parties",
      cover: "/art (4).jpg",
      total: "4 Historical Memory Logs",
      desc: "Documenting inter-cultural banquets and multi-language galas.",
      photos: [
        { src: "/art (4).jpg", year: "2025", title: "Inter-Cultural Gala Night", desc: "Showcasing regional African and European arts." },
        { src: "/art (9).jpg", year: "2025", title: "Annual Music & Drama Fest", desc: "Live student orchestra and local theatrical plays." },
        { src: "/art (2).jpg", year: "2026", title: "Bissau Unity Banquet", desc: "End of year social dinner with parents and staff." },
        { src: "/art (5).jpg", year: "2026", title: "Bilingual Carols & Lights", desc: "A spectacular multi-language closing presentation." }
      ]
    }
  };

  // Dados adicionais preservados
  const professores = [
    { name: "Mr. Emmanuel Kwesi", role: "Head of WAEC English Track", bio: "Over 12 years of West African curriculum mastery, specializing in lexical structures.", img: "/api/placeholder/300/350" },
    { name: "Dr. Amadu Djau", role: "Director of Science & STEM Lab", bio: "Ph.D. in Chemical Engineering. Passionate about practical chemistry setups.", img: "/api/placeholder/300/350" },
    { name: "Madame Chantal Mendy", role: "Coordinator of French Linguistics", bio: "Bilingual diplomat specialist training students for regional commercial fluency.", img: "/api/placeholder/300/350" },
    { name: "Eng. Paulo Sani", role: "Lead Information Engineering Coach", bio: "Full-stack developer architecting our hardware and computational logic tracks.", img: "/api/placeholder/300/350" }
  ];

  const esportes = [
    { title: "Championship Football", desc: "Tactical training on our dedicated green pitches, developing regional tournament teams.", icon: <Trophy size={24} /> },
    { title: "Agricultural Orientation", desc: "Enhancing tactical agility, height physics, and quick decision-making under stress.", icon: <Spade size={24} /> },
    { title: "Track & Field Agility", desc: "Rigorously training speed, focus, and cardiovascular strength over standard metrics.", icon: <Activity size={24} /> },
    { title: "Religious Upliftments", desc: "Strategic board tournaments designed to sharpen executive planning and spatial logic.", icon: <BookOpen size={24} /> }
  ];

  return (
    <div className="aboutPageContainer">
      <Header/>
      
      {/* 1. HERO SECTION */}
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

      {/* 4. HISTORIC MEMORY LOGS (ALBUM INTERATIVO CLICÁVEL) */}
      <section className="sectionWrapper lightGreyBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>School Historic Memory Logs</h2>
            <div className="customLine"></div>
            <p>Select a historical folder memory capsule to expand and inspect our verified 2025 - 2026 collections.</p>
          </div>

          {!albumSelecionado ? (
            <div className="albumCoversGrid">
              {Object.keys(colecaoAlbuns).map((key) => {
                const album = colecaoAlbuns[key];
                return (
                  <div 
                    key={key} 
                    className="albumFolderCard" 
                    onClick={() => setAlbumSelecionado(key)}
                  >
                    <div className="albumFolderCoverWrapper">
                      <img src={album.cover} alt={album.title} />
                      <div className="albumFolderOverlay">
                        <span className="expandFolderBadge">Click to Open Folder</span>
                      </div>
                      <span className="albumFolderQuantityTag">{album.total}</span>
                    </div>
                    <div className="albumFolderMeta">
                      <div className="albumFolderHeader">
                        {key === 'graduation' ? <Award size={20} className="folderMetaIcon" /> : <Calendar size={20} className="folderMetaIcon" />}
                        <h3>{album.title}</h3>
                      </div>
                      <p>{album.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="expandedAlbumView animateFadeIn">
              <div className="expandedAlbumControls">
                <button className="backToAlbumsBtn" onClick={() => setAlbumSelecionado(null)}>
                  <ChevronLeft size={18} /> Back to Folders
                </button>
                <div className="expandedAlbumTitleArea">
                  <h3>Viewing Collection: <span>{colecaoAlbuns[albumSelecionado].title}</span></h3>
                </div>
              </div>

              <div className="albumGridDisplay">
                {colecaoAlbuns[albumSelecionado].photos.map((foto, idx) => (
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
          )}
        </div>
      </section>

      {/* 5. OUR SPORTS INFRASTRUCTURE */}
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

      {/* 3. FUTURE STRATEGIC HORIZONS (NOVO DESIGN ULTRA-MODERNO ESTILO MAQUETE COORDENADA) */}
      <section className="sectionWrapper futureServicesBg">
        <div className="centralMax">
          
          <div className="futureSplitLayout">
            
            {/* LADO ESQUERDO: A representação visual da Casa/Infraestrutura */}
            <div className="futureLeftVisualCard">
              <div className="visualArchitectureOverlay">
                <img src="/art (2).jpg" alt="Future Blueprint Campus" className="architectureImg" />
                <div className="visualBlueprintGradient"></div>
              </div>
              <div className="visualFloatingContent">
                <div className="architectureIconBadge">
                  <Home size={24} />
                </div>
                <h2>Future Strategic Horizons</h2>
                <div className="futureCustomLine"></div>
                <p>
                  Expanding our infrastructure footprint to introduce critical services engineered for total security and convenience.
                </p>
                <div className="blueprintCoordinates">
                  <span>LAT: 11.8642° N</span>
                  <span>LONG: 15.5815° W</span>
                  <span>BISSAU CAMPUS v2</span>
                </div>
              </div>
            </div>

            {/* LADO DIREITO: Os Serviços Listados de Forma Avançada */}
            <div className="futureRightContentGrid">
              {servicosFuturos.map((srv, idx) => (
                <div key={idx} className="futureServiceListRow">
                  <div className="rowIconContainer">
                    {srv.icon}
                    <div className="iconPulseRing"></div>
                  </div>
                  <div className="rowTextDetails">
                    <div className="rowHeaderLine">
                      <h3>{srv.title}</h3>
                      <span className="rowBadgeTag">{srv.badge}</span>
                    </div>
                    <p>{srv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
      
      {/* 6. OUR TEACHERS' PROFILE */}
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