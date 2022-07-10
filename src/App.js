import { NavLink, Route, Routes } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./Home";
import Challenge1 from "./Challenge1";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";
import Challenge4 from "./Challenge4";
import Challenge5 from "./Challenge5";
import Challenge6 from "./Challenge6";
import Challenge7 from "./Challenge7";
import Challenge8 from "./Challenge8";
import Challenge9 from "./Challenge9";

export default function App() {
  return (
    <>
      <Navbar style={{background: "#3e244f" }} variant="dark">
        <div className="container">
          <Navbar.Brand as={NavLink} to="/">Challenges</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/challenge/1">#1</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/2">#2</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/3">#3</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/4">#4</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/5">#5</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/6">#6</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/7">#7</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/8">#8</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/9">#9</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="container mt-3">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge/1" element={<Challenge1 />} />
            <Route path="/challenge/2" element={<Challenge2 />} />
            <Route path="/challenge/3" element={<Challenge3 />} />
            <Route path="/challenge/4" element={<Challenge4 />} />
            <Route path="/challenge/5" element={<Challenge5 />} />
            <Route path="/challenge/6" element={<Challenge6 />} />
            <Route path="/challenge/7" element={<Challenge7 />} />
            <Route path="/challenge/8" element={<Challenge8 />} />
            <Route path="/challenge/9" element={<Challenge9 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
