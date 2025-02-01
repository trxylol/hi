// Add price animation
function animatePrices() {
  const prices = document.querySelectorAll('.crypto-price');
  const changes = document.querySelectorAll('.price-change');
  
  setInterval(() => {
    prices.forEach((price, index) => {
      const currentPrice = parseFloat(price.textContent.replace('$', '').replace(',', ''));
      const change = (Math.random() - 0.5) * 100;
      const newPrice = (currentPrice + change).toFixed(2);
      price.textContent = `$${Number(newPrice).toLocaleString()}`;
      
      const changePercent = (change / currentPrice * 100).toFixed(2);
      changes[index].textContent = `${changePercent > 0 ? '+' : ''}${changePercent}%`;
      changes[index].className = `price-change ${changePercent > 0 ? 'positive' : 'negative'}`;
    });
  }, 3000);
}

document.addEventListener('DOMContentLoaded', animatePrices);
