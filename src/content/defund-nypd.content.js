import React from 'react';

const DefundInfoContent = () => {
  return (
    <>
      <h4>URGENT ACTION NEEDED </h4>
      <p className="mt-16">
        <a
          href="https://www1.nyc.gov/site/omb/contact/send-a-message-to-budget-director.page"
          target="_blank"
        >
          Email Melanie Hartzog
        </a>
      </p>
      <p className="bold-700 text-caption mt-16 mb-32">NYC Director of Office Management and Budget</p>
      <p className="pt-16 pb-16">
        The budget for the 2021 Fiscal Year goes into effect for New York City
        on <strong>July 1, 2020</strong>.
      </p>{' '}
      <p>
        Due to COVID-19, New York has experienced an unprecedented financial
        loss, resulting in{' '}
        <a
          href="https://www1.nyc.gov/office-of-the-mayor/news/259-20/facing-unprecedented-crisis-mayor-de-blasio-budget-plan-protects-new-yorkers-by"
          target="_blank"
        >
          heavy budget cuts
        </a>
        . However,{' '}
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
    </>
  );
};

const DefundKeyDates = () => {
  return (
    <>
      <h4>June 5</h4>
      <p>
        The Executive Budget is adopted by the City Council, becoming the
        Adopted Budget.
      </p>
      <h4>June 30</h4>
      <p>The Fiscal Year Ends</p>

      <p className="text-caption">
        NYC's budget cycle can be found{' '}
        <a
          href="https://www1.nyc.gov/site/omb/about/new-york-city-budget-cycle.page"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </>
  );
};

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
      content: <DefundKeyDates />,
    },
    {
      label: 'Resources',
      value: 'resources',
      content: 'resources',
    },
  ],
};
