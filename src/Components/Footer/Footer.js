import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';

export default function Footer() {
  const { language } = useLanguage();
  const ja = language === 'ja';
  return <footer className="footer"><div className="container">
    <div className="footer-main">
      <div className="footer-brand"><Link to="/" className="footer-wordmark"><span>MOSSDAFF</span><small>INVESTMENT, LTD.</small></Link><p>{ja ? '日本とナイジェリアを結ぶ、車両調達および自動車部品の国際取引パートナー。' : 'A Japan-based sourcing and international trade partner connecting used vehicles and motor spare parts with customers.'}</p><a href="mailto:mosdaffinvestment@gmail.com">mosdaffinvestment@gmail.com</a></div>
      <div><h4>{ja ? '会社情報' : 'COMPANY'}</h4><Link to="/about">{ja ? '会社概要' : 'About us'}</Link><Link to="/why-choose-us">{ja ? '選ばれる理由' : 'Why Mossdaff'}</Link><Link to="/approach">{ja ? '取引の流れ' : 'Our approach'}</Link></div>
      <div><h4>{ja ? '事業内容' : 'OUR BUSINESS'}</h4><Link to="/services">{ja ? 'サービス' : 'Services'}</Link><Link to="/business">{ja ? '車両・部品' : 'Vehicles & parts'}</Link><Link to="/insights">{ja ? 'お知らせ' : 'News & insights'}</Link></div>
      <div><h4>{ja ? 'お問い合わせ' : 'CONTACT'}</h4><span>TOKYO CHUO-KU HARUMI 1-8-7, 206</span><a href="tel:+819017391322">+81 90 1739 1322</a><a href="mailto:mosdaffinvestment@gmail.com">{ja ? 'メールで問い合わせる ↗' : 'Email our team ↗'}</a><a href="https://wa.me/819017391322" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Mossdaff Investment, Ltd. {ja ? '無断転載を禁じます。' : 'All rights reserved.'}</span><span>{ja ? '日本からナイジェリアへ · 国際調達' : 'Japan to Nigeria · Global sourcing & procurement'}</span></div>
  </div></footer>;
}
