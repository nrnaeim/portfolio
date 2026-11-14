import React from "react";
import { ToastContainer } from "react-toastify";

type ToastProviderProps = {
    children: React.ReactNode;
};

export default function ToastProvider({ children }: ToastProviderProps) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
}
