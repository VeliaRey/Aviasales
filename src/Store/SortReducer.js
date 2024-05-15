const defaultSortState = {
  sort: "cheapest",
  tabs: [
    { id: 1, value: "cheapest", name: "Самый дешевый" },
    { id: 2, value: "fastest", name: "Самый быстрый" },
  ],
};

const GET_CHEAPEST = "GET_CHEAPEST";
const GET_FASTEST = "GET_FASTEST";

const sortReducer = (state = defaultSortState, action = 0) => {
  switch (action.type) {
    case GET_CHEAPEST:
      return { ...state, sort: "cheapest" };

    case GET_FASTEST:
      return { ...state, sort: "fastest" };

    default:
      return state;
  }
};

export default sortReducer;
