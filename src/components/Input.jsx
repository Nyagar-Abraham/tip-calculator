import Icons from './Icons';

// eslint-disable-next-line react/prop-types
function Input({ label, error, placeholder, iconOne, iconTwo, name, disable }) {
	if (placeholder)
		return (
			<input
				disabled={disable}
				type="text"
				name={name}
				placeholder={'custom'}
				className={` px-4 py-1 bg-cyan-50 rounded-md placeholder:text-cyan-600/50 hover:bg-cyan-100 font-inherit focus:ring-2 focus:ring-cyan-500 focus:outline-none font-semibold text-xl text-center`}
			/>
		);

	return (
		<div className=" relative">
			<div className="flex items-center justify-between  mb-1">
				<label className="font-semibold text-sm ">{label}</label>
				{error && (
					<label className=" text-sm font-normal text-red-600  ">{error}</label>
				)}
			</div>
			<input
				type="text"
				required
				name={name}
				placeholder=" "
				className={`w-full px-10 py-1 bg-cyan-50 rounded-md placeholder:text-cyan-600/50 hover:bg-cyan-100 font-inherit focus:ring-2 focus:ring-cyan-500 focus:outline-none font-semibold text-xl text-end`}
			/>
			<button className="absolute top-9 left-4">
				<Icons name={iconOne} />
			</button>
			<button className="absolute top-9 right-4">
				<Icons name={iconTwo} />
			</button>
		</div>
	);
}

export default Input;
