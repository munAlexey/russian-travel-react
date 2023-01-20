import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import { useState } from 'react';

function App() {
  const [langSwitch, setLangSwitch] = useState(true);
  const handleChangeLang = function() {
    setLangSwitch(true);
  }
  const changeLangEn = function() {
    setLangSwitch(false);
  }

  return (
    <div classNameName="App">
      <div className="page">
        <Header isSwitch={langSwitch} onChangeRu={handleChangeLang} onChangeEn={changeLangEn}/>
        <Main isSwitch={langSwitch} />
        <Footer />
    </div>
    </div>
  );
}

export default App;
