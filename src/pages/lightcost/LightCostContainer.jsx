import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Graph from '../../components/Graph';
import { useUserContext } from '../../context/UserContext';
import LightCostCard from './LightCostCard';

function LightCostContainer() {
	const { user } = useUserContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, []);
	const lightCostArray = Object.entries(useLoaderData()).map(
		(item) => item[1]
	);

	// ORDER
	const lightCostOrdered = [...lightCostArray].sort(
		(item1, item2) => item1.price - item2.price
	);

	// Cheap = green
	const mostCheapest = lightCostOrdered.slice(0, 6);

	// Expensive = red
	const mostExpensive = lightCostOrdered.slice(
		lightCostOrdered.length - 6,
		lightCostOrdered.length
	);

	// Average
	const avgCost = (
		lightCostArray
			.map((item) => item.price)
			.reduce((prev, curr) => prev + curr) / 24
	).toFixed(2);

	const renderLightCost = lightCostArray.map((item, index) => {
		if (mostCheapest.includes(item)) {
			return (
				<LightCostCard
					avgCost={avgCost}
					key={index}
					item={item}
					cheap
				/>
			);
		} else if (mostExpensive.includes(item)) {
			return (
				<LightCostCard
					avgCost={avgCost}
					key={index}
					item={item}
					expensive
				/>
			);
		} else {
			return (
				<LightCostCard
					avgCost={avgCost}
					key={index}
					item={item}
					average
				/>
			);
		}
	});

	return (
		<>
			<header className="my-3 text-2xl text-center font-header">
				<h1>{lightCostArray && lightCostArray[0].date}</h1>
				<h2 className="text-lg font-bold text-center">
					Avg: {avgCost} €/Mwh
				</h2>
			</header>
			<main className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 lg:grid-cols-6">
				{lightCostArray && <>{renderLightCost}</>}
			</main>

			<Graph lightCostArray={lightCostArray} />
		</>
	);
}

export default LightCostContainer;
