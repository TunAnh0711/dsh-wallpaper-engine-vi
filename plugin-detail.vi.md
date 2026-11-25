# Wallpaper Engine (Bản Việt hóa)

Đưa toàn bộ hình nền **Scene**, **Web** và **Video** từ **Wallpaper Engine** trên máy của bạn vào giao diện chat **DeepSeek Harness (DSH)**, đi kèm hiệu ứng **kính lỏng (Liquid Glass)** kiểu iOS, tùy biến phông chữ, linh vật (Mascot) và bộ cài đặt sẵn (Preset) dễ chia sẻ. Plugin không đăng ký tool cho agent, không chèn prompt — **0 chi phí token cho mô hình**.

![Hình nền và kính lỏng trong giao diện DSH](assets/readme/hero-light.png)

## Tính năng chính

- **Hình nền**: Render thời gian thực **Scene** và **Web** qua engine mã nguồn mở tích hợp **WebWallGL** (hạt, xương puppet, SceneScript, phản ứng âm thanh, tương tác chuột), tự động hạ cấp khi lỗi; phát **Video** trực tiếp kèm giới hạn FPS bằng FFmpeg; hỗ trợ tải ảnh / video cục bộ và thư mục dự án Wallpaper Engine.
- **Giao diện Kính lỏng**: Hiệu ứng kính lỏng cho cửa sổ cài đặt, khung chat và thanh bên; tùy chỉnh màu sắc, độ mờ đục, độ mờ, viền và phông chữ. Gói con `wallpaper-engine-glass` tách biệt, có thể tắt riêng trong Plugin Manager.
- **Đa ngôn ngữ (mặc định Tiếng Việt)**: Việt hóa 100% giao diện plugin và các gói con; hỗ trợ chuyển nhanh giữa **Tiếng Việt / English / 中文 / Theo DSH** ngay trong tab **Hệ thống**.
- **Tiện ích mở rộng**: Linh vật, ảnh đại diện cuộc trò chuyện, hiệu ứng nhấp / đuôi chuột, thị sai 3D và tùy chọn liên kết thú cưng màn hình (`dsh-pet-dshwe`).
- **Thư viện hình nền**: Lọc theo loại / phân loại nội dung / hướng màn hình, ẩn / khôi phục, tự động xoay vòng, nhập / xuất toàn bộ preset giao diện.

## Cài đặt nhanh

Yêu cầu: **DSH 0.2 kernel** (`^0.2.0-rc.1`), **Node.js ≥ 22.12.0**, và Wallpaper Engine (chỉ cần nếu dùng hình nền WE).

1. Thoát hoàn toàn DeepSeek Harness.
2. Trong thư mục mã nguồn đã clone, chạy:

```sh
npm ci --no-audit --no-fund
node scripts/build-client.mjs
```

3. Mở lại DeepSeek Harness → **Cài đặt → Wallpaper Engine → Thư viện hình nền**, hoặc kéo dây linh vật ở đầu khung chat.

Xem hướng dẫn đầy đủ tại [README.md](README.md) · [English](README.en.md) · [中文](README.zh.md).
