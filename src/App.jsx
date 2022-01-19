
import './App.css';
import Header from './components/header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import Feed from './components/feed/Feed';
import RightWidget from './components/rightwidget/RightWidget';
import Login from './components/login/Login';
import { useStateValue } from './ContextProvider';

function App() {

  const user = null;

  return (
    <div className="app">
      {/* if no user, render login page else render profile page*/}

      {!user ? <Login /> : (
        <>
          {/* header component */}
          < Header />

          <div className="app_body">
            <LeftSideBar />
            <Feed />
            <RightWidget />
          </div>
        </>
      )}


    </div >
  );
}




export default App;
