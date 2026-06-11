'use client';

import { useState, useEffect } from 'react';
import './gallery.css';
import { 
  Eye, 
  Target, 
  Award, 
  Compass, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Sprout, 
  Laptop, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CalendarDays
} from 'lucide-react';
import Header from '../components/Header';

export default function GalleryPage() {
  // Estado para o Álbum de Fotos Rotativo usando suas imagens locais
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const fotosGaleria = [
    { id: 1, src: "/art (1).jpg", title: "Modern School Exterior", caption: "Our secure learning facility environment." },
    { id: 2, src: "/art (2).jpg", title: "Bilingual Nursery Room", caption: "Interactive multi-lingual learning spaces." },
    { id: 3, src: "/art (13).jpg", title: "STEM Experimental Lab", caption: "Igniting curiosity through practical science." },
    { id: 4, src: "/art (4).jpg", title: "Annual Sports Day", caption: "Building teamwork, physical health, and agility." },
    { id: 5, src: "/art (5).jpg", title: "Language Reading Circle", caption: "Developing fluent speech blocks early." },
    { id: 6, src: "/art (12).jpg", title: "Infant Care Pavilion", caption: "Serene, medically hygienic crèche framework." },
    { id: 7, src: "/art (11).jpg", title: "Primary Graduation", caption: "Celebrating our academic heavyweights." },
    { id: 8, src: "/nivels (9).jpg", title: "Resource Discovery Center", caption: "Deepening literature and analytical habits." },
    { id: 9, src: "/art (10).jpg", title: "Creative Arts Showcase", caption: "Exploring individual musical brilliance." },
    { id: 10, src: "/art (9).jpg", title: "Digital Literacy Suite", caption: "Mastering quantitative computer tools." }
  ];

  // Girar o álbum automaticamente a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % fotosGaleria.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [fotosGaleria.length]);

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % fotosGaleria.length);
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + fotosGaleria.length) % fotosGaleria.length);

  // Os 5 Princípios Orientadores
  const principios = [
    { icon: <Compass />, title: "Global Vision", desc: "Equipping minds to operate cross-borders with bilingual ease and cultural intellect." },
    { icon: <ShieldCheck />, title: "Integrity First", desc: "Cultivating moral ethics, accountability, and strong individual character pillars." },
    { icon: <Award />, title: "Academic Rigor", desc: "Challenging analytical potentials through customized modern curricula standards." },
    { icon: <Users />, title: "Inclusive Community", desc: "Fostering an ecosystem where diverse backgrounds unite under structured scholarship." },
    { icon: <Sparkles />, title: "Practical Innovation", desc: "Bridging the gap between standard theory and real-world execution blocks." }
  ];

  // Linha do Tempo (7 Pontos Estratégicos)
  const timelineData = [
    { year: "2023", title: "The Foundation", desc: "Launched operations in Avenida as a premium Nursery and Basic Care facility." },
    { year: "2024 (Early)", title: "Strategic Relocation", desc: "Moved structures to Bairro Militar to accommodate rapidly increasing student logs." },
    { year: "2024 (Late)", title: "Language Node Initiation", desc: "Inaugurated dedicated intensive Language Classes drawing strong, high-performing students." },
    { year: "2025", title: "Secondary Scaling", desc: "Commenced structural expansions and frameworks targeting advanced secondary blocks." },
    { year: "2026 (Current)", title: "WAEC Tracks Validation", desc: "Integrated comprehensive Junior/Senior Secondary models aligning with West African exams." },
    { year: "2026 (Mid)", title: "Tech & Agricultural Labs", desc: "Established onsite practical computation clusters and structural farming programs." },
    { year: "2027 (Vision)", title: "Regional Elite Node", desc: "Positioning the institution as Bissau's benchmark node for international corporate placements." }
  ];

  // As 10 Atividades Chave da Escola
  const atividades = [
    { title: "Agricultural Farming", desc: "Hands-on structural field farming to teach biology, resource responsibility, and food economics.", icon: <Sprout /> },
    { title: "Practical Science Classes", desc: "Active experimental learning inside laboratories replacing dry textbook memorization.", icon: <BookOpen /> },
    { title: "Intensive English Mastery", desc: "Rigorous daily immersion strategies targeting fluent international communications.", icon: <MessageSquare /> },
    { title: "French Language Tracks", desc: "Unlocking regional West African commerce capability via structural French syntax models.", icon: <Users /> },
    { title: "Portuguese Excellence", desc: "Polishing native formal syntax blocks to master administrative and academic documentation.", icon: <BookOpen /> },
    { title: "Careful Learning System", desc: "A tailored, low student-to-teacher ratio system prioritizing individual psychological tracking.", icon: <ShieldCheck /> },
    { title: "Information Engineering Lab", desc: "Direct code interactions, hardware manipulation, and office workspace systems training.", icon: <Laptop /> },
    { title: "Creative Arts & Sketching", desc: "Nurturing imaginative design perspectives through physical artistic exhibitions.", icon: <Sparkles /> },
    { title: "Leadership & Debate Clubs", desc: "Weekly structured rhetoric forums enabling students to present corporate pitches.", icon: <Compass /> },
    { title: "Civic & Moral Education", desc: "Firm guidance blocks rooted in discipline, national pride, and global ethics.", icon: <Award /> }
  ];

  return (
    <div className="galeriaPageContainer">
      <Header />
      {/* HERO SECTION */}
      <header className="galeriaHero">
        <span className="heroBadge">Institutional Heritage</span>
        <h1>Inside Our Model Ecosystem</h1>
        <p>Discover the historical path, guiding values, and vibrant daily operations that shape the International Model School.</p>
      </header>

      {/* 1. VISION & MISSION SECTION */}
      <section className="sectionWrapper visionMissionBg">
        <div className="sectionGrid centralMax">
          <div className="visionCard">
            <div className="iconHeader blueGlow"><Eye size={32} /></div>
            <h2>Our Vision</h2>
            <p>To stand as the foundational educational benchmark in Guinea-Bissau, recognized internationally for engineering highly disciplined, multilingual leaders who catalyze professional transformation across West Africa and the global landscape.</p>
          </div>
          <div className="missionCard">
            <div className="iconHeader marineGlow"><Target size={32} /></div>
            <h2>Our Mission</h2>
            <p>To provide a carefully audited academic environment that merges meticulous linguistic mastery (English, Portuguese, French) with hands-on technological, scientific, and socio-economic practical training modules.</p>
          </div>
        </div>
      </section>

      {/* 2. OUR FIVE GUIDING PRINCIPLES */}
      <section className="sectionWrapper defaultBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>Our Five Guiding Principles</h2>
            <div className="customLine"></div>
            <p>The unyielding framework governing every administrative decision and student evaluation metric.</p>
          </div>
          <div className="principlesGrid">
            {principios.map((p, idx) => (
              <div key={idx} className="principleCard">
                <div className="pIcon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORDS FROM THE PROPRIETOR */}
<section className="sectionWrapper lightGreyBg">
  <div className="sectionGrid centralMax proprietorAlign">
    <div className="proprietorImgArea">
      {/* Imagem Vertical (572x661) para telas menores/Mobile */}
      <img src="/sir.jpg" alt="School Proprietor" className="proprietorPhoto photoMobile" />
      
      {/* Imagem Horizontal (1185x661) para Computador */}
      <img src="/sir2.jpg" alt="School Proprietor" className="proprietorPhoto photoDesktop" />
      
      <div className="imgDecorativeBorder"></div>
    </div>
    <div className="proprietorTextArea">
      <span className="subTitleText">Leadership Message</span>
      <h2>Words from the Proprietor</h2>
      <div className="leftLine"></div>
      <blockquote>
        "Education at International Model School is not an exercise in passive consumption; it is an active architecture of character. We observed the missing links within standard frameworks and intentionally injected intensive languages, digital operations, and real agricultural realities into our matrix."
      </blockquote>
      <p className="proprietorParagraph">
        We started small but strategic. Our moves from Avenida to Bairro Militar, and our constant drive towards full secondary integration, showcase our commitment. We don't just prepare students to pass exams—we prepare them to lead corporations.
      </p>
      <div className="proprietorSign">
        <h4>Director & Proprietor</h4>
        <h5>International Model School</h5>
      </div>
    </div>
  </div>
</section>

      {/* 4. A GALLERY OF THE SCHOOL (ÁLBUM ROTATIVO COM FOTOS REAIS) */}
      <section className="sectionWrapper darkBlueBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter lightText">
            <h2>Campus Living & Facilities</h2>
            <div className="customLine whiteLine"></div>
            <p>A panoramic rotation showcasing our active structures, labs, and interactive student engagements.</p>
          </div>
          
          <div className="carouselContainer">
            <button className="carouselBtn prevBtn" onClick={prevPhoto} aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <div className="carouselWindow">
              <img src={fotosGaleria[currentPhoto].src} alt={fotosGaleria[currentPhoto].title} className="carouselImage" />
              <div className="carouselCaption">
                <span>{fotosGaleria[currentPhoto].caption}</span>
              </div>
            </div>
            <button className="carouselBtn nextBtn" onClick={nextPhoto} aria-label="Next image">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carouselIndicators">
            {fotosGaleria.map((_, i) => (
              <span key={i} className={`indicatorDot ${i === currentPhoto ? 'activeDot' : ''}`} onClick={() => setCurrentPhoto(i)}></span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TIMELINE OF THE SCHOOL */}
      <section className="sectionWrapper defaultBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>Our Historical Evolution</h2>
            <div className="customLine"></div>
            <p>Review the calculated milestones that transformed a local nursery framework into an educational powerhouse.</p>
          </div>

          <div className="timelineWrapper">
            <div className="timelineCenterLine"></div>
            {timelineData.map((t, idx) => (
              <div key={idx} className={`timelineNode ${idx % 2 === 0 ? 'leftNode' : 'rightNode'}`}>
                <div className="timelineContent">
                  <div className="timelineBadge">
                    <CalendarDays size={14} /> <span>{t.year}</span>
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
                <div className="timelinePoint"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CORE SCHOOL ACTIVITIES */}
      <section className="sectionWrapper lightGreyBg">
        <div className="centralMax">
          <div className="sectionHeading textCenter">
            <h2>Our Ten Core Academic Activities</h2>
            <div className="customLine"></div>
            <p>An overview of our unique learning mechanisms designed to merge mental acuity with practical life skills.</p>
          </div>

          <div className="activitiesGrid">
            {atividades.map((act, idx) => (
              <div key={idx} className="activityCard">
                <div className="activityTop">
                  <div className="activityIcon">{act.icon}</div>
                  <span className="activityNumber">#{idx + 1}</span>
                </div>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER EMBEDDED */}
      <footer className="embeddedFooter">
        <div className="footerInner centralMax">
          <p>© 2026 International Model School. All Rights Reserved. Built for bilingual distinction and leadership.</p>
        </div>
      </footer>

    </div>
  );
}