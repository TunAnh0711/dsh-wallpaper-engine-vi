<div align="center">

<p>
  <a href="README.md"><img src="https://img.shields.io/badge/🇻🇳_Tiếng_Việt-Active-8fd6a0?style=for-the-badge&labelColor=5a544a" alt="Tiếng Việt"></a>
  <a href="README.en.md"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-lang-en-dark.png"><img src="assets/readme/key-lang-en-light.png" alt="English" height="44"></picture></a>
  <a href="README.zh.md"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-lang-zh-dark.png"><img src="assets/readme/key-lang-zh-light.png" alt="中文" height="44"></picture></a>
  <a href="README.beginner.md"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-lang-start-dark.png"><img src="assets/readme/key-lang-start-light.png" alt="Hướng dẫn người mới" height="44"></picture></a>
</p>

<h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/readme/hero-dark.png">
    <img src="assets/readme/hero-light.png" alt="DSH Wallpaper Engine — Bản Việt hóa" width="1440">
  </picture>
</h1>

[![VI Stars](https://img.shields.io/github/stars/TunAnh0711/dsh-wallpaper-engine-vi?style=flat-square&logo=github&label=VI%20Repo%20Stars&color=ffd84a&labelColor=5a544a)](https://github.com/TunAnh0711/dsh-wallpaper-engine-vi/stargazers) [![Upstream Stars](https://img.shields.io/github/stars/elysia395/dsh-wallpaper-engine?style=flat-square&label=Upstream%20Stars&color=ffd84a)](https://github.com/elysia395/dsh-wallpaper-engine/stargazers) [![License: MIT](https://img.shields.io/badge/License-MIT-8fd6a0?style=flat-square&labelColor=5a544a)](LICENSE) [![Language](https://img.shields.io/badge/Ng%C3%B4n%20ng%E1%BB%AF-Ti%E1%BA%BFng%20Vi%E1%BB%87t%20%7C%20EN%20%7C%20ZH-8fd6a0?style=flat-square&labelColor=5a544a)](#điểm-nổi-bật-bản-việt-hóa)

<p>
  <a href="https://trendshift.io/repositories/170341" target="_blank"><img src="https://raw.githubusercontent.com/elysia395/dsh-wallpaper-engine/badges/trendshift-daily.svg" alt="Trendshift · JavaScript daily best rank" width="250" height="55"></a>
  <a href="https://trendshift.io/repositories/170341" target="_blank"><img src="https://raw.githubusercontent.com/elysia395/dsh-wallpaper-engine/badges/trendshift-weekly.svg" alt="Trendshift · JavaScript weekly best rank" width="250" height="55"></a>
</p>

<p>
  <a href="#cài-đặt-nhanh"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-get-dark.png"><img src="assets/readme/key-get-light.png" alt="Cài đặt GET" height="48"></picture></a>
  <a href="README.beginner.md"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-setup-dark.png"><img src="assets/readme/key-setup-light.png" alt="Hướng dẫn SETUP" height="48"></picture></a>
  <a href="docs/README.md"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-docs-dark.png"><img src="assets/readme/key-docs-light.png" alt="Tài liệu DOCS" height="48"></picture></a>
  <a href="https://github.com/TunAnh0711/dsh-wallpaper-engine-vi/releases"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/readme/key-release-dark.png"><img src="assets/readme/key-release-light.png" alt="Phát hành RELEASE" height="48"></picture></a>
</p>

</div>

<h2 id="giới-thiệu">📖 Giới thiệu</h2>

Đưa toàn bộ hình nền **Scene**, **Web** và **Video** từ **Wallpaper Engine** trên máy của bạn vào giao diện trò chuyện **DeepSeek Harness (DSH)**, kết hợp hiệu ứng **Kính lỏng (Liquid Glass)** phong cách iOS, tùy chỉnh phông chữ, linh vật và các preset giao diện dễ dàng chia sẻ.

Plugin **không** đăng ký công cụ cho agent và **không** chèn bất kỳ prompt nào — **0 chi phí token cho mô hình AI**.

> **🇻🇳 Bản Việt hóa đầy đủ bởi [TunAnh0711](https://github.com/TunAnh0711) (`@07th_11`)** dựa trên dự án gốc [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine):
> - Việt hóa **100% giao diện** (1.254 chuỗi cho gói chính + 8 gói con).
> - **Mặc định Tiếng Việt ngay khi mở DSH**, đồng thời hỗ trợ chuyển tức thì giữa **Tiếng Việt / English / 中文 / Theo DSH (Tự động)** ngay trong tab **Hệ thống → Ngôn ngữ giao diện** (lưu bền vững vào `~/.dsh-wallpaper-engine/config.json`).

<p align="center">
  <a id="xem-trước" href="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/main-interface.gif">
    <img src="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/main-interface.gif" alt="Minh họa hình nền, kính lỏng và linh vật trong giao diện DSH" width="960">
  </a>
</p>

<p align="center"><sub>Giao diện thực tế; ảnh minh họa có thể khác nhẹ so với phiên bản Việt hóa hiện tại.</sub></p>

<h2 id="mục-lục">📑 Mục lục</h2>

<table>
  <tr>
    <td width="40%" valign="middle">
      <ul>
        <li><a href="#xem-trước">Xem trước</a> · <a href="#tính-năng-chính">Tính năng chính</a> · <a href="#định-dạng-hỗ-trợ">Định dạng hỗ trợ</a></li>
        <li><a href="#cài-đặt-nhanh">Cài đặt nhanh</a> · <a href="#sử-dụng">Sử dụng</a> · <a href="#tương-thích-và-giới-hạn">Tương thích &amp; giới hạn</a></li>
        <li><a href="#phát-triển-và-đóng-góp">Phát triển &amp; đóng góp</a> · <a href="#tri-ân">Tri ân</a></li>
        <li><a href="#ủng-hộ">Ủng hộ tác giả Việt hóa</a> · <a href="#cộng-đồng">Cộng đồng</a></li>
      </ul>
    </td>
    <td width="30%" align="center" valign="middle">
      <a href="assets/readme/mascot-eating-rice-1280x1784.jpg">
        <img src="assets/readme/mascot-eating-rice-1280x1784.jpg" alt="Minh họa linh vật" width="320">
      </a>
    </td>
    <td id="ủng-hộ" width="30%" align="center" valign="middle">
      <a href="lib/about/donate-vi.jpg"><img src="lib/about/donate-vi.jpg" alt="QR ủng hộ TunAnh0711 (MB Bank)" width="240"></a>
      <br><strong>☕ Ủng hộ TunAnh0711 (@07th_11)</strong>
      <br><sub>MB Bank · TRAN DANG TUAN ANH · STK 320382<br>Dự án mã nguồn mở miễn phí, ủng hộ hoàn toàn tự nguyện ❤️</sub>
    </td>
  </tr>
</table>

<h2 id="tính-năng-chính">✨ Tính năng chính</h2>

- **Hình nền**: Render **Scene / Web** thời gian thực bằng engine mã nguồn mở tích hợp **WebWallGL** (hạt, xương puppet, SceneScript, phản ứng âm thanh, tương tác chuột), tự động hạ cấp sang MP4 nhúng hoặc khung tĩnh khi lỗi; phát **Video** trực tiếp; hỗ trợ tải ảnh / video cục bộ và thư mục dự án WE.
- **Giao diện Kính lỏng**: Kính lỏng cho cửa sổ cài đặt, khung trò chuyện và thanh bên; tùy chỉnh màu sắc, độ mờ đục, độ mờ, viền, bo góc và phông chữ.
- **Gói con Kính lỏng tách biệt**: `wallpaper-engine-glass` là gói con độc lập, có thể tắt riêng trong Plugin Manager để quay về giao diện gốc của DSH mà vẫn giữ nguyên hình nền, phông chữ và linh vật.
- **Đa ngôn ngữ linh hoạt**: Mặc định **Tiếng Việt**, chuyển nhanh **Tiếng Việt / English / 中文 / Theo DSH** không cần tải lại trang.
- **Tiện ích mở rộng**: Linh vật kéo dây, ảnh đại diện phiên chat, hiệu ứng nhấp / đuôi chuột, thị sai 3D; hỗ trợ tùy chọn liên kết thú cưng màn hình [dsh-pet-dshwe](https://github.com/Fish-under-sea/dsh-pet-dshwe).
- **Thư viện hình nền & Tiết kiệm pin**: Lọc theo loại / phân loại nội dung / hướng màn hình, ẩn & khôi phục, tự động xoay vòng, nhập / xuất toàn bộ preset; tự tạm dừng khi bị che / thu nhỏ / dùng pin, giới hạn FPS bằng FFmpeg, phổ âm thanh hệ thống & Now Playing.

<h2 id="định-dạng-hỗ-trợ">🎬 Định dạng hình nền được hỗ trợ</h2>

| Loại | Cách xử lý trong DSH | Hỗ trợ |
|---|---|---|
| **Scene (Cảnh)** | Render thời gian thực bằng WebWallGL tích hợp, tự động hạ cấp theo chuỗi dự phòng khi lỗi | Hỗ trợ, không cần mở WE chạy nền |
| **Web (Trang web)** | Gắn trang web, inject WE API và cách ly sandbox | Hỗ trợ; hiệu quả tùy thuộc trình duyệt |
| **Video** | Phát trực tiếp trên trình duyệt, hỗ trợ chuyển mã, giới hạn FPS và tạm dừng | Hỗ trợ |
| **Picture (Ảnh / Trình chiếu)** | Đọc thư mục ảnh dự án `preset` của WE và tự động chuyển ảnh mượt cục bộ | Hỗ trợ; ảnh lưu hoàn toàn trên máy |
| **Ảnh / Video tự tải lên** | Tải lên JPG / PNG / MP4 từ máy tính | Hỗ trợ, lưu cục bộ trên máy |

> Hình nền loại **Application** yêu cầu khởi chạy phần mềm bên thứ ba nên **không được hỗ trợ**, sẽ không xuất hiện trong thư viện hoặc danh sách xoay vòng.

<h2 id="cài-đặt-nhanh">🚀 Cài đặt nhanh</h2>

Yêu cầu: **Node.js ≥ 22.12.0**, **DSH 0.2 kernel** (bao gồm `0.2.0-rc.1/rc.2`, `0.2.2-rc.3+`) và **pnpm**. **Thoát hoàn toàn DeepSeek Harness** (kể cả dưới khay hệ thống) trước khi cài đặt.

```sh
# 1. Clone kho mã nguồn bản Việt hóa
git clone https://github.com/TunAnh0711/dsh-wallpaper-engine-vi.git
cd dsh-wallpaper-engine-vi

# 2. Cài dependencies và build toàn bộ client + gói con
npm ci --no-audit --no-fund
node scripts/build-client.mjs

# 3. Cài vào DSH (bản Web)
node scripts/install-source.mjs --profile web --dsh-home "<Thư mục dữ liệu DSH>" --app-closed
```

> **DSH Desktop trên Windows:** Sử dụng carrier CLI đi kèm DSH Desktop (`%LOCALAPPDATA%\Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd`) để link gói chính và 8 gói con vào profile `desktop`. **Không di chuyển hoặc xóa thư mục mã nguồn** sau khi cài vì profile đang liên kết trực tiếp tới thư mục này. Xem chi tiết tại [Hướng dẫn nâng cấp](docs/UPGRADING.md) và [Hướng dẫn người mới](README.beginner.md).

<h2 id="sử-dụng">🎨 Sử dụng</h2>

1. Mở **Cài đặt → Wallpaper Engine → Thư viện hình nền**, hoặc kéo sợi dây linh vật ở phía trên khung chat để mở nhanh.
2. Chọn hình nền trong thư viện, tùy chỉnh giao diện kính lỏng, phông chữ, hiệu ứng phát lại — thay đổi áp dụng ngay lập tức và lưu phía host (`~/.dsh-wallpaper-engine/config.json`).
3. Đổi ngôn ngữ giao diện tại **Cài đặt → Wallpaper Engine → Hệ thống → Ngôn ngữ giao diện**.

<p align="center">
  <a href="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/settings-ui.gif">
    <img src="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/settings-ui.gif" alt="Giao diện cài đặt">
  </a>
</p>

<p align="center">
  <a href="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/wallpaper-library.gif">
    <img src="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/wallpaper-library.gif" alt="Thư viện hình nền">
  </a>
</p>

<h2 id="tương-thích-và-giới-hạn">⚙️ Tương thích &amp; giới hạn</h2>

- **Windows / macOS / Linux** dùng chung một mã nguồn; macOS không có Wallpaper Engine chính thức nên có thể tải ảnh / video cục bộ hoặc trỏ tới thư mục dự án WE sẵn có.
- Render Scene phụ thuộc WebGL2 và driver GPU; các dự án Workshop quá phức tạp sẽ tự động hạ cấp sang MP4 nhúng hoặc ảnh xem trước.
- Tạm dừng khi bị che / mất tiêu điểm và thu phổ âm thanh hệ thống tự động thích ứng theo từng hệ điều hành.
- Khi dùng chung với các skin / plugin UI khác, xem thêm [Hướng dẫn tương thích](docs/HOW-IT-WORKS.md#共存玻璃表面与其他-ui-插件).

<p align="center">
  <a href="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/better-sidebar-font.png">
    <img src="https://github.com/elysia395/dsh-wallpaper-engine/releases/download/media-v1/better-sidebar-font.png" alt="Kính lỏng thanh bên và tùy chỉnh phông chữ">
  </a>
</p>

<h2 id="phát-triển-và-đóng-góp">🛠️ Phát triển &amp; đóng góp</h2>

Hoan nghênh mọi góp ý sửa câu dịch, báo lỗi hoặc Pull Request!

```sh
node scripts/build-client.mjs   # Build client + 6 gói con
node test/verify-i18n.mjs       # Kiểm tra 100% đối chiếu i18n (VI / EN / ZH)
npm run lint && npm run typecheck
```

- [Nguyên lý hoạt động](docs/HOW-IT-WORKS.md) · [Khắc phục sự cố](docs/TROUBLESHOOTING.md) · [Hướng dẫn nâng cấp](docs/UPGRADING.md)
- [Lịch sử thay đổi](docs/CHANGELOG.md) · [Cấu trúc mã nguồn](docs/CODE-STRUCTURE.md) · [Hướng dẫn đóng góp](CONTRIBUTING.md)

<h2 id="cộng-đồng">💬 Cộng đồng</h2>

<p align="center">
  <a href="lib/about/donate-vi.jpg"><img src="lib/about/donate-vi.jpg" alt="QR ủng hộ TunAnh0711" width="230"></a>
  &nbsp;&nbsp;
  <a href="lib/about/qq-group.png"><img src="lib/about/qq-group.png" alt="Nhóm QQ: DSHWE | LLM" width="230"></a>
  &nbsp;&nbsp;
  <a href="lib/about/douyin-group.png"><img src="lib/about/douyin-group.png" alt="Nhóm Douyin: dshwe" width="230"></a>
</p>

<h2 id="star-history">📈 Star History</h2>

<p align="center">
  <a href="https://star-history.com/#TunAnh0711/dsh-wallpaper-engine-vi&Date">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=TunAnh0711/dsh-wallpaper-engine-vi&amp;type=Date&amp;theme=dark">
      <img src="https://api.star-history.com/svg?repos=TunAnh0711/dsh-wallpaper-engine-vi&amp;type=Date" alt="Biểu đồ Star History của dsh-wallpaper-engine-vi" width="960">
    </picture>
  </a>
</p>

<h2 id="tri-ân">🙏 Tri ân</h2>

- **Bản Việt hóa &amp; đa ngôn ngữ**: **[TunAnh0711](https://github.com/TunAnh0711)** (`@07th_11`)
- **Dự án gốc**: **[elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine)** cùng toàn thể cộng tác viên ❤️

<p align="center">
  <a href="https://github.com/elysia395/dsh-wallpaper-engine/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=elysia395/dsh-wallpaper-engine" alt="Contributors">
  </a>
</p>

<p align="center"><sub>Mã nguồn phát hành theo giấy phép <a href="LICENSE">MIT License</a>; tài nguyên hình nền, nhân vật và phông chữ tuân theo giấy phép riêng — xem chi tiết tại <a href="assets/readme/SOURCES.md">SOURCES.md</a>.</sub></p>
