"use client";

import { useState } from "react";

export default function DesignPage() {
  const [charms, setCharms] = useState<string[]>([]);

  const addCharm = (charm: string) => {
    setCharms([...charms, charm]);
  };

  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Studio Thiết Kế ✨
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Danh sách charm */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-2xl mb-4">
            Chọn Charm
          </h2>

          <div className="grid grid-cols-2 gap-3">

            <button
              onClick={() => addCharm("❤️")}
              className="bg-pink-100 p-4 rounded-xl text-3xl"
            >
              ❤️
            </button>

            <button
              onClick={() => addCharm("⭐")}
              className="bg-pink-100 p-4 rounded-xl text-3xl"
            >
              ⭐
            </button>

            <button
              onClick={() => addCharm("🌸")}
              className="bg-pink-100 p-4 rounded-xl text-3xl"
            >
              🌸
            </button>

            <button
              onClick={() => addCharm("🐻")}
              className="bg-pink-100 p-4 rounded-xl text-3xl"
            >
              🐻
            </button>

          </div>
        </div>

        {/* Vòng tay */}
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <h2 className="font-bold text-2xl mb-6">
            Vòng Tay Của Bạn
          </h2>

          <div className="border-4 border-pink-300 rounded-full w-64 h-64 mx-auto flex items-center justify-center">
            <div className="flex flex-wrap gap-2 text-4xl justify-center">
              {charms.map((c, index) => (
                <span key={index}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Thành phẩm */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-2xl mb-4">
            Thành Phẩm
          </h2>

          <div className="text-4xl flex flex-wrap gap-2">
            {charms.map((c, index) => (
              <span key={index}>{c}</span>
            ))}
          </div>

          <button
            className="mt-6 w-full bg-pink-500 text-white py-3 rounded-xl"
          >
            Lưu Thiết Kế
          </button>
        </div>

      </div>
    </main>
  );
}