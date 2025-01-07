import Link from 'next/link'; // ใช้ Link จาก next/link
import Image from 'next/image'; // ใช้ Image จาก next/image

// กำหนดประเภทสำหรับ Select Component
export const Select: React.FC = () => {
    const catNames = Array.from({ length: 12 }).fill("แมวเป้า") as string[]; // ชื่อแมวที่เป็น "แมวเป้า" ทุกปุ่ม

    return (
        <main className="relative flex flex-col items-center justify-center min-h-screen bg-black p-4">
            {/* รูปพื้นหลัง */}
            <div className="absolute inset-0 z-0 blur-sm">
                <Image
                    src="/images/cat-bg.jpg" // เปลี่ยนเป็นไฟล์รูปพื้นหลังของคุณ
                    alt="Background"
                    fill // ใช้เต็มหน้าจอ
                    priority // ให้โหลดภาพก่อนองค์ประกอบอื่น
                    className="object-cover w-full h-full"
                />
            </div>
            {/* ส่วนเนื้อหา */}
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white z-0">
                เลือกเจ้าเหมียวที่คุณชอบ
            </h1>
            {/* ถ้ายังไม่ได้เลือก Live จะเห็นกลุ่มปุ่ม 4x3 และปุ่ม M */}
            <div className="grid grid-cols-3 gap-3 mb-8 z-0">
                {catNames.map((name, index) => (
                    <Link
                        key={index}
                        href={`/Live${String(index + 1).padStart(2, "0")}`} // ใช้ href ของ next/link
                        className="w-24 h-32 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-center items-center overflow-hidden relative"
                    >
                        <Image
                            src="/images/live01.jpg" // ใช้ไฟล์ live01.jpg แทน
                            alt={`Live ${String(index + 1).padStart(2, "0")}`} // คำอธิบายของภาพ
                            width={256} // ขนาดของภาพที่แสดงในปุ่ม
                            height={256} // ขนาดของภาพที่แสดงในปุ่ม
                            priority
                            className="object-cover w-full h-full" // ขยายภาพให้เต็มกรอบ
                        />
                        {/* ชื่อแมว "แมวเป้า" */}
                        <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                            <div className="font-semibold">{name}</div>
                            <div className="font-bold text-sm">MEOW</div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* ปุ่ม M */}
            <Link
                href="/live13" // ไปยังหน้าสุดท้าย
                className="w-32 h-32 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex justify-center items-center overflow-hidden z-0"
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
