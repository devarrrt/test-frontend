import React, { useState } from 'react'
import './Slider.scss'


interface Props { }


const data = [
	{
		id: 1,
		title: 'Первый слайд',
		text: 'Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.'
	},
	{
		id: 2,
		title: 'Второй слайд',
		text: 'Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.'
	},
	{
		id: 3,
		title: 'Третий слайд',
		text: 'Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.'
	},
]


const Slider = (props: Props) => {
	const [currentImage, setcurrentImage] = useState(0)
	const length = data.length

	const prevSlide = () => {
		setcurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
	}

	const nextSlide = () => {
		setcurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
	}



	return (
		<div className="slider">
			<div className="container">
				<div className="slider__block">

		<div className="slider__content">
			{ data.map(( item, index ) => (
					<div  className={ index === currentImage ? 'active' : 'sllider_none' }>     
							{ index === currentImage && (
								<div>
								<h2 className="slider__title">
									{item.title}
								</h2>
								<p className="slider__text">
									{item.text}
								</p>

								<button className="slider__button btn">
									Подробнее
								</button>
								</div>
							) }
					</div>
			))  }
		</div>


					<button className="slider__button-prev" onClick={prevSlide} >
						<img src='/assets/images/arrow-prev.png' alt="prev" />
					</button>
					<button className="slider__button-next" onClick={nextSlide} >
						<img src='/assets/images/arrow-next.png' alt="prev" />
					</button>


				</div>
			</div>

		</div>
	)
}



export default Slider