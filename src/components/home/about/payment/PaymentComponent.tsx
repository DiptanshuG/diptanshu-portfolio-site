// PaymentComponent.jsx
"use client";

import React, { useMemo, useState } from "react";
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

  const apiBase = useMemo(
    () => process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3005",
    []
  );

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
      // Fetch the payment details from Razorpay's payment ID (this API call will return detailed info about the payment)
      const paymentDetailsResponse = await axios.get(
        `/api/payments/${response.razorpay_payment_id}`
      );

      const {
        amount,
        currency,
        method: payment_method,
        status,
        created_at,
      } = paymentDetailsResponse.data;

      const paymentDetails = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        amount, // dynamic amount from the Razorpay response
        currency, // dynamic currency from the Razorpay response
        payment_method, // payment method from Razorpay (like UPI, card, etc.)
        status, // status like "success" or "failure"
        transaction_time: created_at, // Razorpay provides a creation time in its response
      };

      // Send payment details to your backend to save in the database
      const saveResponse = await axios.post(
        "/api/save-payment-details",
        paymentDetails
      );
      if (saveResponse.data.success) {
        toast.success("Payment details saved successfully!");
      } else {
        toast.error("Failed to save payment details.");
      }
    } catch (error) {
      toast.error("Error saving payment details.");
      console.error("Error saving payment details:", error);
    }

    try {
      const verifyResponse = await axios.post("/verify-payment", {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      // Handle verification response if needed
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  // const handlePaymentSuccess = async (response: any) => {

  //   toast.success("Payment successful!");
  //   try {
  //     const verifyResponse = await axios.post("/verify-payment", {
  //       razorpay_order_id: response.razorpay_order_id,
  //       razorpay_payment_id: response.razorpay_payment_id,
  //       razorpay_signature: response.razorpay_signature,
  //     });
  //     // Handle verification response if needed
  //   } catch (error) {
  //     // Handle verification error
  //     console.error("Error verifying payment:", error);
  //   }
  // };

  const displayRazorpay = async () => {
    setLoading(true);
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    let result;
    try {
      result = await axios.post(`${apiBase}/api/payments/create-order`, {
        amount: "1",
        currency: "INR",
        receipt: "receipt#1",
      });
    } catch (error) {
      toast.error("Server error. Please try again.");
      setLoading(false);
      return;
    }

    if (!result) {
      alert("Server error. Are you online?");
      setLoading(false);
      return;
    }

    const { amount, id: order_id, currency } = result.data;
    console.log({ order_id });

    const options = {
      key: "rzp_test_hJZef3AmwAFmeW",
      amount: amount.toString(),
      currency: currency,
      name: "Diptanshu",
      description: "Test Transaction",
      image:
        "https://res.cloudinary.com/dowcmx0gb/image/upload/v1716844087/projects/tpxe8wujdgokzwawjnzu.jpg",
      order_id,
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
    setLoading(false);
  };

  return (
    <section className="section-shell w-full fade-in">
      <div className="glass-surface relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 text-white">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-purple-500/10 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Support the craft
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Enjoying the work?
              </h3>
              <span className="pill text-xs md:text-sm">Razorpay Secure</span>
            </div>
            <p className="text-white/75 max-w-2xl text-sm md:text-base">
              Fuel the builds with a quick contribution. Every payment is routed
              through Razorpay with verified checkout for a smooth, safe
              experience.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/80">
              <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                  Latency
                </p>
                <p className="text-base font-semibold text-white">Fast, inline</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                  Security
                </p>
                <p className="text-base font-semibold text-white">
                  PCI-compliant
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-white/60">
                  Status
                </p>
                <p className="text-base font-semibold text-white">Live checkout</p>
              </div>
            </div>

            <div className="flex w-full md:w-auto items-center gap-3">
              <button
                className="group inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-all duration-200 hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={displayRazorpay}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? <Loader size={20} /> : "Buy me a coffee"}
                {!loading && (
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
