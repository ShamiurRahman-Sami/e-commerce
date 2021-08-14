
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router >
      <Header/>
      <main>
        <Container>
          <Route path ='/' component = {HomeScreen} exact />
          <Route path ='/product/:id' component = {ProductScreen}  />
          <Footer/>
        </Container>
      </main>
      
    </Router>
  );
}

export default App;
