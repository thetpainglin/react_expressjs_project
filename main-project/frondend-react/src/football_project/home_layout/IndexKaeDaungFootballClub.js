import { Outlet, Route, Routes, } from "react-router-dom";
import '../css_file/PlayerDetail.css';
import LoginPage from "../auth_component/LoginPage";
import History from "../home_form_history_component/History";
import Navbar from "../../component/Navbar";
import AllPlayerListComponent from "../all_player_list/AllPlayerListComponent";
import AdminPage from "../admin_component/AdminPage";
import PrivateRoute from "../../component/PrivateRoute";
import {useAuthentication} from "../backendCall/authService";
import NoRoute from "../home_form_history_component/NoRoute";
import HomePage from "../home_form_history_component/HomePage";
import LoginOutPage from "../auth_component/LoginOutPage";
import ContactManager from "../contant_component/ContactManager";
import ContactManagerDetailLogic from "../contant_component/ContactManagerDetailLogic";
import PlayerListComponent from "./PlayerListComponent";

function IndexKaeDaungFootballClub(){
    return (
        <>
            <Navbar/>
            <Outlet/>


            <Routes>
                <Route path="/" element={<HomePage/>}/>

                <Route path="/kaedaung/players/:playerId/" element={
                    <PrivateRoute
                        redirectTo={"/login?redirectTo=/kaedaung/players/"}
                        isAuth={useAuthentication()}>
                        <AllPlayerListComponent/>
                    </PrivateRoute>
                }>
                </Route>
                <Route path="/admin" element={
                    <PrivateRoute
                        redirectTo={"/login?redirectTo=/admin"}
                        isAuth={useAuthentication()}>
                        <AdminPage/>
                    </PrivateRoute>
                }/>
                <Route path="/history" element={<History/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/logout" element={<LoginOutPage/>}/>
                <Route path="/contact" element={<ContactManager/>}/>
                <Route path="/contact/:contactId" element={<ContactManagerDetailLogic/>}/>

                <Route path="*" element={<NoRoute/>}/>

                <Route path="/kaedaung/players" element={

                    <PlayerListComponent/>

                }>
                </Route>
            </Routes>
        </>
    )
}

export default IndexKaeDaungFootballClub;