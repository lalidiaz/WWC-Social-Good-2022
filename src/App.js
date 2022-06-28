import { Routes, Route } from "react-router-dom";
import { SignIn, Home, DailyTarget, TripDetails, SignUp, History, Emissions, Points } from "./components";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-in' element={<SignUp />} />
      <Route path='/history' element={<History />} />
      <Route path='/history/emissions' element={<Emissions />} />
      <Route path='/history/points' element={<Points />} />

      <Route path='/daily-target' element={<DailyTarget />} />
      <Route path='/trip-details' element={<TripDetails />} />
    </Routes>
  );
}

export default App;
