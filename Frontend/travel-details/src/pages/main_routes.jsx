import React from "react";
import { Route, Routes } from "react-router-dom";
import { CustomerDetails } from "./customer_details";
import { TravelDetails } from "./travel_details";
export const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CustomerDetails />} />
        <Route path="/details" element={<TravelDetails />} />
      </Routes>
    </div>
  );
};