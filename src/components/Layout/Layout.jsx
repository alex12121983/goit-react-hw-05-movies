import React, { Suspense } from "react"
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import css from './Layout.module.css'


const Layout = () => {
    return ( 
		<div className={css.container}> 
      <Header />
      <Suspense>
        <Outlet />
			</Suspense>
    </div>

     );
}

export default Layout;