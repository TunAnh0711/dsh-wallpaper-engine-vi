/**
 * i18n-vi-font.js — Vietnamese dictionary domain: fonts & color roles (src/font/* · fontset-editor · fontset-store)
 * Pure data module, no imports/requires or top-level executable statements.
 */
const WE_I18N_VI_FONT = {
  // ── src/font/color-roles.js ──
  "正文": "Văn bản chính",
  "次要文字": "Văn bản phụ",
  "弱化说明": "Chú thích mờ",
  "极小说明": "Chú thích nhỏ",
  "禁用 / 更弱": "Vô hiệu hóa / mờ hơn",

  // ── src/font/components.js ──
  "对话正文": "Nội dung hội thoại",
  "markdown 容器": "Khung Markdown",
  "代码块": "Khối mã",
  "代码": "Mã nguồn",
  "终端块": "Khối terminal",
  "表格": "Bảng",
  "对话": "Hội thoại",
  "代码块正文": "Nội dung khối mã",
  "代码块标题条": "Thanh tiêu đề khối mã",
  "终端": "Terminal",

  // ── src/font/typography.js ──
  "标题 1": "Tiêu đề 1",
  "标题 2": "Tiêu đề 2",
  "标题 3": "Tiêu đề 3",
  "标题 4": "Tiêu đề 4",
  "小字说明": "Chữ nhỏ chú thích",
  "行内代码": "Mã nội dòng",
  "表头": "Tiêu đề bảng",
  "界面小字": "Chữ nhỏ giao diện",
  "界面极小字": "Chữ cực nhỏ giao diện",

  // ── packages/fonts/src/fontset-editor.js ──
  "恢复原样": "Khôi phục nguyên bản",
  "删除": "Xóa",
  "下载这个字体集（可分享 / 可再导入）": "Tải xuống bộ phông chữ này (có thể chia sẻ / nhập lại)",
  "导出": "Xuất",
  "把「{name}」恢复成它原本的样子？你在这份上的改动会丢掉。": "Khôi phục «{name}» về trạng thái ban đầu? Các thay đổi của bạn trên bộ này sẽ bị mất.",
  "删除「{name}」？此操作不可恢复。": "Xóa «{name}»? Thao tác này không thể hoàn tác.",
  "使用": "Sử dụng",
  "切换到这个字体集（立即生效）": "Chuyển sang bộ phông chữ này (áp dụng ngay)",
  "重命名": "Đổi tên",
  "已经问过你了 —— 在下面那一行选「确认」或「取消」": "Đã hỏi bạn rồi — hãy chọn «Xác nhận» hoặc «Hủy» ở hàng bên dưới",
  "删掉你在这份上的改动，恢复它原本的样子": "Bỏ các thay đổi trên bộ này và khôi phục về nguyên bản",
  "删除这个字体集（会再问一次）": "Xóa bộ phông chữ này (sẽ hỏi lại lần nữa)",
  "（使用中）": "(đang dùng)",
  "当前外观在这套的基础上被手动改过；点「使用」把它整份读回来": "Giao diện hiện tại đã được chỉnh thủ công trên nền bộ này; bấm «Sử dụng» để nạp lại toàn bộ",
  "（已改）": "(đã sửa)",
  "无法读取：{msg}": "Không thể đọc: {msg}",
  "保存": "Lưu",
  "就这么办": "Thực hiện luôn",
  "一份集 = 整套字体外观（颜色角色 / 排版 / 字重 / 字族 / 组件）。改动只落到当前这一份、随时可以恢复原样；导入导出按整份文件走。": "Một bộ = toàn bộ diện mạo phông chữ (vai trò màu / kiểu chữ / độ đậm / họ phông / thành phần). Thay đổi chỉ lưu vào bộ hiện tại và có thể khôi phục bất cứ lúc nào; nhập/xuất áp dụng theo cả tệp.",
  "正在读取字体集…": "Đang tải danh sách bộ phông chữ…",
  "字体集不可用：{reason}": "Bộ phông chữ không khả dụng: {reason}",
  "还没有任何字体集 —— 下面可以新建一份。": "Chưa có bộ phông chữ nào — bạn có thể tạo mới ở bên dưới.",
  "操作": "Thao tác",
  "导入字体集…": "Nhập bộ phông chữ…",
  "从「导出」得到的 .json 导入一份字体集": "Nhập bộ phông chữ từ tệp .json lấy từ nút «Xuất»",
  "新建（以当前外观）": "Tạo mới (từ giao diện hiện tại)",
  "把当前这套字体外观存成一份新的集，并切换过去（名字之后可以改）": "Lưu diện mạo phông chữ hiện tại thành bộ mới và chuyển sang dùng (có thể đổi tên sau)",
  "刷新": "Làm mới",

  // ── src/fontset-store.js ──
  "宿主里没有字体集路由：重启 DSH 后再试（改过宿主代码要重挂，刷新页面不够）": "Máy chủ chưa có route bộ phông chữ: hãy khởi động lại DSH rồi thử lại (sau khi sửa mã máy chủ cần gắn lại, chỉ tải lại trang là không đủ)",
  "宿主没有活动字体集": "Máy chủ không có bộ phông chữ đang hoạt động",
  "字体集不可用": "Bộ phông chữ không khả dụng",
  "读不出这个文件（换一个 .json 再试）": "Không đọc được tệp này (hãy thử tệp .json khác)",
  "这不是 JSON 文件（字体集是导出出来的 .json）": "Đây không phải tệp JSON (bộ phông chữ là tệp .json được xuất ra)",
  "这不是字体集文件（需要 {tag} 标记 —— 只有从「导出」拿到的文件才有）": "Đây không phải tệp bộ phông chữ (cần có dấu {tag} — chỉ tệp lấy từ «Xuất» mới có)",

};

export { WE_I18N_VI_FONT };
