import React from 'react'
import './Footer.scss'


interface Props {

}

const itemList = [
	'Страница ректора',
	'Институты и факультеты',
	'Библиотека',
	'Издания Университета',
	'Приемная комиссия',
	'Расписание занятий'
]

const Footer = (props: Props) => {
	return (
		<div className="footer"> 
			<div className="container">
			<div className="footer__wrapper">
			<div className="footer__column-info">
				<img src='/assets/images/logo_white.png' alt="logo" />
				<span>
				Информация © 1993–2020  Университет ИТМО
Разработка © 2020 Управление по развитию и поддержке портала

				</span>
			</div>

			<ul className="footer__column">
				{itemList.map((item, index) => (
					<li className="footer__column-item" key={ index }>
							{ item }
					</li>
				))}
			</ul>
			<ul className="footer__column">
				{itemList.map((item, index) => (
					<li className="footer__column-item" key={ index }>
							{ item }
					</li>
				))}
			</ul>


			<div className="footer__column-info">
		<span>
		г. Санкт-Петербург, Кронверкский пр., 49, 		<br/>
		 ауд. 333		<br/>
Тел: +7 (931) 538-01-70		<br/>
E-mail: job@corp.ifmo.ru 
		</span>

				<div className="footer__social">
					<p> Мы в соцсетях: </p>
					<div className="footer__social-icons">
							<img src="assets/images/vk.png"  alt="vk"/>
							<img src="assets/images/facebook.png"  alt="facebook"/>
							<img src="assets/images/twitter.png"  alt="twitter"/>
							<img src="assets/images/inst.png"  alt="inst"/>
					</div>
				</div>

			</div>
			</div>
			</div>
		</div>
	)
}


export default Footer
