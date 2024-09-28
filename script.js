//your JS code here. If required.

function getRandomTime() {
    return Math.random() * 2000 + 1000; 
}


function createPromise(name) {
    const time = getRandomTime();
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name, time }), time);
    });
}
const promises = [
    createPromise('Promise 1'),
    createPromise('Promise 2'),
    createPromise('Promise 3')
];


const tableBody = document.getElementById('output');
tableBody.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';


const startTime = Date.now();


Promise.all(promises).then((results) => {
    const totalTime = (Date.now() - startTime) / 1000;

  
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