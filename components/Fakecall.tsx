"use client";
import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import Image from "next/image";

export interface FakecallHandle {
    playVideo: () => void;
    toggleRecVisibility: () => void; // ฟังก์ชันสำหรับควบคุมการแสดงผลของรูป rec
}

export const Fakecall = forwardRef<FakecallHandle>((_, ref) => {
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [showConnecting, setShowConnecting] = useState(true);
    const [isRecVisible, setIsRecVisible] = useState(false); // สถานะสำหรับการแสดงรูป rec

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowConnecting(false);
        }, 3000);

        const videoTimeout = setTimeout(() => {
            setShowVideo(true);
        }, 3000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(videoTimeout);
        };
    }, []);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
        setShowConnecting(false);
    };

    const playVideo = () => {
        const videoElement = document.querySelector("video");
        if (videoElement) {
            videoElement.play();
        }
    };

    // ฟังก์ชันที่ใช้เพื่อสลับการแสดงผลของรูป rec
    const toggleRecVisibility = () => {
        setIsRecVisible(prev => !prev);
    };

    useImperativeHandle(ref, () => ({
        playVideo,
        toggleRecVisibility, // ส่งฟังก์ชันนี้ไปยัง ref
    }));

    return (
        <div className="fakecall-container fixed top-0 left-0 w-full h-full bg-black z-0">
            {showConnecting && (
                <div className="fakecall-placeholder w-full h-full flex items-center justify-center bg-black">
                    <p className="text-white text-xl loading-text">กำลังเชื่อมต่อ...</p>
                </div>
            )}

            {showVideo && (
                <video
                    className="fakecall-video w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onCanPlay={handleVideoLoaded}
                >
                    <source src="/videos/catfake.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* รูป rec ที่จะแสดงและกระพริบ */}
            <Image
                src="/images/rec.png"
                alt="Rec"
                width="64" // ขนาดของภาพที่แสดงในปุ่ม
                height="39" // ขนาดของภาพที่แสดงในปุ่ม
                priority
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 animate-blink ${isRecVisible ? "block" : "none"}`}
            />
        </div>
    );
});

Fakecall.displayName = "Fakecall";
