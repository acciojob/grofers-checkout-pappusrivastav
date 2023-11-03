// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;
    prices.forEach((price) => {
        total += parseInt(price.textContent);
    });

    const table = document.querySelector("table");
    const newRow = table.insertRow(-1);
    const cell = newRow.insertCell(0);
    cell.textContent = `Total Price: ${total}`;
};

getSumBtn.addEventListener("click", getSum);
