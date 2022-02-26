import React from "react";
import style from "./About.module.css";
import Plans from "./Plans";
const data = [
  {
    id : '1',
    title: "Individual",
    span: "2 Months free : $10",
    features: [
      "Listen to music ad-free",
      "play anywhere - even offline",
      "On-demand playback",
    ],
  },
  {
    id : '2',
    title: "Duo",
    span: "1 Month free : $15",
    features: [
      "2 Premium accounts for a couple under one roof",
      "Duo Mix: a playlist for two, regularly updated with music you both enjoy",
      "Ad-free music listening, play offline, on-demand playback",
    ],
  },
  {
    id : '3',
    title: "Family",
    span: "1 Month free : $30",
    features: [
      "6 Premium accounts for family members living under one roof",
      "Family Mix: a playlist for your family, regularly updated with music you all enjoy",
      "Block explicit music",
    ],
  }
];
export default function About() {
  
  return (
    <div className={"p-5 "+ style.about} >
      <h3 className="text-center">
        <div className={"position-relative " + style["about-me"]}>
          <h1 className="text-muted text-uppercase">Our Plans</h1>
          <div className={"position-absolute h2 " + style["about-p"]}>
            Know Your Needs
          </div>
        </div>
      </h3>
      <section className="container">
        <div className="row">
          {data.map((e) => (
            <Plans key={e.id} data={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
