import React from 'react';

function LightCostCard({ item, cheap, expensive, avgCost }) {
	const classes = ['p-3 rounded'];
	let difference = (item.price - avgCost).toFixed(2);
	let arrow;

	if (expensive) {
		classes.push('bg-red-300');
	} else if (cheap) {
		classes.push('bg-green-400');
	} else {
		classes.push('bg-orange-300');
	}
	if ((item.price - avgCost).toFixed(2) > 0) {
		difference = '+' + (item.price - avgCost).toFixed(2);
		arrow = <i className="text-red-500 fa-sharp fa-solid fa-arrow-up"></i>;
	} else {
		arrow = (
			<i className="text-green-500 fa-sharp fa-solid fa-arrow-down"></i>
		);
	}
	return (
		<section className={classes.join(' ')}>
			<h2 className="text-2xl font-semibold">{item.hour}</h2>
			<p className="flex justify-between items-center">
				<span className="p-0.5 text-xs bg-white rounded">
					{difference}€ {arrow}
				</span>
				<span>{item.price} €/Mwh </span>
			</p>
		</section>
	);
}

export default LightCostCard;
