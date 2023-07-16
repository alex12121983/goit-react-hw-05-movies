import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import css from "./Header.module.css"
import imgLogo from "../../images/header_logo.png"

// Код ДЗ
const Header = () => {
	return (
			<div className={css.header}>
				<div className={css.header__nav}>
					<NavLink
						className={`${css['header__nav-link']}`}
						aria-current='page'
						to='/'
					>
						Home
					</NavLink>
					<NavLink 
						className={`${css['header__nav-link']}`}
						to='/movies'>
						Movies
					</NavLink>
				</div>
				<div className={css['logo-main']}>
					<Link to='/' >
						<img src={imgLogo} className={css.logo} alt="Filmoteka" />
					</Link>
					<h1 className={css['logo-text']}>Filmoteka</h1>
				</div>
			</div>
	)
}

export default Header
	