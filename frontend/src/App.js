//from what I see It looks like I am supposed to build the app here
//and then export this to index to start the app


import React from "react";
//import styles and components
import Login from './components/frames/login.js';
import Btn from './components/reuseable/button.js';
import NavBar from './components/frames/navBar.js'
//Building the application out of components
export default function App(props) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  //  const isLoggedIn = props.isLoggedIn;
  //  if (isLoggedIn) {
  //      return (  <div className="App">
  //     </div>);
  //  }
    return (
      <div className="App">
       <NavBar>test</NavBar>
       <p>{!data ? "Loading" : data}</p>
      </div>
    );
  }