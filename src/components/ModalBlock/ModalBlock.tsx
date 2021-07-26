import React from 'react'
import './ModalBlock.scss'

interface Props {
	
}


const ModalBlock = (props: Props) => {
	return (
		<div className="modal">
				<button className="modal__close">
						X
				</button>
				<h4 className="modal__title">
					Напишите нам!
				</h4>

				<form className="modal__form"> 
				
				</form>

		</div>
	)
}


export default ModalBlock
