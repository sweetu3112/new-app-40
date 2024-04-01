import React, { useState, useEffect } from 'react';
import I18n from '../utils/i18n';

function Home() {
  const [lang, setLang] = useState('');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    localStorage.setItem('lang', selectedLang);
    window.location.reload();
  };

  return (
    <div>
      <h1>{I18n('welcomeMessage')}</h1>
      <p>{I18n('normalMessage')}</p>
      <h3>{I18n('greetingMessage')}</h3>
      <select value={lang} onChange={handleLanguageChange}>
        <option value="">Select</option>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default Home;