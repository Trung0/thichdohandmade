export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">
  ThichDoHandmade ✨
</h1>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
            Thiết kế ngay
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Tự thiết kế đồ handmade của riêng bạn
        </h2>

        <p className="text-gray-600 text-xl">
          Chọn charm • Chọn hạt • Chọn dây • Đặt làm
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          📿 Vòng tay
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          💎 Vòng cổ
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          🧸 Charm
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          🎁 Quà handmade
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Shop nổi bật
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            ⭐ Anna Handmade
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐ Sakura Studio
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐ Craft House
          </div>
        </div>
      </section>
    </main>
  );
}