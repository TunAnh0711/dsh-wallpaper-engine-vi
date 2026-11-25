/**
 * i18n-vi-live.js — Vietnamese dictionary domain: live layer & media prep (src/live-layer.js · src/media-prep.js)
 * Pure data module, no imports/requires or top-level executable statements.
 */
const WE_I18N_VI_LIVE = {
  // ── src/live-layer.js ──
  "首帧超时（{secs} 秒内无画面）": "Quá thời gian chờ khung hình đầu ({secs} giây không có hình)",
  "运行中断（{secs} 秒无帧）": "Gián đoạn chạy ({secs} giây không có khung hình)",
  "壁纸加载失败": "Tải hình nền thất bại",
  "载荷传输未完成（下载停滞）": "Truyền tải dữ liệu chưa hoàn tất (tải xuống bị đứng)",
  "渲染失败": "Kết xuất thất bại",
  "，暂停期跳过 {n} tick": ", bỏ qua {n} tick khi đang tạm dừng",
  "，传输中 {n} tick": ", đang truyền tải {n} tick",
  "(应用源)": "(nguồn ứng dụng)",
  "，冷却 {s}s 后自动重试": ", tự động thử lại sau {s}s",
  "，已达重试上限": ", đã đạt giới hạn thử lại",
  "拿不到实时画面（这个壁纸没有实时渲染）": "Không lấy được khung hình trực tiếp (hình nền này không có kết xuất trực tiếp)",
  "拿不到实时画面（实时渲染没在运行，或渲染页还没画布）": "Không lấy được khung hình trực tiếp (kết xuất trực tiếp chưa chạy hoặc trang kết xuất chưa có canvas)",
  "抓到的画面是空的（实时渲染还在启动中？稍等一两秒再试）": "Khung hình chụp được bị trống (kết xuất trực tiếp vẫn đang khởi động? Hãy đợi 1–2 giây rồi thử lại)",
  "抓到的画面还没有内容（全黑/纯色）→ 已保留原来那张": "Khung hình chụp được chưa có nội dung (đen hoàn toàn / một màu) → đã giữ lại ảnh cũ",
  "旧实时帧删不掉（被占用或宿主报错）→ 没有换成新抓的这张，可稍后重试": "Không xóa được khung hình trực tiếp cũ (đang bị chiếm dụng hoặc lỗi máy chủ) → chưa thay bằng ảnh mới chụp, hãy thử lại sau",
  "写入失败（宿主返回 {status}）": "Ghi thất bại (máy chủ trả về {status})",
  "这次没抓成（拿不到画面或写入失败）→ 原来那张没动": "Lần này chụp không thành công (không lấy được hình hoặc ghi thất bại) → ảnh cũ vẫn giữ nguyên",
  "抓帧过程出错 → 原来那张没动": "Lỗi trong quá trình chụp khung hình → ảnh cũ vẫn giữ nguyên",
  "过场": "chuyển cảnh",

  // ── src/media-prep.js ──
  "无": "không",

};

export { WE_I18N_VI_LIVE };
