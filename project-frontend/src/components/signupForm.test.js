import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import SignupForm from './signupForm'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render sign up page button', async () => {
  render(<SignupForm />, {wrapper: BrowserRouter})
  expect(screen.getByTitle(/signup-btn/i)).toBeInTheDocument()
});