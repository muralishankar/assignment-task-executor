import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { Pending, Resolved } from './constant';

test('renders - header and action elements', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const headerElement = screen.getByText(/Job Tracker Application/i);
  expect(headerElement).toBeInTheDocument();
  const addJobBtn = screen.getByText(/Create Job/i);
  expect(addJobBtn).toBeInTheDocument();
});

test('renders - create job action', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const addJobBtn = screen.getByText(/Create Job/i);
  fireEvent.click(
    addJobBtn,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(store.getState().taskList.length).toBe(1);
});

test('renders - job action worlflow', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const addJobBtn = screen.getByText(/Create Job/i);
  for (let index = 1; index <= 4; index++) {
    fireEvent.click(
      addJobBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  }
  setTimeout(function(){
    expect(store.getState().taskList.filter(item => (item.status === Pending)).length).toBe(4);
  let max_interval = 0;
  store.getState().taskList.forEach(item => {
    let { required_time = 0 } = item;
    max_interval = max_interval > required_time ? max_interval : required_time;
  });
  setTimeout(function(){
    expect(store.getState().taskList.filter(item => (item.status === Resolved))).toBe(4);
  },max_interval);
  },0);
});