//from what I see It looks like I am supposed to build the app here
//and then export this to index to start the app

//import styles and components
import Login from './components/frames/login.js';
import Btn from './components/reuseable/button.js';
import NavBar from './components/frames/navBar.js'
//Building the application out of components
export default function App(props) {
   const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn) {
       return (  <div className="App">
      </div>);
   }
    return (
      <div className="App">
       <NavBar>test</NavBar>
      </div>
    );
  }