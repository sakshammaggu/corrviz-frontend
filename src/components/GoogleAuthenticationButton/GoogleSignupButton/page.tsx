"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

interface GoogleSignupButtonProps {
    onClick?: () => void;
    isLoading?: boolean;
}

const GoogleSignupButton: React.FC<GoogleSignupButtonProps> = ({
    onClick,
    isLoading = false,
}) => {
    return (
        <Button
            onClick={onClick}
            className={`w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <FcGoogle className="w-5 h-5 mr-2" />
            {isLoading
                ? "Processing..."
                : "Sign Up with Google"}
        </Button>
    );
};

export default GoogleSignupButton;