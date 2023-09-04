import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Views/Home";
import Custom from "./components/Views/Custom";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
function App() {
  const apiKey=process.env.REACT_APP_API_KEY;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home apiKey={apiKey}/>} />
          <Route path="/search" element={<Custom apiKey={apiKey}/>} />
          <Route
            path="/science"
            element={<Custom query={"science"} apiKey={apiKey} key={0} />}
          />
          <Route
            path="/business"
            element={<Custom query={"business"} apiKey={apiKey} key={1} />}
          />
          <Route path="/sports" element={<Custom query={"sports"} apiKey={apiKey} />} key={2} />
          <Route
            path="/lifestyle"
            element={<Custom query={"entertainment"} apiKey={apiKey} key={3} />}
          />
          <Route
            path="/tech"
            element={<Custom query={"technology"} apiKey={apiKey} key={4} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
