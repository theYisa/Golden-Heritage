import Link from "next/link";
import { GraduationCap, MapPin, Mail, Phone, Globe, ChevronRight } from "lucide-react";
import "./footer.css";

export default function Footer() {
  const DIRECTOR_EMAIL = "director@internationalmodelschool.com";

  return (
    <footer className="footer-container">
      <div className="footer-top-line"></div>
      <div className="footer-content">
        <div className="footer-grid">

          {/* COLUNA 1: IDENTIDADE DA MARCA */}
          <div className="footer-brand">
            <div className="brand-logo-wrapper">
              <div className="brand-icon-box">
                <GraduationCap className="brand-icon" size={24} />
              </div>
              <div className="brand-text-block">
                <span className="brand-name">GOLDEN HERITAGE</span>
                <span className="brand-subname">International Model School</span>
              </div>
            </div>
            
            <div className="brand-details-block">
              <p className="brand-tagline">
                Engineering highly disciplined, multilingual leaders through rigorous academic execution tracks.
              </p>
              <p className="brand-motto">
                <em>"Meticulous Mastery, Global Impact"</em>
              </p>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO / EXPLORAR */}
          <div className="footer-links">
            <h4 className="column-title">Explore Nodes</h4>
            <ul className="links-list">
              <li>
                <Link href="/about-us" className="footer-link-item">
                  <ChevronRight className="link-arrow" size={14} />
                  <span>About Our Faculty</span>
                </Link>
              </li>
              <li>
                <Link href="/program" className="footer-link-item">
                  <ChevronRight className="link-arrow" size={14} />
                  <span>Academic Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="footer-link-item">
                  <ChevronRight className="link-arrow" size={14} />
                  <span>Campus Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/apply-now" className="footer-link-item">
                  <ChevronRight className="link-arrow" size={14} />
                  <span>Application Gateway</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATOS INSTITUCIONAIS */}
          <div className="footer-contact">
            <h4 className="column-title">Official Registry</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>Bairro Militar (Main Campus), Bissau, Guinea-Bissau</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" size={18} />
                <a href={`mailto:${DIRECTOR_EMAIL}`} className="footer-contact-link">
                  {DIRECTOR_EMAIL}
                </a>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" size={18} />
                <span>+245 96X XXX XXX / +245 95X XXX XXX</span>
              </li>
              <li className="contact-item">
                <Globe className="contact-icon" size={18} />
                <span className="web-span">www.internationalmodelschool.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR DE CRÉDITOS */}
        <div className="footer-bottom">
          <div className="bottom-inner">
            <p>© {new Date().getFullYear()} International Model School. All Rights Reserved. Built for bilingual distinction.</p>
            <p className="location-tag">Bissau Node — West Africa</p>
          </div>
        </div>
      </div>
    </footer>
  );
}