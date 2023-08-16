// Good morning! Here's your coding interview problem for today.

// Company: Google.

// Problem: Given a list of stock prices for a given day as an array of numbers, return the maximum profit that could have been made by buying a stock and then selling the stock later that day. If no profit could have been made, return -1.

// Example:  // StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]); 
            // 16

// Solution:-------------------------->

function StockPicker(arr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let changeBuyPrice = true;

    for (let i = 0; i < arr.length; i++) {
        if (changeBuyPrice) buyPrice = arr[i];
        sellPrice = arr[i + 1];

        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            let tempProfit = sellPrice - buyPrice;
            if (tempProfit > maxProfit) maxProfit = tempProfit;
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}