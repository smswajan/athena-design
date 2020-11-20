import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SectionHero from './Components/SectionHero/SectionHero';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import RunningProject from './Components/RunningProject/RunningProject';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import ChooseTeam from './Components/ChooseTeam/ChooseTeam';
import OurAchievements from './Components/OurAchievements/OurAchievements';

function App() {
  return (
    <>
      <main>
        <SectionHero />
        <WhatWeDo />
        <RunningProject />
        <OurAchievements />
        <ChooseTeam />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}

export default App;
