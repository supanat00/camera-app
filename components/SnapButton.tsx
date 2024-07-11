"use client"
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: { exact: "environment" }
};

export const SnapButton = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

    return (
        <>
            <header>
                <h1>camera app</h1>
            </header>
            {isCaptureEnable || (
                <button onClick={() => setCaptureEnable(true)}>start</button>
            )}
            {isCaptureEnable && (
                <>
                    <div>
                        <button onClick={() => setCaptureEnable(false)}>end </button>
                    </div>
                    <div>
                        <Webcam
                            audio={false}
                            width={1920}
                            height={1080}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                    </div>
                    <button onClick={capture}>capture</button>
                </>
            )}
            {url && (
                <>
                    <div>
                        <button
                            onClick={() => {
                                setUrl(null);
                            }}
                        >
                            delete
                        </button>
                    </div>
                    <div>
                        <Image src={url} alt="Screenshot" />
                    </div>
                </>
            )}
        </>
    );
};
