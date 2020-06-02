import React from 'react';
import './styles/common.scss';
import Container from '@material-ui/core/Container';
import { EmailForm } from './components/EmailForm';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>legislaction</h1>
        <p>Spam your representatives</p>
        <EmailForm emailTemplate="Lorem ipsum" />
      </Container>
    </div>
  );
}

export default App;
