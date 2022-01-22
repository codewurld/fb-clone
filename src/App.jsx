
import './App.css';
import Header from './components/header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import Feed from './components/feed/Feed';
import RightWidget from './components/rightwidget/RightWidget';
// import Login from './components/login/Login';
import Login2 from './components/login/Login2';
import Homepage from './pages/Homepage';
import { useStateValue } from './ContextProvider';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';


function App() {

  // gets user from context
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* if no user, render login page else render profile page*/}
      {/* < Header /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login2 />}>
          </Route>
          <Route exact path="/home" element={<Homepage />}>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* user login logic w/ db -> to be implemented later*/}
      {/* {!user ? <Login /> : (
              <div>
                < Header />

                <div className="app_body">
                  <LeftSideBar />
                  <Feed />
                  <RightWidget />
                </div>
              </div>
            )} */}
    </div >

  );
}




export default App;
