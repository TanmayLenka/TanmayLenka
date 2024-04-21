<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joy's Café Search</title>
    <style>
        body{
                background-color: blue;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Joy's Café Search</h2>
    <input type="text" id="searchInput" oninput="searchCafes(this.value)" placeholder="Search for cafes...">
    <br><br>
    <table id="cafeTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Street No</th>
                <th>Locality</th>
                <th>Postal Code</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
        </thead>
        <tbody id="cafeList">
        </tbody>
    </table>

    <script>
        async function fetchCafes() {
            const response = await fetch('https://api.example.com/cafes');
            const cafes = await response.json();
            return cafes;
        }

        async function fetchPlaces() {
            const response = await fetch('https://api.example.com/places');
            const places = await response.json();
            return places;
        }

        async function searchCafes(searchTerm) {
            const cafes = await fetchCafes();
            const places = await fetchPlaces();

            const cafeList = document.getElementById('cafeList');
            cafeList.innerHTML = '';

            cafes.forEach(cafe => {
                if (cafe.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    const place = places.find(place => place.id === cafe.place_id);
                    if (place) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${cafe.name}</td>
                            <td>${place.street_no}</td>
                            <td>${place.locality}</td>
                            <td>${place.postal_code}</td>
                            <td>${place.lat}</td>
                            <td>${place.long}</td>
                        `;
                        cafeList.appendChild(row);
                    }
                }
            });
        }

        window.onload = function() {
            searchCafes('');
        };
    </script>
</body>
</html>