document.addEventListener('DOMContentLoaded', function () {
    // Extract brewery information from the URL
     const urlParams = new URLSearchParams(window.location.search);
    const breweryJson = urlParams.get('brewery');
    
    // // Check if brewery information is available
    // if (breweryJson) {
         const brewery = JSON.parse(decodeURIComponent(breweryJson));

        // Display detailed brewery information
        const detailedBreweryContainer = document.getElementById('detailed-brewery-container');
        detailedBreweryContainer.innerHTML = `
            <h3>${brewery.name}</h3>
            <p>Address: ${brewery.address_1}</p>
            <p>Phone No: ${brewery.phone}</p>
            <p>Website: ${brewery.website_url}</p>
            <p>City: ${brewery.city}</p>
            <p>State: ${brewery.state_province}</p>
        `;

        // Display reviews
        const reviewsList = document.getElementById('reviews-list');
        updateReviewsList(reviewsList, brewery.reviews);

        // Function to add a review
        window.addReview = function () {
            const reviewInput = document.getElementById('review-input').value;

            // Simulate storing reviews in-memory (replace with backend logic in a real app)
            brewery.reviews.push(reviewInput);

            // Update the reviews list
            updateReviewsList(reviewsList, brewery.reviews);

            // Clear the review input
            document.getElementById('review-input').value = '';
        };
    // } else {
    //     // Handle the case where brewery information is not available
    //     console.error('Brewery information not found in the URL.');
    // }

    // Function to update the reviews list
    function updateReviewsList(container, reviews) {
        // Clear previous reviews
        container.innerHTML = '';

        // Display reviews
        reviews.forEach(review => {
            const li = document.createElement('li');
            li.textContent = review;
            container.appendChild(li);
        });
    }
});
