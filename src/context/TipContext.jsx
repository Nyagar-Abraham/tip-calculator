/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
/* eslint-disable no-fallthrough */
import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const TipContext = createContext();

const initialState = {
	tipAmount: '0',
	total: '0',
};

function reducer(state, action) {
	switch (action.type) {
		case 'calculate/tip':
			const person = +action.payload.bill / +action.payload.people;
			let amount;
			if (action.payload.tip) amount = person * (action.payload.tip / 100);
			if (!action.payload.tip) amount = person * (+action.payload.custom / 100);
			const sum = person + amount;

			return {
				...state,
				tipAmount: Math.round(amount),
				total: Math.round(sum),
			};
		case 'reset':
			return { ...initialState };
		default:
			throw new Error('no such case');
	}
}

function TipProvider({ children }) {
	const [{ tipAmount, total }, dispatch] = useReducer(reducer, initialState);
	return (
		<TipContext.Provider value={{ dispatch, tipAmount, total }}>
			{children}
		</TipContext.Provider>
	);
}

function useTip() {
	const context = useContext(TipContext);
	// if (context === undefined) throw new Error('context used outside scope');
	return context;
}

export { useTip, TipProvider };
