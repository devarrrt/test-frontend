import React, { useState } from 'react'
import './Contacts.scss'



interface IContacts {
	openModal: ( )=> void
}


const Contacts: React.FC<IContacts> = ({ openModal }) => {

	return (
		<div className="contacts">
			<div className="container">
				<div className="contacts__block">
					<h5 className="contacts__block-title">
						Контакты 
					</h5>
					<div className="contacts__block-info">
						<p> г. Санкт-Петербург, Кронверкский пр-т,
							д.49, ауд. 155 (вход со стороны ул.
							Сытнинской) </p>
						<p> Тел: <span className="contacts__block-tel"> +7 (931) 538-01-70 </span>
						</p>
						<button className="btn"
					onClick={ openModal }
						>
							Написать нам
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Contacts
