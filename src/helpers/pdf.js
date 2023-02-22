import { getHourlyCost } from './fetch';
import { jsPDF } from 'jspdf';

const doc = new jsPDF();

let data = [];

export function downloadAsPDF() {
	getHourlyCost().then((res) => {
		data = Object.entries(res).map((item) => item[1]);
		doc.text(10, 10, data[0].date);
		data.forEach(function (item, i) {
			doc.text(
				20,
				20 + i * 10,
				'Hour: ' + item.hour + ' Price: ' + item.price + '€/Mwh'
			);
		});
		doc.save('Test.pdf');
	});
}
