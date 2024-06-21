import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useTip } from '../context/TipContext';

function isNumeric(text) {
	const regex = /^\d+$/;
	return regex.test(text);
}

function Select() {
	const [tip, setTip] = useState(0);
	const [error, setError] = useState(null);
	const { dispatch } = useTip();

	function handleClick(e, value) {
		e.preventDefault();
		setTip(value);
		setError(null);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		const formData = new FormData(e.target);

		const { bill, people, custom } = Object.fromEntries(formData);
		const errors = {};

		if (!isNumeric(+bill)) errors.bill = 'invalid value';
		if (!isNumeric(+people)) errors.people = 'invalid value';
		if (!isNumeric(+custom) && !tip) errors.custom = 'NAN';
		console.log(Object.keys(errors));
		if (Object.keys(errors).length) {
			setError(errors);
			e.target.reset();
			return;
		}

		const data = {
			bill,
			people,
			tip,
			custom: custom || 0,
		};

		dispatch({ type: 'calculate/tip', payload: data });

		setTip(0);
		e.target.reset();
	}

	return (
		<form onSubmit={handleSubmit} className=" py-4">
			<Input name="bill" error={error?.bill} label="Bill" iconOne="dollar" />
			<p className="text-sm font-semibold mt-4 mb-1">Select tip</p>
			<div className="grid items-center justify-center grid-cols-2 gap-x-6 md:gap-x-4 md:gap-y-2 md:grid-cols-3 gap-y-3 mb-4">
				<Button onClick={(e) => handleClick(e, 5)}>5%</Button>
				<Button onClick={(e) => handleClick(e, 10)}>10%</Button>
				<Button onClick={(e) => handleClick(e, 15)}>15%</Button>
				<Button onClick={(e) => handleClick(e, 25)}>25%</Button>
				<Button onClick={(e) => handleClick(e, 50)}>50%</Button>
				<Input
					error={error?.custom}
					disable={tip > 0}
					name="custom"
					placeholder="custom"
				/>
			</div>
			<Input
				error={error?.people}
				name="people"
				label="Number of people"
				iconOne={'person'}
			/>
			<div className="flex mt-3 justify-end">
				<Button>submit</Button>
			</div>
		</form>
	);
}

export default Select;
