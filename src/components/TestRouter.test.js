import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import TestRouter from './TestRouter'

const renderWithRouter = component => {
  const history = createMemoryHistory()
  return {
    ...render(<Router history={history}>{component}</Router>),
  }
}

describe('TestRouter', () => {
  it('should render the home page', () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />)
    const navbar = getByTestId('navbar')
    const link = getByTestId('home-link')

    expect(container.innerHTML).toMatch('Home page')
    expect(navbar).toContainElement(link)
  })
  it('should render the about page', () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />)
    const navbar = getByTestId('navbar')
    const link = getByTestId('about-link')
    fireEvent.click(getByTestId('about-link'))

    expect(container.innerHTML).toMatch('About page')
    expect(navbar).toContainElement(link)
  })

  it('should render the contact page', () => {
    const { container, getByTestId } = renderWithRouter(<TestRouter />)
    const navbar = getByTestId('navbar')
    const link = getByTestId('contact-link')
    fireEvent.click(getByTestId('contact-link'))

    expect(container.innerHTML).toMatch('John Doe')
    expect(navbar).toContainElement(link)
  })
})
