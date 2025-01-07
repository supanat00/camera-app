"use client"
import React, { useState, useEffect } from "react";

export const Fakecall = () => {
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [countdown, setCountdown] = useState(5); // ตัวอย่างนับถอยหลัง
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        // เริ่มต้นนับถอยหลัง
        const countdownInterval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(countdownInterval);
                    setIsCameraReady(true);
                    setShowVideo(true);  // เริ่มแสดงวิดีโอเมื่อพร้อม
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdownInterval); // ทำความสะอาดเมื่อคอมโพเนนต์ถูกลบ
    }, []);

    return (
        <div className="fakecall-container fixed top-0 left-0 w-full h-full bg-black z-0">
            {/* ภาพหน้าปกเบลอ */}
            {!isCameraReady}

            {/* วิดีโอเมื่อพร้อม */}
            {showVideo && (
                <video
                    className="fakecall-video w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/catfake.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* การนับถอยหลัง */}
            {countdown > 0 && (
                <div className="countdown-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center">
                        <p className="text-white text-xl mb-2">กำลังเชื่อมต่อ...</p>
                        <p className="text-white text-lg">{countdown}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
