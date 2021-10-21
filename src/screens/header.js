import { Link, useLocation } from 'react-router-dom';
import '../style/header.css';

export default function Header({ qtyCart }) {

  const location = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <img src="https://www.tangarafoods.com.br/box/uploads/2020/07/iconeSorveteB.png" alt="imagem sorveteria" />
      </Link>
      <nav>
        <Link to="/sobre" qtyCart={ qtyCart }>SOBRE</Link>
        <Link to="/contato" qtyCart={ qtyCart }>CONTATO</Link>
        { location.pathname !== '/cart' ?
        ( <Link to="/cart" className="notification" qtyCart={ qtyCart }>
            <img src="https://www.pngrepo.com/png/132876/512/shopping-cart.png" alt="icone de carrinho de supermercado" />
            <span className="qty">{ qtyCart }</span>
          </Link>
        ) : <div></div> }
      </nav>
    </header>
  );
}
