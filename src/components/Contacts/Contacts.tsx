import React, { useState } from 'react'
import ModalBlock from '../ModalBlock/ModalBlock'
import './Contacts.scss'



interface Props {

}


const Contacts = (props: Props) => {
const [openModal, setOpenModal] = useState<boolean>( false )

const openModalBlock = ( ): void=> {
	setOpenModal( true )
}


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
						onClick={ openModalBlock }
						>
							Написать нам
						</button>
					</div>
				</div>
			</div>

				{ openModal && <ModalBlock/> }

		</div>
	)
}


export default Contacts
