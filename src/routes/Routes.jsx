import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage.jsx'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage.jsx'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage.jsx'
import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

export const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "ApplicationFormPage" element = {<ApplicationFormPage/>} />
            <Route path= "CreateTripPage" element = {<CreateTripPage/>} />
            <Route path= "AdminHomePage" element = {<AdminHomePage/>} />
            <Route path= "ListTripsPage" element = {<ListTripsPage/>} />
            <Route path= "LoginPage" element = {<LoginPage/>} />
            <Route path= "TripDetailsPage" element = {<TripDetailsPage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
        </Routes>
      </BrowserRouter>

    )
}