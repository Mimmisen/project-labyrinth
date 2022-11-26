import { createSlice } from "@reduxjs/toolkit";
import ui from "../reducer/ui";

const game = createSlice({
  name: "game",
  initialState: {
    items: null,
    username: "",
  },
  reducers: {
    setName: (store, action) => {
      store.username = action.payload;
    },

    setItem: (store, action) => {
      store.items = action.payload;
      console.log(store.items);
    },

    restartGame: (store) => {
      store.items = null;
      store.username = "";
    },
  },
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://labyrinth.technigo.io//start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setItem(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

export const navigateGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://labyrinth.technigo.io//action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setItem(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

export default game;
