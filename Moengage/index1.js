document.addEventListener('DOMContentLoaded', function () {
    // Function to handle search type change
    window.handleSearchTypeChange = function() {
        // Get selected search type
        const selectedType = document.getElementById('search-type').value;

        // Show the input container and set placeholder based on the selected type
        const searchInputContainer = document.getElementById('search-input-container');
        const searchInput = document.getElementById('search-input');
        searchInputContainer.style.display = 'block';

        // Set placeholder text based on the selected type
        switch (selectedType) {
            case 'by_city':
                searchInput.placeholder = 'Enter city name';
                break;
            case 'by_name':
                searchInput.placeholder = 'Enter brewery name';
                break;
            case 'by_type':
                searchInput.placeholder = 'Enter brewery type';
                break;
            default:
                break;
        }
    };

    // Function to perform the brewery search
    window.searchBreweries = function () {
        // Get selected search type and search term
        const selectedType = document.getElementById('search-type').value;
        const searchTerm = document.getElementById('search-input').value;

        // Construct the API URL based on the selected type and term
        let apiUrl;
        switch (selectedType) {
            case 'by_city':
                apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${encodeURIComponent(searchTerm)}`;
                break;
            case 'by_name':
                apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_name=${encodeURIComponent(searchTerm)}`;
                break;
            case 'by_type':
                apiUrl = `https://api.openbrewerydb.org/v1/breweries?by_type=${encodeURIComponent(searchTerm)}`;
                break;
            default:
                console.error('Invalid search type');
                return;
        }

        // Fetch data from the API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    alert("No such stuff available")
                }
                return response.json();
            })
            .then(data => {
                // Update the results container with the retrieved data
                updateResults(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Function to update the results container with data
    function updateResults(data) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Clear previous results

        // Iterate over the data and display relevant information
        data.forEach(brewery => {
            const breweryInfo = document.createElement('div');
            breweryInfo.innerHTML = `
                <h3><a href="detailed_brewery.html" onclick="showBreweryInfo('${JSON.stringify(brewery)}')"> ${brewery.name}</a></h3>
                <p>Address: ${brewery.address_1}</p>
                <p>Phone No: ${brewery.phone}</p>
                <p>Website: ${brewery.website_url}</p>
                <p>City: ${brewery.city}</p>
                <p>State: ${brewery.state_province}</p>
            `;
            resultsContainer.appendChild(breweryInfo);
        });
    }

    // Function to show detailed brewery information
    window.showBreweryInfo = function(breweryJson) {
        const brewery = JSON.parse(breweryJson);
        // Open a new page with detailed information
        window.open(`detailed_brewery.html?brewery=${encodeURIComponent(JSON.stringify(brewery))}`, '_blank');
    };
});
