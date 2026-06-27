import type { Metadata } from 'next'
import './page.css'

export const metadata: Metadata = {
  title: 'Bạt HDPE chống thấm Mayfarm | Cắt hàn theo yêu cầu, thi công toàn quốc',
  description:
    'Mayfarm cung cấp bạt HDPE nguyên sinh 0.3mm-2mm, bể bạt nuôi cá tôm, lót hồ ao, chống thấm sân thượng, biogas. Tư vấn chọn độ dày, cắt hàn theo yêu cầu, miễn ship toàn quốc.',
}

export default function Page() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Mayfarm Việt Nam - Vật tư nông nghiệp, bạt HDPE và thi công chống thấm</span>
          <span>Hotline/Zalo dự án: 0967.30.30.93</span>
        </div>
      </div>

      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top" aria-label="Mayfarm">
            <img src="/portfolio/mayfarm/mayfarm-logo.png" alt="Logo Mayfarm" />
            <span>Mayfarm</span>
          </a>
          <nav className="nav-links" aria-label="Điều hướng">
            <a href="#san-pham">Sản phẩm</a>
            <a href="#chon-nhanh">Chọn loại bạt</a>
            <a href="#do-day">Độ dày</a>
            <a href="#video">Video</a>
            <a href="#ung-dung">Ứng dụng</a>
            <a href="#bao-gia">Báo giá</a>
          </nav>
          <a className="btn btn-primary" href="tel:0967303093">Gọi ngay</a>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div>
              <div className="eyebrow">Bạt HDPE nguyên sinh 100% - cắt hàn theo yêu cầu</div>
              <h1>Bạt HDPE chống thấm cho hồ ao, bể nuôi cá tôm, biogas và công trình</h1>
              <p className="hero-lead">
                Mayfarm tư vấn đúng độ dày, cung cấp bạt HDPE 0.3mm đến 2mm, nhận hàn gia công,
                giao hàng toàn quốc và thi công tận nơi cho dự án cần chống thấm bền lâu.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#bao-gia">Nhận báo giá nhanh</a>
                <a className="btn btn-secondary" href="https://zalo.me/0967303093">Chat Zalo tư vấn</a>
              </div>
              <div className="trust-strip" aria-label="Cam kết Mayfarm">
                <div className="trust-item">
                  <strong>0.3-2mm</strong>
                  <span>Đủ độ dày phổ biến</span>
                </div>
                <div className="trust-item">
                  <strong>100%</strong>
                  <span>Nhựa nguyên sinh</span>
                </div>
                <div className="trust-item">
                  <strong>Toàn quốc</strong>
                  <span>Giao hàng, thi công</span>
                </div>
                <div className="trust-item">
                  <strong>5-7 năm</strong>
                  <span>Tư vấn bảo hành theo hạng mục</span>
                </div>
              </div>
            </div>

            <aside className="quote-box" id="bao-gia" aria-label="Form nhận tư vấn">
              <h2>Nhận báo giá đúng nhu cầu</h2>
              <p>Gửi kích thước hoặc mô tả công trình, Mayfarm sẽ gợi ý độ dày và phương án hàn bạt phù hợp.</p>
              <form className="quick-form" action="#" method="post">
                <input type="text" name="name" placeholder="Tên của anh/chị" aria-label="Tên" />
                <input type="tel" name="phone" placeholder="Số điện thoại/Zalo" aria-label="Số điện thoại" />
                <select name="need" aria-label="Nhu cầu">
                  <option value="">Anh/chị cần dùng cho hạng mục nào?</option>
                  <option>Bể bạt nuôi cá/tôm/lươn/ốc</option>
                  <option>Lót hồ ao, hồ chứa nước</option>
                  <option>Chống thấm sân thượng/mái/tầng hầm</option>
                  <option>Túi khí biogas, xử lý nước thải</option>
                  <option>Mua cuộn/cắt lẻ theo kích thước</option>
                </select>
                <textarea name="message" placeholder="Kích thước, khu vực giao hàng, độ dày đang quan tâm" />
                <button className="btn btn-dark" type="submit">Gửi yêu cầu tư vấn</button>
              </form>
            </aside>
          </div>
        </section>

        {/* ── Sản phẩm ── */}
        <section id="san-pham">
          <div className="container">
            <div className="section-head">
              <h2>Các dòng bạt HDPE Mayfarm đang cung cấp</h2>
              <p>
                Khách có thể chọn theo độ dày, theo ứng dụng hoặc gửi kích thước để Mayfarm tư vấn
                phương án cắt hàn tiết kiệm nhất.
              </p>
            </div>
            <div className="product-grid">
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-hdpe-03.jpg" alt="Bạt HDPE 0.3mm Mayfarm" />
                <div className="product-body">
                  <h3>Bạt HDPE 0.3mm</h3>
                  <p className="product-meta">Phù hợp hồ nhỏ, lót tạm, chống thấm dân dụng chi phí tốt, dễ cắt trải.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-03mm-du-kich-thuoc/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-hdpe-05.jpg" alt="Bạt HDPE 0.5mm Mayfarm" />
                <div className="product-body">
                  <h3>Bạt HDPE 0.5mm</h3>
                  <p className="product-meta">Dòng được hỏi nhiều cho bạt lót hồ cá, ao nhỏ, hồ chứa nước và công trình vừa.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-0-5-mm/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-hdpe-075.jpg" alt="Bạt HDPE 0.75mm Mayfarm" />
                <div className="product-body">
                  <h3>Bạt HDPE 0.75mm</h3>
                  <p className="product-meta">Cân bằng giữa độ bền và chi phí, phù hợp hồ ao, bể nuôi và hạng mục cần hàn nối.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-075mm-du-kich-thuoc/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-hdpe-1.jpg" alt="Bạt HDPE 1mm Mayfarm" />
                <div className="product-body">
                  <h3>Bạt HDPE 1mm</h3>
                  <p className="product-meta">Lựa chọn phổ biến cho bể bạt nuôi cá tôm, biogas, hồ xử lý nước và trang trại.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-1mm-du-kich-thuoc-chat-luong/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-hdpe-15.jpg" alt="Bạt HDPE 1.5mm Mayfarm" />
                <div className="product-body">
                  <h3>Bạt HDPE 1.5mm</h3>
                  <p className="product-meta">Dùng cho công trình yêu cầu bền hơn, chịu lực tốt hơn, phù hợp dự án lâu dài.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-1-5mm-du-kich-thuoc-chat-luong/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-hdpe-2.jpg" alt="Bạt HDPE 2mm Mayfarm" />
                <div className="product-body">
                  <h3>Bạt HDPE 2mm</h3>
                  <p className="product-meta">Phù hợp hồ lớn, môi trường khắc nghiệt, nước thải, bãi rác và dự án công nghiệp.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-2mm-du-kich-thuoc-chat-luong/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-be-bat-tron.jpg" alt="Bể bạt tròn HDPE nuôi cá tôm" />
                <div className="product-body">
                  <h3>Bể bạt tròn HDPE</h3>
                  <p className="product-meta">Giải pháp nuôi cá, tôm, ốc, lươn; có thể tư vấn khung, kích thước và phụ kiện.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/be-bat-tron-hdpe-nuoi-ca-tom-gia-tot/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-be-bat-xanh.jpg" alt="Bể bạt màu xanh HDPE" />
                <div className="product-body">
                  <h3>Bể bạt màu xanh HDPE</h3>
                  <p className="product-meta">Dòng bể bạt thẩm mỹ, dùng cho nuôi thủy sản, sân vườn và mô hình nhỏ.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/be-bat-mau-xanh-hdpe-nuoi-tom-ca-oc-ben-lau/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-biogas.jpg" alt="Túi khí biogas bạt HDPE" />
                <div className="product-body">
                  <h3>Túi khí biogas HDPE</h3>
                  <p className="product-meta">Dùng cho chăn nuôi, xử lý chất thải, cần kín khí và độ bền mối hàn.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/tui-khi-biogas-be-biogas/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-san-thuong.jpg" alt="Bạt HDPE chống thấm sân thượng" />
                <div className="product-body">
                  <h3>Bạt HDPE chống thấm sân thượng</h3>
                  <p className="product-meta">Giải pháp chống thấm mái, sân thượng, hố móng, tầng hầm và khu vực rò nước.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-chong-tham-san-thuong/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/product-be-bat-mayfarm.jpg" alt="Bể bạt HDPE Mayfarm nuôi cá tôm ốc" />
                <div className="product-body">
                  <h3>Bể bạt HDPE Mayfarm</h3>
                  <p className="product-meta">Phù hợp khách cần combo bể bạt nuôi cá, tôm, ốc theo kích thước thực tế.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/be-bat-hdpe-may-farm-nuoi-ca-nuoi-tom-nuoi-oc/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
              <article className="product-card">
                <img src="/portfolio/mayfarm/hdpe-hero.jpg" alt="Bạt HDPE 0.3mm đến 2mm đủ kích thước" />
                <div className="product-body">
                  <h3>Bạt HDPE 0.3mm-2mm</h3>
                  <p className="product-meta">Tổng hợp đủ độ dày phổ biến, nhận cắt hàn theo khổ cuộn và yêu cầu công trình.</p>
                  <div className="product-actions">
                    <a className="btn btn-secondary" href="/product/bat-hdpe-0-3mm-den-2mm-du-kich-thuoc/">Xem chi tiết</a>
                    <a className="btn btn-primary" href="#bao-gia">Báo giá</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── Chọn nhanh ── */}
        <section id="chon-nhanh">
          <div className="container">
            <div className="section-head">
              <h2>Khách tìm bạt HDPE thường cần quyết nhanh 1 trong 4 việc này</h2>
              <p>
                Landing page được tối ưu theo các nhóm từ khóa có chuyển đổi: bể bạt nuôi cá,
                bạt lót hồ ao, bạt chống thấm, độ dày và khu vực giao hàng.
              </p>
            </div>
            <div className="intent-grid">
              <article className="intent-card">
                <span className="tag">Nuôi thủy sản</span>
                <h3>Bể bạt HDPE nuôi cá, tôm, lươn</h3>
                <p>Giải pháp giữ nước ổn định, dễ vệ sinh đáy bể, phù hợp hộ nuôi và trang trại cần cắt hàn theo kích thước.</p>
                <a className="btn btn-secondary" href="#bao-gia">Tư vấn bể bạt</a>
              </article>
              <article className="intent-card">
                <span className="tag">Lót hồ ao</span>
                <h3>Bạt lót hồ cá, ao nuôi, hồ chứa nước</h3>
                <p>Hạn chế thất thoát nước, giảm thấm xuống nền đất, dùng cho hồ tưới, hồ cảnh quan và ao nuôi.</p>
                <a className="btn btn-secondary" href="#bao-gia">Gửi kích thước hồ</a>
              </article>
              <article className="intent-card">
                <span className="tag">Chống thấm</span>
                <h3>Bạt chống thấm sân thượng, mái, hố móng</h3>
                <p>Phù hợp hạng mục cần màng chống thấm bền, kháng nắng, thi công kín mối hàn bằng máy chuyên dụng.</p>
                <a className="btn btn-secondary" href="#bao-gia">Hỏi phương án thi công</a>
              </article>
              <article className="intent-card">
                <span className="tag">Dự án</span>
                <h3>Biogas, nước thải, bãi rác, kênh mương</h3>
                <p>Mayfarm nhận tư vấn vật tư và đội thi công cho công trình cần độ bền, chống rò rỉ, kháng hóa chất.</p>
                <a className="btn btn-secondary" href="#bao-gia">Trao đổi dự án</a>
              </article>
            </div>
          </div>
        </section>

        {/* ── Pain points ── */}
        <section className="band">
          <div className="container pain-grid">
            <div className="photo-panel">
              <img src="/portfolio/mayfarm/hdpe-du-an.jpg" alt="Dự án bạt HDPE Mayfarm thi công" />
              <div className="photo-caption">
                <strong>Điểm quyết định không chỉ là giá/m2.</strong>
                <div>Bạt đúng độ dày, mối hàn kín và mặt bằng thi công chuẩn mới giúp công trình dùng bền.</div>
              </div>
            </div>
            <div>
              <div className="section-head">
                <h2>Mayfarm xử lý các rủi ro khách sợ nhất khi mua bạt HDPE</h2>
              </div>
              <div className="check-list">
                <div className="check">
                  <span className="icon">✓</span>
                  <div>
                    <strong>Sợ bạt mỏng hơn quảng cáo</strong>
                    <span>Tư vấn rõ độ dày 0.3mm, 0.5mm, 0.75mm, 1mm, 1.5mm, 2mm theo mục đích dùng, có thể kiểm tra hàng trước khi nhận.</span>
                  </div>
                </div>
                <div className="check">
                  <span className="icon">✓</span>
                  <div>
                    <strong>Sợ nhanh mục nắng, dễ rách</strong>
                    <span>Ưu tiên bạt HDPE nguyên sinh, kháng UV, phù hợp hạng mục ngoài trời và công trình cần tuổi thọ dài.</span>
                  </div>
                </div>
                <div className="check">
                  <span className="icon">✓</span>
                  <div>
                    <strong>Sợ thi công sai gây rò nước</strong>
                    <span>Nhận cắt, hàn, gia công theo yêu cầu; dự án có đội thi công tận nơi và bảo hành kỹ thuật rõ ràng.</span>
                  </div>
                </div>
                <div className="check">
                  <span className="icon">✓</span>
                  <div>
                    <strong>Sợ phí vận chuyển đội chi phí</strong>
                    <span>Hỗ trợ giao hàng toàn quốc, có chính sách miễn ship hoặc tối ưu vận chuyển theo đơn hàng và khu vực.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Độ dày ── */}
        <section id="do-day">
          <div className="container">
            <div className="section-head">
              <h2>Chọn độ dày bạt HDPE theo đúng hạng mục</h2>
              <p>
                Bảng này giúp khách quảng cáo Google tự định hướng trước khi gọi,
                giảm phân vân và tăng khả năng để lại thông tin.
              </p>
            </div>
            <div className="thickness-table">
              <table>
                <thead>
                  <tr>
                    <th>Độ dày</th>
                    <th>Phù hợp nhất</th>
                    <th>Ưu điểm</th>
                    <th>Gợi ý tư vấn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>0.3mm - 0.5mm</strong></td>
                    <td>Hồ nhỏ, ao cá gia đình, lót tạm, chống thấm dân dụng chi phí tối ưu</td>
                    <td>Dễ trải, dễ cắt, giá tốt, phù hợp diện tích vừa và nhỏ</td>
                    <td>Chọn khi nền đã xử lý phẳng, ít vật sắc nhọn và không chịu lực lớn.</td>
                  </tr>
                  <tr>
                    <td><strong>0.75mm - 1mm</strong></td>
                    <td>Bể bạt nuôi cá/tôm, biogas hộ gia đình, hồ chứa nước, nước thải mức vừa</td>
                    <td>Cân bằng độ bền và chi phí, mối hàn ổn định, dùng phổ biến cho trang trại</td>
                    <td>Đây là nhóm nên hỏi tư vấn nếu anh/chị chưa chắc chọn loại nào.</td>
                  </tr>
                  <tr>
                    <td><strong>1.5mm - 2mm</strong></td>
                    <td>Hồ lớn, xử lý nước thải, bãi rác, công nghiệp, nơi cần kháng hóa chất cao</td>
                    <td>Độ bền cao, chịu môi trường khắc nghiệt, phù hợp dự án lâu dài</td>
                    <td>Nên khảo sát mặt bằng và phương án hàn trước khi chốt khối lượng.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Video ── */}
        <section id="video" className="band">
          <div className="container">
            <div className="section-head">
              <h2>Video thực tế về bạt HDPE và thi công Mayfarm</h2>
              <p>
                Các video đang có trên trang cũ được đưa lại vào landing page mới để khách
                xem nhanh sản phẩm, công trình và cách thi công trước khi để lại thông tin.
              </p>
            </div>
            <div className="video-grid">
              <article className="video-card">
                <div className="video-frame">
                  <iframe
                    src="https://www.youtube.com/embed/zeNGWrei5mA?si=3D4ggF-ypoarDxwP"
                    title="Giới thiệu sản phẩm bạt HDPE Mayfarm"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3>Giới thiệu sản phẩm bạt HDPE</h3>
                  <p>Khách xem nhanh hình ảnh bạt, khổ cuộn và ứng dụng thực tế trước khi chọn độ dày.</p>
                </div>
              </article>
              <article className="video-card">
                <div className="video-frame">
                  <iframe
                    src="https://www.youtube.com/embed/ZXjFQQQDzSs?si=IOvoBaARKZDrjo6Z"
                    title="Thi công hồ chứa nước HDPE Mayfarm"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3>Thi công hồ chứa nước HDPE</h3>
                  <p>Minh họa quy trình trải bạt, hàn nối và hoàn thiện cho hạng mục hồ chứa nước.</p>
                </div>
              </article>
              <article className="video-card">
                <div className="video-frame">
                  <iframe
                    src="https://www.youtube.com/embed/rXkrrJeVyPI"
                    title="Cách sử dụng và thi công bạt chống thấm HDPE"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h3>Cách sử dụng bạt chống thấm HDPE</h3>
                  <p>Giúp khách hiểu vì sao chuẩn bị mặt bằng và mối hàn quyết định độ kín nước.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── Ứng dụng ── */}
        <section id="ung-dung" className="band">
          <div className="container">
            <div className="section-head">
              <h2>Ứng dụng bạt HDPE Mayfarm đang được khách hỏi nhiều</h2>
              <p>Các nhóm này bám sát từ khóa có chuyển đổi trong báo cáo quảng cáo của Mayfarm.</p>
            </div>
            <div className="use-grid">
              <article className="use-card">
                <img src="/portfolio/mayfarm/hdpe-nuoi-trong.jpg" alt="Bạt HDPE dùng trong nuôi trồng thủy sản" />
                <div>
                  <h3>Nuôi cá, tôm, lươn, ốc</h3>
                  <p>Lót đáy hồ, làm bể bạt khung sắt hoặc bể tròn, giúp quản lý nước và vệ sinh thuận tiện sau mỗi vụ.</p>
                </div>
              </article>
              <article className="use-card">
                <img src="/portfolio/mayfarm/hdpe-hero.jpg" alt="Bạt HDPE lót ao hồ" />
                <div>
                  <h3>Hồ chứa nước, ao tưới</h3>
                  <p>Giảm thất thoát nước, dùng cho hồ tưới nông nghiệp, hồ cảnh quan, hồ điều hòa và kênh mương.</p>
                </div>
              </article>
              <article className="use-card">
                <img src="/portfolio/mayfarm/hdpe-du-an.jpg" alt="Thi công bạt HDPE dự án" />
                <div>
                  <h3>Biogas, nước thải, dự án</h3>
                  <p>Phù hợp hạng mục cần mối hàn kín, chống rò rỉ và có đội thi công kiểm soát kỹ thuật tại công trình.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── Quy trình ── */}
        <section>
          <div className="container">
            <div className="section-head">
              <h2>Quy trình mua và thi công gọn cho khách cần triển khai nhanh</h2>
              <p>Phù hợp cả đơn cắt lẻ, đơn trang trại và dự án cần khảo sát.</p>
            </div>
            <div className="steps">
              <article className="step">
                <h3>Gửi nhu cầu</h3>
                <p>Anh/chị gửi kích thước, vị trí giao hàng, mục đích dùng và độ dày đang quan tâm.</p>
              </article>
              <article className="step">
                <h3>Tư vấn độ dày</h3>
                <p>Mayfarm gợi ý loại bạt, khổ cuộn, khối lượng và phương án cắt hàn tiết kiệm.</p>
              </article>
              <article className="step">
                <h3>Báo giá rõ ràng</h3>
                <p>Báo giá vật tư, hàn gia công, vận chuyển hoặc thi công tận nơi nếu công trình cần.</p>
              </article>
              <article className="step">
                <h3>Giao hàng, thi công</h3>
                <p>Hỗ trợ giao toàn quốc, đội kỹ thuật thi công dự án và hướng dẫn kiểm tra sau lắp đặt.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Offer / CTA ── */}
        <section className="offer">
          <div className="container">
            <div>
              <h2>Cần báo giá bạt HDPE hôm nay?</h2>
              <p>
                Gọi hoặc gửi Zalo cho Mayfarm để được tư vấn nhanh trong khung giờ khách thường
                cần xử lý: sáng 6-9h, trưa 11-13h và trong giờ làm việc.
              </p>
              <ul className="offer-list">
                <li>Miễn ship toàn quốc theo chương trình</li>
                <li>Tặng kèm keo dán bạt theo đơn phù hợp</li>
                <li>Giá tốt cho đơn số lượng lớn</li>
                <li>Hỗ trợ thi công toàn quốc</li>
              </ul>
            </div>
            <div className="final-form">
              <h3>Mayfarm gọi lại tư vấn</h3>
              <p>Điền nhanh, đội tư vấn sẽ liên hệ để chốt độ dày và báo giá.</p>
              <form className="quick-form" action="#" method="post">
                <input type="text" name="name_2" placeholder="Tên của anh/chị" aria-label="Tên" />
                <input type="tel" name="phone_2" placeholder="Số điện thoại/Zalo" aria-label="Số điện thoại" />
                <textarea
                  name="message_2"
                  placeholder="Ví dụ: cần lót hồ cá 10x20m tại Đồng Nai, muốn bạt 0.5mm hoặc 0.75mm"
                />
                <button className="btn btn-primary" type="submit">Nhận tư vấn và báo giá</button>
              </form>
            </div>
          </div>
        </section>

        {/* ── SEO Article ── */}
        <section id="seo">
          <div className="container">
            <div className="section-head">
              <h2>Bạt chống thấm HDPE Mayfarm: đầy đủ thông tin trước khi mua</h2>
              <p>
                Phần nội dung SEO được biên tập lại từ trang cũ, bổ sung ngữ cảnh bán hàng
                để khách hiểu đúng sản phẩm và ra quyết định nhanh hơn.
              </p>
            </div>
            <div className="seo-layout">
              <article className="seo-article">
                <h2 id="seo-bat-hdpe-la-gi">1. Bạt chống thấm HDPE là gì?</h2>
                <p>
                  <strong>Bạt chống thấm HDPE</strong> là màng nhựa High Density Polyethylene,
                  thường được sản xuất từ hạt nhựa nguyên sinh, có khả năng chống thấm nước,
                  chịu nắng, kháng hóa chất và chống lão hóa tốt. Với các công trình cần giữ
                  nước, cách ly nước thải hoặc bảo vệ nền đất, bạt HDPE là lựa chọn bền hơn
                  nhiều so với các loại bạt phủ thông thường.
                </p>
                <p>
                  Tại Mayfarm, bạt HDPE được tư vấn theo đúng mục đích sử dụng: lót hồ cá,
                  hồ tôm, hồ chứa nước, bể bạt nuôi thủy sản, hầm biogas, bãi rác, sân thượng,
                  hố móng hoặc công trình xử lý nước thải. Khách không chỉ mua một tấm bạt, mà
                  cần chọn đúng độ dày, đúng khổ cuộn và đúng cách hàn để công trình kín nước lâu dài.
                </p>
                <img src="/portfolio/mayfarm/hdpe-hero.jpg" alt="Bạt chống thấm HDPE lót hồ, ao, biogas" />

                <h2 id="seo-uu-diem">2. Ưu điểm nổi bật của bạt chống thấm HDPE</h2>
                <h3>Chống thấm hiệu quả cho hồ ao và công trình</h3>
                <p>
                  Bạt HDPE có khả năng ngăn nước thấm xuống nền đất, hạn chế thất thoát nước
                  và giảm nguy cơ ô nhiễm môi trường xung quanh. Đây là lý do bạt thường được
                  dùng cho hồ chứa nước, ao nuôi cá tôm, hồ xử lý nước thải, bể biogas và các
                  hạng mục chống thấm dân dụng.
                </p>
                <h3>Độ bền cao, phù hợp điều kiện ngoài trời</h3>
                <p>
                  Với đặc tính chịu tia UV, chịu nhiệt và ít bị giòn nứt khi phơi nắng, bạt
                  HDPE nguyên sinh có thể sử dụng nhiều năm nếu chọn đúng độ dày và thi công
                  đúng kỹ thuật. Với công trình dài hạn, chi phí ban đầu có thể cao hơn bạt
                  mỏng thông thường nhưng hiệu quả sử dụng lâu dài tốt hơn.
                </p>
                <h3>Kháng hóa chất, vi sinh và môi trường khắc nghiệt</h3>
                <p>
                  Bạt HDPE phù hợp cho môi trường có axit, bazơ, muối, nước thải, phân chuồng,
                  bãi rác hoặc hồ xử lý sinh học. Bề mặt bạt trơn, ít bám bẩn, dễ vệ sinh
                  sau mỗi vụ nuôi hoặc sau thời gian vận hành.
                </p>
                <h3>Dễ cắt hàn, thi công nhanh</h3>
                <p>
                  Các tấm bạt có thể được hàn nhiệt bằng máy hàn chuyên dụng để tạo mối nối
                  kín. Mayfarm nhận cắt, hàn, gia công theo kích thước thực tế, giúp giảm
                  hao hụt vật tư và hạn chế lỗi rò nước do ghép nối thủ công.
                </p>
                <img src="/portfolio/mayfarm/hdpe-uu-diem.jpg" alt="Ưu điểm nổi bật của bạt chống thấm HDPE" />

                <h2 id="seo-thong-so">3. Thông số kỹ thuật bạt HDPE</h2>
                <div className="thickness-table">
                  <table>
                    <thead>
                      <tr><th>Tiêu chí</th><th>Thông tin tham khảo</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Chất liệu</td><td>HDPE nguyên sinh, ưu tiên loại có khả năng kháng UV</td></tr>
                      <tr><td>Độ dày phổ biến</td><td>0.3mm, 0.5mm, 0.75mm, 1mm, 1.5mm, 2mm</td></tr>
                      <tr><td>Màu sắc</td><td>Đen bóng hoặc theo loại hàng, một số dòng có đường định vị</td></tr>
                      <tr><td>Mật độ tham khảo</td><td>Khoảng 0.94g/cc</td></tr>
                      <tr><td>Kích thước cuộn</td><td>4x50m, 5x100m, 6x50m hoặc cắt hàn theo yêu cầu</td></tr>
                      <tr><td>Tuổi thọ ngoài trời</td><td>Khoảng 10-20 năm tùy độ dày, môi trường và kỹ thuật thi công</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="seo-bao-gia">4. Báo giá bạt chống thấm HDPE tham khảo</h2>
                <p>
                  Giá bạt HDPE phụ thuộc vào độ dày, khổ cuộn, số lượng, vị trí giao hàng và
                  yêu cầu cắt hàn. Khách nên gửi kích thước mặt bằng hoặc bản vẽ để Mayfarm
                  báo giá sát hơn, tránh mua thiếu, mua dư hoặc chọn sai độ dày.
                </p>
                <div className="thickness-table">
                  <table>
                    <thead>
                      <tr><th>Độ dày</th><th>Đơn giá tham khảo</th><th>Gợi ý ứng dụng</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>0.3mm</td><td>10.000 - 15.000đ/m2</td><td>Hồ nhỏ, lót tạm, chống thấm chi phí thấp</td></tr>
                      <tr><td>0.5mm</td><td>18.000 - 25.000đ/m2</td><td>Lót hồ cá, ao nhỏ, hồ chứa nước vừa</td></tr>
                      <tr><td>0.75mm</td><td>26.000 - 35.000đ/m2</td><td>Bể bạt, hồ ao, biogas quy mô vừa</td></tr>
                      <tr><td>1.0mm</td><td>35.000 - 45.000đ/m2</td><td>Trang trại, nước thải, hạng mục cần bền hơn</td></tr>
                      <tr><td>1.5mm</td><td>50.000 - 60.000đ/m2</td><td>Công trình lớn, môi trường khắc nghiệt</td></tr>
                      <tr><td>2.0mm</td><td>65.000 - 80.000đ/m2</td><td>Bãi rác, hồ xử lý, công nghiệp, hóa chất</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>Lưu ý:</strong> bảng giá chỉ để khách định hướng ngân sách. Đơn hàng
                  số lượng lớn, đơn có hàn gia công hoặc thi công tận nơi cần báo giá riêng
                  để tối ưu chi phí vận chuyển và nhân công.
                </p>

                <h2 id="seo-do-day">5. Các loại bạt HDPE phổ biến theo độ dày</h2>
                <h3>Bạt HDPE 0.3mm - 0.5mm</h3>
                <p>
                  Dòng mỏng, nhẹ, dễ cắt và dễ trải. Phù hợp hồ nuôi cá nhỏ, bể chứa nước
                  sinh hoạt, nước tưới tiêu hoặc các hạng mục chống thấm ngắn hạn. Nếu nền
                  đất có đá nhọn, rễ cây hoặc chịu lực lớn, khách nên xử lý mặt bằng kỹ
                  hoặc cân nhắc độ dày cao hơn.
                </p>
                <h3>Bạt HDPE 0.75mm - 1.0mm</h3>
                <p>
                  Đây là nhóm được nhiều khách chọn vì cân bằng giữa chi phí và độ bền. Phù
                  hợp bể bạt nuôi cá, nuôi tôm, hầm biogas hộ gia đình, hồ xử lý nước thải
                  vừa và hồ chứa nước trang trại. Với nhóm này, chất lượng mối hàn rất quan trọng.
                </p>
                <h3>Bạt HDPE 1.5mm - 2.0mm</h3>
                <p>
                  Dòng dày, chuyên dùng cho công trình yêu cầu độ bền cao, kháng hóa chất tốt
                  và tuổi thọ dài. Phù hợp hồ chứa hóa chất, nước thải công nghiệp, bãi chôn
                  lấp rác, hồ chứa nước lớn hoặc các hạng mục thi công quy mô dự án.
                </p>

                <h2 id="seo-ung-dung">6. Ứng dụng phổ biến của bạt chống thấm HDPE</h2>
                <h3>Nông nghiệp và nuôi trồng thủy sản</h3>
                <p>
                  Bạt HDPE được dùng để lót ao nuôi tôm, cá, lươn, ếch, làm bể bạt, hồ ươm
                  giống, hồ xử lý nước và hồ chứa nước tưới. Bề mặt bạt trơn giúp dễ vệ sinh,
                  hạn chế thất thoát nước và giảm tác động của nền đất đến môi trường nuôi.
                </p>
                <h3>Xử lý môi trường</h3>
                <p>
                  Trong môi trường nước thải, bãi rác hoặc hồ sinh học, bạt HDPE giúp cách
                  ly chất thải với đất và nước ngầm. Đây là vật liệu quen thuộc cho bể chứa
                  nước rỉ rác, hồ điều hòa, bãi chôn lấp và các công trình cần ngăn rò rỉ.
                </p>
                <h3>Công nghiệp và xây dựng</h3>
                <p>
                  Bạt HDPE có thể dùng cho hầm biogas, kênh mương thủy lợi, chống thấm tầng
                  hầm, hố móng, mái nhà, sân thượng và khu vực cần bảo vệ nền khỏi nước. Với
                  hạng mục xây dựng, cần khảo sát kỹ bề mặt trước khi thi công.
                </p>
                <img src="/portfolio/mayfarm/hdpe-nuoi-trong.jpg" alt="Bạt HDPE dùng trong nuôi trồng thủy sản" />

                <h2 id="seo-thi-cong">7. Cách sử dụng và thi công bạt chống thấm HDPE</h2>
                <p>
                  <strong>Bước 1: Chuẩn bị mặt bằng.</strong> Làm sạch đá nhọn, rễ cây, vật
                  sắc, san phẳng nền và đảm bảo điều kiện thi công khô ráo. Mặt bằng càng
                  chuẩn thì tuổi thọ bạt càng tốt.
                </p>
                <p>
                  <strong>Bước 2: Trải bạt.</strong> Trải bạt đều, hạn chế gấp nếp, tạo bọng
                  khí hoặc kéo căng quá mức. Với diện tích lớn, cần bố trí hướng trải và khổ
                  bạt để giảm số lượng mối nối.
                </p>
                <p>
                  <strong>Bước 3: Hàn nối bạt.</strong> Dùng máy hàn nhiệt chuyên dụng như
                  máy hàn kép hoặc máy hàn đùn để tạo mối nối kín. Đây là khâu quyết định
                  khả năng chống rò nước của công trình.
                </p>
                <p>
                  <strong>Bước 4: Kiểm tra và bảo trì.</strong> Sau khi thi công cần kiểm tra
                  mối hàn, vị trí mép bạt và các điểm dễ chịu lực. Trong quá trình sử dụng,
                  tránh vật sắc nhọn, lửa hoặc tác động mạnh trực tiếp lên bạt.
                </p>

                <h2 id="seo-mayfarm">8. Vì sao nên chọn bạt HDPE tại Mayfarm?</h2>
                <p>
                  Mayfarm tập trung vào những điểm khách mua bạt HDPE quan tâm nhất: hàng
                  nguyên sinh, đúng độ dày, tư vấn đúng ứng dụng, cắt hàn theo kích thước,
                  giao hàng toàn quốc và hỗ trợ thi công dự án. Với khách chưa biết chọn
                  0.5mm, 0.75mm hay 1mm, đội tư vấn sẽ hỏi rõ mục đích dùng, kích thước,
                  nền đất và khu vực giao để đề xuất phương án hợp lý.
                </p>
                <ul>
                  <li>Bạt HDPE chất lượng cao, rõ nguồn hàng, có thể kiểm tra trước khi nhận.</li>
                  <li>Nhận cắt, hàn, gia công theo yêu cầu của từng công trình.</li>
                  <li>Hỗ trợ thi công tận nơi với dự án phù hợp, bảo hành kỹ thuật rõ ràng.</li>
                  <li>Giá cạnh tranh, giao hàng nhanh, hỗ trợ đơn số lượng lớn và đại lý.</li>
                </ul>
                <img src="/portfolio/mayfarm/hdpe-du-an.jpg" alt="Dự án bạt HDPE Mayfarm thi công" />

                <h2 id="seo-ket-luan">9. Mua bạt chống thấm HDPE ở đâu?</h2>
                <p>
                  Nếu anh/chị cần mua bạt HDPE để lót hồ, làm bể bạt nuôi cá tôm, chống
                  thấm sân thượng, làm biogas hoặc thi công dự án, Mayfarm có thể tư vấn từ
                  khâu chọn độ dày đến khâu cắt hàn và giao hàng. Cách nhanh nhất là gửi
                  kích thước, vị trí công trình và mục đích sử dụng qua Zalo hoặc form báo
                  giá trên trang.
                </p>
                <p>
                  <strong>Hotline/Zalo dự án: 0967.30.30.93.</strong> Mayfarm sẽ giúp anh/chị
                  chọn đúng loại bạt, tránh mua sai độ dày hoặc phát sinh chi phí thi công
                  không cần thiết.
                </p>
              </article>

              <aside className="seo-toc">
                <h3>Nội dung bài viết</h3>
                <a href="#seo-bat-hdpe-la-gi">Bạt HDPE là gì?</a>
                <a href="#seo-uu-diem">Ưu điểm nổi bật</a>
                <a href="#seo-thong-so">Thông số kỹ thuật</a>
                <a href="#seo-bao-gia">Báo giá tham khảo</a>
                <a href="#seo-do-day">Các loại độ dày</a>
                <a href="#seo-ung-dung">Ứng dụng phổ biến</a>
                <a href="#seo-thi-cong">Cách sử dụng, thi công</a>
                <a href="#seo-mayfarm">Vì sao chọn Mayfarm?</a>
                <a href="#seo-ket-luan">Mua bạt HDPE ở đâu?</a>
                <a className="btn btn-primary" href="#bao-gia" style={{ marginTop: '12px' }}>
                  Nhận tư vấn ngay
                </a>
              </aside>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="container">
            <div className="section-head">
              <h2>Câu hỏi thường gặp trước khi mua bạt HDPE</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>Bạt HDPE có chống thấm tuyệt đối không?</summary>
                <p>
                  Bạt HDPE nguyên sinh có khả năng chống thấm rất cao. Với công trình ghép
                  nhiều tấm, chất lượng mối hàn và mặt bằng thi công là yếu tố quyết định
                  độ kín nước lâu dài.
                </p>
              </details>
              <details>
                <summary>Nên chọn bạt HDPE 0.5mm hay 1mm?</summary>
                <p>
                  0.5mm hợp hồ nhỏ, chi phí tối ưu và nền ít rủi ro. 1mm phù hợp hơn cho
                  bể nuôi, hồ chứa hoặc hạng mục cần bền hơn và hàn nối ổn định.
                </p>
              </details>
              <details>
                <summary>Mayfarm có nhận cắt hàn theo kích thước không?</summary>
                <p>
                  Có. Mayfarm nhận cắt, hàn, gia công theo yêu cầu và tư vấn khổ bạt để
                  giảm hao hụt vật tư.
                </p>
              </details>
              <details>
                <summary>Có giao hàng và thi công ngoài Hà Nội không?</summary>
                <p>
                  Có. Mayfarm hỗ trợ giao hàng toàn quốc và nhận thi công cho dự án ở nhiều
                  khu vực tùy quy mô, mặt bằng và lịch đội kỹ thuật.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div>
            <strong>Công ty Cổ phần May Farm Việt Nam</strong>
            <br />
            Số 1 Ngách 82/18 Kim Hoàng, Vân Canh, Hoài Đức, Hà Nội
          </div>
          <div>
            Hotline/Zalo: <strong>0967.30.30.93</strong>
            <br />
            Email: ceo.mayfarm@gmail.com
          </div>
        </div>
      </footer>

      <div className="sticky-cta" aria-label="Liên hệ nhanh">
        <a className="btn btn-secondary" href="https://zalo.me/0967303093">Zalo tư vấn</a>
        <a className="btn btn-primary" href="tel:0967303093">Gọi ngay</a>
      </div>
    </>
  )
}
