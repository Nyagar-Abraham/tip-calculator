import Display from './Display';
import Select from './Select';

function Card() {
	return (
		<div className="bg-white sm:items-center  rounded-md grid sm:grid-cols-2 gap-10 px-3 pb-10">
			<Select />
			<Display />
		</div>
	);
}

export default Card;
