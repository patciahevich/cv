import React from "react";
import "./Langs.scss";

const langs = [
  {
    id: "russian",
    level: "native",
  },
  {
    id: "belorussian",
    level: "native",
  },
  {
    id: "english",
    level: "B1",
  },
  {
    id: "polish",
    level: "A1",
  },
];

function Langs() {
  return (
    <section className="langs">
      <h3> Languages </h3>
      {langs.map((item, index) => (
        <p className="lang-item" key={index}>
          <span id={item.id} className="lang-icon" />
          <span className="lang-text">{`${item.id} ( ${item.level} )`}</span>
        </p>
      ))}
    </section>
  );
}

export default Langs;
