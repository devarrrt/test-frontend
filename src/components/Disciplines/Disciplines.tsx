import React, { useState } from 'react'
import './Disciplines.scss'


interface IDisciplines {
	item: any
}


const Disciplines: React.FC<IDisciplines> = ({ item }) => {
	const [visible, setVisible] = useState<boolean>(false)


	const open = () => {
		setVisible(!visible)
	}

	return (
		<div className="disciplines__item">
			<div className="container">
				<div className="disciplines__block" >
					<div className="disciplines__block-header">
						<h5> 	{item.title}  </h5>
						<button onClick={open} className="disciplines__block-button">
							<img src={visible ? "/assets/images/arrow-top.png" : "/assets/images/arrow-bottom.png"} alt="arrow" />
						</button>
					</div>
					<div className="disciplines__block-content">
						{visible && <p> {item.text} </p>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Disciplines

