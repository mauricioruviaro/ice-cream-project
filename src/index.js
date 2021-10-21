import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Cart from './screens/cart';
import Sobre from './screens/sobre';
import Contato from './screens/contato';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/cart" render={ (props) => <Cart { ...props } /> } />
        <Route exact path="/sobre" render={ (props) => <Sobre { ...props } /> } />
        <Route exact path="/contato" render={ (props) => <Contato { ...props } /> } />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
