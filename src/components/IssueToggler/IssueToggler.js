import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Tabs, Tab } from '@material-ui/core';
import { TabPanel, TabContext } from '@material-ui/lab';

const IssueToggler = (props) => {
  console.log('props', props);
  const { issues, updateTabView, tabValue } = props;
  const [subTabValue, updateSubTabValue] = useState(
    tabValue.subTabs ? tabValue.subTabs[0] : null
  );

  const handleOnChange = (e, newVal) => {
    updateTabView(newVal);
  };

  const handleSubTabChange = (e, newVal) => {
    updateSubTabValue(newVal);
  };

  return (
    <div className="mt-40 mb-40">
      <h4> Choose an issue:</h4>
      <Tabs
        value={tabValue}
        onChange={handleOnChange}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
      >
        {issues.map((issue) => (
          <Tab
            key={`tab-${issue.value}`}
            label={issue.label}
            value={issue.value}
          />
        ))}
      </Tabs>
      {issues.map((issue) => (
        <TabPanel key={`panel-${issue.value}`} value={issue.value}>
          <h4>{issue.label}</h4>
          {issue.subTabs && (
            <>
              <Tabs
                value={subTabValue}
                onChange={handleSubTabChange}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="primary"
                textColor="primary"
              >
                {issue.subTabs.map((subTab) => (
                  <Tab label={subTab.label} value={subTab.value} />
                ))}
              </Tabs>
              <TabContext value={subTabValue}>
                {issue.subTabs.map((subTab) => (
                  <TabPanel value={subTab.value}>{subTab.content}</TabPanel>
                ))}
              </TabContext>
            </>
          )}
        </TabPanel>
      ))}
    </div>
  );
};

export default IssueToggler;
