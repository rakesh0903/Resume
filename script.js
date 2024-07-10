// Wait for the document to load before running script
document.addEventListener("DOMContentLoaded", function() {
    const areaDropdown = document.getElementById("area-dropdown");
    const houseListingsSection = document.getElementById("house-listings");

    // Event listener for when area dropdown selection changes
    areaDropdown.addEventListener("change", function() {
        const selectedArea = areaDropdown.value;
        // Fetch house listings for the selected area
        fetchHouseListings(selectedArea);
    });

    // Function to fetch house listings based on selected area
    function fetchHouseListings(area) {
        // Example: Simulate fetching data (replace with actual data retrieval logic)
        const houseListings = getHouseListings(area);

        // Clear previous listings
        houseListingsSection.innerHTML = "";

        // Display house listings for the selected area
        houseListings.forEach(listing => {
            const houseType = listing.type;
            const address = listing.address;
            const contact = listing.contact;

            // Create HTML elements for each house listing
            const houseListingDiv = document.createElement("div");
            houseListingDiv.classList.add("house-type");

            const titleElement = document.createElement("h3");
            titleElement.textContent = houseType;
            houseListingDiv.appendChild(titleElement);

            const detailsParagraph = document.createElement("p");
            detailsParagraph.textContent = address;
            houseListingDiv.appendChild(detailsParagraph);

            const contactLink = document.createElement("a");
            contactLink.textContent = "Contact: " + contact;
            contactLink.href = "tel:" + contact;
            houseListingDiv.appendChild(contactLink);

            const viewDetailsButton = document.createElement("button");
            viewDetailsButton.textContent = "View Details";
            viewDetailsButton.addEventListener("click", function() {
                // Handle view details click (e.g., show modal or navigate to details page)
                showHouseDetails(listing);
            });
            houseListingDiv.appendChild(viewDetailsButton);

            // Append house listing to the section
            houseListingsSection.appendChild(houseListingDiv);
        });
    }

    // Function to simulate fetching house listings data (replace with actual implementation)
    function getHouseListings(area) {
        // Example data (replace with your actual data retrieval logic)
        switch (area) {
            case "kokar-chowk":
                return [
                    {
                        type: "Beautiful Family Home",
                        address: "Kokar Chowk, Ranchi, Jharkhand",
                        contact: "123-456-7890"
                        // Add more details as needed
                    },
                    // Add more listings for Kokar Chowk
                ];
            case "deepatoili":
                return [
                    {
                        type: "Cozy Apartment",
                        address: "Deepatoili, Ranchi, Jharkhand",
                        contact: "987-654-3210"
                        // Add more details as needed
                    },
                    // Add more listings for Deepatoili
                ];
            // Add cases for other areas with their respective listings
            default:
                return [];
        }
    }

    // Function to handle showing house details (replace with your actual implementation)
    function showHouseDetails(houseData) {
        // Example: You can navigate to a new page or show modal with details
        console.log("Showing details for house:", houseData.type);
        // Replace with your actual implementation (e.g., navigate to details page)
        // Example: window.location.href = "details.html?id=" + houseData.id; // Navigate to details page
        // Example: showModal(houseData); // Show modal with house details
    }
});
