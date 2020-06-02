import React from 'react';

const DefundInfoContent = () => {
  return (
    <p>
      The budget for the 2021 Fiscal Year goes into effect for New York City on{' '}
      <strong>July 1, 2020</strong>. Due to COVID-19, New York has experienced an unprecedented
      financial loss, resulting in{' '}
      <a
        href="https://www1.nyc.gov/office-of-the-mayor/news/259-20/facing-unprecedented-crisis-mayor-de-blasio-budget-plan-protects-new-yorkers-by"
        target="_blank"
      >
        heavy budget cuts
      </a>
      . However,
      <a
        href="https://gothamist.com/news/nypd-defends-its-massive-budget-social-services-and-youth-programs-are-cut"
        target="_blank"
      >
        the $6 billion dollar budget for the NYPD
      </a>{' '}
      remains largely untouched, while areas like education, childcare, and
      social services with similar sized starting budgets are facing over $500
      million in cuts.
    </p>
  );
};

const DefundKeyDates = () => {
  return (
    <>
    <p>NYC's budget cycle can be found <a href="https://www1.nyc.gov/site/omb/about/new-york-city-budget-cycle.page" target="_blank">here</a>.</p>
    <h4>URGENT ACTION NEEDED</h4>
    </>
  )
}

export const DEFUND_NYPD_CONTENT = {
  label: 'Defund the NYPD',
  value: 'defund-nypd',

  subTabs: [
    {
      label: 'Info',
      value: 'info',
      content: <DefundInfoContent />,
    },
    {
      label: 'Key Dates',
      value: 'key-dates',
      content: 'KEY DATES',
    },
    {
      label: 'Resources',
      value: 'resources',
      content: 'resources',
    },
  ],
};
