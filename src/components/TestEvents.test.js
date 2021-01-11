import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import TestEvents from './TestEvents'

afterEach(cleanup)

describe('TestEvents', () => {
  it('increments counter', () => {
    const { getByTestId } = render(<TestEvents />)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1')
  })
  it('increments counter', () => {
    const { getByTestId } = render(<TestEvents />)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('-1')
  })
})
