import Home from "./Home"
import About from "./About"
import User from "./User"
import Profile from "./Profile"
import Dashboard from "./Dashboard"
import { useSearchParams, Routes, Route, Link } from "react-router-dom";


function App() {
  const [searchParams] = useSearchParams();

  const refCode = searchParams.get("code");


  return(
    <div>

      {/* <nav>
        <Link to="/user/7" state={{ name: "Priscilla" }}>User 7</Link>
        <br />
        <Link to="/">Home </Link>
        <br />
        <Link to="profile">Profile </Link> 
        <br />
        <Link to="/dashboard">Dashboard </Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/?code=blackfriday">share invite link</Link>
      </nav> */}

    {/* <h1>{"your invite link is  http://localhost:5173/?="refCode} </h1> */}


      <Routes>
      <Route path="/" element={<Home />} />


        <Route path="/dashboard" element={<Dashboard />} >
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User/>} />
      </Routes>

    </div>
  )
  
}

export default App

