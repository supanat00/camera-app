"use client";
import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: { exact: "user" }
};

const fallbackConstraints = {
    width: 1920,
    height: 1080,
    facingMode: { exact: "environment" }
};

export const Camera = () => {
    const [constraints, setConstraints] = useState(videoConstraints);
    const [mirrored, setMirrored] = useState(false);
    const [isPortrait, setIsPortrait] = useState(true);

    const webcamRef = useRef<Webcam>(null);

    useEffect(() => {
        const checkCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints });
                setConstraints(videoConstraints);
                setMirrored(true);
                mediaStream.getTracks().forEach(track => track.stop());
            } catch (error) {
                setConstraints(fallbackConstraints);
                setMirrored(true);
            }
        };

        const handleOrientationChange = () => {
            if (window.innerHeight > window.innerWidth) {
                setIsPortrait(true);
            } else {
                setIsPortrait(false);
            }
        };

        checkCamera();
        handleOrientationChange();
        window.addEventListener("resize", handleOrientationChange);

        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, []);

    return (
        <div className="camera-container absolute top-0 right-0 m-4 z-10">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/webp"
                videoConstraints={constraints}
                mirrored={mirrored}
                className={isPortrait ? 'portraitWebcam' : 'landscapeWebcam'}
                style={{
                    width: "120px",  // กำหนดความกว้างของกรอบลดลง 20%
                    height: "160px", // กำหนดความสูงของกรอบลดลง 20%
                    objectFit: "cover", // ให้ภาพครอบคลุมกรอบโดยไม่ผิดเพี้ยน
                    objectPosition: "center"
                }}
            />
        </div>
    );
};
