// Function to generate a random time between 1 and 3 seconds
function getRandomTime() {
    return Math.random() * 2000 + 1000;  // Time in ms between 1000 and 3000
}

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
const tableBody = document.getElementById('output');
tableBody.innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>';

// Track the start time
const startTime = Date.now();

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
    const totalTime = (Date.now() - startTime) / 1000;  // Total time in seconds

    
    tableBody.innerHTML = '';

 results.forEach((result) => {
        const row = `
            <tr>
                <td>${result.name}</td>
                <td>${(result.time / 1000).toFixed(2)} sec</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    const totalRow = `
        <tr>
            <td>Total</td>
            <td>${totalTime.toFixed(2)} sec</td>
        </tr>
    `;
    tableBody.innerHTML += totalRow;
});
