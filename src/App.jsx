
import './App.css';
import Header from './components/header/Header';
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import Feed from './components/feed/Feed';
import RightWidget from './components/rightwidget/RightWidget';

function App() {
  return (
    <div className="app">
      {/* header component */}
      <Header />

      <div className="app_body">
        <LeftSideBar />
        <Feed />
        <RightWidget />
      </div>


    </div>
  );
}

export default App;
