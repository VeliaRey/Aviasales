import React, { useEffect } from "react";

import classes from "./App.module.scss";

import FilterList from "../FilterList/FilterList";
import Tabs from "../Tabs/Tabs";
import TicketList from "../TicketList/TicketList";

import Logo from "./Logo.svg";
import { useDispatch } from "react-redux";
import { request } from "../../Store/TicketReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request());
  }, [dispatch]);

  return (
    <>
      <img className={classes["aviasales-logo"]} src={Logo} alt="logo" />
      <div className={classes.aviasales}>
        <FilterList />
        <div className={classes["ticket-container"]}>
          <Tabs />
          <TicketList />
        </div>
      </div>
    </>
  );
};

export default App;
