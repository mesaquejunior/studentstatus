import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './components/styles.css'

const App: React.FC = () => {

  return (
    <>
    <Header title="EE PROFESSORA ANTONIA CARLOTA GOMES" government="Governo do Estado de São Paulo" directorship="Diretoria de Ensino Região de Pindamonhangaba"/>
    <Main />
    <Footer />
    </>
  );
}

export default App;
