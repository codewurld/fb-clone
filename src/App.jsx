
import './App.css';
import Header from './components/header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className="app">
      {/* header component */}
      <Header />

      <div className="app_body">
        <LeftSideBar />
        <Feed />
        {/* {Center feed} */}
        {/* Widgets --> right sidebar */}
      </div>


    </div>
  );
}

export default App;
