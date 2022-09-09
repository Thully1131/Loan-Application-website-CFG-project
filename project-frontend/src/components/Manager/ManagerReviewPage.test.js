import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import ManagerReviewPage from './ManagerReviewPage'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render Manager Review page', async () => {
  render(<ManagerReviewPage />, {wrapper: BrowserRouter})
  expect(screen.getByTitle(/tbl-bdy/i)).toBeInTheDocument()
});

test('render Manager Review page Header', async () => {
    render(<ManagerReviewPage />, {wrapper: BrowserRouter})
    expect(screen.getByText(/Applicant's Details/i)).toBeInTheDocument()
  });