"use client";
import React from "react";
import Image from "next/image";

// กำหนดประเภทของ props
interface IncomingCallScreenProps {
    onAccept: () => void; // ฟังก์ชันสำหรับปุ่มรับสาย
    onReject: () => void; // ฟังก์ชันสำหรับปุ่มปฏิเสธสาย
}

export const IncomingCallScreen: React.FC<IncomingCallScreenProps> = ({
    onAccept,
    onReject,
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-between items-center z-50">
            {/* ภาพพื้นหลังแบบเต็มจอ */}
            <div className="absolute inset-0 w-full h-full blur-sm">
                <Image
                    src="/images/catcall.jpg" // ใส่ path รูปภาพที่ต้องการ
                    alt="Incoming Call Background"
                    layout="fill"
                    objectFit="cover"
                    priority // ช่วยเพิ่มประสิทธิภาพการโหลดภาพ
                />
            </div>

            {/* ชื่อคนโทรเข้า */}
            <div className="mt-16 text-white text-2xl z-50 flex flex-col items-center">
                <div>แมวเป้า</div>
                <div className="text-sm text-gray-300 mt-2">Incoming Call...</div>
            </div>

            {/* ปุ่มรับสายและปฏิเสธสาย */}
            <div className="absolute bottom-20 flex justify-around w-4/5 max-w-sm items-center">
                {/* ปุ่มปฏิเสธสาย */}
                <div className="flex flex-col items-center animate-bounce-slow">
                    <button
                        onClick={onReject}
                        className="w-16 h-16 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center"
                    >
                        {/* Placeholder สำหรับอนาคตที่จะเพิ่มไอคอน */}
                    </button>
                    <span className="mt-2 text-sm text-white">Decline</span>
                </div>

                {/* ปุ่มรับสาย */}
                <div className="flex flex-col items-center animate-bounce-fast">
                    <button
                        onClick={onAccept}
                        className="w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
                    >
                        {/* Placeholder สำหรับอนาคตที่จะเพิ่มไอคอน */}
                    </button>
                    <span className="mt-2 text-sm text-white">Accept</span>
                </div>
            </div>
        </div>
    );
};

// เพิ่มคลาส CSS สำหรับการขยับของปุ่ม
