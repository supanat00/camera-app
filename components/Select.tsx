"use client";

import Link from 'next/link'; // ใช้ Link จาก next/link
import Image from 'next/image'; // ใช้ Image จาก next/image

export const Select = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* ถ้ายังไม่ได้เลือก Live จะเห็นกลุ่มปุ่ม 4x3 และปุ่ม M */}
            <div className="grid grid-cols-3 gap-3 mb-8">
                {Array.from({ length: 12 }).map((_, index) => (
                    <Link
                        key={index}
                        href={`/live${String(index + 1).padStart(2, "0")}`} // ใช้ href ของ next/link
                        className="w-20 h-20 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition flex justify-center items-center overflow-hidden"
                    >
                        <Image
                            src="/images/live01.jpg" // ใช้ไฟล์ live01.jpg แทน
                            alt={`Live ${String(index + 1).padStart(2, "0")}`} // คำอธิบายของภาพ
                            width={256} // ขนาดของภาพที่แสดงในปุ่ม
                            height={256} // ขนาดของภาพที่แสดงในปุ่ม
                            className="object-cover w-full h-full" // ขยายภาพให้เต็มกรอบ
                        />
                    </Link>
                ))}
            </div>
            {/* ปุ่ม M */}
            <Link
                href="/live13" // ไปยังหน้าสุดท้าย
                className="w-20 h-20 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition flex justify-center items-center overflow-hidden"
            >
                <Image
                    src="/images/live01.jpg" // ใช้ไฟล์ live01.jpg แทน
                    alt="Live 13"
                    width={256} // ขนาดของภาพที่แสดงในปุ่ม
                    height={256} // ขนาดของภาพที่แสดงในปุ่ม
                    className="object-cover w-full h-full" // ขยายภาพให้เต็มกรอบ
                />
            </Link>
        </main>
    );
};
