document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buyButton');
    
    buyButton.addEventListener('click', () => {
        alert('Thank you for your purchase! Your hoodie will be shipped soon.');
    });
});