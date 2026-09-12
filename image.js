// Get the URL
const url = new URLSearchParams(window.location.search);

// Get image name
const imageName = url.get("img");

// Show image
document.getElementById("displayImage").src = imageName;