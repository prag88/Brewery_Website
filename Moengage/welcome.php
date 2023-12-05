<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index1.css">
    <script src="index1.js" defer></script>
    <title>Brewery Search</title>
</head>
<body>
    <div id="search-container">
        <label for="search-type">Select Search Type:</label>
        <select id="search-type" onchange="handleSearchTypeChange()">
            <option value="by_city">By City</option>
            <option value="by_name">By Name</option>
            <option value="by_type">By Type</option>
        </select>

        <!-- Container for dynamic input field -->
        <div id="search-input-container">
            <!-- Input field for searching -->
            <input type="text" id="search-input" placeholder="Enter search term">
            <!-- Search button -->
            <button onclick="searchBreweries()">Search</button>
        </div>

        <!-- Result container -->
        <div id="results-container">
            <!-- Results will be displayed here -->
        </div>
    </div>
</body>
</html>
