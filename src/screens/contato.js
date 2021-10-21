import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../style/contato.css';

export default function Contato() {
  const [local] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);

  return (
    <div>
      <Header qtyCart={ local.reduce((acc, i) => acc + i.count, 0) } />
    
    <section className="contact-container">
      <a href="https://www.facebook.com/" target="_blank">
        <img src="https://clipart.info/images/ccovers/1509135109gray-facebook-logo-png.png" alt="icone do facebook" />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank">
        <img src="https://icons-for-free.com/iconfiles/png/512/contact+logo+media+message+social+whatsapp+icon-1320192797871409801.png" alt="icone do whatsapp" />
      </a>
      
      <a href="https://www.instagram.com/" target="_blank">
        <img src="https://icon-library.com/images/instaram-icon/instaram-icon-19.jpg" alt="icone do instagram" />
      </a>
    </section>
    <div className="containerBtn">
      <Link to="/">
        <button className="btnVoltar" type="button">VOLTAR</button>
      </Link>
    </div>
    <Footer />
    </div>
  );
}
