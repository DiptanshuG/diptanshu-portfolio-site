// PaymentComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function PaymentComponent(){
    // const [amount, setAmount] = useState(500); // Amount in rupees/

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const result = await axios.post('http://localhost:7072/api/payment/create-order', {
            amount: "1",
            currency: 'INR',
            receipt: 'receipt#1'
        });

        if (!result) {
            alert('Server error. Are you online?');
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: 'rzp_test_AHgxGmylAlIYoB', // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: 'Your Company Name',
            description: 'Test Transaction',
            image: 'https://your-logo-url.com/logo.png',
            order_id: order_id,
            handler: async function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
                // Verify the payment on the backend
                await axios.post('/verify-payment', {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature
                });
            },
            prefill: {
                name: 'Your Name',
                email: 'your-email@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Razorpay Corporate Office'
            },
            theme: {
                color: '#F37254'
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div>
            <h2>Razorpay Payment Integration</h2>
            <button onClick={displayRazorpay}>Pay 1 INR</button>
        </div>
    );
};

