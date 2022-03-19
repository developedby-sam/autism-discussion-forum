import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Components Imports
import Header from "./components/header/header.component";
import Forumpage from "./pages/forumpage/forumpage.component";

function App() {
  const pathname = useLocation().pathname;
  return (
    <div className="App">
      <Header pathname={pathname} />
      <Routes>
        <Route path="/questions" element={<Forumpage pathname={pathname} />} />
      </Routes>
    </div>
  );
}

export default App;
