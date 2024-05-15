import React from "react";

import classes from "./Tabs.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Tabs = () => {
  const dispatch = useDispatch();
  const { sort, tabs } = useSelector((state) => state.sort);

  const actionCreator = (action) => {
    switch (action) {
      case "cheapest":
        dispatch({ type: "GET_CHEAPEST" });
        break;
      case "fastest":
        dispatch({ type: "GET_FASTEST" });
        break;
      default:
        console.error("error");
    }
  };

  return (
    <div className={classes["ticket-tabs"]}>
      {tabs.map((tab) => (
        <>
          <button
            className={`${classes["ticket-tab"]} ${sort === tab.value ? classes.activeTab : null}`}
            type="button"
            key={tab.id}
            onClick={() => actionCreator(tab.value)}
          >
            {" "}
            {tab.name}
          </button>
        </>
      ))}
    </div>
  );
};
export default Tabs;
