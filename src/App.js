import { Route, Routes } from "react-router-dom";
import {
  Home,
  DailyTarget,
  TripDetails,
  History,
  Emissions,
  Points,
} from "./components";
import React from "react";
import Details from "./components/Details";
import RegisterForm from "./components/RegisterForm";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<RegisterForm />} />
      <Route path="/trip-details" element={<Details />} />
      <Route path="/history" element={<History />} />
      <Route path="/history/emissions" element={<Emissions />} />
      <Route path="/history/points" element={<Points />} />
      <Route path="/daily-target" element={<DailyTarget />} />
      <Route path="/trip-details" element={<TripDetails />} />
    </Routes>
  );
};

export default App;
