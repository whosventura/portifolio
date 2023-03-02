import Header from './Header/Header';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Footer from './Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <h1>Bem-vindo à minha landing page!</h1>
      <PersonalInfo />
      <Footer/>
    </div>
  );
};

export default HomePage;
