import Card from './Card';
import Icons from './Icons';

function AppLayout() {
	return (
		<main className="text-cyan-900 transition-all duration-300 mt-10 rounded-md shrink-0 w-11/12  mx-auto grow end:max-w-[700px]">
			<div className="h-24  flex items-center justify-center">
				<Icons name="logo" />
			</div>
			<Card />
		</main>
	);
}

export default AppLayout;
