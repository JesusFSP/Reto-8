import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import Article from './components/Article'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {

  const routeLinks = [
    { href: '#skills', title: 'Inicio', content: 'Inicio' },
    { href: '#projects', title: 'Especialidades', content: 'Especialidades' },
    { href: '#contact', title: 'Contacto', content: 'Contacto' }
  ];
  const socialNetworks = [
    { href: 'https://youtube.com/@jesussilvapino9139', title: 'youtube', content: '<i class="bi bi-youtube"></i>' },
    { href: 'https://github.com/JesusFSP', title: 'github', content: ' <i class="bi bi-github"></i>' },
    { href: 'https://www.linkedin.com/in/jesus-francisco-silva-pino-8283a6275/', title: 'linkedin', content: '<i class="bi bi-linkedin"></i>' },
    { href: 'https://www.instagram.com/kvothessn/', title: 'instagram', content: '<i class="bi bi-instagram"></i>' }
  ];

  return (
    <>
      <Header
        routeLinks={routeLinks}
        socialNetworks={socialNetworks}
      />
      <main>
        <Hero />
        <Article/>
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </>

  );
}

export default App;