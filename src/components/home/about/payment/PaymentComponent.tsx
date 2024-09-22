// PaymentComponent.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/components/Loader/Loader";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentComponent() {
  const [loading, setLoading] = useState(false);

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
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
  const handlePaymentSuccess = async (response: any) => {
    toast.success("Payment successful!");
    try {
      const verifyResponse = await axios.post("/verify-payment", {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      // Handle verification response if needed
    } catch (error) {
      // Handle verification error
      console.error("Error verifying payment:", error);
    }
  };

  const displayRazorpay = async () => {
    setLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      "https://portfolio-backend-1-ne8e.onrender.com/api/payment/create-order",
      {
        amount: "1",
        currency: "INR",
        receipt: "receipt#1",
      }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_AHgxGmylAlIYoB",
      amount: amount.toString(),
      currency: currency,
      name: "Diptanshu",
      description: "Test Transaction",
      image:
        "https://res.cloudinary.com/dowcmx0gb/image/upload/v1716844087/projects/tpxe8wujdgokzwawjnzu.jpg",
      order_id: order_id,
      handler: handlePaymentSuccess,
      modal: {
        ondismiss: () => {
          setLoading(false);
          toast.info("Payment cancelled");
        },
      },
      prefill: {
        name: "Diptanshu Bhawsar",
        email: "your-email@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button
        className="delay bg-[#6D37FF] md:w-fit w-full font-bold text-white py-2 md:mr-8 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
        data-delay="0.5"
        style={{ animationDelay: "0.5s" }}
        onClick={displayRazorpay}
      >
        {loading ? <Loader size={24} /> : "Support My Work: Buy me a Coffee"}
      </button>
    </div>
  );
}
