"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
        router.push("/"); 
    };

    return (
        <Button
            onClick={handleLogout}
            className="text-md font-medium bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5"
        >
            Logout
        </Button>
    );
};

export default LogoutButton;