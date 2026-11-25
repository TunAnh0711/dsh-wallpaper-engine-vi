/**
 * i18n-vi.js — Vietnamese dictionary composer (WE_I18N_VI + WE_I18N_HOST_VI)
 * Pure data module, no imports/requires or top-level executable statements.
 */

const WE_I18N_VI = {
  ...WE_I18N_VI_CORE,
  ...WE_I18N_VI_FONT,
  ...WE_I18N_VI_LIVE,
  ...WE_I18N_VI_PANEL,
  ...WE_I18N_VI_PICKER,
  ...WE_I18N_VI_EXT,
  ...WE_I18N_VI_GLASS,
  ...WE_I18N_VI_PET_LINK,
};

const WE_I18N_HOST_VI = {
  "文件过大（上限 512MB）": "Tệp quá lớn (giới hạn 512MB)",
  "请输入有效的绝对路径（如 D:\\MyWallpapers 或 /data/wallpapers）": "Vui lòng nhập đường dẫn tuyệt đối hợp lệ (ví dụ: D:\\MyWallpapers hoặc /data/wallpapers)",
  "无法在该路径创建目录（权限不足或路径被占用）": "Không thể tạo thư mục tại đường dẫn đó (thiếu quyền hoặc đường dẫn đang bị chiếm dụng)",
  "字体集文件必须是一个 JSON 对象": "Tệp bộ phông chữ phải là một đối tượng JSON",
  "字体集数量已达上限": "Số lượng bộ phông chữ đã đạt giới hạn",
  "body 必须是 { name?, values: {…} }（values 必填：清空请显式给 {}）": "body phải có dạng { name?, values: {…} } (values là bắt buộc: để xóa trống hãy truyền rõ {})",
  "不能删除正在使用的字体集（先切换到别的集）": "Không thể xóa bộ phông chữ đang sử dụng (hãy chuyển sang bộ khác trước)",
  "删除失败（文件被占用或权限不足）": "Xóa thất bại (tệp đang bị chiếm dụng hoặc thiếu quyền)",
  "随包预设不能删除（可以直接覆盖它；要恢复原样就删掉你的覆盖）": "Không thể xóa mẫu đi kèm gói (bạn có thể ghi đè trực tiếp; để khôi phục nguyên bản hãy xóa bản ghi đè của bạn)",
  "图片过大（上限 30MB）": "Hình ảnh quá lớn (giới hạn 30MB)",
  "素材目录未配置或不可用": "Thư mục tài nguyên chưa được cấu hình hoặc không khả dụng",
  "路径非法": "Đường dẫn không hợp lệ",
  "请输入有效的绝对路径（如 D:\\Steam\\steamapps\\common\\wallpaper_engine\\assets 或 ~/WE/assets）": "Vui lòng nhập đường dẫn tuyệt đối hợp lệ (ví dụ: D:\\Steam\\steamapps\\common\\wallpaper_engine\\assets hoặc ~/WE/assets)",
  "该目录下没有 materials/ 子目录 —— 请指向 WE 安装目录的 assets 树（或其拷贝）": "Thư mục đó không có thư mục con materials/ — hãy trỏ tới cây thư mục assets trong thư mục cài đặt WE (hoặc bản sao của nó)",
  "未知错误": "Lỗi không xác định",
  "已在设置中关闭「系统音频反应」": "«Phản hồi âm thanh hệ thống» đã bị tắt trong cài đặt",
  "需要 ffmpeg 与 PulseAudio/PipeWire（monitor 源）": "Cần có ffmpeg và PulseAudio/PipeWire (nguồn monitor)",
  "未检测到系统音频采集设备：请在「声音设置 → 录制」启用「立体声混音」，或安装 VB-Cable 虚拟声卡后重试（未启用时壁纸回落模拟频谱）": "Không phát hiện thiết bị thu âm thanh hệ thống: hãy bật Stereo Mix trong «Cài đặt âm thanh → Ghi âm» hoặc cài card âm thanh ảo VB-Cable rồi thử lại (khi chưa bật, hình nền sẽ dùng phổ giả lập)",
  "未找到 Swift 编译器（Xcode Command Line Tools）—— 安装后重试；当前回落模拟频谱": "Không tìm thấy trình biên dịch Swift (Xcode Command Line Tools) — hãy cài đặt rồi thử lại; tạm thời dùng phổ giả lập",
  "未获得「音频录制」权限：请在「系统设置 → 隐私与安全性 → 音频录制」中勾选 DSH Desktop（或你的终端/DSH 宿主），然后重试": "Chưa có quyền «Ghi âm»: hãy tích chọn DSH Desktop (hoặc terminal/máy chủ DSH của bạn) trong «Cài đặt hệ thống → Quyền riêng tư & Bảo mật → Ghi âm» rồi thử lại",
  "当前平台不支持系统音频采集，回落模拟频谱": "Nền tảng hiện tại không hỗ trợ thu âm thanh hệ thống, đang dùng phổ giả lập",
  "需要 media-control（brew install media-control）": "Cần có media-control (brew install media-control)",
  "需要 playerctl（apt/dnf/pacman 安装后重试）": "Cần có playerctl (cài qua apt/dnf/pacman rồi thử lại)",
  "Windows 的媒体集成在二期提供": "Tích hợp đa phương tiện trên Windows sẽ được cung cấp ở giai đoạn hai",
  // ── Glass presets (lib/routes/presets.js) ──
  "预设名字不能为空": "Tên mẫu không được để trống",
  "body 必须是 { name, values }": "body phải có dạng { name, values }",
  "预设数量已达上限": "Số lượng mẫu đã đạt giới hạn",
  "已存在同名的预设（换个名字再存）": "Đã tồn tại mẫu trùng tên (hãy chọn tên khác rồi lưu)",
  "你自己的预设已达上限（最多 8 个 —— 删除或隐藏不需要的预设腾位）": "Mẫu cá nhân của bạn đã đạt giới hạn (tối đa 8 mẫu — hãy xóa hoặc ẩn mẫu không cần thiết để giải phóng chỗ)",
  "这份出厂预设没有被隐藏，无需恢复": "Mẫu gốc này không bị ẩn nên không cần khôi phục",

};

export {
  WE_I18N_VI,
  WE_I18N_HOST_VI,
};
