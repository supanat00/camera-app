import React from "react";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* กลุ่มปุ่ม 4x3 */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <button
            key={index}
            className="w-20 h-20 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            {String.fromCharCode(65 + index)} {/* แปลงเลขเป็นตัวอักษร A-M */}
          </button>
        ))}
      </div>
      {/* ปุ่มด้านล่าง */}
      <button className="w-20 h-20 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
        M {/* ปุ่มสุดท้ายเป็นตัวอักษร M */}
      </button>
    </main>
  );
}
