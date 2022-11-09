import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppContent, AppSidebar, AppFooter, AppHeader } from "../components/index";
import { useNavigate } from "react-router-dom";

const DefaultLayout = () => {
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.user.isLogin);

    useEffect(() => {
        if (!isLogin) navigate("/login");
    }, [isLogin]);

    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>
    );
};

export default DefaultLayout;
