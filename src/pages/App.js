import '../styles/reset.css';
import '../styles/small.css';
import '../styles/main.css';
import '../styles/large.css';
import Nav from '../containers/Nav';
import Main from '../containers/Main';
import Footer from '../containers/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
