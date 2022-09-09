
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import LoginPage from './LoginPage'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render login page title', async () => {
  render(<LoginPage />, {wrapper: BrowserRouter})
  expect(screen.getByText(/Login Page/i)).toBeInTheDocument()
});

test('render login page username', async () => {
    render(<LoginPage />, {wrapper: BrowserRouter})
    expect(screen.getByTitle(/username/i)).toBeInTheDocument()
  });

  test('render login page password', async () => {
    render(<LoginPage />, {wrapper: BrowserRouter})
    expect(screen.getByTitle(/password/i)).toBeInTheDocument()
  });

test('render login page button', async () => {
    render(<LoginPage />, {wrapper: BrowserRouter})
    expect(screen.getByTitle(/LoginPageBtn/i)).toBeInTheDocument()
  });



