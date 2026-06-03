export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-pink-600">
            ThichDoHandmade ✨
          </h1>

          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#">Trang chủ</a>
            <a href="#">Thiết kế</a>
            <a href="#">Cửa hàng</a>
            <a href="#">Liên hệ</a>
          </nav>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border">
              Đăng nhập
            </button>

            <button className="px-4 py-2 rounded-lg bg-pink-500 text-white">
              Mở Shop
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-12 text-white">
          <h2 className="text-5xl font-bold mb-6">
            Tự thiết kế đồ handmade theo ý bạn
          </h2>

          <p className="text-xl mb-8">
            Chọn charm • Chọn hạt • Chọn dây • Xem trước thành phẩm
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-xl font-bold">
              Thiết kế ngay
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              Khám phá shop
            </button>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <input
          type="text"
          placeholder="🔍 Tìm charm, hạt, vòng tay..."
          className="w-full p-4 rounded-2xl border bg-white"
        />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8">
          Danh mục nổi bật
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">
            <div className="text-5xl mb-4">📿</div>
            <h3 className="font-bold text-xl">Vòng tay</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="font-bold text-xl">Vòng cổ</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">
            <div className="text-5xl mb-4">🧸</div>
            <h3 className="font-bold text-xl">Charm</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="font-bold text-xl">Quà Handmade</h3>
          </div>
        </div>
      </section>

      {/* Shops */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Shop nổi bật
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl">
              ⭐ Anna Handmade
            </h3>

            <p className="text-gray-500 mt-2">
              120 đơn hoàn thành
            </p>

            <p className="text-yellow-500 mt-2">
              ★★★★★ 4.9
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl">
              ⭐ Sakura Studio
            </h3>

            <p className="text-gray-500 mt-2">
              210 đơn hoàn thành
            </p>

            <p className="text-yellow-500 mt-2">
              ★★★★★ 5.0
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl">
              ⭐ Craft House
            </h3>

            <p className="text-gray-500 mt-2">
              98 đơn hoàn thành
            </p>

            <p className="text-yellow-500 mt-2">
              ★★★★☆ 4.8
            </p>
          </div>
        </div>
      </section>

      {/* Studio Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl p-10 shadow">
          <h2 className="text-3xl font-bold mb-4">
            Studio Thiết Kế
          </h2>

          <p className="text-gray-600 mb-6">
            Sắp ra mắt: Kéo thả charm, hạt và dây để tạo sản phẩm riêng.
          </p>

          <button className="bg-pink-500 text-white px-6 py-3 rounded-xl">
            Trải nghiệm sớm
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-20 border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500">
          © 2026 ThichDoHandmade - Handmade Marketplace
        </div>
      </footer>
    </main>
  );
}