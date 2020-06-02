import React, { useState } from 'react';
import './styles/common.scss';
import Container from '@material-ui/core/Container';
import { EmailForm } from './components/EmailForm';
import IssueToggler from './components/IssueToggler/IssueToggler';
import { TabContext } from '@material-ui/lab';

function App() {
  const [tabValue, setTabValue] = useState('repeal-bills');
  const handleIssueView = (newVal) => {
    console.log('toggle', newVal);
    setTabValue(newVal);
  };
  return (
    <div className="App">
      <h1 className="text-center">Legislaction</h1>
      <h3 className="text-center">Take Action: Contact your Representatives</h3>
      <Container maxWidth="sm">
        <TabContext value={tabValue}>
          <IssueToggler tabValue={tabValue} updateTabView={handleIssueView} />
          <EmailForm emailTemplate="Lorem ipsum" />
        </TabContext>
      </Container>
    </div>
  );
}

export default App;
