import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './components/styles.css'
import 'materialize-css/dist/css/materialize.min.css'

const App: React.FC = () => {

  return (
    <>
    <Header title="EE PROFESSORA ANTONIA CARLOTA GOMES"/>
    <Main />
    <Footer />
    </>
  );
}

export default App;
