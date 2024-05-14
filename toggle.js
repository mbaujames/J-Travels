

// Function to display the Pop-up Card
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the Pop-up Card
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to handle payment via M-Pesa
function payViaMpesa() {
    // Add your code here to handle payment via M-Pesa
    alert('Payment via M-Pesa initiated!');
}

// Function to handle payment via Visa
function payViaVisa() {
    // Add your code here to handle payment via Visa
    alert('Payment via Visa initiated!');
}

// Event listener for BuyMeCoffee button
document.getElementById('buyMeCoffeeBtn').addEventListener('click', openPopup);



//for the map
var mapStyle = [
    {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
        { "saturation": -100 }
      ]
    }
  ];
  