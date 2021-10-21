import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import '../style/sobre.css';

export default function Sobre() {
  const [local] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);

  return (
    <div>
      <Header qtyCart={ local.reduce((acc, i) => acc + i.count, 0) } />
      <section className="content">
        <span className="text">
          A sorveteria Doce sabor é uma empresa criada em 1742, focada em desenvolver sorvetes saborosos para toda a familia brasileira!
          Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma,
          pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.
          Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.
          Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré-definido, como necessário,
          fazendo com que este seja o primeiro verdadeiro gerador na Internet. Usa um dicionário de 200 palavras em Latim,
          combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis. Desta forma,
          o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.
        </span>
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
