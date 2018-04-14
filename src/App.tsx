import * as React from 'react';
import './App.css';

import NovoComponent from './components/novo-component';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NovoComponent name={'Teste novo componente'} />
      </div>
    );
  }
}

export default App;
