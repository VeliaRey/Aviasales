import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ticketReducer } from "./TicketReducer";
import { filterReducer } from "./FilterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import sortReducer from "./SortReducer";

const rootReducer = combineReducers({
  tickets: ticketReducer,
  filters: filterReducer,
  sort: sortReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools(),
);

export default store;
