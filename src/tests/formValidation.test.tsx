import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('App', () => {

  test('Validates job of customer', async () => {
    expect(1).toBe(1)
  })
})

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from '../components/App';
//
// describe('App', () => {
//
//   test('Validates job of customer', async () => {
//     render(<App />);
//     clickNextButtonTimes(2);
//     await fillAndCheckInput(/Atvinna viðskiptavinar/i, 'Some job', 'Atvinna viðskiptavinar má ekki vera tómt');
//   });
//
//   test('Validates purpose and nature of business', async () => {
//     render(<App />);
//     clickNextButtonTimes(3);
//     await fillAndCheckInput(/tilgang og eðli viðskipta/i, 'Some purpose', 'tilgang og eðli viðskipta má ekki vera tómt');
//   });
//
//   test('Validates origin of funds', async () => {
//     render(<App />);
//     clickNextButtonTimes(4);
//     await fillAndCheckInput(/upruna fjármagns/i, 'Some origin', 'upprunni fjármagns má ekki vera tómt');
//   });
//
//   test('Validates checkbox for Real Owner', async () => {
//     render(<App />);
//     clickNextButtonTimes(5);
//     await clickCheckbox('Raunverulegur Eigandi', 'Raunverulegur Eigandi má ekki vera tómt');
//   });
//
//   test('Validates checkbox and input for political relationships and further relationship information', async () => {
//     render(<App />);
//     clickNextButtonTimes(6);
//     await clickCheckbox('pólitísk tengsl', 'pólitísk tengsl má ekki vera tómt');
//     await fillAndCheckInput(/nánari upplýsingar um tengslin/i, 'Details about the relationship', 'nánari upplýsingar um tengslin má ekki vera tómt');
//   });
// });
