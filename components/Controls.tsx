"use client";

import React, { useState } from "react";

export const Controls = () => {
    const [isVideoMode, setIsVideoMode] = useState(true); // สถานะสำหรับโหมด

    const handleVideoCapture = () => {
        console.log("เริ่มถ่ายวิดีโอ");
    };

    const handleToggleMode = () => {
        setIsVideoMode((prev) => !prev);
        console.log(isVideoMode ? "เปลี่ยนเป็นโหมดภาพนิ่ง" : "เปลี่ยนเป็นโหมดวิดีโอ");
    };

    return (
        <div className="controls-container fixed bottom-0 w-full flex justify-center items-center z-20 pb-4">
            {/* ปุ่มถ่ายวิดีโอ */}
            <button
                onClick={handleVideoCapture}
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition duration-300"
            >
                <span className="text-white font-semibold">Rec</span>
            </button>

            {/* สวิตช์สลับโหมด */}
            <div className="absolute right-4 flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={!isVideoMode} // เช็คสถานะโหมด
                        onChange={handleToggleMode}
                    />
                    <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-green-500 peer-focus:ring-2 peer-focus:ring-gray-500 transition-colors duration-300"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transform peer-checked:translate-x-5 transition-transform duration-300"></div>
                </label>
                <span className="ml-2 text-white text-sm">
                    {isVideoMode ? "วิดีโอ" : "ภาพนิ่ง"}
                </span>
            </div>
        </div>
    );
};
