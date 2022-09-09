import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import UserProfile from './UserProfile'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render user profile page', async () => {
  render(<UserProfile />, {wrapper: BrowserRouter})
  expect(screen.getByTitle(/save-btn/i)).toBeInTheDocument()
});