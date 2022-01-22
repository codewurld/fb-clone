import Header from "../components/header/Header";
import Feed from "../components/feed/Feed";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import RightWidget from "../components/rightwidget/RightWidget";
import { Router, Route } from 'react-router'
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homePage">
            <div className="appHead">
                <Header />
            </div>

            <div className="appBody">
                <LeftSideBar />
                <Feed />
                <RightWidget />
            </div>

        </div>
    );
}



export default Homepage;