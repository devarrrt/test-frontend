import React, { useState } from 'react'
import './News.scss'


const items = [
	{
		id: 1,
		img: '/assets/images/item1.png',
		date: '2 декабря 2019',
		src: 'Вконтакте',
		text: 'Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о связи человеческого и нечеловеческого, представленный на Кураторском форуме в Молодёжный...'
	},
	{
		id: 2,
		img: '/assets/images/item2.png',
		date: '2 декабря 2019',
		src: 'Вконтакте',
		text: 'Среди теоретических дисциплин особое место отводится «Теории вероятностей», «Дискретной математике», «Теории автоматического управления» и др.'
	},
	{
		id: 3,
		img: '/assets/images/item3.png',
		date: '2 декабря 2019',
		src: 'Вконтакте',
		text: 'В специализации «Мехатроника» упор сделан на изучение дисциплин, посвященных проектированию и конструированию различных мехатронных и робототехнических...'
	},
	{
		id: 1,
		img: '/assets/images/item1.png',
		date: '2 декабря 2019',
		src: 'Вконтакте',
		text: 'Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о связи человеческого и нечеловеческого, представленный на Кураторском форуме в Молодёжный...'
	},
	{
		id: 2,
		img: '/assets/images/item2.png',
		date: '2 декабря 2019',
		src: 'Вконтакте',
		text: 'Среди теоретических дисциплин особое место отводится «Теории вероятностей», «Дискретной математике», «Теории автоматического управления» и др.'
	},
	{
		id: 3,
		img: '/assets/images/item3.png',
		date: '2 декабря 2019',
		src: 'Вконтакте',
		text: 'В специализации «Мехатроника» упор сделан на изучение дисциплин, посвященных проектированию и конструированию различных мехатронных и робототехнических...'
	},

]

interface Props {

}

const News = (props: Props) => {
	const [news, setnews] = useState(items)


	return (
		<div className="news">
			<div className="container">
				<h4 className="news__title" > Новости и события  </h4>
				<div className="news__items">

					{news.map(item => (
						<div className="news__items-block">

							<div className="news__items-block-img">
								<img src={item.img} alt="block" />
							</div>
							<div className="news__items-content">
								<div className="news__items-header">
									<span>
										{item.date}
									</span>
									<span>
										{item.src}
									</span>
								</div>
								<div className="news__items-text">
									{item.text}
								</div>
							</div>
						</div>
					))}

				</div>
			</div>
		</div>
	)
}

export default News
