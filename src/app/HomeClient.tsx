'use client';

import { useEffect, useState } from 'react';
import './growvi.css';

export default function HomeClient() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSvcOpen, setDrawerSvcOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawerOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-up');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('[data-count]');
    if (!('IntersectionObserver' in window) || !counters.length) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count ?? '0', 10);
          const duration = 1400;
          const step = 16;
          const increment = target / (duration / step);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            el.textContent = Math.floor(current).toString();
            if (current >= target) clearInterval(timer);
          }, step);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const PhoneIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.86 1.18 2 2 0 012.84 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );

  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <header id="site-header" className={headerScrolled ? 'scrolled' : ''}>
        <div className="pill">
          <a href="/" className="pill-logo">
            <svg viewBox="0 0 36 36" fill="none" width="28" height="28">
              <line x1="8" y1="14" x2="16" y2="26" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
              <line x1="16" y1="26" x2="28" y2="8" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
              <polyline points="22,8 28,8 28,14" stroke="#1A1A1A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="pill-wordmark">Grow<span>Vi</span></div>
          </a>

          <ul className="pill-nav">
            <li className="has-drop">
              <a href="#dich-vu">Giải pháp <span className="chev">▾</span></a>
              <div className="mega-wrap">
                <div className="mega-inner">
                  <div className="mega-left">
                    <a href="#" className="mega-item">
                      <div className="mega-icon">🎯</div>
                      <div>
                        <div className="mega-item-name">Google Ads</div>
                        <div className="mega-item-tags">
                          <span className="mega-tag">Tìm kiếm</span>
                          <span className="mega-tag">Shopping</span>
                          <span className="mega-tag">Maps</span>
                          <span className="mega-tag">YouTube</span>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">📱</div>
                      <div>
                        <div className="mega-item-name">Facebook &amp; Instagram Ads</div>
                        <div className="mega-item-hint">Tiếp cận đúng tệp — tăng tỷ lệ chuyển đổi</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">📊</div>
                      <div>
                        <div className="mega-item-name">Tư vấn GA4 <span className="mega-new">Mới</span></div>
                        <div className="mega-item-hint">Đo lường chính xác — quyết định dựa trên dữ liệu</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">🌐</div>
                      <div>
                        <div className="mega-item-name">Thiết kế Website</div>
                        <div className="mega-item-hint">Nền tảng kỹ thuật vững — sẵn sàng cho tăng trưởng</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">📈</div>
                      <div>
                        <div className="mega-item-name">SEO &amp; Content</div>
                        <div className="mega-item-hint">Traffic tự nhiên tích lũy — không phụ thuộc ngân sách</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">🔗</div>
                      <div>
                        <div className="mega-item-name">Backlink &amp; Offpage SEO</div>
                        <div className="mega-item-hint">Củng cố uy tín tên miền — tăng thứ hạng bền vững</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">🛒</div>
                      <div>
                        <div className="mega-item-name">Google Shopping Ads</div>
                        <div className="mega-item-hint">Hiển thị đúng lúc khách có intent mua hàng</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">📍</div>
                      <div>
                        <div className="mega-item-name">Google Map Ads</div>
                        <div className="mega-item-hint">Tăng lượt ghé thăm &amp; cuộc gọi trực tiếp</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">▶️</div>
                      <div>
                        <div className="mega-item-name">YouTube Ads</div>
                        <div className="mega-item-hint">Xây dựng nhận diện thương hiệu qua video</div>
                      </div>
                    </a>
                    <a href="#" className="mega-item">
                      <div className="mega-icon">🖥️</div>
                      <div>
                        <div className="mega-item-name">Quản lý Server <span className="mega-new">Mới</span></div>
                        <div className="mega-item-hint">Hạ tầng ổn định — không lo gián đoạn kỹ thuật</div>
                      </div>
                    </a>
                  </div>
                  <div className="mega-right">
                    <div>
                      <div className="mega-stat">
                        <div className="mega-stat-num">126<em>+</em></div>
                        <div className="mega-stat-label">Doanh nghiệp tin dùng</div>
                      </div>
                      <div style={{ margin: '12px 0', height: '1px', background: 'rgba(255,255,255,.1)' }}></div>
                      <div className="mega-stat">
                        <div className="mega-stat-num">15<em>+</em></div>
                        <div className="mega-stat-label">Năm trong ngành</div>
                      </div>
                    </div>
                    <div className="mega-tagline">"Bạn giỏi nghề — <strong>chúng tôi lo số hóa</strong>"</div>
                    <a href="#dich-vu" className="mega-all-link" onClick={e => handleAnchorClick(e, '#dich-vu')}>Xem toàn bộ giải pháp →</a>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#portfolio" onClick={e => handleAnchorClick(e, '#portfolio')}>Thành quả</a></li>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Kiến thức</a></li>
            <li><a href="#">Gia nhập</a></li>
          </ul>

          <div className="pill-actions">
            <a href="tel:0901234567" className="btn-pill btn-pill-solid">
              Nhận tư vấn miễn phí
              <PhoneIcon />
            </a>
            <button
              className={`pill-toggle${drawerOpen ? ' open' : ''}`}
              id="pill-toggle"
              aria-label="Menu"
              onClick={() => setDrawerOpen(o => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════ MOBILE DRAWER ═══════════════════ */}
      <div id="drawer-overlay" className={drawerOpen ? 'open' : ''}>
        <div className="drawer-scrim" onClick={() => setDrawerOpen(false)}></div>
        <div className="drawer-panel">
          <div className="drawer-head">
            <div className="drawer-logo-word">Grow<span>Vi</span></div>
            <button className="drawer-close" onClick={() => setDrawerOpen(false)}>×</button>
          </div>
          <nav className="drawer-nav">
            <div className="drawer-item" onClick={() => setDrawerSvcOpen(o => !o)} style={{ cursor: 'pointer' }}>
              <div className="drawer-num">01</div>
              <div className="drawer-label">Giải pháp</div>
              <div className="drawer-arrow">{drawerSvcOpen ? '↑' : '↓'}</div>
            </div>
            <div className={`drawer-sub${drawerSvcOpen ? ' open' : ''}`}>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Google Ads</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Facebook &amp; Instagram Ads</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Google Shopping Ads</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Google Map Ads</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>YouTube Ads</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Thiết kế Website</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>SEO &amp; Content</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Backlink &amp; Offpage SEO</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Tư vấn GA4</a>
              <a href="#" className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>Quản lý Server</a>
            </div>
            <a href="#portfolio" className="drawer-item" onClick={e => { handleAnchorClick(e, '#portfolio'); setDrawerOpen(false); }}>
              <div className="drawer-num">02</div>
              <div className="drawer-label">Thành quả</div>
              <div className="drawer-arrow">→</div>
            </a>
            <a href="#" className="drawer-item" onClick={() => setDrawerOpen(false)}>
              <div className="drawer-num">03</div>
              <div className="drawer-label">Về chúng tôi</div>
              <div className="drawer-arrow">→</div>
            </a>
            <a href="#" className="drawer-item" onClick={() => setDrawerOpen(false)}>
              <div className="drawer-num">04</div>
              <div className="drawer-label">Kiến thức &amp; Insight</div>
              <div className="drawer-arrow">→</div>
            </a>
            <a href="#" className="drawer-item" onClick={() => setDrawerOpen(false)}>
              <div className="drawer-num">05</div>
              <div className="drawer-label">Gia nhập đội ngũ</div>
              <div className="drawer-arrow">→</div>
            </a>
          </nav>
          <div className="drawer-foot">
            <div className="drawer-stats">
              <div>
                <div className="drawer-stat-num">126<em>+</em></div>
                <div className="drawer-stat-lbl">Doanh nghiệp hợp tác</div>
              </div>
              <div>
                <div className="drawer-stat-num">23</div>
                <div className="drawer-stat-lbl">Chuyên gia nội bộ</div>
              </div>
            </div>
            <a href="tel:0901234567" className="btn-drawer-cta">Nhận tư vấn miễn phí →</a>
          </div>
        </div>
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-gp-pill">
                <img src="/images/google/google-partner.png" alt="Google Partner Premier" loading="eager" />
                Google Partner Premier
              </div>
              <h1>Bạn giỏi nghề —<br /><em>chúng tôi lo số hóa</em></h1>
              <p className="hero-sub">
                Hàng trăm doanh nghiệp nhỏ tại Hà Nội &amp; TP.HCM đang có khách từ Google nhờ GrowVi.
                Bạn tập trung làm nghề tốt — chúng tôi đưa khách đến tận cửa.
              </p>
              <div className="hero-actions">
                <a href="tel:0901234567" className="btn btn-primary btn-xl">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.86 1.18 2 2 0 012.84 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Gọi tư vấn miễn phí
                </a>
                <a href="#dich-vu" className="btn btn-secondary btn-xl" onClick={e => handleAnchorClick(e, '#dich-vu')}>Xem dịch vụ</a>
              </div>
              <div className="hero-proof">
                <div className="hero-proof-item"><span className="hero-proof-dot"></span>Cam kết hoàn phí nếu không hài lòng trong 30 ngày</div>
                <div className="hero-proof-item"><span className="hero-proof-dot"></span>Tư vấn miễn phí, không ràng buộc</div>
                <div className="hero-proof-item"><span className="hero-proof-dot"></span>Google Partner Premier — chứng nhận chính thức từ Google</div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-img-main">
                <img src="/images/team/banner-fago1.jpg" alt="Đội ngũ GrowVi" loading="eager" />
              </div>
              <div className="hero-float hero-float--tl">
                <div className="hero-float-num">3.000+</div>
                <div className="hero-float-label">Chiến dịch Google Ads đã chạy</div>
              </div>
              <div className="hero-float hero-float--br">
                <div className="hero-float-num" style={{ color: 'var(--green)' }}>90%</div>
                <div className="hero-float-label">Khách hàng gia hạn dài hạn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ LOGO MARQUEE ═══════════════════ */}
      <section className="logos-section">
        <div className="logos-label">Đã đồng hành cùng hơn 820 doanh nghiệp</div>
        <div className="logos-track-wrap">
          <div className="logos-track">
            {['Nha Khoa Thái Dương','Phòng Khám Việt Đức','Nội Thất Miền Bắc','Trường Anh Ngữ ISA','Spa Thiên Nhiên','Cơ Điện Hà Nội','Phần Mềm Kế Toán VinaAcc','Xây Dựng Hưng Thịnh','Vận Tải Bắc Nam','Sửa Chữa Điện Lạnh 24h',
              'Nha Khoa Thái Dương','Phòng Khám Việt Đức','Nội Thất Miền Bắc','Trường Anh Ngữ ISA','Spa Thiên Nhiên','Cơ Điện Hà Nội','Phần Mềm Kế Toán VinaAcc','Xây Dựng Hưng Thịnh','Vận Tải Bắc Nam','Sửa Chữa Điện Lạnh 24h'
            ].map((name, i) => <div key={i} className="logo-item">{name}</div>)}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PAIN POINTS ═══════════════════ */}
      <section className="pain-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Bạn có đang gặp phải?</div>
            <h2 className="section-title">Vì sao marketing không ra kết quả?</h2>
            <p className="section-sub">Đây là 3 vấn đề phổ biến nhất khiến doanh nghiệp nhỏ đốt tiền marketing mà không có khách hàng.</p>
          </div>
          <div className="pain-grid">
            <div className="pain-card fade-up">
              <div className="pain-icon">💸</div>
              <h3>Chạy quảng cáo tốn tiền nhưng không ra khách</h3>
              <p>Tự chạy Google Ads hay thuê người rẻ — ngân sách cạn kiệt nhưng điện thoại không reo. Không biết tiền đi đâu, quảng cáo hiển thị cho ai.</p>
              <div className="pain-answer">GrowVi tối ưu từng đồng ngân sách — chỉ hiển thị đúng người đang cần bạn</div>
            </div>
            <div className="pain-card fade-up">
              <div className="pain-icon">🌐</div>
              <h3>Website cũ, chậm, xấu — khách vào là thoát</h3>
              <p>Website loading mãi không lên, giao diện từ 2015, nhìn không chuyên nghiệp. Khách tìm thấy bạn trên Google nhưng vào web là bỏ chạy ngay.</p>
              <div className="pain-answer">GrowVi thiết kế website chuyển đổi cao — đẹp, nhanh, thuyết phục khách gọi</div>
            </div>
            <div className="pain-card fade-up">
              <div className="pain-icon">🔍</div>
              <h3>Không biết marketing của mình đang hoạt động không</h3>
              <p>Agency cũ báo cáo toàn "impressions" và "reach" — nhưng doanh thu không tăng. Không có số liệu thực tế để quyết định tiếp tục hay dừng.</p>
              <div className="pain-answer">GrowVi báo cáo theo doanh thu thực — số khách, số cuộc gọi, ROI rõ ràng</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section className="stats-section" id="ket-qua">
        <div className="container">
          <div className="stats-section-header fade-up">
            <div className="eyebrow">Con số thực tế</div>
            <h2>Kết quả nói thay lời giới thiệu</h2>
            <p>Sau 7 năm, đây là những con số chúng tôi tự hào nhất.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-block fade-up">
              <div className="stat-num green"><span data-count="3000">0</span><span className="stat-suffix">+</span></div>
              <div className="stat-label">Chiến dịch Google Ads<br />đã triển khai thành công</div>
              <div className="stat-sub">từ 2017 đến nay</div>
            </div>
            <div className="stat-block fade-up">
              <div className="stat-num green"><span data-count="820">0</span><span className="stat-suffix">+</span></div>
              <div className="stat-label">Doanh nghiệp đã tin tưởng<br />hợp tác cùng GrowVi</div>
              <div className="stat-sub">Hà Nội &amp; TP.HCM</div>
            </div>
            <div className="stat-block fade-up">
              <div className="stat-num red-down">-<span data-count="38">0</span><span className="stat-suffix">%</span></div>
              <div className="stat-label">Chi phí mỗi khách hàng<br />so với trước khi dùng GrowVi</div>
              <div className="stat-sub">trung bình toàn khách hàng</div>
            </div>
            <div className="stat-block fade-up">
              <div className="stat-num green">+<span data-count="126">0</span><span className="stat-suffix">%</span></div>
              <div className="stat-label">Tăng trưởng khách hàng tiềm năng<br />trong 6 tháng đầu</div>
              <div className="stat-sub">khách hàng điển hình</div>
            </div>
            <div className="stat-block fade-up">
              <div className="stat-num green"><span data-count="90">0</span><span className="stat-suffix">%</span></div>
              <div className="stat-label">Tỷ lệ khách hàng gia hạn<br />hợp đồng sau tháng đầu tiên</div>
              <div className="stat-sub">retention rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ GOOGLE PARTNER ═══════════════════ */}
      <section className="gp-section" id="google-partner">
        <div className="container">
          <div className="gp-inner">
            <div className="gp-left fade-up">
              <div className="eyebrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                Chứng nhận chính thức
              </div>
              <h2>Google Partner Premier —<br /><em>top 3% agency</em> tại Việt Nam</h2>
              <p>
                Không phải ai cũng là Google Partner. GrowVi thuộc nhóm <strong>top 3% agency được Google
                chứng nhận</strong> về năng lực chạy quảng cáo tìm kiếm. Điều đó có nghĩa là: bạn được
                chăm sóc bởi người thực sự hiểu Google Ads — không phải người tự nhận là chuyên gia.
              </p>
              <div className="gp-badges-row">
                <img src="/images/google/google-partner.png" alt="Google Partner Premier" loading="lazy" />
                <img src="/images/google/google-partner-2.png" alt="Google Ads Search Certified" loading="lazy" />
              </div>
              <div className="gp-years">
                <span className="gp-year">✓ Partner 2021</span>
                <span className="gp-year">✓ Partner 2022</span>
                <span className="gp-year">✓ Partner 2023</span>
                <span className="gp-year">✓ Premier 2024–2025</span>
              </div>
            </div>
            <div className="gp-right fade-up">
              <div className="gp-card">
                <div className="gp-card-title">Đặc quyền Google Partner dành cho khách hàng GrowVi</div>
                <div className="gp-credit-block">
                  <div className="gp-spend">
                    <div className="gp-spend-label">Bạn nạp ngân sách quảng cáo</div>
                    <div className="gp-spend-num">5.600.000 đ</div>
                  </div>
                  <div className="gp-arrow">→</div>
                  <div className="gp-get">
                    <div className="gp-get-label">Google tặng thêm</div>
                    <div className="gp-get-num">+5.600.000 đ</div>
                  </div>
                </div>
                <p className="gp-note">
                  Khách hàng mới chạy qua GrowVi được Google tặng ngân sách quảng cáo tương đương khoản nạp đầu tiên.
                  Áp dụng khi chi tiêu tối thiểu 5.600.000 VNĐ trong 60 ngày đầu. Điều kiện áp dụng theo chính sách Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES JOURNEY ═══════════════════ */}
      <section className="journey-section" id="dich-vu">
        <div className="container">
          <div className="journey-header fade-up">
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,.4)' }}>Dịch vụ</div>
            <h2 className="journey-main-title">Chúng tôi xây hệ thống —<br /><em>không bán từng dịch vụ lẻ</em></h2>
            <p className="journey-main-sub">Mỗi bước được thiết kế để bổ trợ cho bước tiếp theo. Bạn có thể bắt đầu từ bất kỳ đâu — GrowVi sẽ tư vấn lộ trình phù hợp nhất.</p>
          </div>
          <div className="journey-wrap">
            <div className="journey-step fade-up">
              <div className="journey-step-left">
                <div className="journey-num">01</div>
                <div className="journey-line"></div>
              </div>
              <div className="journey-step-right">
                <div className="journey-phase">Nền tảng</div>
                <h3 className="journey-title"><em>Website</em> &amp; Hạ tầng</h3>
                <p className="journey-desc">Có website đẹp, nhanh, chuẩn kỹ thuật trước — đây là tài sản số quan trọng nhất của doanh nghiệp bạn. Mọi kênh khác (SEO, Ads) chỉ hiệu quả khi website vững.</p>
                <div className="journey-pills">
                  <a href="#" className="journey-pill">Thiết kế Website chuẩn SEO →</a>
                  <a href="#" className="journey-pill journey-pill--ghost">Quản lý Server &amp; Hosting →</a>
                </div>
              </div>
            </div>
            <div className="journey-step fade-up">
              <div className="journey-step-left">
                <div className="journey-num">02</div>
                <div className="journey-line"></div>
              </div>
              <div className="journey-step-right">
                <div className="journey-phase">Hiện diện</div>
                <h3 className="journey-title"><em>SEO</em> &amp; Content</h3>
                <p className="journey-desc">Xây traffic tự nhiên bền vững từ Google — khách tìm đến bạn, không phải bạn chạy theo. Kết quả tích lũy theo thời gian, không biến mất khi dừng ngân sách.</p>
                <div className="journey-pills">
                  <a href="#" className="journey-pill">Content SEO →</a>
                  <a href="#" className="journey-pill journey-pill--ghost">Backlink &amp; Offpage SEO →</a>
                </div>
              </div>
            </div>
            <div className="journey-step fade-up">
              <div className="journey-step-left">
                <div className="journey-num">03</div>
                <div className="journey-line"></div>
              </div>
              <div className="journey-step-right">
                <div className="journey-phase">Tăng tốc</div>
                <h3 className="journey-title"><em>Quảng cáo</em> đa kênh</h3>
                <p className="journey-desc">Đẩy traffic có chủ đích — đúng người, đúng lúc, đúng ngân sách. 5 kênh quảng cáo được vận hành bởi cùng một đội ngũ, phối hợp liền mạch để tối ưu chi phí chuyển đổi.</p>
                <div className="journey-pills">
                  <a href="#" className="journey-pill">Google Ads →</a>
                  <a href="#" className="journey-pill journey-pill--ghost">Facebook &amp; Instagram Ads →</a>
                  <a href="#" className="journey-pill journey-pill--ghost">Google Shopping Ads →</a>
                  <a href="#" className="journey-pill journey-pill--ghost">Google Map Ads →</a>
                  <a href="#" className="journey-pill journey-pill--ghost">YouTube Ads →</a>
                </div>
              </div>
            </div>
            <div className="journey-step fade-up">
              <div className="journey-step-left">
                <div className="journey-num journey-num--dim">04</div>
              </div>
              <div className="journey-step-right">
                <div className="journey-phase">Tối ưu</div>
                <h3 className="journey-title"><em>Analytics</em> &amp; Đo lường</h3>
                <p className="journey-desc">Biết chính xác kênh nào đang sinh ra khách hàng — và kênh nào đang lãng phí ngân sách. GA4 được cài đặt đúng là nền tảng để mọi quyết định marketing dựa trên dữ liệu thực.</p>
                <div className="journey-pills">
                  <a href="#" className="journey-pill">Tư vấn &amp; triển khai GA4 →</a>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-cta fade-up">
            <p className="journey-cta-sub">Không biết nên bắt đầu từ đâu? Gọi cho chúng tôi — tư vấn miễn phí, không ràng buộc.</p>
            <a href="tel:0901234567" className="btn btn-primary btn-xl">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.86 1.18 2 2 0 012.84 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Gọi tư vấn miễn phí
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ KHO GIAO DIỆN ═══════════════════ */}
      <section className="kho-section" id="kho">
        <div className="container">
          <div className="section-header fade-up">
            <div className="eyebrow">Kho giao diện</div>
            <h2 className="section-title">Ngành nghề nào của bạn — chúng tôi có sẵn mẫu</h2>
            <p className="section-sub">200+ mẫu thiết kế sẵn theo ngành, tùy chỉnh thương hiệu và hoàn thiện trong 7–14 ngày làm việc.</p>
          </div>
          <div className="bento-kho fade-up">
            <div className="bento-big">
              <div>
                <div className="bento-big-num">200+</div>
                <div className="bento-big-label">mẫu giao diện sẵn có</div>
              </div>
              <div>
                <p className="bento-big-sub">Đủ 19+ ngành nghề phổ biến — từ nha khoa, giáo dục đến logistics và xây dựng.</p>
                <a href="tel:0901234567" className="btn btn-ghost-white btn-lg" style={{ marginTop: '1.25rem', display: 'inline-flex' }}>Tư vấn chọn mẫu miễn phí →</a>
              </div>
            </div>
            {[
              { src: '/images/khogiaodien/nhakhoa.jpg', alt: 'Mẫu website nha khoa', label: 'Nha khoa / Y tế' },
              { src: '/images/khogiaodien/noithatgiainh.jpg', alt: 'Mẫu website nội thất', label: 'Nội thất' },
              { src: '/images/khogiaodien/giaoduc.png', alt: 'Mẫu website giáo dục', label: 'Giáo dục' },
              { src: '/images/khogiaodien/mypham.jpg', alt: 'Mẫu website spa mỹ phẩm', label: 'Spa / Làm đẹp' },
              { src: '/images/khogiaodien/fnb.jpg', alt: 'Mẫu website nhà hàng', label: 'Nhà hàng / F&B' },
              { src: '/images/khogiaodien/xaydung.jpg', alt: 'Mẫu website xây dựng', label: 'Xây dựng' },
            ].map((item, i) => (
              <div key={i} className="bento-img-card">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="bento-overlay"><span>{item.label}</span></div>
              </div>
            ))}
          </div>
          <div className="bento-tags fade-up">
            {['Ô tô / Phụ tùng','Bất động sản','Tài chính / Kế toán','Cơ khí / Điện lạnh','Nông nghiệp','Du lịch / Khách sạn','Thời trang','In ấn / Quảng cáo','Thú cưng','Công nghệ / Phần mềm','Pháp lý / Luật sư','Vận tải / Logistics','+ và nhiều hơn nữa'].map((tag, i) => (
              <span key={i} className="bento-tag">{tag}</span>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <a href="#" className="btn btn-secondary btn-lg">Xem tất cả mẫu giao diện →</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ KẾT QUẢ THỰC CHIẾN ═══════════════════ */}
      <section className="results-section" id="portfolio">
        <div className="container">
          <div className="section-header fade-up">
            <div className="eyebrow">Kết quả thực chiến</div>
            <h2 className="section-title">Số liệu thật — từ khách hàng thật</h2>
            <p className="section-sub">Không phải cam kết trên giấy tờ. Đây là dữ liệu thực tế từ các chiến dịch GrowVi đang vận hành.</p>
          </div>
          <div className="bento-grid fade-up">
            <div className="bento-cell bento-hero">
              <div className="bento-tag">Google Ads</div>
              <div className="bento-hero-num">325<span className="bento-hero-decimal">.601</span></div>
              <div className="bento-hero-kpi">Lượt chuyển đổi</div>
              <div className="bento-hero-desc">Cuộc gọi, form, Zalo đến từ quảng cáo Google — tích lũy từ 2018 đến nay</div>
              <div className="bento-hero-pills">
                <span className="bento-hpill">4,47 Tr nhấp</span>
                <span className="bento-hpill">CPA 38.600 đ</span>
                <span className="bento-hpill">144 Tr hiển thị</span>
              </div>
              <div className="bento-gp">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Google Partner Premier
              </div>
            </div>
            <div className="bento-cell bento-md">
              <div className="bento-tag bento-tag--green">SEO Organic</div>
              <div className="bento-md-num">622K</div>
              <div className="bento-md-kpi">Lượt hiển thị / tháng</div>
              <div className="bento-md-sub">25.200 lần nhấp · CTR 4% · Vị trí TB Top 6</div>
            </div>
            <div className="bento-cell bento-kw">
              <div className="bento-tag bento-tag--green">Từ khoá đã top</div>
              <div className="bento-md-num">1.000<span className="bento-plus">+</span></div>
              <div className="bento-md-kpi">Từ khoá trong Top 10</div>
              <div className="bento-kw-rows">
                <div className="bento-kw-row"><span className="bento-kw-text">cá chép cảnh</span><span className="bento-kw-rank bento-kw-rank--top">#1–2</span></div>
                <div className="bento-kw-row"><span className="bento-kw-text">cá koi nhật</span><span className="bento-kw-rank">#3</span></div>
                <div className="bento-kw-row"><span className="bento-kw-text">giá cá koi</span><span className="bento-kw-rank">#5</span></div>
              </div>
            </div>
            <div className="bento-cell bento-strip">
              <div className="bento-strip-item"><div className="bento-strip-num">126<span className="bento-plus">+</span></div><div className="bento-strip-label">Khách hàng hợp tác</div></div>
              <div className="bento-strip-sep"></div>
              <div className="bento-strip-item"><div className="bento-strip-num">14,4 tỷ</div><div className="bento-strip-label">Ngân sách đã quản lý</div></div>
              <div className="bento-strip-sep"></div>
              <div className="bento-strip-item"><div className="bento-strip-num">2.813 đ</div><div className="bento-strip-label">CPC trung bình</div></div>
              <div className="bento-strip-sep"></div>
              <div className="bento-strip-item"><div className="bento-strip-num">279<span className="bento-plus">+</span></div><div className="bento-strip-label">Chiến dịch đang chạy</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM ═══════════════════ */}
      <section className="team-story-section" id="doi-ngu">
        <div className="container">
          <div className="section-header fade-up">
            <div className="eyebrow">Đội ngũ</div>
            <h2 className="section-title">Khi bạn là khách hàng GrowVi —<br />đây là những người làm việc cho bạn</h2>
            <p className="section-sub">Không outsource. Không bot tự động. Mỗi tài khoản có người thật ngồi theo dõi và tối ưu hàng ngày. Founder trực tiếp chịu trách nhiệm kết quả cuối cùng.</p>
          </div>
          <div className="founder-card fade-up" style={{ marginBottom: '4rem' }}>
            <div className="founder-photo">
              <img src="/images/nhansu/a-cuong.jpg" alt="Cường — Founder GrowVi" loading="lazy" />
            </div>
            <div className="founder-info">
              <div className="founder-name">Nguyễn Mạnh Cường</div>
              <div className="founder-title">Founder &amp; CEO · 15 năm kinh nghiệm Digital Marketing &amp; Website</div>
              <p className="founder-bio">
                Tôi đã làm marketing cho doanh nghiệp nhỏ suốt 15 năm — và tôi biết rõ cảm giác đốt tiền quảng cáo mà không hiểu chuyện gì đang xảy ra.
                GrowVi được lập ra để điều đó không xảy ra với bạn. Dưới đây là đội ngũ tôi tin tưởng giao việc mỗi ngày.
              </p>
              <div className="founder-certs">
                <span className="founder-cert founder-cert--google">Google Ads Certified</span>
                <span className="founder-cert founder-cert--google">Google Analytics Certified</span>
                <span className="founder-cert founder-cert--meta">Meta Blueprint Certified</span>
              </div>
            </div>
          </div>
          <div className="story-flow-wrap">
            {/* Step 1 */}
            <div className="story-dept-step fade-up">
              <div className="story-step-left">
                <div className="step-circle"><span className="step-circle-num">1</span><span className="step-circle-sub">Bước</span></div>
                <div className="story-step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-dept-name">Bộ phận Chăm sóc Khách hàng</div>
                <div className="step-mission">"Người đầu tiên bạn gặp — và người đồng hành suốt hành trình"</div>
                <p className="step-desc">Ngay khi bạn liên hệ, bộ phận này tiếp nhận, lắng nghe nhu cầu và phân tích hiện trạng marketing của bạn. Họ là người lập kế hoạch triển khai, điều phối các bộ phận kỹ thuật, và là đầu mối liên lạc duy nhất của bạn với GrowVi — đảm bảo mọi yêu cầu đều được xử lý đúng hạn và đúng kỳ vọng.</p>
                <div className="step-team-row">
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/o-huyen.jpg" alt="Huyền" loading="lazy" /></div><div className="step-member-name">Huyền</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/tuyet-nhi.jpg" alt="Tuyết Nhi" loading="lazy" /></div><div className="step-member-name">Tuyết Nhi</div></div>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="story-dept-step fade-up">
              <div className="story-step-left">
                <div className="step-circle"><span className="step-circle-num">2</span><span className="step-circle-sub">Bước</span></div>
                <div className="story-step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-dept-name">Bộ phận Google &amp; Facebook Ads</div>
                <div className="step-mission">"Mỗi đồng ngân sách phải đưa được khách thật về cho bạn"</div>
                <p className="step-desc">5 chuyên viên được Google và Meta chứng nhận, ngồi tối ưu tài khoản của bạn mỗi ngày. Họ nghiên cứu từ khóa, viết quảng cáo, cài conversion tracking để đếm từng cuộc gọi, từng form gửi — và điều chỉnh liên tục cho đến khi chi phí trên mỗi khách hàng đạt mục tiêu đã cam kết.</p>
                <div className="step-team-row">
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/TH.png" alt="Trần Minh Hoàng" loading="lazy" /></div><div className="step-member-name">Minh Hoàng</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/a-long.png" alt="Long" loading="lazy" /></div><div className="step-member-name">Hoài Long</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/a-manh.jpg" alt="Mạnh" loading="lazy" /></div><div className="step-member-name">Văn Mạnh</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/thuy.jpg" alt="Thuỷ" loading="lazy" /></div><div className="step-member-name">Thuỷ</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/tuan-anh-rm-bg.png" alt="Tuấn Anh" loading="lazy" /></div><div className="step-member-name">Tuấn Anh</div></div>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="story-dept-step fade-up">
              <div className="story-step-left">
                <div className="step-circle"><span className="step-circle-num">3</span><span className="step-circle-sub">Bước</span></div>
                <div className="story-step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-dept-name">Bộ phận Thiết kế &amp; Website</div>
                <div className="step-mission">"Website tốt không chỉ đẹp — nó phải bán được hàng"</div>
                <p className="step-desc">Designer và developer ngồi cùng nhau từ bước wireframe đến lúc website lên sóng. Họ thiết kế theo đúng hành trình ra quyết định của khách hàng bạn — mỗi nút CTA, mỗi form liên hệ, mỗi phần nội dung đều được đặt có chủ đích để tối đa hoá tỷ lệ chuyển đổi, không chỉ để trông đẹp mắt.</p>
                <div className="step-team-row">
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/trinh.jpg" alt="Trinh" loading="lazy" /></div><div className="step-member-name">Lan Trinh</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/a-nam.png" alt="Nam" loading="lazy" /></div><div className="step-member-name">Đức Nam</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/trang.jpg" alt="Trang" loading="lazy" /></div><div className="step-member-name">Hồng Trang</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/nhan.png" alt="Nhân" loading="lazy" /></div><div className="step-member-name">Văn Nhân</div></div>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="story-dept-step fade-up">
              <div className="story-step-left">
                <div className="step-circle"><span className="step-circle-num">4</span><span className="step-circle-sub">Bước</span></div>
              </div>
              <div className="step-content">
                <div className="step-dept-name">Bộ phận Content &amp; SEO</div>
                <div className="step-mission">"Xây nguồn khách bền vững — không phụ thuộc mãi vào tiền quảng cáo"</div>
                <p className="step-desc">Trong khi ads mang khách nhanh, đội Content &amp; SEO xây nền tảng dài hạn. Họ viết bài chuẩn SEO, tối ưu từ khóa tìm kiếm tự nhiên, và xây dựng uy tín tên miền — để tháng nào website của bạn cũng leo thêm một bậc trên Google mà không cần tăng ngân sách.</p>
                <div className="step-team-row">
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/kim-ngan.png" alt="Kim Ngân" loading="lazy" /></div><div className="step-member-name">Kim Ngân</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/Truc.png" alt="Trúc" loading="lazy" /></div><div className="step-member-name">Trúc</div></div>
                  <div className="step-member"><div className="step-member-photo"><img src="/images/nhansu/Van.png" alt="Vân" loading="lazy" /></div><div className="step-member-name">Vân</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="testimonials-section section--gray" id="danh-gia">
        <div className="container">
          <div className="section-header fade-up">
            <div className="eyebrow">Khách hàng nói gì</div>
            <h2 className="section-title">Đừng tin chúng tôi — hãy nghe khách hàng</h2>
          </div>
          <div className="testimonials-grid">
            {[
              { initials: 'TH', name: 'Bác sĩ Trần Hải', company: 'Phòng khám Răng Hàm Mặt · Hà Nội', text: '"Trước đây tôi chạy Google Ads tự làm được 3 tháng, tốn hơn 15 triệu nhưng không có nổi 10 cuộc gọi. Chuyển sang GrowVi tháng đầu đã có 47 khách gọi hỏi. Khác hoàn toàn."' },
              { initials: 'ML', name: 'Chị Minh Lan', company: 'Nội thất Minh Lan · TP.HCM', text: '"Website cũ của tôi loading mất 8 giây, GrowVi làm lại chỉ còn 1.2 giây. Sau 2 tháng đơn hàng từ website tăng gấp đôi. Họ không chỉ làm đẹp mà còn làm ra khách."' },
              { initials: 'QT', name: 'Anh Quang Thắng', company: 'Trung tâm Tiếng Anh · Hà Nội', text: '"Tôi thích nhất là báo cáo hàng tuần của GrowVi — rõ ràng: bao nhiêu người click, bao nhiêu người gọi, chi phí mỗi khách. Agency cũ chỉ báo \'impression\' với \'reach\' — vô nghĩa."' },
            ].map((t, i) => (
              <div key={i} className="testi-card fade-up">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-company">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header fade-up">
            <div className="eyebrow">Câu hỏi thường gặp</div>
            <h2 className="section-title">Những điều bạn muốn biết trước khi quyết định</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Làm sao tôi biết GrowVi có thực sự mang lại khách hàng cho tôi?', a: 'Chúng tôi cài đặt conversion tracking từ ngày đầu — đếm chính xác số cuộc gọi, số form gửi từ quảng cáo. Bạn nhận báo cáo hàng tuần với con số thực tế, không phải "impressions" hay "reach" chung chung. Nếu sau tháng đầu không đạt mục tiêu đã cam kết, chúng tôi hoàn phí quản lý.' },
              { q: 'Ngân sách tối thiểu để chạy Google Ads hiệu quả là bao nhiêu?', a: 'Tùy ngành nghề và địa bàn. Thông thường với SME tại Hà Nội hoặc TP.HCM, ngân sách quảng cáo từ 5–10 triệu/tháng đủ để có kết quả đo lường được. Phí quản lý của GrowVi là từ 3 triệu/tháng. Chúng tôi tư vấn ngân sách phù hợp sau khi hiểu ngành của bạn — không "chốt" số rồi mới hỏi.' },
              { q: 'Thiết kế website mất bao lâu? Tôi có được chỉnh sửa không?', a: 'Thông thường 7–14 ngày làm việc từ lúc ký hợp đồng đến khi ra mắt. Quy trình gồm: khảo sát → thiết kế mockup → duyệt → phát triển → bàn giao. Bạn được chỉnh sửa không giới hạn trong giai đoạn thiết kế mockup. Sau bàn giao, chúng tôi đào tạo bạn tự cập nhật nội dung và hỗ trợ kỹ thuật 30 ngày miễn phí.' },
              { q: 'GrowVi có khác gì so với các agency khác trên thị trường?', a: '3 điểm khác biệt chính: (1) Cam kết kết quả — không chỉ deliverable. Chúng tôi báo cáo theo số khách hàng thực, không theo lượt hiển thị. (2) Không outsource — đội ngũ GrowVi trực tiếp làm việc trên tài khoản của bạn. (3) Founder có 15 năm kinh nghiệm thực chiến — bạn được tư vấn bởi người thực sự hiểu cả công nghệ lẫn kinh doanh.' },
              { q: 'Tôi có thể dừng hợp đồng bất cứ lúc nào không?', a: 'Có. Hợp đồng dịch vụ hàng tháng — bạn có thể dừng bất cứ lúc nào với thông báo trước 15 ngày. Chúng tôi bàn giao toàn bộ dữ liệu tài khoản, báo cáo và mọi tài sản thuộc về bạn. Không có phí phạt dừng hợp đồng.' },
              { q: 'GrowVi phục vụ những ngành nghề nào?', a: 'GrowVi phù hợp nhất với doanh nghiệp B2C mà khách hàng của họ có thói quen tìm kiếm trên Google: nha khoa, phòng khám, nội thất, xây dựng, giáo dục, spa, vận tải, sửa chữa điện lạnh, luật sư, kế toán... Nếu khách hàng của bạn Google trước khi quyết định mua — GrowVi có thể giúp bạn.' },
            ].map((item, i) => (
              <div key={i} className={`faq-item${faqOpen === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                  {item.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="final-cta" id="lien-he">
        <div className="container">
          <div className="final-cta-inner">
            <div className="eyebrow" style={{ color: 'var(--green-light)', justifyContent: 'center', marginBottom: '.875rem' }}>Bắt đầu ngay hôm nay</div>
            <h2>Ngừng đốt tiền marketing<br />không ra kết quả</h2>
            <p className="final-cta-sub">
              Gọi cho chúng tôi ngay — tư vấn miễn phí 30 phút, phân tích hiện trạng marketing
              của bạn và đề xuất giải pháp cụ thể. Không bán hàng ép, không ràng buộc.
            </p>
            <a href="tel:0901234567" className="cta-phone-big">090 123 4567</a>
            <p className="cta-phone-note">Thứ 2 – Thứ 7, 8:00 – 18:00</p>
            <div className="final-cta-actions" style={{ marginTop: '2rem' }}>
              <a href="tel:0901234567" className="btn btn-primary btn-xl">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.86 1.18 2 2 0 012.84 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Gọi ngay — Tư vấn miễn phí
              </a>
              <a href="https://zalo.me/0901234567" className="btn btn-zalo btn-xl" target="_blank" rel="noopener noreferrer">
                Chat Zalo ngay
              </a>
            </div>
            <div className="cta-trust-row">
              <div className="cta-trust-item">Tư vấn miễn phí, không ràng buộc</div>
              <div className="cta-trust-item">Cam kết hoàn phí 30 ngày nếu không hài lòng</div>
              <div className="cta-trust-item">Google Partner Premier — top 3% Việt Nam</div>
              <div className="cta-trust-item">820+ khách hàng tin tưởng</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="/" className="logo">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <path d="M6 20 L13 9 L20 20" stroke="#66BB6A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 9 L22 22" stroke="#fff" strokeWidth="2.8" strokeLinecap="round"/>
                  <circle cx="22" cy="22" r="2" fill="#fff"/>
                </svg>
                Grow<span className="logo-vi">Vi</span>
              </a>
              <p>Boutique marketing agency dành riêng cho doanh nghiệp nhỏ và siêu nhỏ tại Hà Nội &amp; TP.HCM.</p>
            </div>
            <div className="footer-col">
              <h4>Dịch vụ</h4>
              <a href="#">Thiết kế Website</a>
              <a href="#">Quảng cáo Google Ads</a>
              <a href="#">Quảng cáo Facebook</a>
              <a href="#">SEO &amp; Content</a>
              <a href="#">Chăm sóc Website</a>
            </div>
            <div className="footer-col">
              <h4>Về GrowVi</h4>
              <a href="#doi-ngu" onClick={e => handleAnchorClick(e, '#doi-ngu')}>Đội ngũ</a>
              <a href="#portfolio" onClick={e => handleAnchorClick(e, '#portfolio')}>Portfolio</a>
              <a href="#danh-gia" onClick={e => handleAnchorClick(e, '#danh-gia')}>Đánh giá khách hàng</a>
              <a href="#google-partner" onClick={e => handleAnchorClick(e, '#google-partner')}>Google Partner</a>
            </div>
            <div className="footer-col">
              <h4>Liên hệ</h4>
              <a href="tel:0901234567">📞 090 123 4567</a>
              <a href="mailto:hello@growvi.com.vn">✉ hello@growvi.com.vn</a>
              <a href="#">📍 Hà Nội &amp; TP.HCM</a>
              <a href="https://zalo.me/0901234567" target="_blank" rel="noopener noreferrer">💬 Zalo OA</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 GrowVi. Bảo lưu mọi quyền.</span>
            <span>Google Partner Premier · 820+ khách hàng · 7 năm kinh nghiệm</span>
          </div>
        </div>
      </footer>
    </>
  );
}
