const defaultState = {
  tickets: [],
  loading: true,
};

export const getTickets = (payload) => ({ type: "GET_TICKETS", payload });

export const request = () => async (dispatch) => {
  const response = await fetch(
    "https://aviasales-test-api.kata.academy/search",
  );
  const { searchId } = await response.json();

  let stop = false;
  while (!stop) {
    try {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      const ticks = await res.json();
      stop = ticks.stop;
      dispatch(getTickets(ticks.tickets));
    } catch (e) {
      console.log("server error, trying one more time");
    }
  }
  dispatch({ type: "LOADING" });
};

const GET_TICKETS = "GET_TICKETS";
const LOADING = "LOADING";

export const ticketReducer = (state = defaultState, action = 0) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    case LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
