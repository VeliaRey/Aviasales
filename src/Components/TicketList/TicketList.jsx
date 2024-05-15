import React, { useState } from "react";
import classes from "./TicketList.module.scss";
import Ticket from "../Ticket/Ticket";

import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Spin } from "antd";

const TicketList = () => {
  const { tickets, loading } = useSelector((state) => state.tickets);
  const [sliceTicket, setSliceTicket] = useState(5);
  const { sort } = useSelector((state) => state.sort);
  const { filters } = useSelector((state) => state.filters);

  const sortTickets = (tickets) => {
    if (sort === "cheapest") {
      return tickets.toSorted((a, b) => a.price - b.price);
    } else {
      return tickets.toSorted(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration),
      );
    }
  };

  const filterTransfer = (tickets) => {
    return tickets.filter((ticket) => {
      if (
        filters.includes("without") &&
        ticket.segments[0].stops.length === 0 &&
        ticket.segments[1].stops.length === 0
      ) {
        return true;
      }
      if (
        filters.includes("one") &&
        ticket.segments[0].stops.length === 1 &&
        ticket.segments[1].stops.length === 1
      ) {
        return true;
      }
      if (
        filters.includes("two") &&
        ticket.segments[0].stops.length === 2 &&
        ticket.segments[1].stops.length === 2
      ) {
        return true;
      }
      if (
        filters.includes("three") &&
        ticket.segments[0].stops.length === 3 &&
        ticket.segments[1].stops.length === 3
      ) {
        return true;
      }
      return false;
    });
  };

  const initTickets = filterTransfer(sortTickets(tickets));
  return (
    <>
      {loading && (
        <div className={classes.spinner}>
          Загружаем больше подходящих билетов...
          <Spin />
        </div>
      )}
      {initTickets.length ? (
        initTickets.slice(0, sliceTicket).map((tick) => {
          return <Ticket tick={tick} key={nanoid()} />;
        })
      ) : !loading ? (
        <div className={classes["noFiltered"]}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </div>
      ) : null}

      <button
        className={classes["ticket-button"]}
        type="button"
        onClick={() => setSliceTicket(sliceTicket + 5)}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </>
  );
};

export default TicketList;
