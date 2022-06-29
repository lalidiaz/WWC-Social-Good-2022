import { Routes, Route } from "react-router-dom";
import {
  SignIn,
  Home,
  DailyTarget,
  TripDetails,
  SignUp,
  History,
  Emissions,
  Points,
} from "./components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import LandingPage from "./components/LandingPage";
import RegisterForm from "./components/RegisterForm";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-in" element={<SignUp />} />
      <Route path="/history" element={<History />} />
      <Route path="/history/emissions" element={<Emissions />} />
      <Route path="/history/points" element={<Points />} />

      <Route path="/daily-target" element={<DailyTarget />} />
      <Route path="/trip-details" element={<TripDetails />} />

      {/* mine */}
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/register" exact element={<RegisterForm />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/details" exact element={<Details />} />
    </Routes>
  );
};

export default App;
