"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FakecallHandle, Fakecall } from "./Fakecall"; // Adjust import to match your file structure

interface IncomingCallScreenProps {
    onAccept: () => void;
    onReject: () => void;
}

export const IncomingCallScreen: React.FC<IncomingCallScreenProps> = ({
    onAccept,
    onReject,
}) => {
    const fakecallRef = useRef<FakecallHandle>(null);

    const handleAccept = () => {
        if (fakecallRef.current) {
            console.log("Toggling Rec Visibility");
            fakecallRef.current.toggleRecVisibility(); // Call the toggle function
        }

        onAccept();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-between items-center z-50">
            <div className="absolute inset-0 w-full h-full blur-sm z-50">
                <Image
                    src="/images/catcall.jpg"
                    alt="Incoming Call Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className="mt-16 text-white text-2xl z-50 flex flex-col items-center">
                <div>แมวเป้า</div>
                <div className="text-sm text-gray-300 mt-2">Incoming Call...</div>
            </div>

            <div className="absolute bottom-20 flex justify-around w-4/5 max-w-sm items-center z-50">
                <div className="flex flex-col items-center animate-bounce-slow">
                    <button
                        onClick={onReject}
                        className="w-16 h-16 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center"
                    >
                        {/* Placeholder for the future icon */}
                    </button>
                    <span className="mt-2 text-sm text-white">Decline</span>
                </div>

                <div className="flex flex-col items-center animate-bounce-fast">
                    <button
                        onClick={handleAccept}
                        className="w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
                    >
                        {/* Placeholder for the future icon */}
                    </button>
                    <span className="mt-2 text-sm text-white">Accept</span>
                </div>
            </div>

            <Fakecall ref={fakecallRef} />
        </div>
    );
};
