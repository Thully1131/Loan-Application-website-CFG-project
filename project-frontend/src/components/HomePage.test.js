
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import HomePage from './HomePage'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('render user home page title', async () => {
  render(<HomePage />, {wrapper: BrowserRouter})
  expect(screen.getByTitle(/home-title/i)).toBeInTheDocument()
});

test('render user home page link', async () => {
    render(<HomePage />, {wrapper: BrowserRouter})
    expect(screen.getByText(/User Profile/i)).toBeInTheDocument()
  });


  test('render home page button', async () => {
    render(<HomePage />, {wrapper: BrowserRouter})
    expect(screen.getByTitle(/signoff-btn/i)).toBeInTheDocument()
  });

test('render home page image', async () => {
    render(<HomePage />, {wrapper: BrowserRouter})
    expect(screen.getByTitle(/home-img/i)).toBeInTheDocument()
  });



