"use client"
import React, { useState, useEffect } from "react";

export const Fakecall = () => {
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [showVideo, setShowVideo] = useState(false);  // เปลี่ยนค่าเริ่มต้นเป็น false
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [showConnecting, setShowConnecting] = useState(true);  // ใช้เพื่อแสดงข้อความกำลังเชื่อมต่อ

    useEffect(() => {
        // แสดงข้อความ "กำลังเชื่อมต่อ..." เป็นเวลา 3 วินาที
        const timeout = setTimeout(() => {
            setShowConnecting(false); // ซ่อนข้อความหลังจาก 3 วินาที
        }, 3000);

        // เมื่อคอมโพเนนต์โหลด ให้เริ่มแสดงวิดีโอหลังจาก 3 วินาที
        const videoTimeout = setTimeout(() => {
            setShowVideo(true);  // ทำให้วิดีโอเริ่มแสดงหลังจาก 3 วินาที
        }, 3000);

        return () => {
            clearTimeout(timeout); // ลบ timeout เมื่อคอมโพเนนต์ถูกลบ
            clearTimeout(videoTimeout); // ลบ videoTimeout
        };
    }, []); // ทำงานแค่ครั้งเดียวเมื่อคอมโพเนนต์ถูกโหลด

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
        setShowConnecting(false);  // ซ่อนข้อความเมื่อวิดีโอโหลดเสร็จ
    };

    return (
        <div className="fakecall-container fixed top-0 left-0 w-full h-full bg-black z-0">
            {/* ภาพหน้าปกเบลอและข้อความกำลังเชื่อมต่อ */}
            {showConnecting && (
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
