import { Route, Routes } from "react-router-dom";
import AddEvents from "./components/Admin/AddEnvents/AddEvents";
import AdminHome from "./components/Admin/AdminHome/AdminHome";
import VolunteerList from "./components/Admin/VolunteerList/VolunteerList";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/volunteer" element={<VolunteerList />} />
        <Route path="/addevent" element={<AddEvents />} />
      </Routes>
    </div >
  );
}

export default App;
