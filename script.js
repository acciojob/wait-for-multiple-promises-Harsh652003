// Function to generate a random time between 1 and 3 seconds
function getRandomTime() {
    return Math.random() * 2000 + 1000;  // Time in ms between 1000 and 3000
}

// Function to create a promise that resolves after a random time
function createPromise(name) {
    const time = getRandomTime();
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name, time }), time);
    });
}

// Array of three promises
const promises = [
    createPromise('Promise 1'),
    createPromise('Promise 2'),
    createPromise('Promise 3')
];

// Get the table body and show a loading message
const tableBody = document.getElementById('output');
tableBody.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

// Track the start time
const startTime = Date.now();

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
    const totalTime = (Date.now() - startTime) / 1000;  // Total time in seconds

    // Clear the loading message
    tableBody.innerHTML = '';

    // Populate the table with the results of each promise
    results.forEach((result) => {
        const row = `
            <tr>
                <td>${result.name}</td>
                <td>${(result.time / 1000).toFixed(2)} sec</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Add a final row for the total time
    const totalRow = `
        <tr>
            <td>Total</td>
            <td>${totalTime.toFixed(2)} sec</td>
        </tr>
    `;
    tableBody.innerHTML += totalRow;
});
