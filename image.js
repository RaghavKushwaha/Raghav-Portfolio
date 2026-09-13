const imageName = new URLSearchParams(window.location.search).get('img');
const allowedImages = new Set([
	'images/Web Development Intern.jpg',
	'images/Cyber Security Intern.jpg',
	'images/Cyber Security Associate Certification Programme.jpg',
	'images/Information Security Analyst.jpg',
	'images/Getting Started with Cybersecurity.jpg',
	'images/Python Programming.jpg',
	'images/Master SQL Basics.jpg',
	'images/Your Future in Cybersecurity The Job Landscape.jpg',
	'images/Web Development.jpg',
	'images/Masterclass on Fin Tech 2030.jpg'
]);

const image = document.getElementById('displayImage');
const title = document.getElementById('certificateTitle');
const caption = document.getElementById('certificateCaption');
const certificateName = imageName && allowedImages.has(imageName)
	? imageName.split('/').pop().replace(/\.jpg$/i, '')
	: null;

if (certificateName) {
	image.src = imageName;
	image.alt = `${certificateName} certificate earned by Raghav Kushwaha`;
	title.textContent = certificateName;
	caption.textContent = `${certificateName} certificate earned by Raghav Kushwaha`;
	document.title = `${certificateName} | Raghav Kushwaha`;
} else {
	title.textContent = 'Certificate not found';
	caption.textContent = 'The requested certificate could not be found.';
	image.hidden = true;
}