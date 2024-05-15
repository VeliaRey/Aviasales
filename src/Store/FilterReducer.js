const defaultFilterState = {
  filters: ["all", "without", "one", "two", "three"],
  checkboxes: [
    { id: 1, name: "Все", value: "all" },
    { id: 2, name: "Без пересадок", value: "without" },
    { id: 3, name: "1 пересадка", value: "one" },
    { id: 4, name: "2 пересадки", value: "two" },
    { id: 5, name: "3 пересадки", value: "three" },
  ],
};

const GET_TRANSFER = "GET_TRANSFER";

export const setFilter = (value) => ({ type: "GET_TRANSFER", payload: value });

export const filterReducer = (state = defaultFilterState, action = 0) => {
  switch (action.type) {
    case GET_TRANSFER:
      return {
        ...state,
        filters: action.payload,
      };

    default:
      return state;
  }
};
