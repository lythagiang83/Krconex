import "./App.css";
import { Wrapper } from "./components/templates/wrapper";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home";
import "./styles/index.scss";
import "./styles/global.scss";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
