import { useState } from 'react';
import './App.css';
import ContactsCard from './components/ContactsCard';
import ContentCard from './components/ContentCard';
import OptionsCard from './components/OptionsCard';

function App() {
  const [selectedOption, setSelectedOption] = useState('about');
  return (
    <div className='app'>
      <div className='contact-card'>
        <ContactsCard />
      </div>
      <div className='content-card'>
        <ContentCard selectedOption={selectedOption} />
      </div>
      <div className='options-card'>
        <OptionsCard selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
    </div>
  );
}

export default App;
