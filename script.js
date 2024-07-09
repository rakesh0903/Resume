// script.js

// Function to open client login popup
function openClientLoginPopup() {
    var popup = window.open('', 'clientLoginPopup', 'width=400,height=400');
    var htmlContent = `
        <html>
        <head>
            <title>Client Login</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                input {
                    padding: 10px;
                    margin-bottom: 10px;
                    width: calc(100% - 20px);
                    font-size: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                }
                .otp-container {
                    display: none;
                }
                .otp-container.active {
                    display: block;
                }
                .btn-container {
                    text-align: center;
                    margin-top: 20px;
                }
                .btn-container button {
                    padding: 12px 20px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1rem;
                    transition: background-color 0.3s ease;
                }
                .btn-container button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h2>Client Login</h2>
            <input id="mobileNumberInput" type="tel" placeholder="Enter your mobile number">
            <div class="otp-container" id="otpContainer">
                <input id="otpInput" type="text" placeholder="Enter OTP">
            </div>
            <div class="btn-container">
                <button id="getOTPBtn">Get OTP</button>
                <button id="resendOTPBtn">Resend OTP</button>
                <button id="verifyOTPBtn">Verify OTP</button>
            </div>
            <script src="script.js"></script>
        </body>
        </html>
    `;
    popup.document.write(htmlContent);
}

// Event listener for client login button
document.getElementById('clientLoginBtn').addEventListener('click', function() {
    openClientLoginPopup();
});

// JavaScript for OTP functionality in popup
var otpContainer = document.getElementById('otpContainer');
var getOTPBtn = document.getElementById('getOTPBtn');
var resendOTPBtn = document.getElementById('resendOTPBtn');
var verifyOTPBtn = document.getElementById('verifyOTPBtn');

getOTPBtn.addEventListener('click', function() {
    var mobileNumber = document.getElementById('mobileNumberInput').value;
    if (mobileNumber) {
        alert('OTP sent to ' + mobileNumber);
        otpContainer.classList.add('active');
    } else {
        alert('Please enter a valid mobile number.');
    }
});

resendOTPBtn.addEventListener('click', function() {
    var mobileNumber = document.getElementById('mobileNumberInput').value;
    if (mobileNumber) {
        alert('Resent OTP to ' + mobileNumber);
    } else {
        alert('Please enter a valid mobile number.');
    }
});

verifyOTPBtn.addEventListener('click', function() {
    var otpInput = document.getElementById('otpInput').value;
    if (otpInput) {
        alert('OTP verified successfully!');
        window.close(); // Close popup after verification
    } else {
        alert('Please enter OTP to verify.');
    }
});
