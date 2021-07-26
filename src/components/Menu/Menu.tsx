import React from 'react'
import './Menu.scss'


interface Props {}

const menuList = [
	'О лаборатории',
	'Учебная деятельность',
	'Научная деятельность',
	'Новости',
	'Контакты'
]

const Menu = (props: Props) => {
	return (
		<div className="menu">
				<div className="menu__title">
					<img src="/assets/images/logo2.png" alt="logo" />
					<h3> Лаборатория робототехники  </h3>   
				</div>
				<ul className="menu__list">
					{ menuList.map(( item, index ) => (
							<li className="menu__list-item" key={ index } > 
							{ item }
						 </li>
					)) }
				</ul>
		</div>
	)
}



export default Menu
