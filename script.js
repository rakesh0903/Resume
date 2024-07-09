// Function to open client login modal with area-specific functionality
function showLoginModal(area) {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    document.getElementById('selectedArea').value = area; // Store selected area in hidden input
}

// Function to close client login modal
function closeLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}

// Function to simulate OTP generation (replace with actual backend logic)
function getOTP() {
    var otpContainer = document.getElementById('otpContainer');
    otpContainer.style.display = 'block';
}

// Function to verify OTP and show area selection
function verifyOTP() {
    var otpInput = document.getElementById('otpInput').value;
    if (otpInput === '123456') { // Example OTP verification (replace with actual logic)
        document.getElementById('otpContainer').style.display = 'none';
        document.getElementById('areaSelection').style.display = 'block';
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

// Function to display houses based on selected area
function showSelectedArea() {
    var selectedArea = document.getElementById('areaSelect').value;
    if (selectedArea) {
        // Example: Fetch houses data for selected area (replace with actual data fetching logic)
        var housesData = getHousesData(selectedArea);
        displayHouses(housesData);
    } else {
        alert('Please select an area.');
    }
}

// Example function to fetch houses data based on selected area (replace with actual backend logic)
function getHousesData(area) {
    // Simulated data for demonstration
    switch (area) {
        case 'kokar-chowk':
            return [
                { type: 'Beautiful Family Home', price: '$1200/month', location: 'Kokar Chowk' },
                { type: 'Modern Apartment', price: '$1500/month', location: 'Kokar Chowk' },
                // Add more houses as needed
            ];
        case 'kokar-bazaar':
            return [
                { type: 'Spacious Villa', price: '$1800/month', location: 'Kokar Bazaar' },
                { type: 'Cozy Cottage', price: '$1000/month', location: 'Kokar Bazaar' },
                // Add more houses as needed
            ];
        // Add cases for other areas
        default:
            return [];
    }
}

// Function to display houses in the DOM
function displayHouses(housesData) {
    var housesContainer = document.getElementById('houses');
    housesContainer.innerHTML = ''; // Clear previous content

    housesData.forEach(function(house) {
        var houseHTML = `
            <div class="house">
                <h2>${house.type}</h2>
                <p><strong>Location:</strong> ${house.location}</p>
                <p><strong>Price:</strong> ${house.price}</p>
                <a href="#">View Details</a>
            </div>
        `;
        housesContainer.insertAdjacentHTML('beforeend', houseHTML);
    });
}
