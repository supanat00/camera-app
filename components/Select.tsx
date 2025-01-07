"use client";

import Link from 'next/link'; // ใช้ Link จาก next/link
import Image from 'next/image'; // ใช้ Image จาก next/image

export const Select = () => {
    return (
        <main className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* รูปพื้นหลัง */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/cat-bg.jpg" // เปลี่ยนเป็นไฟล์รูปพื้นหลังของคุณ
                    alt="Background"
                    fill={true} // ใช้เต็มหน้าจอ
                    quality={80} // ลดขนาดภาพเพื่อปรับประสิทธิภาพ
                    priority // ให้โหลดภาพก่อนองค์ประกอบอื่น
                    style={{ objectFit: "cover" }}
                />
            </div>
            {/* ส่วนเนื้อหา */}
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white z-10">
                เลือกเจ้าเหมียวที่คุณชอบ
            </h1>
            {/* ถ้ายังไม่ได้เลือก Live จะเห็นกลุ่มปุ่ม 4x3 และปุ่ม M */}
            <div className="grid grid-cols-3 gap-3 mb-8 z-10">
                {Array.from({ length: 12 }).map((_, index) => (
                    <Link
                        key={index}
                        href={`/Live${String(index + 1).padStart(2, "0")}`} // ใช้ href ของ next/link
                        className="w-24 h-24 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex justify-center items-center overflow-hidden"
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
                className="w-24 h-24 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex justify-center items-center overflow-hidden z-10"
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
