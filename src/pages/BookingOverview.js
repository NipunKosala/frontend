import React from "react"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/Footer/Footer"
import Overview from "../components/Overview/BookingOverview"

const BookingOverview = () => {
    return (
        <div>
            <Navbar />
            <Overview />
            <Footer/>
        </div>
    )
}

export default BookingOverview