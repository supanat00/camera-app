"use client"
import React, { useState, useRef } from "react";
import { Camera } from "@/components/Camera";
import { Fakecall } from "@/components/Fakecall";
import { Controls } from "@/components/Controls";
import { IncomingCallScreen } from "@/components/IncomingCallScreen";

export default function Live01() {
    const [callAccepted, setCallAccepted] = useState(false);
    const fakeCallRef = useRef(null);

    const handleAcceptCall = () => {
        setCallAccepted(true);
        if (fakeCallRef.current) {
            fakeCallRef.current.playVideo(); // เรียกใช้ฟังก์ชันใน Fakecall เพื่อเริ่มเล่นวิดีโอ
        }
    };

    const handleRejectCall = () => {
        setCallAccepted(false);
        // หากต้องการย้อนกลับไปหน้าก่อน
        window.history.back();
    };

    return (
        <main className="Live01 relative">
            {!callAccepted && (
                <IncomingCallScreen
                    onAccept={handleAcceptCall}
                    onReject={handleRejectCall}
                />
            )}
            <Camera />
            <Fakecall ref={fakeCallRef} />
            <Controls />
        </main>
    );
}
