import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'GrowVi — Agency Marketing cho Doanh Nghiệp Nhỏ | Google Ads & Website',
  description: 'GrowVi giúp doanh nghiệp nhỏ và siêu nhỏ có khách hàng từ Google. Dịch vụ: Thiết kế Website, Google Ads, Facebook Ads, SEO, Chăm sóc Website. Google Partner Premier.',
};

export default function Page() {
  return <HomeClient />;
}
