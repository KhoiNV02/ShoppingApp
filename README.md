# Tên Dự Án "Dự án demo Shopping App"

## Mô tả
Dự án Demo sau 2 tháng thực tập tại FPT SoftWare

## Tính Năng
- Đăng nhập, đăng ký.
- Quản lý sản phẩm, gồm: xem, thêm, xóa, sửa.
- Tìm kiếm.
- Quản lý đơn hàng và lịch sử đơn hàng.
- Chuyển đổi ngôn ngữ.
- Phân loại sản phẩm dựa trên bộ lộc
## Mô tả API
- /api/user: Đăng ký tài khoản.(POST)
- /api/login: Đăng nhập. (PUT)
- /api/cartItems: Thêm mới sản phẩm vào giỏ hàng. (POST)
- /api/cartItems/userID: Lấy dữ liệu về sản phẩm trong giỏ hàng của người dùng. (GET)
- /api/cartItems/purchase/: Mua sản phẩm. (PUT)
- /api/cartItems/{cartItemId}: cập nhật dữ liệu của sản phẩm trong giỏ hàng. (PUT)
- /api/cartItems/{cartItemId}: Xóa sản phẩm ra khỏi giỏ hàng. (DELETE)
- /api/cartItems/buyagain/{orderId}: Mua lại sản phẩm. (POST)
-/api/feedbacks: Thêm mới 1 phản hồi. (POST)
- /api/feedbacks/{productId}: Lấy dữ liệu phẩn hồi của sản phẩm (GET)
- /api/orders: Thêm mới đơn hàng. (POST)
- /api/orders/{userId}: lấy dữ liệu đơn hàng. (GET)
- /api/orders/{orderId}: Cập nhật đơn hàng. (PUT)
- /api/products: Thêm mới sản phẩm. (POST)
- ....................


