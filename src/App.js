import { Routes, Route } from "react-router-dom";
import { SignIn, Home, DailyTarget, TripDetails, SignUp } from "./components";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-in' element={<SignUp />} />
      <Route path='/daily-target' element={<DailyTarget />} />
      <Route path='/trip-details' element={<TripDetails />} />
    </Routes>
  );
}

export default App;
