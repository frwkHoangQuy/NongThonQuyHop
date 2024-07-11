window.addEventListener('scroll', function () {
  var nav = document.querySelector('.nav');
  var content = document.querySelector('.content');
  var scrollPosition = window.scrollY;
  var changePosition = content.offsetTop / 3;

  if (scrollPosition > changePosition) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const navbarItem = [
  { name: "Trang chủ", breadcrumb: "Trang chủ" },
  { name: "Sản phẩm", breadcrumb: "Sản phẩm" },
  { name: "Tin tức", breadcrumb: "Tin tức" },
  { name: "Hình ảnh - Sự kiện", breadcrumb: "Hình ảnh - Sự kiện" },
  { name: "Cơ sở sản xuất", breadcrumb: "Cơ sở sản xuất" },
  { name: "Đăng nhập", breadcrumb: "Đăng nhập" }
];

const fakeNewsData = [
  {
    imgSrc: "https://placehold.co/300x150",
    date: "12/05/2023",
    category: "Tin tức",
    views: 118,
    title: "Quỳ Hợp tham quan mô hình trồng cây hương bài và đào tạo nghề làm hương t...",
    description: "Thực hiện kế hoạch của “Dự án xây dựng mô hình trồng cây hương bài và đào tạo..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "14/03/2023",
    category: "Tin tức",
    views: 79,
    title: "Quỳ Hợp phát triển, nâng tầm sản phẩm OCOP",
    description: "Thực hiện Chương trình “Mỗi xã một sản phẩm” (OCOP), những năm qua huyện Q..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "16/12/2022",
    category: "Sự kiện",
    views: 375,
    title: "Trồng thử cây chỉ thị cỏ tranh với lá, rậm như rừng, bán đi đâu mà cả làng ở Nghệ An...",
    description: "Sau nhiều năm chặt vét cỏ với cây cỏ tranh “ngự vãn hoàn nợ”, đến nay, người..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "16/12/2022",
    category: "Sự kiện",
    views: 99,
    title: "Nông dân Quỳ Hợp thu hoạch lúa hè thu năm 2022",
    description: "Hiện nay, bà con nông dân huyện Quỳ Hợp đã cơ bản thu hoạch xong 1.910ha lúa vụ..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "08/12/2022",
    category: "Tin tức",
    views: 18,
    title: "Hội phụ nữ Châu Lý tổng dọn vệ sinh môi trường, trồng cây xây dựng tuyến đường...",
    description: "Sáng 9/10, Hội LHPN huyện Quỳ Hợp chỉ đạo Hội LHPN xã Châu Lý tổ chức ra qu..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "05/12/2022",
    category: "Sự kiện",
    views: 311717,
    title: "Châu Quang tổng kết sản xuất vụ xuân năm 2022",
    description: "Ngày 12/12, UBND xã Châu Quang tổ chức hội nghị tổng kết sản xuất nông, lâm..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "05/12/2022",
    category: "Tin tức",
    views: 54,
    title: "Bản Mường Ham, xã Châu Cường đón chuẩn nông thôn mới, kỳ niệm 92 thành...",
    description: "Bản Mường Ham, xã Châu Cường đón chuẩn nông thôn mới, kỳ niệm 92 thành..."
  },
  {
    imgSrc: "https://placehold.co/300x150",
    date: "05/12/2022",
    category: "Tin tức",
    views: 180,
    title: "Thẩm định xóm Xuân Sơn Văn Lợi đạt chuẩn nông thôn mới",
    description: "Vừa qua, đoàn thẩm định NTM huyện Quỳ Hợp do đồng chí Quán Vy Giang, Phó ch..."
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.nav ul');
  navbarItem.forEach((item) => {
    const newItem = document.createElement('li');
    newItem.innerHTML = `
          <a href="#">
              ${item.name}
          </a>
      `;
    newItem.addEventListener('click', function () {
      document.querySelectorAll('.nav ul li a').forEach(el => el.classList.remove('active'));
      newItem.querySelector('a').classList.add('active');
      document.querySelector('.breadcrumb').innerHTML = `
              <a href="#">Trang chủ</a> &gt; <a href="#">${item.breadcrumb}</a>
          `;
    });
    navbar.appendChild(newItem);
  });

  const newsGrid = document.querySelector('.news-grid');
  fakeNewsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
          <img src="${news.imgSrc}" alt="News Image" height="150" width="300">
          <div class="info">
              <div class="meta">
                  <span>${news.date}</span>
                  <span>${news.category}</span>
                  <span>${news.views}</span>
              </div>
              <h3>${news.title}</h3>
              <p>${news.description}</p>
          </div>
      `;
    newsGrid.appendChild(newsItem);
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

