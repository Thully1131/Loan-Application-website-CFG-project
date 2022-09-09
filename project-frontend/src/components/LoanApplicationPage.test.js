import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import LoanApplicationPage from './LoanApplicationPage'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render Loan Application page submit button', async () => {
  render(<LoanApplicationPage />, {wrapper: BrowserRouter})
  expect(screen.getByTitle(/submit-btn/i)).toBeInTheDocument()
});