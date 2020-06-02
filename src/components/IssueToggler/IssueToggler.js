import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';

const IssueToggler = (props) => {
  console.log('props', props);
  const { updateTabView, tabValue } = props;

  const ISSUES = [
    {
      label: 'Repeal 50a and the Police STAT Act',
      value: 'repeal-bills',
    },
    {
      label: 'Defund the NYPD',
      value: 'defund-nypd',
    },
    {
      label: 'Other Issue',
      value: 'other-issue',
    },
  ];

  const handleOnChange = (e, newVal) => {
    updateTabView(newVal);
  };

  return (
    <div>
      <h4> Choose an issue:</h4>
      <Tabs
        value={tabValue}
        onChange={handleOnChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
        classes="mt-64 mb-64"
      >
        {ISSUES.map((issue) => (
          <Tab
            key={`tab-${issue.value}`}
            label={issue.label}
            value={issue.value}
          />
        ))}
      </Tabs>
      {ISSUES.map((issue) => (
        <TabPanel key={`panel-${issue.value}`} value={issue.value}>
          <h4>{issue.label}</h4>
          <p>Lorem Ipsum...........</p>
        </TabPanel>
      ))}
    </div>
  );
};

export default IssueToggler;
