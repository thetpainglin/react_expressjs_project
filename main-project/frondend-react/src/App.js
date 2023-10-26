import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import {userSelector} from "./football_project/backendCall/userSlice";
import IndexKaeDaungFootballClub from "./football_project/home_layout/IndexKaeDaungFootballClub";

import EcomerceProjectIndex from "./ecomerce/EcomerceProjectIndex";
import TestCode from "./ecomerce/TestCode";
import "./index.css";
import "./App.css";
import allCodeTest from "./TestCode/AllCodeTest";
import ReducerDemo from "./TestCode/ReducerDemo";

function App() {

let user = useSelector(userSelector);
  return (
    < div className="bg-white">
        {/*
            football project code

             <IndexKaeDaungFootballClub/>

             *****************************************************
        */}


        {/*
        Starting Next Ecommerce Project

        test for backend code
        <TestCode/>
        <EcomerceProjectIndex/>
        <Success/>

        */}
        <IndexKaeDaungFootballClub/>

    </div>
  );
}
export default App;
