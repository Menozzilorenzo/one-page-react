import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Footer from './components/Footer';

function App() {
    return (
      <Fragment>
          <Header />
          <One />
          <Two />
          <Three />
          <Four />
          <Footer />
      </Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
