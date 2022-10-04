import React from "react";
//used switch instead of Routes to pass test
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
    </Switch>
  </div>;
}

export default App;


// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import Actors from "./Actors";
// import Directors from "./Directors";
// import Movies from "./Movies";

// function App() {
//   return <div>
//     {/*{code here}*/}
//     <NavBar/>
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/actors" element={<Actors/>} />
//   <Route path="/directors" element={<Directors/>} />
//   <Route path="/movies" element={<Movies/>} />
//   </Routes>
    
//     </div>;
// }

// export default App;
