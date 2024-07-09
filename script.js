document.addEventListener('DOMContentLoaded', function () {
    const houseData = {
        'kokar-chowk': [
            {
                title: 'Beautiful Family Home',
                type: '2 BHK Apartment',
                address: 'Kokar Chowk, Ranchi, Jharkhand',
                contact: 'Contact: 123-456-7890',
                description: '2 BHK आपार्टमेंट जिसमें 2 बेडरूम, 1 हाल, 1 किचन, और 1 बाथरूम है।',
                facilities: 'फैसिलिटीज़: पानी सप्लाई, बिजली सप्लाई, पार्किंग, सुरक्षा सेवा।',
                carpetArea: 'कार्पेट क्षेत्र: 1000 वर्ग फुट',
                roomSizes: 'कमरों की आकार: 12x14 फीट, 10x12 फीट',
                balcony: 'बालकन: हाँ (2)',
                kitchen: 'रसोई: मॉड्यूलर किचन',
                bathroomSize: 'बाथरूम की आकार: 8x6 फीट',
                bathroomType: 'बाथरूम के प्रकार: संयुक्त बाथरूम',
                geoLocation: { lat: 23.358069, lng: 85.343068 }, // Replace with actual geo-location coordinates
            },
            // Add more houses for Kokar Chowk as needed
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
                    <div class="details">
                        <span>${house.description}</span>
                        <span>${house.facilities}</span>
                        <span><strong>Carpet Area:</strong> ${house.carpetArea}</span>
                        <span><strong>Room Sizes:</strong> ${house.roomSizes}</span>
                        <span><strong>Balcony:</strong> ${house.balcony}</span>
                        <span><strong>Kitchen:</strong> ${house.kitchen}</span>
                        <span><strong>Bathroom Size:</strong> ${house.bathroomSize}</span>
                        <span><strong>Bathroom Type:</strong> ${house.bathroomType}</span>
                    </div>
                    <div class="geo-location">
                        <p>Geo Location: Latitude ${house.geoLocation.lat}, Longitude ${house.geoLocation.lng}</p>
                    </div>
                `;

                houseElement.innerHTML = htmlContent;
                housesContainer.appendChild(houseElement);
            });
        }
    }

    // Event listener for area link (Kokar Chowk)
    const kokarChowkLink = document.querySelector('nav ul li a[href="#kokar-chowk"]');
    if (kokarChowkLink) {
        kokarChowkLink.addEventListener('click', function (event) {
            event.preventDefault();
            displayHouses('kokar-chowk');
        });
    }
});
