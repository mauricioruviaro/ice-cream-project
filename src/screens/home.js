import { useState } from 'react';
import data from "../data/data";
import Footer from './footer';
import Header from './header';
import '../style/home.css';

export default function Home() {
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);

  function salvarNoLocalStorage(product) {
    let cartProduct = local.find((i) => i.nome.includes(product.nome));

    if (cartProduct) {
      const newProduct = { ...cartProduct, count: cartProduct.count + 1 }
      const newArray = local.filter((i) => i.nome !== cartProduct.nome);
      localStorage.setItem('carrinho', JSON.stringify([...newArray, newProduct]));
      setLocal([...newArray, newProduct]);
    } else {
      localStorage.setItem('carrinho', JSON.stringify([...local, product]));
      setLocal([...local, product]);
    }
  }

  return (
    <div>
      <Header qtyCart={ local.reduce((acc, i) => acc + i.count, 0) } />
      <section className="products">
        {data.map((item) => (
          <div className="product">
            <img src={ item.imagem } alt={ item.nome } />
            <h3>{ item.nome }</h3>
            <h4>{ `R$ ${item.preco.toFixed(2)}` }</h4>
            <button onClick={ () => salvarNoLocalStorage(item) } type="button">
              ADICIONAR AO CARRINHO
            </button>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
