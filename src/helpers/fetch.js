export async function getHourlyCost() {
	const endPoint = 'http://localhost:3005/api/';
	const response = await fetch(endPoint);
	if (!response.ok) throw new Error(response.statusText);
	const json = await response.json();
	return json;
}
