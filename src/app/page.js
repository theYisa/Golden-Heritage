import React from 'react';
import { Shield, BookOpen, GraduationCap, Code, Languages, Users, School, Trophy, ArrowRight, MapPin, Phone } from 'lucide-react';
import './page.css';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='container'>
      
      <Header/>

      {/* 2. HERO SECTION (Admission Open) */}
      <section className='hero'>
        <div className='heroContent'>
          <span className='badge'>
            <Shield size={14} /> Admissions 2026 Now Open
          </span>
          <h1 className='heroTitle'>
            Nurturing Tomorrow's Global Leaders in Bissau
          </h1>
          <p className='heroDescription'>
            "Goodness, Humility, Integrity, Modesty and Sobriety." Providing a gateway to global educational opportunities through holistic, values-based learning.
          </p>
          <div className='heroButtons'>
            <a href="#enquiry" className='btnPrimary'>
              Make Enquires <ArrowRight size={16} />
            </a>
            <a href="#programs" className='btnSecondary'>
              Explore Our Tracks
            </a>
          </div>
        </div>
      </section>

      {/* 3. COUNTER / STATS SECTION */}
      <section className='statsSection'>
        <div className='statsGrid'>
          <div className='statCard'>
            <div className='statIcon'><Users size={24} /></div>
            <p className='statNumber'>50+</p>
            <p className='statLabel'>Active Students</p>
          </div>
          <div className='statCard'>
            <div className='statIcon'><GraduationCap size={24} /></div>
            <p className='statNumber'>10+</p>
            <p className='statLabel'>Expert Teachers</p>
          </div>
          <div className='statCard'>
            <div className='statIcon'><School size={24} /></div>
            <p className='statNumber'>10</p>
            <p className='statLabel'>Modern Classrooms</p>
          </div>
          <div className='statCard'>
            <div className='statIcon'><Trophy size={24} /></div>
            <p className='statNumber'>15+</p>
            <p className='statLabel'>Extracurriculars</p>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC PROGRAMS SECTION */}
      <section id="programs" className='programsSection'>
        <div className='sectionHeader'>
          <h2>Our Academic Pathways</h2>
          <div className='divider'></div>
          <p>From early childhood foundation to professional tech training, we offer a comprehensive curriculum adapted for local and global success.</p>
        </div>

        <div className='programsGrid'>
          {[
            { title: 'Creche & Nursery', desc: 'A safe, warm, and stimulating environment focusing on early sensory and social development for toddlers.', icon: <School size={22} />,},
            { title: 'Primary School', desc: 'Building strong foundations in literacy, numeracy, and foundational sciences using interactive methods.', icon: <BookOpen size={22} />, link: '/program#kindergarten' },
            { title: 'Grade 7-9 (Junior Secondary)', desc: 'Transitioning students into deep critical thinking, scientific exploration, and rigorous language studies.', icon: <GraduationCap size={22} />, link: '/program#kindergarten'},
            { title: 'WAEC Tracks (Grade 10-12)', desc: 'New launching upper secondary block preparing students effectively for the West African Senior School Certificate.', icon: <Shield size={22} />, link: '/program#kindergarten' },
            { title: 'Language Institute', desc: 'Specialized intensive programs in English and Portuguese, tailored specifically for students and adult professionals.', icon: <Languages size={22} />, link: 'languages' },
            { title: 'Computer Training', desc: 'Growing towards an Information Engineering Institute, offering professional software and hardware fundamentals.', icon: <Code size={22} /> }
          ].map((prog, idx) => (
            <Link key={idx} className='programCard' href={idx == 0 ? '/program#kindergarten' : idx == 1 ? '/program#primary' : idx == 2 ? '/program#secondary' : idx == 4 ? 'program#languages' : 'program#computer'}>
              <div className='top-gear'></div>
              <div className='programCardIcon'>{prog.icon}</div>
              <h3>{prog.title}</h3>
              <p>{prog.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section id="gallery" className='gallerySection'>
        <div className='sectionHeader'>
          <h2>Life at Golden Heritage</h2>
          <div className='divider'></div>
          <p>A visual glimpse into our classrooms, practical labs, and daily student activities.</p>
        </div>

        {/* Top 3 Photos Row */}
        <div className='galleryTopGrid'>
          {[1, 10, 4].map((e, i) => (
            <div key={i} className='galleryCardLarge'>
              <img src={`/art (${e}).jpg`} alt={`Activity bottom ${e}`} />
              <div className='galleryOverlay'><span>Campus Activities</span></div>
            </div>
          ))}
        </div>

      </section>

      {/* ABOUT US ADDITIONAL SECTION */}
      <section id="about" className='aboutSection'>
        <div className='aboutGrid'>
          <div className='aboutLeft'>
            <span className='aboutSubtitle'>Our Vision & Mission</span>
            <h2>Raising a Competent Generation</h2>
            <div className='missionVisionStack'>
              <div>
                <h4>Vision</h4>
                <p>To raise a generation of globally competitive learners distinguished by excellent character and academic prowess.</p>
              </div>
              <div>
                <h4>Mission</h4>
                <p>To provide holistic, values-based education that nurtures the intellectual, moral, physical, and social development of every child in a safe, modern learning environment.</p>
              </div>
            </div>
          </div>
          <div className='aboutRightCard'>
            <h3>Administration & Ownership</h3>
            <p>Golden Heritage International Model School is a premier private institution in Guinea-Bissau wholly owned by <strong>Rev. ABIALA, Babatunde Samson</strong> (Proprietor).</p>
            <p>Our academic matrix adopts a blend of the Guinea-Bissau National Curriculum integrated seamlessly with international best practices, prioritizing English and Portuguese fluencies.</p>
          </div>
        </div>
      </section>

      {/* 6. REGISTRATION & ENQUIRY FORM */}
      <section id="enquiry" className='enquirySection'>
        <div className='formContainer'>
          <h3>Admissions & General Enquiry</h3>
          <p className='formSubtitle'>Fill out the brief form below, and our admissions office will reach out to your family shortly.</p>
          
          <form className='mainForm'>
            <div className='formRow'>
              <div>
                <label>Student Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div>
                <label>Parent/Guardian Name</label>
                <input type="text" placeholder="Rev. Abiala" required />
              </div>
            </div>

            <div className='formRow'>
              <div>
                <label>Phone Number</label>
                <input type="tel" placeholder="+245 XXX XXX XXX" required />
              </div>
              <div>
                <label>Program of Interest</label>
                <select defaultValue="">
                  <option value="" disabled>Select a track...</option>
                  <option value="creche">Creche & Nursery</option>
                  <option value="primary">Primary School</option>
                  <option value="junior">Grade 7-9 (Junior Secondary)</option>
                  <option value="senior">WAEC Track (Grade 10-12)</option>
                  <option value="languages">Language Schools (English / Portuguese)</option>
                  <option value="tech">Computer Training Institute</option>
                </select>
              </div>
            </div>

            <div>
              <label>Additional Comments / Questions</label>
              <textarea rows="4" placeholder="How can we help you?"></textarea>
            </div>

            <button type="submit" className='btnSubmit'>Submit Enquiry Form</button>
          </form>
        </div>
      </section>

  <Footer />
    </div>
  );
}