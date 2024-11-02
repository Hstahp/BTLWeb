// Hàm để toggle icon và lớp 'active' trên phần tử subs-menu
function changeIcon(icon) {
    // Toggle giữa '•••' và '✕'
    icon.textContent = icon.textContent === '•••' ? '✕' : '•••';
    
    // Toggle lớp 'active' trên phần tử subs-menu
    const subsMenu = document.querySelector('.subs-menu');
    subsMenu.classList.toggle('active');
}

 function CheckSearch(){
    var name = document.getElementById("search").value;
    if(name == "") // Đảm bảo rằng giá trị của name là một chuỗi rỗng
        alert("Bạn chưa nhập từ khóa");
 }

// Đảm bảo rằng tài liệu đã được tải xong trước khi thực thi hàm
document.addEventListener('DOMContentLoaded', function() {
    // Tạo một đối tượng Swiper mới cho phần tử có lớp 'card-wrapper'
    new Swiper('.card-wrapper', {
        // Cho phép trình chiếu lặp lại
         loop: true,
        // Khoảng cách giữa các slide
        spaceBetween: 40,
        // Cấu hình cho các chấm phân trang
        pagination: {
            // Chọn phần tử chứa các chấm phân trang
            el: '.swiper-pagination',
            // Cho phép các chấm phân trang có thể được nhấp vào
            clickable: true,
        },
        // Cấu hình cho các nút điều hướng
        navigation: {
            // Chọn phần tử cho nút next
            nextEl: '.swiper-button-next',
            // Chọn phần tử cho nút prev
            prevEl: '.swiper-button-prev',
        },
        // Cấu hình cho các điểm ngắt trên các màn hình khác nhau
        breakpoints: {
            // Trên màn hình có chiều rộng 0px trở xuống, hiển thị 1 slide
            0: {
                slidesPerView: 1
            },
            // Trên màn hình có chiều rộng từ 768px trở lên, hiển thị 2 slide
            768: {
                slidesPerView: 2
            },
            // Trên màn hình có chiều rộng từ 1024px trở lên, hiển thị 3 slide
            1024: {
                slidesPerView: 3
            },
        }
    });
});
