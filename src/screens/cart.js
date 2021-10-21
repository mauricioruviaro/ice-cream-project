import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import '../style/cart.css';

export default function Cart() {
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);

  const removerItemDoLocalStorage = (item) => {
    const newArray = local.filter((i) => i.nome !== item.nome);
    localStorage.setItem('carrinho', JSON.stringify(newArray));
    setLocal(newArray);
  }

  const incrementarItemNoCarrinho = (product, getIndex ) => {
    const newArray = local.map((item, index) => index === getIndex ? { ...item, count: item.count + 1} : item);
    
    localStorage.setItem('carrinho', JSON.stringify([...newArray]));

    setLocal([...newArray]);
  }

  const decrementarItemNoCarrinho = (product, getIndex) => {
    const newArray = local.map((item, index) => index === getIndex && item.count > 1 ? { ...item, count: item.count - 1} : item);
    
    localStorage.setItem('carrinho', JSON.stringify([...newArray]));

    setLocal([...newArray]);
  }

  const fecharPedido = () => {
    localStorage.clear();
  }

  if(local.length === 0) return (
    <>
      <Header qtyCart={ local.reduce((acc, i) => acc + i.count, 0) } />

      <div className="containerImg">
        <img src="https://www.clickscreative.com/images/empty-cart.png" alt="imagem de um carrinho vazio" />
      </div>
      <div className="containerBtn">
      <Link to="/">
        <button className="btnVoltar" type="button">VOLTAR</button>
      </Link>
    </div>
    <Footer />
    </>
  );

  return (
    <section>

    <Header qtyCart={ local.reduce((acc, i) => acc + i.count, 0) } />
    
    <div className="finalizarPedido">
      <h3>Produtos: {local.reduce((acc, item) => acc + item.count, 0)}</h3>
      <h3>Valor total dos produtos: R$ {local.reduce((acc, item) => acc + (item.preco * item.count), 0).toFixed(2)}</h3>
      
      <Link to="/">
        <button onClick={ fecharPedido } type="button">
          FECHAR PEDIDO
        </button>
      </Link>
    </div>
    <section className="products">
      {local.map((item, index) => (
        <div className="product">
          <img src={ item.imagem } alt={ item.nome } />
          <h3>{ item.nome }</h3>
          <h4>{ `R$ ${item.preco.toFixed(2)}` }</h4>
          <h4>{ `Quantidade: ${item.count}` }</h4>
          <div className="buttons">
            <button onClick={ () => decrementarItemNoCarrinho(item, index) }>⠀-⠀</button>
            <button onClick={ () => incrementarItemNoCarrinho(item, index) }>⠀+⠀</button>
          </div>
          <button onClick={ () => removerItemDoLocalStorage(item) }>REMOVER</button>
        </div>
      ))}
    </section>
    <div className="containerBtn">
      <Link to="/">
        <button className="btnVoltar" type="button">VOLTAR</button>
      </Link>
    </div>
    <Footer />
    </section>
  );
}
