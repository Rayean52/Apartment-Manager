// src/pages/PaymentSuccess.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
    const { state: paymentData } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!paymentData) {
            toast.error("No payment data found.");
            navigate("/make-payment");
            return;
        }

        // Save to DB
        fetch("http://localhost:3000/payment-history", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Payment recorded successfully.");
                } else {
                    toast.error("Payment failed to save.");
                }
            })
            .catch(() => {
                toast.error("Server error.");
            });
    }, [paymentData, navigate]);

    if (!paymentData) return null;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-white text-center px-6">
            <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
            <p className="text-lg text-gray-700 mb-6">
                You have paid <strong>{paymentData.finalAmount}৳</strong> for <strong>{paymentData.month}</strong>.
            </p>
            <button
                onClick={() => navigate("/")}
                className="btn btn-success"
            >
                Back to Home
            </button>
        </div>
    );
};

export default PaymentSuccess;
