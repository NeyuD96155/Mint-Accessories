
import "../styles/About.css"; // Giả sử bạn có một file CSS riêng cho trang này

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>Chào mừng đến với [Tên Công Ty]</h1>
        <p>Tại [Tên Công Ty], chúng tôi tin vào [Tầm Nhìn/Sứ Mệnh Công Ty].</p>
      </section>

      <section className="team-section">
        <h2>Gặp Gỡ Đội Ngũ Của Chúng Tôi</h2>
        <div className="team-members">
          {/* Giả sử bạn có các components con cho từng thành viên */}
        </div>
      </section>

      <section className="history-section">
        <h2>Lịch Sử và Thành Tựu</h2>
        <p>[Một số thông tin về lịch sử phát triển, thành tựu nổi bật của công ty]</p>
      </section>

      <section className="values-section">
        <h2>Giá Trị Cốt Lõi</h2>
        <ul>
          <li>Giá Trị 1</li>
          <li>Giá Trị 2</li>
          {/* Thêm các giá trị khác */}
        </ul>
      </section>
    </div>
  );
};

export default About;
