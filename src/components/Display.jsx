/* eslint-disable react/prop-types */
import { useTip } from '../context/TipContext';
import Button from './Button';

function Display() {
	const { tipAmount, total, dispatch } = useTip();

	return (
		<div className="bg-cyan-800 rounded-md text-cyan-50  py-6 px-3 sm:py-8 sm -translate-y-2 md:mt-8">
			<Result label="Tip Amount" amount={tipAmount} />
			<Result label="Total" amount={total} />
			<div className="flex items-center justify-center pt-4 sm:pt-10 ">
				<Button onClick={() => dispatch({ type: 'reset' })}>reset</Button>
			</div>
		</div>
	);
}

function Result({ label, amount }) {
	return (
		<div className="flex justify-between items-center pr-4 text-sm font-semibold mb-4 sm:mb-6">
			<div>
				<p>{label}</p>
				<p className="font-light ">/person</p>
			</div>
			<p className="flex items-center gap-1 text-3xl font-bold text-cyan-100">
				<span className="text-sm">$</span>
				{amount}
			</p>
		</div>
	);
}

export default Display;
