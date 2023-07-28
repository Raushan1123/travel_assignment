import React from "react";
import { Route, Routes } from "react-router-dom";
import { CustomerDetails } from "./customer_details";
import { TravelDetails } from "./travel_details";
import { AdminLogin } from "./admin_login";

export const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CustomerDetails />} />
        <Route path="/details" element={<TravelDetails />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};