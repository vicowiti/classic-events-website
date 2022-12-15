import React from "react";
import "./Services.css";
import {} from "react-icons/fa";
import ServiceTab from "../ServiceTab/ServiceTab";

const Services = () => {
  return (
    <div className="app">
      <h3 className="section-header">Our Services</h3>
      <section>
        <ServiceTab />
        <ServiceTab />
        <ServiceTab />
      </section>
    </div>
  );
};

export default Services;
