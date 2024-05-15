import React from "react";

import classes from "./Ticket.module.scss";

import moment from "moment";

const Ticket = (tick) => {
  const { price, carrier, segments } = tick.tick;

  const transfer = (arr) => {
    if (arr.length === 0) {
      return "БЕЗ ПЕРЕСАДОК";
    } else if (arr.length === 1) {
      return "1 ПЕРЕСАДКА";
    } else {
      return `${arr.length} ПЕРЕСАДКИ`;
    }
  };

  const departureTime = (date) => {
    return moment(date).format("HH:mm");
  };

  const destinationTime = (current, duration) =>
    moment(current).add(duration, "minutes").format("HH:mm");

  const travelTime = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  const transformationPrice = (price) => {
    return price.toLocaleString();
  };

  return (
    <>
      <div className={classes.ticket}>
        <div className={classes["ticket-info"]}>
          <div className={classes["ticket-price"]}>
            <p>{transformationPrice(price)} P</p>
            <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="brand" />
          </div>

          <div className={classes["ticket-first-way"]}>
            <div className={classes["first-way-content"]}>
              <div className={classes["content-title"]}>
                {segments[0].origin}-{segments[0].destination}
              </div>
              <div className={classes["content-info"]}>
                {departureTime(segments[0].date)}-
                {destinationTime(segments[0].date, segments[0].duration)}
              </div>
            </div>
            <div className={classes["first-way-content"]}>
              <div className={classes["content-title"]}>В ПУТИ</div>
              <div className={classes["content-info"]}>
                {travelTime(segments[0].duration)}
              </div>
            </div>
            <div className={classes["first-way-content"]}>
              <div className={classes["content-title"]}>
                {transfer(segments[0].stops)}
              </div>
              <div className={classes["content-info"]}>
                {segments[0].stops.join(", ")}
              </div>
            </div>
          </div>
          <div className={classes["ticket-second-way"]}>
            <div className={classes["second-way-content"]}>
              <div className={classes["content-title"]}>
                {segments[1].origin}-{segments[1].destination}
              </div>
              <div className={classes["content-info"]}>
                {departureTime(segments[1].date)}-
                {destinationTime(segments[1].date, segments[1].duration)}
              </div>
            </div>
            <div className={classes["second-way-content"]}>
              <div className={classes["content-title"]}>В ПУТИ</div>
              <div className={classes["content-info"]}>
                {travelTime(segments[1].duration)}
              </div>
            </div>
            <div className={classes["second-way-content"]}>
              <div className={classes["content-title"]}>
                {transfer(segments[1].stops)}
              </div>
              <div className={classes["content-info"]}>
                {segments[1].stops.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
