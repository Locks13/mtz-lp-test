import './Footer.css';
import footerLinks from '../../data/footerLinks.json';

// Importando as imagens dos ícones
import instagramIcon from '../../assets/instagram-icon.svg';
import linkeDin from '../../assets/linkedin-icon.svg';
import tikTok from '../../assets/tiktok-icon.svg';
import logoLoja from '../../assets/logo-loja.svg';

const Footer = () => {
  // Dados para os ícones das redes sociais
  const redesSociais = [
    { 
      nome: 'instagram', 
      url: 'https://instagram.com', 
      icone: instagramIcon,
      alt: 'Instagram' 
    },
    { 
      nome: 'linkedin', 
      url: 'https://linkedin.com', 
      icone: linkeDin,
      alt: 'Linkedin' 
    },
    { 
      nome: 'x', 
      url: 'https://x.com', 
      icone: tikTok,
      alt: 'TikTok' 
    }
  ];

  return (
    <footer className="footer">
      {/* Seção do logo */}
      <div className="footer-logo">
        <h2>
            <img src={logoLoja} alt="Logo Loja" className="footer-logo-image" />
        </h2>
      </div>

      {/* Seção de redes sociais*/}
      <div className="footer-redes-sociais">
        {redesSociais.map((rede) => (
          <a 
            key={rede.nome}
            href={rede.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={rede.alt}
          >
            <img 
              src={rede.icone} 
              alt={rede.alt}
              className={`footer-icon ${rede.nome}-icon`}
            />
          </a>
        ))}
      </div>

      {/* Seção de links*/}
      <nav className="footer-links">
        <ul>
          {footerLinks.links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Rodapé adicional */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Nome. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;