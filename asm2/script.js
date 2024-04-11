let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Chuyển đổi hình ảnh mỗi 2 giây
}

showSlides(); // Bắt đầu hiển thị hình ảnh
