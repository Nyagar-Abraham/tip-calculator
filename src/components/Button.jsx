/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
	if (children === 'reset')
		return (
			<button
				onClick={onClick}
				className={`bg-cyan-400 basis-3/4  px-5 py-1 font-semibold text-cyan-800 rounded-md uppercase text-xl hover:bg-cyan-300 hover:text-cyan-800 focus:ring-2 focus:ring-cyan-300`}
			>
				{children}
			</button>
    );
  
    if (children === 'submit') return <button
    
    className={`bg-cyan-800 px-5 py-1 font-semibold text-cyan-50 rounded-md hover:bg-cyan-200 hover:text-cyan-800 focus:ring-2 focus:ring-cyan-400`}
  >
    {children}
  </button>

	return (
		<button
			onClick={onClick}
			className={`bg-cyan-800 px-5 py-1 font-semibold text-cyan-50 rounded-md hover:bg-cyan-200 hover:text-cyan-800 focus:ring-2 focus:ring-cyan-400`}
		>
			{children}
		</button>
	);
}

export default Button;
