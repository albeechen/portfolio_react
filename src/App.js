import React from 'react';

import './App.css';
import HeaderPage from './component/header/header.component';
import HomePage from './component/homepage/homepage.component';
import SkillsPage from './component/skills/skills.component';
import ProfolioPage from './component/profolio/profolio.component';
import ContactPage from './component/contact/contact.component';
import Footer from './component/footer/footer.component';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <HomePage />
      <ProfolioPage />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
