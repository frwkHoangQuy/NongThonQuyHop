$(document).ready(function () {
  function getParameterByName(name) {
      const url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
      const results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  const newsId = getParameterByName('ID');

  $.ajax({
      url: 'https://localhost:7214/news',
      method: 'GET',
      xhrFields: {
          withCredentials: true
      },
      success: function (data) {
          const news = data.find(item => item.id === parseInt(newsId));
          if (news) {
              const detailContent = $(`
                  <div class="news-detail">
                      <h2>${news.tieU_DE}</h2>
                      <div class="meta">
                          <span>${new Date(news.ngaY_TAO).toLocaleDateString()}</span>
                          <span>${news.luoT_XEM}</span>
                      </div>
                      <div class="content">
                          ${news.noI_DUNG}
                      </div>
                  </div>
              `);
              $('.news-detail').html(detailContent);
          } else {
              $('.news-detail').html('<p>Không tìm thấy bài viết.</p>');
          }
      },
      error: function (err) {
          console.error('Error fetching news data', err);
      }
  });

  $(document).on('click', '.breadcrumb a', function (event) {
      event.preventDefault();
      const breadcrumbText = $(this).text();
      if (breadcrumbText === 'Tin tức - Sự kiện') {
          window.location.href = 'index.html'; 
      }
  });
});
