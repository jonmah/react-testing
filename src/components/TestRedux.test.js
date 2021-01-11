import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { initialState, reducer } from '../store/reducer'
import TestRedux from './TestRedux'

const renderWithRedux = (
  Component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{Component}</Provider>),
    store,
  }
}

afterEach(cleanup)

describe('TestRedux', () => {
  it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    expect(getByTestId('counter')).toHaveTextContent('0')
  })
  it('increments', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1')
  })
  it('increments via redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, {
      initialState: { count: 5 },
    })
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('6')
  })
  it('decrements', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('-1')
  })

  it('decrements via redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, {
      initialState: { count: 100 },
    })
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('99')
  })
})
