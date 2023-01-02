import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import game from 'reducer/game';
import ui from 'reducer/ui';
import StartPage from 'components/StartPage';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  );
};
