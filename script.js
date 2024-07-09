document.addEventListener('DOMContentLoaded', function () {
    const houseData = {
        'kokar-chowk': [
            {
                title: 'Beautiful Family Home',
                type: '2 BHK Apartment',
                address: 'Kokar Chowk, Ranchi, Jharkhand',
                contact: 'Contact: 123-456-7890',
                price: '$1200/month',
                imageUrl: 'house1.jpg', // Replace with actual image URL
                mapLocation: { lat: 23.358069, lng: 85.343068 }, // Replace with actual geo-location coordinates
            },
            // Add more houses for Kokar Chowk as needed
        ],
        'kokar-bazaar': [
            {
                title: 'Modern Apartment',
                type: '3 BHK Apartment',
                address: 'Kokar Bazaar, Ranchi, Jharkhand',
                contact: 'Contact: 234-567-8901',
                price: '$1500/month',
                imageUrl: 'house2.jpg', // Replace with actual image URL
                mapLocation: { lat: 23.371667, lng: 85.324167 }, // Replace with actual geo-location coordinates
            },
            // Add more houses for Kokar Bazaar as needed
        ],
        // Define similar data for other areas
    };

    // Function to display houses for a specific area
    function displayHouses(areaId) {
        const housesContainer = document.getElementById('houses');
        housesContainer.innerHTML = ''; // Clear previous listings

        if (houseData[areaId]) {
            houseData[areaId].forEach(house => {
                const houseElement = document.createElement('div');
                houseElement.classList.add('house');

                const htmlContent = `
                    <h2>${house.title}</h2>
                    <p>${house.type}</p>
                    <p><strong>Address:</strong> ${house.address}</p>
                    <p>${house.contact}</p>
                    <p><strong>Price:</strong> ${house.price}</p>
                    <img src="${house.imageUrl}" alt="${house.title}">
                    <div class="details">
                        <span>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span>Facilities: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div class="payment">
                        <button onclick="showDetails('${house.title}')">View Details (Pay Rs.100)</button>
                    </div>
                `;

                houseElement.innerHTML = htmlContent;
                housesContainer.appendChild(houseElement);
            });
        }
    }

    // Event listeners for area links
    const areaLinks = document.querySelectorAll('nav ul li a');
    areaLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const areaId = link.getAttribute('href').substring(1);
            displayHouses(areaId);
        });
    });

    // Function to simulate showing house details after payment
    function showDetails(houseTitle) {
        // Simulate payment process (could integrate with actual payment gateway logic)
        const paymentSuccessful = confirm('Pay Rs.100 to view details?');
        if (paymentSuccessful) {
            alert(`Details for ${houseTitle}:\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`);
            // Could show more details or redirect to a new page with detailed information
        } else {
            alert('Payment cancelled.');
        }
    }
});
