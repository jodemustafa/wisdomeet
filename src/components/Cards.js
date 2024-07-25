import React from "react";
import CardItem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>
        Welcome to WisdoMeets, a community where you share and recieve notes.
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-2.jpeg"
              text="Please select your campus to get your success journey started!"
              label="University of South Florida -Tampa Campus"
              path="/services"
            />
            <CardItem
              src="/images/img-5.jpg"
              text="Please select your campus to get your success journey started!"
              label="University of South Florida -Saint Pete Campus"
              path="/services"
            />
            <CardItem
              src="/images/img-3.jpg"
              text="Please select your campus to get your success journey started!"
              label="University of South Florida -Sarasota Campus"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
