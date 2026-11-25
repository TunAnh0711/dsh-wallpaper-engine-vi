**Tiếng Việt** · [中文 / English gốc](CONTRIBUTING.zh.md)

# Hướng dẫn đóng góp

Cảm ơn bạn đã tham gia cải thiện `dsh-wallpaper-engine`. Vui lòng giữ mỗi Pull Request tập trung vào một vấn đề rõ ràng, đồng thời ghi rõ nền tảng áp dụng và kết quả kiểm chứng trong phần mô tả.

> Về phân loại issue, xin nhận việc (claim) và phê duyệt: xem hai mục **Phê duyệt nhận issue trước khi mở PR** và **Phân loại issue & nhãn** bên dưới.

## Tiêu đề PR: viết dễ hiểu như ngôn ngữ tự nhiên, nội dung chuyên môn đặt ở phần thân

**Quy tắc này áp dụng cho tất cả mọi người — cả người đóng góp lẫn trợ lý AI.** Tiêu đề PR là thông tin đầu tiên người duyệt nhìn thấy. Hãy viết sao cho một người chưa quen đoạn mã này vẫn biết được **sửa ở đâu, làm gì và giải quyết vấn đề gì**. Chi tiết triển khai, thuật ngữ kỹ thuật và ghi chú kiểm thử thuộc về **phần thân** PR, không nhồi vào tiêu đề. Xem bối cảnh, lý do đầy đủ và các ví dụ đúng/sai tại [#323](https://github.com/elysia395/dsh-wallpaper-engine/issues/323) — issue này được giữ ở trạng thái open có chủ đích để làm lời nhắc trực quan cho người đóng góp.

- Cấu trúc khuyến nghị: `loại: phạm vi/tính năng — đã làm gì, giải quyết vấn đề gì` (loại như `sửa lỗi` / `thêm mới` / `tối ưu` / `tái cấu trúc`, hoặc `fix` / `feat` / `perf` / `refactor`).
- Không dùng tiêu đề chung chung, không nêu rõ phạm vi như `refactor: optimize data flow abstraction`, `chore: enhance maintainability`, hay các cụm sáo rỗng kiểu “tối ưu hiệu năng / nâng cao trải nghiệm / tăng độ ổn định / cải thiện chất lượng mã”.
- Dùng từ ngữ cụ thể thay cho các cụm trừu tượng đậm chất AI, và tránh dùng chữ viết tắt khiến người đọc phải tự giải mã.
- Tóm lại: **“Phần thân PR có thể chuyên sâu, nhưng tiêu đề PR phải nói rõ ràng, dễ hiểu.”**

| Không nên | Nên |
| --- | --- |
| `refactor: optimize data flow abstraction` | `tái cấu trúc: tách logic đồng bộ dữ liệu đơn hàng thành module riêng để sau này dễ sửa` |
| `feat: implement idempotent retry mechanism` | `thêm mới: tự động thử lại khi gửi thất bại, tránh tạo trùng đơn hàng` |
| `perf: improve rendering pipeline` | `tối ưu: giảm render lại trang danh sách giúp cuộn mượt hơn` |
| `chore: enhance maintainability` | `dọn dẹp: tách các hàm tiện ích để giảm độ phức tạp khi sửa về sau` |

**Lưu ý cho trợ lý AI:** trước khi chạy `gh pr create` hoặc mở PR, bắt buộc viết lại tiêu đề theo đúng quy tắc này. Không giữ nguyên tiêu đề do công cụ tự sinh, tiêu đề kiểu commit message hay tiêu đề kiểu bản kế hoạch; nếu cần giải thích sâu về kỹ thuật, hãy đưa vào phần thân và giữ tiêu đề là bản tóm tắt bằng ngôn ngữ đời thường.

Tự kiểm tra trước khi gửi: người chưa đọc mã nguồn này có thể hiểu đại khái lần thay đổi này làm gì không? Tiêu đề đã nêu rõ module, tính năng hoặc ngữ cảnh người dùng cụ thể chưa? Mọi chi tiết kỹ thuật đã được đưa vào phần thân chưa?

## Phê duyệt nhận issue trước khi mở PR

**Người đóng góp bên ngoài bắt buộc phải xin nhận một issue, được người duy trì (maintainer) phê duyệt và gán làm assignee trước khi tạo PR. Không cho phép mở PR trực tiếp, kể cả draft PR.** Chỉ chủ kho lưu trữ (owner) và các cộng tác viên được GitHub API xác nhận theo thời gian thực có quyền `write`, `maintain` hoặc `admin` mới được miễn cổng kiểm tra nhận issue này. Quyền được kiểm tra trực tiếp ở mỗi lần đánh giá; huy hiệu `contributor`, `author_association`, lịch sử đóng góp trước đây hay quyền `read` / `triage` đều không được miễn. Không có nhãn `claim:exempt` hay ngoại lệ dựa trên nhãn nào khác. Việc miễn cổng nhận issue cũng không miễn các bước CI kiểm tra mã nguồn.

- **Quy trình nhận issue từng bước**:
  - Chờ maintainer chấp nhận một issue đang mở bằng nhãn `status:accepted` và gỡ bỏ `status:needs-triage` / `status:declined`.
  - Chính bạn bình luận `/assign` trong issue đó: đây chỉ là lời đề nghị, **không tự động gán ngay lập tức**.
  - Chờ maintainer bình luận `/approve @login` ngay trong issue đó và để bot thực hiện gán (assign) cho bạn.
  - Maintainer cũng có thể gán bạn thủ công qua giao diện GitHub UI, nhưng chỉ hợp lệ khi trước đó đã có bình luận `/assign` hợp lệ của chính bạn trong cùng issue.
  - Việc issue được chấp nhận (`status:accepted`) không đồng nghĩa với việc yêu cầu nhận issue đã được duyệt.
- **Hủy yêu cầu hoặc trả lại issue**:
  - Chính bạn bình luận `/unassign` để hủy yêu cầu đang chờ duyệt hoặc trả lại issue đang nhận.
  - Maintainer có thể dùng `/unassign @login` để hủy/gỡ gán cho người cụ thể, hoặc dùng `/unassign` không kèm tham số để gỡ toàn bộ assignee hiện tại.
- **Dòng liên kết issue trong phần thân PR**:
  - Đặt ít nhất một dòng đứng riêng `Fixes #123` hoặc `Refs #123` trong phần thân PR, mỗi issue một dòng; hỗ trợ nhiều dòng.
  - Cũng chấp nhận URL đầy đủ tới issue trong cùng kho lưu trữ (ví dụ `Fixes https://github.com/elysia395/dsh-wallpaper-engine/issues/123`) hoặc tham chiếu kèm tên kho (`Refs elysia395/dsh-wallpaper-engine#123`).
  - Viết `#123` đứng trơ, viết chung trong dòng như `Issue: Fixes #123`, dẫn sang kho khác, ghi ở tiêu đề PR hoặc bình luận PR đều không đạt yêu cầu.
- **Điều kiện mỗi issue được tham chiếu phải đáp ứng**:
  - Mỗi issue được tham chiếu hiện phải đang mở (open), có nhãn `status:accepted`, không có `status:needs-triage` hay `status:declined`, và tác giả PR đang nằm trong danh sách assignee.
  - Thời điểm chấp nhận đáng tin cậy, thời điểm bạn gửi `/assign`, thời điểm maintainer phê duyệt và thời điểm gán thực tế đều phải diễn ra **nghiêm ngặt trước** `PR.created_at`, trong đó yêu cầu `/assign` phải có trước bước phê duyệt/gán.
  - Cổng kiểm tra xác minh dựa trên bằng chứng bình luận/dòng thời gian (timeline) của GitHub, không chỉ nhìn nhãn hiện tại hay lời tự khai quyền hạn.
  - Việc chấp nhận, xin nhận hay phê duyệt bổ sung sau khi đã tạo PR không thể làm PR cũ trở nên hợp lệ; chỉnh sửa PR, chuyển từ draft sang ready hay mở lại (reopen) đều không đặt lại thời điểm tạo PR. Hãy hoàn tất quy trình rồi mở một PR mới.
- **Cổng kiểm tra tin cậy thực hiện những gì**:
  - Workflow tin cậy chạy bằng `pull_request_target` sẽ giải thích lý do và tự động đóng các PR được xác nhận không hợp lệ (bao gồm cả draft và PR được mở lại), đồng thời đánh trạng thái `failure` cho Check Run mang tên cố định `issue-claim-policy` trên head SHA của PR.
  - Các PR hợp lệ hoặc được miễn theo quyền trực tiếp sẽ vượt qua kiểm tra này.
  - Nếu lỗi API khiến không thể truy xuất đáng tin cậy quyền hạn hoặc lịch sử, hệ thống sẽ đánh trượt kiểm tra mà **không** tự động đóng PR; còn khi đã lấy đủ lịch sử và xác nhận không có phê duyệt trước đó thì đó là vi phạm chính sách, không phải lỗi API.
  - Workflow tin cậy tuyệt đối không được checkout hoặc thực thi mã nguồn từ nhánh head của PR với quyền ghi (write).
- **Kiểm tra lại (revalidation)**: mọi thay đổi về trạng thái đóng/mở của issue, nhãn chấp nhận hoặc danh sách assignee sẽ kích hoạt kiểm tra lại toàn bộ các PR đang mở có liên kết. Hành động `/approve` và `/unassign` của bot phải chủ động làm mới các PR liên kết ngay trong cùng lần chạy thay vì trông chờ sự kiện do bot phát ra tự kích hoạt một workflow khác.
- **Cam kết triển khai (deployment contract)**:
  - Trên đây là đặc tả tự động hóa bắt buộc phải thực thi, không đồng nghĩa việc sửa tài liệu là đã triển khai xong.
  - Các workflow phê duyệt và cổng kiểm tra PR phải được hợp nhất vào nhánh mặc định `main` trước khi có hiệu lực; maintainer phải giữ nguyên các Required checks hiện có và bổ sung thêm `issue-claim-policy`, không thay thế hay đổi tên các check CI mã nguồn ở bước này.
  - Điều kiện gộp (merge) là **CI mã nguồn hiện có + `issue-claim-policy`**. GitHub không thể chặn truy cập vào trang tạo PR từ trước, nên cơ chế thực thi là tự động đóng sau khi tạo kèm kiểm tra bắt buộc để chặn merge.

## Phân loại issue & nhãn

Cổng kiểm tra nhận issue ở mục trên là cam kết thực thi tự động; mục này quy định cách phân loại và gắn nhãn. Việc cưỡng chế nằm trong `.github/workflows/issue-claim*.yml` — chỉnh sửa văn bản ở đây không làm thay đổi cổng kiểm tra.

| Nhãn | Ý nghĩa | Ai gắn |
|---|---|---|
| `status:needs-triage` | Issue mới, chưa được xem xét — trạng thái khởi tạo (do mẫu issue tự thêm) | mẫu issue (template) |
| `status:accepted` | Maintainer xác nhận đáng làm; **bắt đầu có thể xin nhận từ đây** | maintainer |
| `status:declined` | Không làm / nằm ngoài phạm vi (kèm lý do ngắn gọn một dòng) | maintainer |
| `area:client` | Phần trình duyệt (`src/**`, hiển thị / bảng điều khiển / hiệu ứng kính) | bất kỳ ai |
| `area:host` | Phần máy chủ (`lib/**`: định tuyến, quét thư mục, luồng xử lý media, cấu hình) | bất kỳ ai |
| `area:glass-ui` | Hiệu ứng kính lỏng (liquid glass) / giao diện / phông chữ / linh vật | bất kỳ ai |
| `area:webwallgl` | Trình kết xuất hình nền scene / web và cầu nối media | bất kỳ ai |
| `area:ci-docs` | CI, các bộ kiểm tra bảo vệ (guards), tài liệu, chuỗi phát hành | bất kỳ ai |

Các nhãn mặc định của GitHub (`bug` / `enhancement` / `documentation` / `good first issue` / `help wanted` / `question` / `duplicate` / `invalid` / `wontfix` / `accessibility`) giữ nguyên ý nghĩa thông thường. Nhãn `good first issue` chỉ được gắn cho các issue đã được **chấp nhận** (`status:accepted`) và xác nhận có phạm vi nhỏ — đây là cam kết dành cho người đóng góp mới.

**Quy trình phân loại của maintainer (hàng tuần hoặc khi có nhu cầu)**: đọc các issue có `status:needs-triage` → nếu tái hiện được / có giá trị thì gắn `status:accepted`, gỡ `status:needs-triage` / `status:declined`, gắn `area:*` (nếu phạm vi nhỏ thì thêm `good first issue`); nếu không thực hiện thì gắn `status:declined`, nêu rõ lý do rồi đóng → duyệt các yêu cầu `/assign` và phê duyệt/gán theo mục trên → với issue đã chấp nhận nhưng lâu không có ai nhận và có mức ảnh hưởng lớn, đưa vào kế hoạch của maintainer hoặc milestone.

**Thời hạn nhận issue và thu hồi**: sau khi nhận issue mà quá **14 ngày** không có tiến triển và không để lại bình luận cập nhật, maintainer có thể bình luận nhắc (`@`) người nhận trong issue rồi chuyển cho người khác hoặc giải phóng. `/assign` chỉ là lời đề nghị chứ không gán ngay; chính người xin dùng `/unassign` để hủy yêu cầu hoặc trả lại issue; maintainer dùng `/unassign @login` để hủy/gỡ người cụ thể, hoặc `/unassign` không tham số để gỡ toàn bộ assignee hiện tại.

**Ranh giới triển khai của cổng tự động**: workflow tin cậy `pull_request_target` phải được gộp vào nhánh mặc định `main` mới có hiệu lực; Ruleset giữ nguyên `ci/result` và bổ sung `issue-claim-policy`, điều kiện merge thống nhất là **CI mã nguồn hiện có + `issue-claim-policy`**. Vì GitHub không thể tắt trước trang tạo PR, cơ chế thực thi là **tự động giải thích và đóng sau khi tạo + kiểm tra bắt buộc chặn merge**. Xem đầy đủ tiêu chí thời gian, ngữ nghĩa đóng PR vi phạm và xử lý lỗi API ở mục **Phê duyệt nhận issue trước khi mở PR** phía trên.

## Chọn nhánh mục tiêu

Mọi thay đổi đều hướng tới nhánh `main`. Plugin này là **một cây mã nguồn đa nền tảng gốc duy nhất** (Windows / WSL / macOS / Linux), không có nhánh riêng theo nền tảng — thay đổi dành riêng cho một nền tảng tuyệt đối không được gây hồi quy (regression) trên các nền tảng khác.

## Biên dịch từ mã nguồn chuẩn

- `src/client.js` là mã nguồn chuẩn duy nhất của phía trình duyệt. Sau khi chỉnh sửa, hãy chạy `npm run build` để tạo lại `lib/client.js`.
- `lib/client.js` là sản phẩm sinh ra lúc build và **không được theo dõi trong git** (từ v1.4): chạy `npm run build` để tạo ở máy cục bộ; còn trong gói npm và tarball Release thì `prepack` sẽ tạo trực tiếp khi đóng gói. Không chỉnh sửa thủ công tệp này.
- Thay đổi phía máy chủ (host) nằm trực tiếp trong `lib/index.js` và các module host `lib/*.js` khác.
- Sau khi sửa mã phía host, bắt buộc **khởi động lại DSH**: `lib/*.js` chỉ được nạp khi khởi động và không bao giờ tự cập nhật nóng trong phiên đang chạy.
- Khi cài đặt bản dev cục bộ, hãy **đóng hoàn toàn ứng dụng trước** và dùng trình cài đặt mã nguồn đầy đủ ở bên dưới. Chỉ liên kết (link) riêng gói chính là không đủ để triển khai trọn bộ.
- Hãy dùng đúng phiên bản Node.js mà profile DSH của bạn yêu cầu; kho lưu trữ này khai báo phiên bản hỗ trợ trong `engines.node` của `package.json`.

### `lib/client.js` thực chất là gì

- **Cấu tạo**:
  - `lib/client.js` = phần thân `src/client.js` **+ toàn bộ các module liệt kê trong `INLINE_MODULES`** (`scripts/build-client.mjs`), tất cả được gộp nội tuyến (inline) vào **cùng một** phạm vi `factory(require)`.
  - `npm run build` sẽ in danh sách các module đã inline — **luôn đọc số lượng trực tiếp từ danh sách đó, tuyệt đối không ghi cứng con số vào tài liệu này** (trước đây từng ghi cứng một lần và đã bị lỗi thời).
  - Do đó phần lớn số dòng của tệp đến từ `src/**` chứ không phải từ riêng `client.js` — nhìn bên ngoài giống một khối đơn thể (monolith), nhưng thực chất là một lát cắt mã nguồn được làm phẳng.
- **Vì sao bắt buộc phải inline**:
  - Phía trình duyệt **không có trình phân giải module cục bộ** — hàm `require` của trình nạp chỉ phân giải các gói bên ngoài, nên `import './panel-tabs.js'` không thể hoạt động lúc chạy.
  - Mọi đoạn mã được tách khỏi `src/client.js` cho dễ đọc đều được inline trở lại làm phần mở đầu (prelude) trong cùng phạm vi khi build.
  - Mỗi mục khai báo `markers`, và thiếu bất kỳ marker nào sẽ gây **lỗi build cứng** — đây là cơ chế đảm bảo việc tách tệp không bao giờ âm thầm biến thành rỗng.
  - Đầu ra cũng phải phân tích cú pháp hợp lệ (`new Script(...)`) trước khi được ghi ra đĩa.
- **Vai trò của nó**:
  - `package.json` công khai tệp này qua `exports["./client"]` kèm `dsh.client.immediately: true`; trình nạp client của DSH lấy tệp dựa trên siêu dữ liệu gói (không có route nào phía host phục vụ tệp này).
  - Tệp được **biên dịch lúc build, không lưu vào git** (từ v1.4): gói npm / tarball Release nhận tệp từ `prepack` lúc đóng gói, còn bản dev `link:` nhận tệp từ `npm run build`.
  - Các cách cài đặt được hỗ trợ là trình cài đặt mã nguồn đầy đủ bên dưới, và sau khi trọn bộ gói đã phát hành chính thức thì hỗ trợ cài theo tên gói npm hoặc bộ Release đầy đủ.
  - Cài trực tiếp kiểu `github:` trần sẽ không build phần client và không đăng ký đủ các gói con, nên **không được hỗ trợ**.
- **Nguyên tắc 1 — build lại trước khi kiểm chứng**:
  - Mọi thay đổi trong `src/**` đều yêu cầu chạy `npm run build` trước khi chạy `verify` hoặc đóng gói (không còn chuyện “quên commit tệp build”).
  - CI sẽ build lại rồi kiểm tra khẳng định tệp build **không nằm trong git**.
  - **Chuỗi kiểm tra cục bộ cũng kiểm tra độ mới** thông qua `test/verify-client-sync.mjs`: nó build lại, so sánh từng byte rồi khôi phục lại tệp (guard không làm bẩn cây làm việc) ⇒ tệp build bị cũ sẽ báo đỏ **trước khi bạn push**.
- **Nguyên tắc 2**: không bao giờ sửa tay `lib/client.js`, vì lần build kế tiếp sẽ ghi đè toàn bộ.
- **Nguyên tắc 3 — tệp build là một hợp đồng (contract)**: nhiều guard chạy trực tiếp trên tệp **đã build** (`verify-readability`, `verify-softrender`, `verify-client`), và một số guard trích xuất stylesheet từ tệp này theo mốc đầu dòng (line-leading anchor). Đó là lý do `src/styles.js` cấm dấu backtick và cấm chép nguyên văn câu lệnh khai báo của chính nó trong phần chú thích — chỉ một dấu backtick lạc từng khiến `verify-host-paint-scope` báo lỗi `"bare backticks: 489"`.
- **Cạm bẫy — chú thích trong `src/**` được gửi kèm đến người dùng**: với những đại lượng có thể thay đổi như số dòng hay dung lượng, hãy ghi *lệnh đo* thay vì viết con số cứng (trước đây có hai chú thích đầu module ghi `src/client.js` dài “9.500 dòng” — cả hai đã được sửa, đừng viết lại kiểu đó).
- **Đừng cố “thu gọn” nó như thể nó là một khối đơn thể**: kích thước của nó chính là kích thước của `src/**`. Đòn bẩy nằm ở các tệp nguồn.

## Cài đặt bản dev cục bộ từ mã nguồn (dành cho nhà phát triển)

> **Mã nguồn thử nghiệm nội bộ (gray-test):** khi thay đổi chưa được gộp lên nhánh chính upstream, hãy tải từ kho và nhánh thử nghiệm hiện tại, không dùng nhánh `main` của upstream trong các ví dụ clone bên dưới để thay thế.

### 1. Lấy mã nguồn (`checkout`)

> *checkout* đơn giản nghĩa là “lấy một bản sao mã nguồn về một thư mục trên máy của bạn”: bấm **Code → Download ZIP** trên trang GitHub rồi giải nén, hoặc clone bằng Git:
>
> ```sh
> git clone https://github.com/TunAnh0711/dsh-wallpaper-engine-vi.git
> ```
>
> Sau khi hoàn tất, bạn sẽ có một thư mục chứa `package.json`, `lib/`, `src/` và `cordis.patch.yml` — bên dưới gọi là **thư mục plugin**.

### 2. Cài đặt trọn bộ mã nguồn

Yêu cầu Node.js và nhân DSH nằm trong khoảng phiên bản khai báo tại mục `engines` của `package.json` (nhánh 0.2 đáp ứng yêu cầu), kèm theo `pnpm`. Đi vào thư mục plugin, **đóng hoàn toàn ứng dụng đích**, và xác nhận đúng thư mục dữ liệu DSH thực tế mà host đó đang sử dụng (không tự mặc định là `~/.dsh`).

```sh
node scripts/install-source.mjs --profile desktop --dsh-home "<thư mục dữ liệu DSH đích>" --app-closed
```

Dùng `--profile web` cho host trình duyệt (web). Thêm `--dry-run` để kiểm tra trước mục tiêu mà không ghi thay đổi. Profile `desktop` bắt buộc dùng carrier CLI do ứng dụng desktop cài đặt; npm CLI độc lập sẽ từ chối quản lý `desktop`. Với profile `web` nếu chưa có lệnh `dsh` trong `PATH`, hãy truyền thêm `--dsh-cli "<đường dẫn tới lib/bin.js của DSH CLI>"`.

Trình cài đặt sẽ chạy `npm ci`, biên dịch phần client và đăng ký cả 9 gói (1 gói chính + 8 gói con) dưới dạng phụ thuộc `link:` bền vững qua DSH. Chỉ giữ lại lựa chọn bundle của gói chính vì nó sở hữu bản vá hoàn chỉnh — chọn thêm bundle của các gói con sẽ làm nhân đôi các hàng trong giao diện. Các lựa chọn bundle khác và công tắc theo từng hàng hiện có được giữ nguyên. Không được chỉ link riêng gói chính, và cũng không dùng công cụ tạo junction tạm thời làm quy trình cài đặt chính thức.

Khi cập nhật, hãy đóng host, cập nhật toàn bộ thư mục mã nguồn rồi chạy lại đúng lệnh trên. Giữ nguyên vị trí thư mục mã nguồn trong suốt thời gian plugin đang được cài đặt (không di chuyển hay xóa).

### Bộ phát hành (Release set)

```sh
npm run pack:release
```

Lệnh này biên dịch phần client và tạo 9 tệp tarball cùng tệp `release-set.json` trong một thư mục riêng `.test-cache/release/set-*`. Manifest của gói chính ở dạng phát hành sẽ liệt kê 8 gói con theo đúng phiên bản chính xác thực tế làm phụ thuộc chạy (runtime dependencies), không kèm pet hay Electron. Khi phát hành chính thức, phải đăng các gói con trước rồi mới đăng gói chính sau cùng theo đúng `publishOrder`. Lệnh này không bao giờ tự đăng tải (publish) bất cứ thứ gì. Chạy `npm pack` trần ngay tại thư mục gốc chỉ tạo gói theo manifest phát triển, không phải bộ phát hành hoàn chỉnh. Không phát hành bản thử nghiệm lên npm khi chưa có sự phê duyệt rõ ràng.

Quy trình đầy đủ — kênh npm, tệp đính kèm GitHub Release, bước tự kiểm tra sau phát hành, đồng bộ mirror và khôi phục (rollback) — nằm ở mục **Quy trình phát hành (dành cho maintainer)** ở cuối tài liệu này. Có hai quy tắc không thể nhân nhượng: cả 8 gói con phải đã có mặt công khai trên registry ở cùng phiên bản trước khi gói chính có thể dùng được (`pnpm add` phân giải 8 phiên bản chính xác từ registry, nên phát hành riêng gói chính sẽ gây lỗi `ERR_PNPM_FETCH_404`), và GitHub Release bắt buộc phải đính kèm đủ **9 tệp tarball + `release-set.json`** — một bản Release chỉ có gói chính là gói không thể cài đặt. Để cài bộ phát hành ngoại tuyến (offline), hãy dùng `npm run install:release -- --set <thư mục> --profile <tên> --dsh-home <thư mục> --app-closed` (lệnh này ghi `overrides` vào profile để ghim 8 gói con tới các tarball nằm cùng thư mục); tuyệt đối không đưa riêng một tệp tarball gói chính cho trình cài đặt desktop.

Trên Windows, hãy dùng bản Node.js hiện hành đã cập nhật đầy đủ bản vá khi đóng gói, và đảm bảo npm dùng chung đúng runtime Node.js đó. Luôn đối chiếu dải Node hỗ trợ theo `engines` trong `package.json`, và phiên bản Node của CI theo `setup-node` trong các workflow — không chép cứng số phiên bản ở đây.

### 3. Khởi động lại để xác nhận

Sau đó khởi động lại `dsh web`. Phần host plugin sẽ trở thành một lớp bundle và phần client plugin sẽ tự động nạp (`dsh.client.immediately: true`).

Nếu Steam được cài ở vị trí không theo mặc định, phía host sẽ tự động phát hiện thông qua `libraryfolders.vdf` — không cần cấu hình thêm.

> **Lưu ý về profile và “bắt buộc đóng ứng dụng trước”**: ví dụ ở trên dùng `--profile desktop`, yêu cầu carrier CLI của ứng dụng desktop; nếu mục tiêu là bản web, hãy đổi sang `--profile web`. Trước khi cài đặt bắt buộc phải **đóng hoàn toàn ứng dụng đích** (cài đặt khi ứng dụng đang chạy sẽ dừng ở trạng thái `startup-unconfirmed` và trạng thái khôi phục sẽ tự động rollback ở lần khởi động tiếp theo).

## Kiểm chứng trước khi mở PR

Trước tiên, hãy chọn nhánh kiểm chứng dựa trên **toàn bộ diff của PR**, không chỉ nhìn vào commit cuối cùng:

- **Chỉ tài liệu (`docs`)**: README, hướng dẫn đóng góp và các tệp Markdown thông thường nằm trong danh sách cho phép rõ ràng sẽ chạy kiểm tra tài liệu gọn nhẹ. Không cài đặt phụ thuộc sản phẩm, không build, không chạy kiểm tra tĩnh toàn kho hay kiểm thử runtime.
- **Tư liệu minh họa tài liệu (`docs-assets`)**: chỉ bao gồm hình ảnh và bản nguồn dàn trang dùng cho tài liệu; bổ sung kiểm tra hình ảnh và liên kết tham chiếu; nếu ảnh hưởng bố cục thì kiểm tra xem trước trên máy tính / điện thoại. Tài nguyên dùng lúc chạy (runtime assets) không thuộc loại này.
- **Kiểm chứng đầy đủ (`full`)**: bất kỳ thay đổi nào liên quan đến mã nguồn, schema, phụ thuộc, manifest gói, bộ kiểm thử, CI, tài liệu hợp đồng sinh tự động hoặc đường dẫn chưa rõ. Nếu sửa lẫn cả mã nguồn lẫn tài liệu thì vẫn chọn nhánh này; nếu không thể lấy đầy đủ diff thì buộc chạy toàn bộ hoặc chặn lại, tuyệt đối không mặc định là tài liệu.

Với các thay đổi chỉ liên quan đến tài liệu, hãy dùng bước kiểm tra tài liệu gọn nhẹ riêng. Các thay đổi có pha trộn mã nguồn, phụ thuộc, CI, hợp đồng sinh tự động và đường dẫn lạ vẫn phải chạy kiểm chứng đầy đủ. `verify:docs` là kiểm tra nội vụ kho lưu trữ, **không phải** nhánh kiểm tra nhanh cho tài liệu.

Với nhánh kiểm chứng đầy đủ, tiếp tục chạy:

```sh
npm ci              # Cài đặt chuỗi công cụ cục bộ; CI dùng các cờ cài đặt có kiểm soát
npm run verify:all  # = build + verify (mức cứng) + verify:docs (mức mềm) + smoke
```

Ý nghĩa của `verify:all` không thay đổi. Việc phân loại không miễn trừ thay đổi mã nguồn, và không biến các cổng kiểm tra bị lỗi hoặc chưa chạy trước đó thành đạt.

**Phần bắt buộc phải xanh hoàn toàn trước khi gửi PR là mức cứng** (`npm run verify`: hành vi thực tế / bề mặt phát hành / hợp đồng nền tảng / bề mặt đóng gói).
Mức mềm (`npm run verify:docs`: nội vụ kho lưu trữ — bố cục module / tính khả đạt / lộ trình loại bỏ / khai báo mồ côi) **vẫn chạy và in đầy đủ kết luận, nhưng không chặn PR** — tiêu chí không đổi một chữ, chỉ có mã thoát được `test/warn-only.mjs` hạ xuống mức cảnh báo (mã thoát gốc được in trên dòng `` `[warn-only] 软档守卫原退出码 = N` ``).

> **Danh sách từng guard thuộc mỗi mức và tiêu chí phân mức chỉ được định nghĩa tại một nơi duy nhất là [`docs/DEV-GUIDE.md`](docs/DEV-GUIDE.md) §4.2** — tài liệu này cố ý không chép lại danh sách (trước đây từng chép một bản và đã bị lỗi thời ngay khi xóa hai guard, càng chứng minh vì sao không nên sao chép).

`.github/workflows/verify.yml` gồm ba giai đoạn: job `changes` trước hết chạy `node scripts/ci-routing.mjs check` để phân loại — sự kiện PR lấy toàn bộ diff tính từ merge-base (`--base-mode merge-base`), sự kiện push lấy nguyên diff `before → after` (`--base-mode exact`: sau force-push thì `before` chưa chắc là tổ tiên của `after`, dùng merge-base sẽ bỏ sót phần mã bị xóa chỉ có ở `before`), còn `workflow_dispatch` không có ranh giới sự kiện ⇒ diff rỗng `github.sha → github.sha` ⇒ bộ phân loại chọn an toàn là kiểm chứng đầy đủ; nếu không lấy đủ diff ⇒ fail-closed chạy toàn bộ, tuyệt đối không nhận nhầm thành tài liệu. Nhánh chỉ tài liệu sẽ để job `docs` chạy lại `node scripts/ci-routing.mjs docs` trên **đúng cùng diff và cùng chế độ** (kiểm tra liên kết tài liệu / dấu xung đột / loại tài nguyên; nếu diff lẫn mã nguồn hoặc đường dẫn lạ ⇒ thoát với mã 3 để từ chối rõ ràng, không cho qua giả; bước checkout chỉ rõ commit head để đảm bảo cây mã nguồn được kiểm toán đúng là cây vừa được phân loại). **Mọi script đánh giá (bộ phân loại / kiểm toán docs / bộ tổng hợp) luôn được lấy từ nhánh base, tuyệt đối không thực thi tệp cùng tên trong cây mã nguồn của PR** (ranh giới tin cậy: tiêu chí đánh giá không được phép do chính PR đang bị kiểm toán cung cấp). Nhánh kiểm chứng đầy đủ duy trì cả hai nền tảng Windows / Ubuntu, cổng tĩnh, build, guard runtime, cầu nối media và kiểm thử khói (smoke); phần nội vụ kho (`verify:docs`) đã được chuyển sang `.github/workflows/housekeeping.yml` chạy định kỳ hàng tuần + thủ công, không nằm trong chuỗi bắt buộc của PR. Bước tổng hợp cố định `ci/result` chạy dưới `if: always()` để xác nhận job được chọn thực sự thành công: hủy, thất bại, thiếu kết quả hoặc bị bỏ qua ngoài ý muốn đều không được duyệt qua; các Required checks của Ruleset hiện tại là `ci/result` + `issue-claim-policy` (xem mục **Phân loại issue & nhãn** phía trên).

Nhánh đầy đủ còn kiểm tra tệp build không bị đưa vào git (`git ls-files -- lib/client.js docs/images` bắt buộc phải rỗng), đồng thời quét khoảng trắng thừa cuối dòng và dấu xung đột (conflict markers) trên các tệp đang theo dõi. Độ đồng bộ của tệp build vẫn do `test/verify-client-sync.mjs` chạy build thật và so sánh từng byte.

Nhánh đầy đủ trên CI cài đặt phụ thuộc bằng `npm ci --omit=peer --ignore-scripts --no-audit --no-fund`, sau đó chạy kiểm tra tĩnh. Các bước build / verify / smoke vẫn chỉ import trực tiếp các module tích hợp sẵn `node:` và đường dẫn tương đối trong kho lưu trữ, giữ nguyên tiêu chí P5 không phụ thuộc trần. Nhánh nhanh cho tài liệu không cần bước cài đặt này.

### CI kiểm tra tương thích harness (cơ chế đường cơ sở / baseline)

- `.github/workflows/harness-compat.yml`: **chỉ chạy theo yêu cầu** — chỉ kích hoạt thủ công qua dispatch (`gh workflow run harness-compat.yml [-f harness_version=<phiên bản>] [-f force=true]`; không gắn `schedule` hay `push`). Nếu cặp mục tiêu (phiên bản harness × commit plugin) **đã được đường cơ sở bao phủ thì vượt qua trong vài giây**; ngược lại sẽ cài đặt harness đó → link plugin này vào một **profile cô lập** → khởi động `dsh --profile web` và thăm dò sống (route phía host / chẩn đoán ghi đĩa / tiêu chí log, xem `test/compat-harness-live.mjs`) → chạy `npm run verify:all`.
- **Chỉ khi xanh toàn bộ mới ghi vào đường cơ sở**: `.github/harness-baseline.json` chỉ do duy nhất workflow này tự động commit sau khi mọi bước đều đạt. Bất kỳ bước nào lỗi ⇒ workflow báo đỏ và giữ nguyên cặp xanh trước đó làm đường cơ sở; cặp mục tiêu bị lỗi **sẽ không tự động thử lại**, mà sẽ chạy lại ở lần dispatch kế tiếp.
- **Ranh giới bên thứ ba**: workflow này không chạy `verify:bridge` / `verify:e2e`; trong lúc thăm dò sống, biến `DSH_WE_MEDIA_LEGACY=1` được bật và chỉ gọi nhóm route `diag` ⇒ cầu nối media / ffmpeg không bao giờ bị khởi chạy (kiểm thử end-to-end cầu nối media vẫn do `verify.yml` phụ trách).
- **Cơ chế chốt danh mục bề mặt UI** (`test/compat-harness-surfaces.mjs`): đối chiếu các bề mặt `dsh-client-ui-*` của harness đã cài với danh mục đã commit tại `test/fixtures/harness-ui-surfaces.json` — **bề mặt mới chưa được đăng ký sẽ làm kiểm tra báo đỏ** (có hỗ trợ bề mặt đó hay không do con người quyết định và quyết định phải được ghi vào tệp đó); đồng thời kiểm tra các mốc thuộc tính và danh sách cho phép cơ chế ẩn trên mã nguồn thật của `dsh-client-ui-sidebar-right` vừa cài (bản kiểm tra sống chống hồi quy dạng #107).
- **Kiểm tra DOM/style từng trang** (`test/compat-harness-pages.mjs`, tầng 2): trình khách CDP không phụ thuộc điều khiển trình duyệt headless đi qua trang chủ → trang hội thoại → trang cài đặt và khẳng định trên **computed styles** (hiệu ứng kính cửa sổ cài đặt: backdrop / dải sheen gradient / tiếp quản token + duyệt 5 phân khu có đủ style plugin và không có lỗi plugin nào); cờ `--dump` dùng cho chế độ thăm dò.
- Chạy lại cục bộ bằng `node test/compat-harness-live.mjs` (yêu cầu có `dsh` CLI trên `PATH` và kết nối mạng; profile và dữ liệu plugin nằm trong thư mục cô lập, không đụng tới `~/.dsh` thật và có thể chạy song song với DSH Desktop).

Với các thay đổi giao diện (UI), vui lòng mô tả thêm bề mặt DSH thực tế bạn đã kiểm thử, bao gồm chế độ trình duyệt hay DSH Desktop. Với các thay đổi theo nền tảng, hãy nêu rõ cấu trúc nguồn dữ liệu đã dùng khi kiểm thử — ví dụ thư viện Wallpaper Engine của Steam, ổ mount WSL hoặc thư mục lưu trữ chứa các thư mục dự án WE.

## Phát hành (Release)

- **Việc phát hành thuộc trách nhiệm của maintainer** (`elysia395/dsh-wallpaper-engine`): bản phát hành được đưa lên npm và GitHub Releases từ kho lưu trữ này theo nhịp độ của maintainer (không có pipeline tự động publish).
- Chuỗi guard bảo vệ **bề mặt phát hành** thông qua `test/verify-package-publish.mjs` nằm trong `npm run verify`: tập đóng khả đạt (reachable closure) của `lib/index.js` phải được `files` bao phủ, không để rò rỉ thư mục phát triển vào gói, văn bản phát hành không được chứa đường dẫn thư mục home của máy khác, mọi mục trong `dependencies` phải thực sự được mã nguồn khả đạt nạp tới, và không có script lúc cài đặt nào tham chiếu tới tệp không nằm trong `files`.
- Có thể kiểm tra bề mặt phát hành cục bộ bất kỳ lúc nào bằng `npm pack --dry-run` (số mục hiển thị sẽ nhiều hơn danh sách của guard đúng `package.json` + `LICENSE`).
- **`engines.dsh` là bản sao đọc được bằng máy của yêu cầu phiên bản host.** Chợ plugin (và trình quản lý plugin của chính DSH) đọc trực tiếp trường này từ manifest đã phát hành — không qua catalog — rồi hiển thị lên thẻ plugin và đối chiếu với host đang chạy để cảnh báo khi không tương thích. Vì vậy trường này bắt buộc phải **thống nhất** với phần mô tả trong các tệp README và `docs/UPGRADING.md`; sửa một nơi phải sửa đủ tất cả. `dsh-better-sidebar` **không thể** biểu diễn ở đây (vì không phải peer `@deepseek-ai/*`) nên chỉ ghi trong phần mô tả văn bản.
- **Không được để `scripts/prepare.mjs` hay `scripts/build-client.mjs` in bất kỳ thông tin nào ra `stdout`.** `prepack` chạy trong quá trình `npm pack` / `npm publish`, nên mọi thứ nó in ra sẽ rơi vào `stdout` của hai lệnh đó — trong khi cờ `--json` yêu cầu `stdout` **chỉ chứa duy nhất JSON** (thực nghiệm cho thấy chỉ một dòng `built …` đã đủ làm `npm pack --dry-run --json` không phân tích được). Mọi thông báo tiến trình phải đi qua `stderr`.
- **Câu mô tả trong các tệp README về “gói npm chứa những gì” phải khớp đúng với tarball thực tế.** Tài liệu ghi gói npm không đính kèm `docs/`, đây là hệ quả thực tế đối với người đọc (các liên kết đó sẽ không mở được trên npm hoặc chợ plugin). Tuy nhiên viết rằng gói “chỉ chứa các tệp README” là **sai** — gói thực tế có cả `lib/**` và `cordis.patch.yml` — và chợ plugin sẽ hiển thị nguyên câu đó trên trang plugin. Hãy luôn đối chiếu với sản phẩm thật (`npm pack --dry-run` hoặc tarball đã phát hành), đừng chỉ nhìn mảng `files` bằng mắt.

## Danh sách kiểm tra PR

- PR hướng tới nhánh `main`.
- Tiêu đề PR là bản tóm tắt dễ hiểu về việc đã thay đổi gì và giải quyết vấn đề gì (xem mục **Tiêu đề PR** ở trên); chi tiết kỹ thuật nằm ở phần thân.
- Người đóng góp bên ngoài đã hoàn tất việc issue được chấp nhận, tự bình luận `/assign`, được maintainer phê duyệt và gán làm assignee trước khi tạo PR; mọi issue liên kết vẫn hợp lệ và phần thân dùng các dòng đứng riêng `Fixes` / `Refs`. Chỉ quyền owner / `write` / `maintain` / `admin` theo thời gian thực mới được miễn cổng này.
- Cả CI mã nguồn hiện có và `issue-claim-policy` đều xanh; nếu xin nhận issue muộn thì phải mở PR mới, không mở lại PR cũ.
- Khi sửa `src/client.js` đã chạy `npm run build` để biên dịch lại trước khi kiểm chứng (tệp build không lưu trong git, không cần commit).
- Hành vi trên các nền tảng hiện có được bảo toàn, hoặc nếu có thay đổi chủ đích thì đã giải thích rõ trong phần thân.
- Tất cả các lệnh build và kiểm chứng đều đạt.
- Các tệp mới thuộc mặt phát triển được đặt đúng **vị trí quy ước**: guard và kiểm thử khói đặt trong `test/`, công cụ chẩn đoán/phân tích/tạo dữ liệu thủ công đặt trong `test/tools/`, script build và phát hành đặt trong `scripts/` (xem `docs/CODE-STRUCTURE.md` §4). Guard mới cũng phải gắn đúng chuỗi (`npm run verify` mức cứng hay `npm run verify:docs` mức mềm — xem `docs/DEV-GUIDE.md`).
- PR không chứa thông tin xác thực (credentials), tệp media cục bộ, bộ đệm sinh tự động hay các thay đổi dọn dẹp không liên quan.
- Siêu dữ liệu gói vẫn chính xác: `engines.dsh` khớp với các README / `UPGRADING`, mô tả về thành phần trong gói ở README khớp với tarball thật, và không có script build/phát hành nào ghi văn bản thông tin ra `stdout` (xem mục **Phát hành** để hiểu vì sao từng điểm đều quan trọng).

## Quy trình phát hành (dành cho maintainer)

> Phát hành là thao tác của maintainer: mục **Bộ phát hành (Release set)** phía trên chỉ tóm tắt quy tắc, quy trình đầy đủ áp dụng theo mục này.

Plugin này gồm **1 gói chính + 8 gói con** (xem lý do thiết kế đa gói tại [`adr/0013`](./adr/0013-bundle-multi-component-rows.md) và [`adr/0014`](./adr/0014-subpackage-contract.md)); cả 9 gói khóa đồng bộ phiên bản với nhau và gói chính khai báo 8 gói con làm **phụ thuộc chạy theo phiên bản chính xác**. Vì vậy “phát hành” không bao giờ là đăng một gói lẻ, mà là phát hành **một bộ phát hành (release set)**:

| Kênh | Cổng vào phía người dùng | Điều kiện bắt buộc trước |
|---|---|---|
| npm (khuyến nghị, dùng trực tiếp trong mục “Thêm plugin” của DSH Desktop) | Tên gói `dsh-plugin-wallpaper-engine` (có thể kèm `@<phiên bản>`) | Cả 9 gói **cùng phiên bản** đều đã có trên registry |
| GitHub Release (mirror / ngoại tuyến) | 9 tệp tarball + `release-set.json` | Tệp đính kèm Release **bắt buộc đủ bộ 9 gói**, cài ngoại tuyến bằng `scripts/install-release.mjs` |

Cả hai kênh dùng chung một nguồn sản phẩm: `npm run pack:release`.

---

### 1. Vì sao “chỉ đính kèm gói chính” chắc chắn thất bại (đã kiểm chứng thực tế, đừng thử lại)

Trong `dependencies` của gói chính ở dạng phát hành có 8 phiên bản chính xác trần (ví dụ `dsh-plugin-wallpaper-engine-fx: "<phiên bản>"`). `pnpm` sẽ đem các phiên bản đó lên **registry** để phân giải, bất kể tệp `.tgz` của gói chính đến từ đâu. Kết quả đo thực tế trên profile cô lập:

```text
# Thử nghiệm A: chỉ cài tarball gói chính dạng phát hành (ví dụ lịch sử; số phiên bản là giá trị tại thời điểm đo, không phải phiên bản hiện tại)
[ERR_PNPM_FETCH_404] GET https://registry.npmjs.org/dsh-plugin-wallpaper-engine-media-bridge: Not Found - 404
This error happened while installing the dependencies of dsh-plugin-wallpaper-engine@1.3.3
```

```text
# Thử nghiệm B: cài cùng lúc cả 9 tarball dưới dạng phụ thuộc file: cấp cao nhất
[ERR_PNPM_FETCH_404] GET https://registry.npmjs.org/dsh-plugin-wallpaper-engine-fonts: Not Found - 404
```

```text
# Thử nghiệm C2: ghi overrides (tên gói con → file:<tgz>) trong pnpm-workspace.yaml của profile + cài gói chính bằng file:
Progress: resolved 13, added 13, done            # exit 0
ALL 8 top-level packages present; createRequire(profile/cordis.yml).resolve() OK ×8   # Giá trị ví dụ tại thời điểm thử nghiệm; bộ phát hành hiện tại gồm 9 gói
```

Kết luận:

- Phụ thuộc `file:` ở cấp cao nhất **không thỏa mãn** dải phiên bản registry của phụ thuộc bắc cầu (Thử nghiệm B) ⇒ “chạy `pnpm add` cả 9 tệp `.tgz` một lúc” không phải cách cài đặt hợp lệ.
- Cơ chế duy nhất để cài trọn bộ 9 gói ngoại tuyến là dùng `overrides:` của profile (Thử nghiệm C2). Đây cũng là cách bài chạy tương thích thực tế của chính DSH sử dụng (hàm `main()` trong `test/compat-harness-live.mjs`: kênh tarball ghi mục `overrides` vào `pnpm-workspace.yaml` của profile).

---

### 2. Trước khi phát hành

#### 2.1 Tăng phiên bản (9 nơi, đồng bộ)

Phiên bản tại `package.json` gốc và 8 tệp `packages/*/package.json` (tổng 9 nơi) bắt buộc phải giống nhau từng ký tự; giữa các gói con với nhau và từ gói con tới gói chính không được khai báo phụ thuộc phiên bản (`test/verify-subpackage-manifests.mjs` sẽ chặn ngay nếu lệch phiên bản). **Một khi số phiên bản đã tồn tại trên npm thì không thể ghi đè**: `npm publish` sẽ từ chối với lỗi `EPUBLISHCONFLICT`, và GitHub Release cũng không nên ghi đè tag trùng tên; trước khi phát hành hãy chạy `npm view <gói>@<phiên bản> version` để xác nhận chưa bị chiếm dụng (xem §3.2). Sau khi sửa đồng loạt cả 9 nơi, phải chạy `npm install --package-lock-only --ignore-scripts` để tính lại tệp lock (`test/verify-package-publish.mjs` mục ⑧ so khớp từng ký tự version / đặc tả phụ thuộc giữa manifest gốc và tệp lock — chỉ sửa manifest mà không cập nhật lock sẽ báo đỏ).

#### 2.2 Tạo bộ phát hành

```sh
npm run pack:release                      # → .test-cache/release/set-<ngẫu nhiên>/ (9 tệp tgz + release-set.json)
npm run pack:release -- --output <thư mục> # Chỉ định thư mục đầu ra
```

Dung lượng sản phẩm thay đổi theo phiên bản nên không ghi cứng trong tài liệu: sau khi đóng gói hãy dùng `npm pack --dry-run` để xem danh sách tệp, hoặc chạy `ls -l` trực tiếp trên các tệp `.tgz` trong `.test-cache/release/set-<ngẫu nhiên>/`. Trường `publishOrder` trong `release-set.json` chính là thứ tự phát hành: **8 gói con trước, gói chính cuối cùng**.

`pack:release` chỉ đóng gói, tuyệt đối không publish; còn chạy `npm pack` trực tiếp ở thư mục gốc sẽ cho ra **manifest phát triển** (chứa `scripts` và `devDependencies`, `files` không gồm gói con), không thể dùng làm bộ phát hành.

#### 2.3 Tự kiểm tra bộ phát hành (guard mức cứng)

```sh
node test/verify-release-set.mjs
```

Script sẽ đóng gói thật một lần, giải nén từng byte của 9 tarball và kiểm tra 4 điều (5 ca đối chứng âm dùng chung cùng bộ tiêu chí):

1. Bộ phát hành = 1 gói chính + mỗi gói con trong kho đúng 1 gói, tên và phiên bản khớp từng ký tự với manifest mã nguồn, gói chính đứng cuối;
2. Mục `dependencies` trong tarball gói chính chứa đúng 8 gói con với giá trị bằng đúng phiên bản thật của từng gói con, **không có `^`/`~`/`*`**, không thừa không thiếu;
3. Tarball gói chính không chứa các thư mục phát triển như `packages/`, `src/`, `test/`, `scripts/`, `docs/`, nhưng bắt buộc phải có `lib/subpackage-boot.js` và `cordis.patch.yml`;
4. Mỗi tarball gói con đều có `lib/index.js`, `cordis.patch.yml`, và những gói khai báo `dsh.client` bắt buộc phải có tệp mà `exports['./client']` trỏ tới.

---

### 3. Kênh A: npm (dùng được ngay trong mục “Thêm plugin” của DSH Desktop)

#### 3.1 Phát hành (tuân thủ nghiêm ngặt `publishOrder`)

```sh
set_dir=.test-cache/release/set-XXXXXX
# 1) Phát hành 8 gói con trước
for f in $(node -e "console.log(require('./$set_dir/release-set.json').publishOrder.slice(0,-1).join(' '))"); do
  npm publish "$set_dir/$f" --access public
done
# 2) Chỉ sau khi cả 8 gói con đều thành công mới phát hành gói chính
npm publish "$set_dir/$(node -e "const s=require('./$set_dir/release-set.json');console.log(s.publishOrder.at(-1))")" --access public
```

Xem đoạn lệnh PowerShell tương đương cho Windows ở mục §5 (khi không có Git Bash).

#### 3.2 Vì sao phải “gói con trước, gói chính sau và không ngắt quãng”

Phát hành gói chính trước khi đủ gói con là **kịch bản thảm họa**: người dùng chạy `pnpm add dsh-plugin-wallpaper-engine` sẽ gặp lỗi `ERR_PNPM_FETCH_404` ngay lúc cài và bị rollback toàn bộ. DSH phân loại lỗi này là `not-found` rồi báo lỗi trên giao diện, khiến người dùng thấy “plugin này không cài được”. Gói chính đã đăng **không thể** sửa bằng cách đăng đè lại cùng phiên bản (không được ghi đè cùng version) — chỉ có thể đăng bù các gói con còn thiếu (đăng bù xong là khôi phục dùng được ngay), hoặc tăng phiên bản rồi phát hành lại gói chính.

Trước khi đăng hãy chạy `npm view <từng gói>@<phiên bản> version` để chắc chắn cả 9 gói đều chưa bị chiếm; nếu bị gián đoạn giữa chừng thì khi khôi phục chỉ đăng bù những gói còn thiếu.

#### 3.3 Tự kiểm chứng sau phát hành (bắt buộc qua cả 3 bước)

```sh
# ① Xác nhận cả 9 phiên bản đều đã có trên registry (thay VERSION bằng phiên bản vừa phát hành)
VERSION=<phiên bản lần này>
for p in dsh-plugin-wallpaper-engine dsh-plugin-wallpaper-engine-{about-notice,fonts,fx,glass,mascot-avatar,media-bridge,parallax,pet-link}; do
  npm view "$p@$VERSION" version || echo "MISSING $p"
done
```

```sh
# ② Cài thật trên một profile trống (các gói con phải được phân giải từ registry, không phải tàn dư cục bộ)
mkdir -p /tmp/rel-check && cd /tmp/rel-check
printf '{"name":"rel-check","private":true,"version":"0.0.0"}\n' > package.json
printf 'packages:\n  - .\nnodeLinker: hoisted\nautoInstallPeers: false\n' > pnpm-workspace.yaml
pnpm add dsh-plugin-wallpaper-engine@<VERSION>
node -e "const{createRequire}=require('node:module');const r=createRequire(process.cwd()+'/cordis.yml');for(const n of ['dsh-plugin-wallpaper-engine','dsh-plugin-wallpaper-engine-fonts','dsh-plugin-wallpaper-engine-fx','dsh-plugin-wallpaper-engine-parallax','dsh-plugin-wallpaper-engine-pet-link','dsh-plugin-wallpaper-engine-media-bridge','dsh-plugin-wallpaper-engine-mascot-avatar','dsh-plugin-wallpaper-engine-about-notice','dsh-plugin-wallpaper-engine-glass'])r.resolve(n);console.log('9/9 OK')"
```

```sh
# ③ Kiểm thử end-to-end trên DSH Desktop: tạo profile mới → Thêm plugin → dán tên gói → sau khi cài xong xác nhận đủ 9 thư mục
ls "<DSH_HOME>/profiles/<profile>/node_modules" | grep dsh-plugin-wallpaper-engine
```

#### 3.4 Đồng bộ mirror npmmirror

Nguồn cài đặt của DSH có thể chọn `registry.npmjs.org` / `registry.npmmirror.com` / nguồn tùy chỉnh. Mirror **đồng bộ bất đồng bộ**: nếu gói chính đã lên mirror trước trong khi gói con chưa kịp về, người dùng chọn mirror sẽ dính lỗi 404 giống Thử nghiệm A. Sau khi publish, hãy kiểm tra từng gói tại `https://registry.npmmirror.com/<tên gói>/<phiên bản>` đều trả về HTTP 200 rồi mới công bố rộng rãi phiên bản mới.

---

### 4. Kênh B: GitHub Release (mirror và cài đặt ngoại tuyến)

#### 4.1 Tệp đính kèm bắt buộc đủ bộ 9 gói + manifest

```sh
# VERSION giống với giá trị ở §3.3
VERSION=<phiên bản lần này>
gh release create "v$VERSION" \
  .test-cache/release/set-XXXXXX/*.tgz \
  .test-cache/release/set-XXXXXX/release-set.json \
  --title "v$VERSION" --notes-file docs/CHANGELOG.md
```

Có thể đính kèm thêm `SHA256SUMS.txt` (`sha256sum *.tgz > SHA256SUMS.txt`). **Tuyệt đối không** chỉ đính kèm riêng tệp `.tgz` của gói chính — đó là một gói không thể cài đặt (§1 Thử nghiệm A). Release chỉ là bản sao mirror của npm: cùng lô byte, cùng phiên bản.

#### 4.2 Cài đặt ngoại tuyến (đi qua `overrides`, không dùng `pnpm add` đơn lẻ)

```sh
node scripts/install-release.mjs --set <thư mục bộ phát hành đã giải nén> --profile web --dsh-home <DSH_HOME> --app-closed
node scripts/install-release.mjs ... --dry-run     # Chỉ in các dòng overrides sẽ ghi mà không thay đổi tệp
```

Script thực hiện 4 việc: kiểm tra bộ phát hành (manifest ↔ tarball khớp 1-1, gói chính đứng cuối) → sao lưu `package.json` và `pnpm-workspace.yaml` của profile → ghi 8 dòng `overrides` (tên gói con → tệp `.tgz` cùng thư mục) vào `pnpm-workspace.yaml` kèm `nodeLinker: hoisted` / `autoInstallPeers: false` → chạy `dsh plugin add <tgz gói chính>`, cuối cùng tự chạy `require.resolve` cho từng gói trong cả 9 gói (gồm cả điểm vào `./client` của các gói có `dsh.client`) và kiểm tra phiên bản.

Ranh giới: nếu profile **đã có sẵn** mục `overrides:`, script sẽ từ chối thực thi và in ra các dòng cần hợp nhất thủ công (không thể tự động gộp phần giao của hai tập override); script không phát hành và không sửa phiên bản.

#### 4.3 Vì sao không thể trông chờ giao diện DSH UI ăn trực tiếp `.tgz` từ Release

Trình quản lý plugin của DSH chỉ thực thi `pnpm add <spec>` (`parseInstallSpec` chấp nhận tên gói registry / git / đường dẫn tarball / thư mục cục bộ). Dán tệp `.tgz` của gói chính → rơi vào Thử nghiệm A; dán cả 9 tệp `.tgz` cũng không cài được cùng lúc (trình quản lý yêu cầu mỗi lần add **làm thay đổi đúng một** phụ thuộc, nếu không sẽ báo `ambiguous-install`, hơn nữa `file:` cấp cao nhất vẫn không thỏa dải phiên bản bắc cầu). Vì vậy với bộ 9 gói ngoại tuyến, bắt buộc phải dùng script ghi `overrides` xuống profile trước rồi mới để trình quản lý tiến hành cài đặt.

---

### 5. Đoạn lệnh phát hành bằng PowerShell (Windows bản địa)

```powershell
$set = ".test-cache\release\set-XXXXXX"
$index = Get-Content "$set\release-set.json" -Raw | ConvertFrom-Json
$env:npm_config_cache = "$PWD\.test-cache\npm-cache"   # Trong môi trường sandbox/hạn chế quyền, cache mặc định ngoài workspace có thể gặp EPERM
foreach ($file in $index.publishOrder) {
  npm publish "$set\$file" --access public
  if ($LASTEXITCODE -ne 0) { throw "publish failed: $file" }
}
```

---

### 6. Xử lý sự cố

| Triệu chứng | Ý nghĩa | Cách xử lý |
|---|---|---|
| `EPUBLISHCONFLICT` | Phiên bản này đã tồn tại | Không thể ghi đè; đăng bù các gói còn lại, hoặc tăng phiên bản rồi phát hành lại cả bộ |
| Đang đăng dở các gói con thì gián đoạn | Nếu gói chính đã đăng thì người dùng sẽ không cài được | Đăng bù ngay các gói con còn thiếu (khôi phục lập tức), không đụng vào phiên bản đã đăng |
| Người dùng cài xong chỉ có gói chính / báo 404 | Thiếu gói con ở phiên bản đó hoặc mirror chưa đồng bộ | Dùng `npm view` kiểm tra gói nào thiếu; đăng bù hoặc chờ mirror đồng bộ xong |
| `ERR_PNPM_MISSING_TARBALL_INTEGRITY` | pnpm 11.0–11.8 ở chế độ hoisted không có integrity cho URL trần | Dùng pnpm 11.9+ (ghi chú thực nghiệm: máy thử 11.22.0 hoạt động bình thường, chỉ mang tính tham khảo chứ không phải yêu cầu phiên bản); cài ngoại tuyến dùng `install-release.mjs` |
| DSH báo `ambiguous-install` | Một lệnh add làm thay đổi nhiều hơn một phụ thuộc | Mỗi lần chỉ cài một spec; với bộ 9 gói hãy dùng script |
| Cài xong giao diện xuất hiện các hàng bị trùng | Gói con bị chọn riêng làm bundle | Chỉ chọn gói chính (logic `retainMainBundle`, script đã tự động xử lý) |

Khôi phục (rollback): dùng `npm deprecate <gói>@<phiên bản> "lý do"` để thông báo ngừng dùng, **không** chạy `npm unpublish`; trên GitHub Release có thể đánh dấu `--prerelease` hoặc xóa tệp đính kèm, nhưng phiên bản đã đăng lên npm không thể thu hồi.

---

### 7. Bảng kiểm phát hành

- [ ] Tăng đồng bộ phiên bản ở cả 9 nơi, `grep -r '"version"' package.json packages/*/package.json` khớp hoàn toàn
- [ ] `npm run verify` xanh toàn bộ (bao gồm `test/verify-release-set.mjs`)
- [ ] Chạy `npm run pack:release`, xác nhận đủ 9 tệp `.tgz` + `release-set.json`
- [ ] Phát hành theo `publishOrder`: 8 gói con trước → gói chính sau cùng
- [ ] `npm view` tra cứu được đầy đủ cả 9 phiên bản
- [ ] Cài thật trên một profile trống + vượt qua đủ 9 lần `require.resolve`
- [ ] Cả 9 phiên bản trên npmmirror đều trả về HTTP 200
- [ ] Tạo profile mới trên DSH Desktop và cài thử end-to-end một lần
- [ ] GitHub Release đính kèm đủ **bộ 9 gói** (+ `release-set.json` / `SHA256SUMS.txt`)
- [ ] Ghi chú phát hành (Release notes) nêu rõ “Cài từ mã nguồn xem CONTRIBUTING §2 / Cài ngoại tuyến xem mục §4.2 trong cùng tài liệu”
