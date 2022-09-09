import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import ForgotPassword from './ForgotPassword'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render forgot password field', async () => {
  render(<ForgotPassword />, {wrapper: BrowserRouter})
  expect(screen.getByTitle(/cnfrm-pswrd/i)).toBeInTheDocument()
});