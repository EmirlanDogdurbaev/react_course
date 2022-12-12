import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Navigation/Header/Header";
import Notes from "./components/Notes/Notes";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="notes" element={<Notes />}></Route>

          <Route path="notes" element={<Favorites />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
