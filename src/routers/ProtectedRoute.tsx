import React from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ScrollToTop from "components/common/ScrollTotop";

const ProtectedRoute = ({ isAllowed }: { isAllowed: boolean }) => {
  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProtectedRoute;
