import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '@material-ui/core'

import './ModalBlock.scss'



interface IModalBlock {
	title: string
	closeModal: () => void
}
interface FormProps {
	name: string;
	email: string;
	message: string
}


const LoginFormSchema = yup.object().shape({

	name: yup.string().required("Поле не должно быть пустым"),

	email: yup.string().email('Неверная почта').required("Поле не должно быть пустым"),

	message: yup.string().max(30, 'Максимальное кол-во символов 300')
});



const ModalBlock: React.FC<IModalBlock> = ({ closeModal, title }) => {

	const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
		resolver: yupResolver(LoginFormSchema),
	})


	const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		closeModal()
		alert('Спасибо за обратную связь!')

	}

	return (
		<div className="modal" onClick={closeModal} >
			<div className="modal__content" onClick={e => e.stopPropagation()} >
				<button className="modal__close"
					onClick={closeModal}
				>
					<img src='/assets/images/close.png' alt="close"
						onClick={closeModal}
					/>
				</button>
				<h4 className="modal__title">
					{title}
				</h4>

				<form className="modal__form" onSubmit={handleSubmit(onSubmit)}>

					<TextField
						id="name"
						label="Ваши фамилия и имя*"
						type="text"
						defaultValue=""
						helperText={errors.name?.message}
						error={!!errors.email}
						fullWidth
						autoFocus
						placeholder="primer@itmo.ru"
						
						{...register("name")} 
						/>

					<TextField
						id="email"
						label="Электронная почта*"
						type="email"
						defaultValue=""
						helperText={errors.email?.message}
						error={!!errors.email}
						fullWidth
						placeholder="primer@itmo.ru"
						{...register("email")} />

					<TextField
						id="message"
						label="Что непонятно или нужно уточнить"
						type="text"
						defaultValue=""
						helperText={errors.message?.message}
						error={!!errors.message}
						fullWidth
						placeholder="Введите ваше сообщение"
						{...register("email")} />


					<p> Отправляя данную форму, вы даете согласие на обработку своих <a href="#" > Персональных данных </a>  </p>

					
					<button className="btn form"
						type="submit">  
						Отправить		
					</button>
				</form>




			</div>

		</div>
	)
}


export default ModalBlock
