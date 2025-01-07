"use client"
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: { exact: "environment" }
};

const fallbackConstraints = {
    width: 1920,
    height: 1080,
    facingMode: { exact: "user" }
};

export const Live01 = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcamRef = useRef<Webcam>(null);
    const [url, setUrl] = useState<string | null>(null);
    const [mirrored, setMirrored] = useState<boolean>(false);
    const [constraints, setConstraints] = useState(videoConstraints);
    const [isPortrait, setIsPortrait] = useState<boolean>(true);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setUrl(imageSrc);
        }
    }, [webcamRef]);

    useEffect(() => {
        const checkCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints });
                setConstraints(videoConstraints);
                setMirrored(false);
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
        <>
            {!isCaptureEnable && (
                <button onClick={() => setCaptureEnable(true)}>start</button>
            )}
            {isCaptureEnable && (
                <div className={'container'}>
                    <div className={'endButton'}>
                        <button onClick={() => setCaptureEnable(false)}>end</button>
                    </div>
                    <div className={'webcamContainer'}>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/webp"
                            videoConstraints={constraints}
                            mirrored={mirrored}
                            className={isPortrait ? 'portraitWebcam' : 'landscapeWebcam'}
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                left: "50%",
                                marginLeft: "-50%",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                        />
                    </div>
                    <button onClick={capture} className={'captureButton'}>capture</button>
                    {url && (
                        <>
                            <div className={'buttonContainer'}>
                                <button
                                    onClick={() => {
                                        setUrl(null);
                                    }}
                                >
                                    delete
                                </button>
                            </div>
                            <div className={'imageContainer'}>
                                <Image src={url} alt="Screenshot" width={1920} height={1080} className={isPortrait ? 'portraitImage' : 'landscapeImage'} />
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};