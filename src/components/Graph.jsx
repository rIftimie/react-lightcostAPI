import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function Graph({ lightCostArray }) {
	useEffect(() => {
		const ctx = document.getElementById('general-chart');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: Array.from({ length: 24 }, (_, i) => i + 1),
				datasets: [
					{
						label: '€/Mwh',
						data: lightCostArray.map((item) => item.price),
						borderColor: 'rgb(0,0,0)',
					},
				],
			},
		});
	}, []);

	return (
		<>
			<section className="container flex justify-center p-2 w-auto h-96 md:p-0">
				<canvas id="general-chart"></canvas>
			</section>
		</>
	);
}

export default Graph;
