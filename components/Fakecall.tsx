"use client"
import React, { useState, useEffect } from "react";

export const Fakecall = () => {
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        // แสดงข้อความกำลังเชื่อมต่อจนกว่าวิดีโอจะโหลดเสร็จ
        setShowVideo(true);
    }, []);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className="fakecall-container fixed top-0 left-0 w-full h-full bg-black z-0">
            {/* ภาพหน้าปกเบลอและข้อความกำลังเชื่อมต่อ */}
            {!isVideoLoaded && (
                <div className="fakecall-placeholder w-full h-full flex items-center justify-center bg-black">
                    <p className="text-white text-xl loading-text">กำลังเชื่อมต่อ...</p>
                </div>
            )}

            {/* วิดีโอเมื่อโหลดเสร็จ */}
            {showVideo && (
                <video
                    className="fakecall-video w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onCanPlay={handleVideoLoaded} // ตรวจสอบว่าโหลดวิดีโอเสร็จ
                >
                    <source src="/videos/catfake.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};
