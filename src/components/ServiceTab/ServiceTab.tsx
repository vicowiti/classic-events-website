import React from "react";
import { FaSuitcase } from "react-icons/fa";
import "./ServiceTab.css";
const ServiceTab = () => {
  return (
    <article>
      <div>
        <h3>Business Lunches</h3>
      </div>
      <div>
        <FaSuitcase />
      </div>
      <div>
        <p>Timely delicious lunches delivered to your prem</p>
      </div>
    </article>
  );
};

export default ServiceTab;
