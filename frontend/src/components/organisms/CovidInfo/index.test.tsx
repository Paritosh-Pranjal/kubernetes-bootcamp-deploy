import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CovidInfo from '.';
import { Svg } from '../../../utils/constants';

test('should render covid test info', () => {
  const features = [
    {
      icon: Svg.home,
      feature: 'Home visit',
    },
    {
      icon: Svg.test,
      feature: '1 test included',
    },
    {
      icon: Svg.doctor,
      feature: 'Free consultation',
    },
    {
      icon: Svg.reports,
      feature: 'Online reports',
    },
  ];
  const packageBenifits = [
    'To check if you have an active COVID-19 infection',
    'If you are showing symptoms of COVID-19 infection',
    'If you had a contact with someone with confirmed COVID-19',
  ];
  const cost = 1200;
  const reportTime = 24;
  const packagePoints = [
    'This package covers nasal/oral swab test & same day pickup. It indicates if you currently have the COVID-19 infection.',
    'Disclaimer 1:For travelling purposes, please ensure the name is as per govt ID proof.',
    'Disclaimer 2: Vaccination status will be required and Covid Positive Reports will be made available as per local ',
    'Municipal corporation guidelines.',
  ];

  render(
    <CovidInfo
      features={features}
      packageBenifits={packageBenifits}
      cost={cost}
      reportTime={reportTime}
      packagePoints={packagePoints}
    />,
  );

  expect(screen.getByTestId('covidinfo')).toBeInTheDocument();
  expect(screen.getByText('Starting from $1200')).toBeInTheDocument();
  expect(screen.getByText('Reports ready in 24 Hours')).toBeInTheDocument();
});
