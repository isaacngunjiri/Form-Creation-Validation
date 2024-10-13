document.addEventListener("DOMContentLoaded", function() {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the "Loading" message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through the users and create <li> for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by displaying an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error);
        }
    }

    // Invoke fetchUserData after DOM content has fully loaded
    fetchUserData();
});
