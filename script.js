// Wait for the document to load before running script
document.addEventListener("DOMContentLoaded", function() {
    const areaDropdown = document.getElementById("area-dropdown");
    const houseTypesSection = document.getElementById("house-types");
    const houseListingsSection = document.getElementById("house-listings");
    const houseDetailsSection = document.getElementById("house-details");

    // Event listener for when area dropdown selection changes
    areaDropdown.addEventListener("change", function() {
        const selectedArea = areaDropdown.value;
        // Fetch house types for the selected area
        fetchHouseTypes(selectedArea);
    });

    // Function to fetch house types based on selected area
    function fetchHouseTypes(area) {
        // Simulate fetching data for house types (replace with actual data retrieval logic)
        const houseTypes = getHouseTypes(area);

        // Clear previous house types
        houseTypesSection.innerHTML = "";

        // Display house types for the selected area
        houseTypes.forEach(type => {
            const typeButton = document.createElement("button");
            typeButton.textContent = type;
            typeButton.addEventListener("click", function() {
                // Handle click on house type button
                const selectedHouseType = type;
                // Fetch house listings for the selected house type in the selected area
                fetchHouseListings(area, selectedHouseType);
            });
            houseTypesSection.appendChild(typeButton);
        });
    }

    // Function to simulate fetching house types data (replace with actual implementation)
    function getHouseTypes(area) {
        // Example data (replace with your actual data retrieval logic)
        switch (area) {
            case "kokar-chowk":
                return ["Beautiful Family Home", "Cozy Apartment", "Luxury Villa"];
            case "deepatoili":
                return ["Apartment Complex", "Modern Bungalow"];
            // Add cases for other areas with their respective house types
            default:
                return [];
        }
    }

    // Function to fetch house listings based on selected area and house type
    function fetchHouseListings(area, houseType) {
        // Simulate fetching data for house listings (replace with actual data retrieval logic)
        const listings = getHouseListingsByType(area, houseType);

        // Clear previous house listings
        houseListingsSection.innerHTML = "";

        // Display house listings for the selected house type
        listings.forEach(listing => {
            const colonyName = listing.colonyName;

            const listingButton = document.createElement("button");
            listingButton.textContent = colonyName;
            listingButton.addEventListener("click", function() {
                // Handle click on house listing button
                const selectedHouse = listing;
                // Display house details for the selected house
                displayHouseDetails(selectedHouse);
            });
            houseListingsSection.appendChild(listingButton);
        });
    }

    // Function to simulate fetching house listings data by type (replace with actual implementation)
    function getHouseListingsByType(area, houseType) {
        // Example data (replace with your actual data retrieval logic)
        switch (houseType) {
            case "Beautiful Family Home":
                return [
                    { colonyName: "Sunrise Colony", /* Add more details as needed */ },
                    { colonyName: "Green Valley Colony", /* Add more details as needed */ }
                ];
            case "Cozy Apartment":
                return [
                    { colonyName: "City View Apartments", /* Add more details as needed */ },
                    { colonyName: "Lake View Towers", /* Add more details as needed */ }
                ];
            // Add cases for other house types in the selected area
            default:
                return [];
        }
    }

    // Function to display house details
    function displayHouseDetails(house) {
        // Clear previous house details
        houseDetailsSection.innerHTML = "";

        // Create elements to display house details
        const titleElement = document.createElement("h2");
        titleElement.textContent = house.colonyName;
        houseDetailsSection.appendChild(titleElement);

        // Example: Display other details such as architecture, amenities, etc.
        // Replace with your actual data and HTML structure
        const detailsParagraph = document.createElement("p");
        detailsParagraph.textContent = "House details: " + JSON.stringify(house);
        houseDetailsSection.appendChild(detailsParagraph);

        // Add back button functionality
        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.addEventListener("click", function() {
            // Handle back button click (navigate back in history)
            window.history.back();
        });
        houseDetailsSection.appendChild(backButton);
    }
});
