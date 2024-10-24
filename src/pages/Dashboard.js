import React from "react";
import AdminDashboard from "../components/Dashboard/Dashboard";
import SideBar from "../components/SideBar/SideBar";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import './AdminPanel.css';

const Dashboard = () => {
    return (
        <>
        <Navbar />
        <div className="admin-panel">
            <SideBar />
            <AdminDashboard />
        </div>
        <Footer />
        </>   
    )
}

export default Dashboard