import AppLayout from './components/AppLayout';
import { TipProvider } from './context/TipContext';

function App() {
	return (
		<TipProvider>
			<AppLayout />
		</TipProvider>
	);
}

export default App;
