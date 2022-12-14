import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import BrandName from '../components/BrandName';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Layout.css';
import WomxnCenter from './WomxnCenter';
import {Route, Routes} from "react-router-dom";

const Layout = () => {
  return (
  <>
    <Navbar />
    <Outlet />
    <div className="Footer">
      <Footer />
      <BrandName />
    </div>
  </>);
};

export default Layout;
