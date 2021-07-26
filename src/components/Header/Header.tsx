import React from 'react'
import './Header.scss'


interface Props {}


const Header = (props: Props) => {
	return (
		<div className="header">
			<div className="header__logo">
					<img src='/assets/images/logo.png' alt="logo" />
			</div>
			<div className="header__lang">
					<span> En  </span>
					<img 
					className="header__lang-img"
					src="/assets/images/lang.png" alt="lang" />
			</div>
		</div>
	)
}



export default Header
