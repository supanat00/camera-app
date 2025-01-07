"use client";
import React, { useState, useRef } from "react";
import { Camera } from "@/components/Camera";
import { Fakecall, FakecallHandle } from "@/components/Fakecall";
import { Controls } from "@/components/Controls";
import { IncomingCallScreen } from "@/components/IncomingCallScreen";

export default function Live01() {
    const [callAccepted, setCallAccepted] = useState(false);
    const fakeCallRef = useRef<FakecallHandle>(null);

    const handleAcceptCall = () => {
        setCallAccepted(true);
        if (fakeCallRef.current) {
            fakeCallRef.current.playVideo(); // เรียกฟังก์ชัน playVideo ได้แล้ว
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
