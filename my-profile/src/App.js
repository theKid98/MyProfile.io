import { useState } from 'react';
import './App.css';
import ContactsCard from './components/ContactsCard';
import ContentCard from './components/ContentCard';
import OptionsCard from './components/OptionsCard';

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className='app'>
      <div className='contact-card'>
        <ContactsCard />
      </div>
      <div className='content-card'>
        <ContentCard selected={selected} />
      </div>
      <div className='options-card'>
        <OptionsCard setSelected={setSelected} />
      </div>
    </div>
  );
}

export default App;
