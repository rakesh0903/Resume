document.addEventListener('DOMContentLoaded', function () {
    const houseData = {
        'kokar-chowk': [
            {
                title: 'Beautiful Family Home',
                location: 'Kokar Chowk, Ranchi, Jharkhand',
                price: '$1200/month',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl: 'house1.jpg', // Replace with actual image URL
                mapLocation: { lat: 23.358069, lng: 85.343068 }, // Replace with actual geo-location coordinates
            },
            // Add more houses for Kokar Chowk as needed
        ],
        'kokar-bazaar': [
            {
                title: 'Modern Apartment',
                location: 'Kokar Bazaar, Ranchi, Jharkhand',
                price: '$1500/month',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
                    <p><strong>Location:</strong> ${house.location}</p>
                    <p><strong>Price:</strong> ${house.price}</p>
                    <p>${house.details}</p>
                    <img src="${house.imageUrl}" alt="${house.title}">
                    <a href="#">View Details</a>
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
            const areaId = link.getAttribute('href').substring(1); // Get area ID without #
            displayHouses(areaId);
        });
    });
});
