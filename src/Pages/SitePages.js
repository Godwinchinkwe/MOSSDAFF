import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../App";

const images = {
  hero: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=88",
  car: "https://i.pinimg.com/736x/66/39/65/663965e5b23922dd5c5a58864a630a90.jpg",
  parts:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
  engine:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85",
  port: "https://images.unsplash.com/photo-1578575437130-527797f5e6f7?auto=format&fit=crop&w=1500&q=85",
  part1:"https://i.pinimg.com/736x/26/01/e9/2601e97011035d2b10c79172cd8b1548.jpg",
  part2:"https://i.pinimg.com/1200x/62/14/9d/62149d6e0ecd3917abddec39ab4bcee5.jpg",
  parts3:"https://assets.autocj.co.jp/photo/R00557000/R00557939-01.jpg?v=20261008",
};

const content = {
  en: {
    homeEyebrow: "JAPAN TO NIGERIA · VEHICLE SOURCING & TRADE",
    heroTitle: (
      <>
        A trusted route to
        <br />
        <em>Japanese vehicles</em>
        <br />
        and quality parts.
      </>
    ),
    heroText:
      "Connecting customers and business partners in Nigeria with used vehicles and motor spare-parts sourcing from Japan.",
    explore: "Explore our services",
    contact: "Start an enquiry",
    scroll: "SCROLL TO DISCOVER",
    introLabel: "WHO WE ARE",
    introTitle: "Bringing markets closer through dependable sourcing.",
    introText:
      "Mossdaff Investment, Ltd. is an international trade and sourcing company based in Tokyo, Japan. We focus on helping customers and trade partners in Nigeria access used vehicles and motor spare parts through clear communication and coordinated procurement.",
    readAbout: "Discover Mossdaff",
    servicesLabel: "WHAT WE DO",
    servicesTitle: "Sourcing solutions built around your requirements.",
    servicesText:
      "From vehicle enquiries to parts procurement, we help make cross-border sourcing more straightforward.",
    serviceOne: "Used vehicle sourcing",
    serviceOneText:
      "Support with sourcing enquiries for used vehicles from the Japanese market, based on your preferred make, model, year and budget.",
    serviceTwo: "Motor spare parts",
    serviceTwoText:
      "Procurement enquiries for motor spare parts, with product references and specifications to help identify the right requirements.",
    serviceThree: "Sourcing coordination",
    serviceThreeText:
      "A clear point of contact to discuss requirements, communicate next steps and coordinate international trade enquiries.",
    viewServices: "View all services",
    featureLabel: "OUR BUSINESS",
    featureTitle: "From Japan, with a focus on what moves you.",
    featureText:
      "We bring together two core areas of automotive trade: used vehicles and motor spare parts. Every enquiry starts with understanding what you need.",
    vehicles: "Used cars",
    vehiclesText:
      "Tell us the vehicle type, make, model, year and condition you are looking for.",
    parts: "Motor spare parts",
    partsText:
      "Share part numbers, vehicle details, photos or specifications to help us understand your requirements.",
    whyLabel: "THE MOSSDAFF APPROACH",
    whyTitle: "Business built on clarity, care and connection.",
    whyText:
      "International trade works best when expectations are understood. We prioritise responsive communication, clear requirements and practical coordination at every stage.",
    whyOne: "Japan-based perspective",
    whyOneText:
      "A Tokyo base for sourcing enquiries connected to the Japanese market.",
    whyTwo: "Customer-led enquiries",
    whyTwoText:
      "We start with your needs, specifications and intended destination.",
    whyThree: "Direct communication",
    whyThreeText: "Clear conversations and a direct route to our team.",
    whyFour: "Trade-minded service",
    whyFourText:
      "A practical approach for individual customers, entrepreneurs and businesses.",
    ctaTitle: "Have a vehicle or parts requirement?",
    ctaText:
      "Tell us what you are looking for. We welcome enquiries from individuals, entrepreneurs and business partners in Nigeria.",
    aboutTitle: "A sourcing partner connecting Japan and Nigeria",
    aboutLead:
      "Mossdaff Investment, Ltd. is focused on international vehicle and motor spare-parts sourcing.",
    aboutBody:
      "Based in Tokyo, Japan, Mossdaff Investment, Ltd. works to connect customers and business partners in Nigeria with sourcing opportunities in the Japanese market. Our business focus is used vehicles and motor spare parts. We believe successful trade begins with listening carefully, understanding product requirements and communicating clearly about the next steps.",
    missionTitle: "Our mission",
    missionText:
      "To make cross-border vehicle and motor spare-parts sourcing more accessible through responsive service, clear communication and dependable business relationships.",
    visionTitle: "Our vision",
    visionText:
      "To build lasting connections between Japan and Nigeria and become a trusted sourcing partner for customers and businesses seeking automotive products.",
    servicesTitlePage: "Sourcing services for automotive trade",
    servicesLead:
      "Practical support for used vehicle and motor spare-parts enquiries between Japan and Nigeria.",
    businessTitle: "Our automotive trade focus",
    businessLead:
      "Two clear areas of focus: used vehicles and motor spare parts.",
    whyTitlePage: "Why work with Mossdaff",
    whyLead:
      "A considered, customer-focused approach to international sourcing.",
    approachTitle: "A clear process from enquiry to next steps",
    approachLead:
      "We keep communication straightforward and requirements at the centre of every discussion.",
    insightsTitle: "News & insights",
    insightsLead:
      "Updates and useful guidance for customers exploring vehicle and parts sourcing.",
    contactTitle: "Let’s discuss what you need",
    contactLead:
      "Send us your vehicle or motor spare-parts enquiry. Our team will review the details and respond using the contact information you provide.",
    formTitle: "Send an enquiry",
    name: "Full name",
    company: "Company (optional)",
    email: "Email address",
    phone: "Phone / WhatsApp",
    interest: "What are you interested in?",
    choose: "Select an enquiry type",
    carOption: "Used cars",
    partsOption: "Motor spare parts",
    otherOption: "Other sourcing enquiry",
    message: "Tell us about your requirements",
    send: "Send enquiry",
    sending: "Sending…",
    formNote:
      "Please include vehicle make/model/year or part references where possible.",
    formSuccess: "Thank you. Your enquiry has been submitted.",
    formError:
      "We could not submit the form. Please try again or contact us by email.",
    formSetup:
      "The enquiry form is ready. The site owner must add a Formspree endpoint in the environment settings before online submissions can be delivered.",
    address: "Tokyo Chuo-ku Harumi 1-8-7, 206",
    // email: "mosdaffinvestment@gmail.com",
    phoneDisplay: "+81 90 1739 1322",
    articles: [
      [
        "Preparing a clear used-car sourcing enquiry",
        "Include your preferred make, model, model year, budget and any important condition requirements. Clear details help the sourcing conversation get off to a useful start.",
      ],
      [
        "What to include in a motor spare-parts request",
        "Part numbers, vehicle make and model, photos and specifications can help identify the component you need.",
      ],
      [
        "Understanding the Japan–Nigeria sourcing journey",
        "Cross-border sourcing involves several steps. Ask questions early and make sure requirements, costs and arrangements are confirmed before proceeding.",
      ],
    ],
    steps: [
      [
        "01",
        "Share your requirements",
        "Tell us the vehicle or part you are looking for, including specifications, target budget and destination.",
      ],
      [
        "02",
        "Discuss sourcing options",
        "We review the information and communicate any relevant questions or possible next steps.",
      ],
      [
        "03",
        "Confirm the details",
        "Product identity, condition, pricing, availability, shipping and other commercial arrangements must be reviewed and agreed before any transaction.",
      ],
      [
        "04",
        "Coordinate next steps",
        "Once the details are agreed, the next steps can be coordinated with clear communication.",
      ],
    ],
  },
  ja: {
    homeEyebrow: "日本からナイジェリアへ · 車両調達・国際取引",
    heroTitle: (
      <>
        日本の中古車と
        <br />
        <em>自動車部品を</em>
        <br />
        確かなつながりで。
      </>
    ),
    heroText:
      "日本市場の中古車および自動車部品の調達を通じて、ナイジェリアのお客様やビジネスパートナーをつなぎます。",
    explore: "サービスを見る",
    contact: "お問い合わせ",
    scroll: "スクロールして詳細を見る",
    introLabel: "私たちについて",
    introTitle: "信頼できる調達で市場をつなぐ。",
    introText:
      "Mossdaff Investment, Ltd. は日本の東京を拠点とする国際貿易・調達会社です。明確なコミュニケーションと調達サポートを通じて、ナイジェリアのお客様や取引先による中古車および自動車部品の調達を支援します。",
    readAbout: "会社概要を見る",
    servicesLabel: "事業内容",
    servicesTitle: "お客様のご要望に合わせた調達サポート。",
    servicesText:
      "中古車のお問い合わせから自動車部品の調達まで、国際取引をわかりやすくサポートします。",
    serviceOne: "中古車の調達",
    serviceOneText:
      "ご希望のメーカー、車種、年式、ご予算に基づき、日本市場の中古車に関する調達相談を承ります。",
    serviceTwo: "自動車部品",
    serviceTwoText:
      "部品番号や仕様などを確認しながら、自動車部品の調達に関するお問い合わせに対応します。",
    serviceThree: "調達・取引の調整",
    serviceThreeText:
      "ご要望の確認、次の手順のご案内、国際取引に関するお問い合わせの調整を行います。",
    viewServices: "サービス一覧を見る",
    featureLabel: "事業分野",
    featureTitle: "日本から、お客様のニーズに合わせて。",
    featureText:
      "中古車と自動車部品という自動車関連取引の2つの分野に注力しています。すべてのお問い合わせは、お客様のご要望を理解することから始まります。",
    vehicles: "中古車",
    vehiclesText: "ご希望の車種、メーカー、年式、状態などをお知らせください。",
    parts: "自動車部品",
    partsText: "部品番号、車両情報、写真、仕様などをお知らせください。",
    whyLabel: "MOSSDAFFの姿勢",
    whyTitle: "明確さ、丁寧さ、つながりを大切に。",
    whyText:
      "国際取引では、双方の期待や条件を理解することが重要です。迅速な連絡、要件の確認、実務的な調整を大切にしています。",
    whyOne: "日本を拠点とする視点",
    whyOneText: "東京を拠点に、日本市場に関する調達相談に対応します。",
    whyTwo: "お客様中心の対応",
    whyTwoText: "お客様のご希望、仕様、仕向地を確認することから始めます。",
    whyThree: "直接的なコミュニケーション",
    whyThreeText: "担当チームと明確かつ直接的にご相談いただけます。",
    whyFour: "取引を理解したサービス",
    whyFourText: "個人のお客様、起業家、企業のお客様に実務的に対応します。",
    ctaTitle: "車両や部品をお探しですか？",
    ctaText:
      "お探しの商品やご要望をお聞かせください。ナイジェリアのお客様、起業家、ビジネスパートナーからのお問い合わせを歓迎します。",
    aboutTitle: "日本とナイジェリアをつなぐ調達パートナー",
    aboutLead:
      "Mossdaff Investment, Ltd. は車両および自動車部品の国際調達に取り組んでいます。",
    aboutBody:
      "Mossdaff Investment, Ltd. は日本の東京を拠点に、日本市場の調達機会とナイジェリアのお客様・ビジネスパートナーをつなぐことを目指しています。主な事業分野は中古車と自動車部品です。お客様のご要望を丁寧に伺い、製品要件を理解し、次の手順を明確に伝えることが取引の第一歩だと考えています。",
    missionTitle: "使命",
    missionText:
      "迅速な対応、明確なコミュニケーション、信頼できる関係を通じて、車両および自動車部品の国際調達をより身近なものにします。",
    visionTitle: "ビジョン",
    visionText:
      "日本とナイジェリアの持続的なつながりを築き、自動車関連商品を求めるお客様や企業に信頼される調達パートナーを目指します。",
    servicesTitlePage: "自動車関連取引の調達サービス",
    servicesLead:
      "日本とナイジェリア間の中古車および自動車部品に関する実務的なサポート。",
    businessTitle: "自動車関連の事業分野",
    businessLead: "中古車と自動車部品の2つの分野に注力しています。",
    whyTitlePage: "Mossdaffが選ばれる理由",
    whyLead: "国際調達において、お客様を大切にする丁寧な対応。",
    approachTitle: "お問い合わせから次のステップまで",
    approachLead:
      "ご要望を中心に、わかりやすいコミュニケーションを心がけています。",
    insightsTitle: "お知らせ・インサイト",
    insightsLead:
      "車両や部品の調達を検討されるお客様に役立つ情報をお届けします。",
    contactTitle: "ご希望についてご相談ください",
    contactLead:
      "中古車または自動車部品についてお問い合わせください。内容を確認のうえ、ご記入いただいた連絡先へご返信します。",
    formTitle: "お問い合わせフォーム",
    name: "お名前",
    company: "会社名（任意）",
    email: "メールアドレス",
    phone: "電話番号 / WhatsApp",
    interest: "お問い合わせ内容",
    choose: "お問い合わせの種類を選択",
    carOption: "中古車",
    partsOption: "自動車部品",
    otherOption: "その他の調達相談",
    message: "ご希望・詳細",
    send: "送信する",
    sending: "送信中…",
    formNote:
      "可能であればメーカー、車種、年式、部品番号などをご記入ください。",
    formSuccess: "お問い合わせを送信しました。ありがとうございます。",
    formError:
      "送信できませんでした。再度お試しいただくか、メールでご連絡ください。",
    formSetup:
      "フォームは設定可能な状態です。オンライン送信には、サイト管理者によるFormspreeエンドポイントの設定が必要です。",
    address: "東京都中央区晴海1-8-7 206",
    // email: "mosdaffinvestment@gmail.com",
    phoneDisplay: "+81 90 1739 1322",
    articles: [
      [
        "中古車の調達相談で伝えておきたい情報",
        "ご希望のメーカー、車種、年式、ご予算、車両状態に関する条件をお知らせいただくと、相談をスムーズに進められます。",
      ],
      [
        "自動車部品を問い合わせる際に必要な情報",
        "部品番号、車両のメーカー・車種、写真、仕様などが、必要な部品の確認に役立ちます。",
      ],
      [
        "日本からナイジェリアへの調達の流れ",
        "国際調達には複数の段階があります。取引を進める前に、要件、費用、条件、手配内容を確認することが大切です。",
      ],
    ],
    steps: [
      [
        "01",
        "ご要望をお知らせください",
        "お探しの車両または部品、仕様、ご予算、仕向地をお知らせください。",
      ],
      [
        "02",
        "調達方法をご相談",
        "内容を確認し、必要な追加情報や今後の進め方をご案内します。",
      ],
      [
        "03",
        "詳細条件の確認",
        "商品、状態、価格、在庫、輸送、その他の取引条件を、取引前に確認・合意します。",
      ],
      [
        "04",
        "次の手順を調整",
        "条件が合意された後、明確な連絡を取りながら次の手順を調整します。",
      ],
    ],
  },
};





function useCopy() {
  const { language } = useLanguage();
  return content[language] || content.en;
}
function PageHero({ tag, title, lead, image = images.port }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15,39,30,.92), rgba(15,39,30,.58)), url(${image})`,}}>

      <div className="container page-hero-inner">
        <span className="eyebrow light">{tag}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}
function CTA({ title, text }) {
  const t = useCopy();
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow light">MOSSDAFF INVESTMENT, LTD.</span>
          <h2>{title || t.ctaTitle}</h2>
          <p>{text || t.ctaText}</p>
        </div>
        <Link className="button button-ivory" to="/contact">
          {t.contact} <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export function Home() {
  const t = useCopy();
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(12,34,26,.88) 0%, rgba(12,34,26,.52) 54%, rgba(12,34,26,.12) 100%), url(${images.hero})`,
        }}
      >
        <div className="container hero-content">
          <span className="eyebrow light">{t.homeEyebrow}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <Link className="button button-ivory" to="/services">
              {t.explore}
              <span>↗</span>
            </Link>
            <Link className="button button-outline" to="/contact">
              {t.contact}
            </Link>
          </div>
          <div className="hero-foot">
            <span>{t.scroll}</span>
            <span className="hero-line" />
          </div>
        </div>
        <div className="hero-index">
          <span>01</span>
          <i /> <span>02</span>
        </div>
      </section>




      <section className="section-pad">
        <div className="container">
          <div className="service-detail-grid">
            <article className="service-detail">
              <img src={images.part1} alt="Used car sourcing" />
              <span className="eyebrow">01 / VEHICLES</span>
              <h2>Shock Absorber</h2>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>

            <article className="service-detail">
              <img src={images.parts} alt="Automotive spare parts" />
              <span className="eyebrow">02 / PARTS</span>
              <h2>{t.serviceTwo}</h2>
              {/* <p>{t.serviceTwoText}</p> */}
              {/* <p>{t.partsText}</p> */}
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>

              <article className="service-detail">
              <img src={images.part2} alt="Automotive spare parts" />
              <span className="eyebrow">02 / PARTS</span>
              <h2>Motor Rims</h2>
              {/* <p>{t.serviceTwoText}</p> */}
              {/* <p>{t.partsText}</p> */}
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>
              <article className="service-detail">
              <img src={images.parts3} alt="Automotive spare parts" />
              <span className="eyebrow">02 / PARTS</span>
              <h2>Used vehicle sourcing</h2>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>
          </div>
        </div>
      </section>



   








      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">{t.introLabel}</span>
            <h2>{t.introTitle}</h2>
          </div>
          <div className="intro-copy">
            <p className="large-copy">{t.introText}</p>
            <Link className="text-link" to="/about">
              {t.readAbout}
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t.servicesLabel}</span>
              <h2>{t.servicesTitle}</h2>
            </div>
            <p>{t.servicesText}</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <span className="card-number">01 /</span>
              <div className="service-icon">↗</div>
              <h3>{t.serviceOne}</h3>
              <p>{t.serviceOneText}</p>
              <Link to="/services" className="card-link">
                {t.viewServices}
                <span>↗</span>
              </Link>
            </article>
            <article className="service-card">
              <span className="card-number">02 /</span>
              <div className="service-icon">⌁</div>
              <h3>{t.serviceTwo}</h3>
              <p>{t.serviceTwoText}</p>
              <Link to="/services" className="card-link">
                {t.viewServices}
                <span>↗</span>
              </Link>
            </article>
            <article className="service-card">
              <span className="card-number">03 /</span>
              <div className="service-icon">◎</div>
              <h3>{t.serviceThree}</h3>
              <p>{t.serviceThreeText}</p>
              <Link to="/services" className="card-link">
                {t.viewServices}
                <span>↗</span>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div
          className="feature-image"
          style={{ backgroundImage: `url(${images.car})` }}
        />
        <div className="feature-copy">
          <span className="eyebrow light">{t.featureLabel}</span>
          <h2>{t.featureTitle}</h2>
          <p>{t.featureText}</p>
          <div className="feature-links">
            <Link to="/business">
              <strong>01</strong>
              <span>{t.vehicles}</span>
              <b>↗</b>
            </Link>
            <Link to="/business">
              <strong>02</strong>
              <span>{t.parts}</span>
              <b>↗</b>
            </Link>
          </div>
        </div>
      </section>
      <section className="why-section section-pad">
        <div className="container why-grid">
          <div>
            <span className="eyebrow">{t.whyLabel}</span>
            <h2>{t.whyTitle}</h2>
            <p className="large-copy">{t.whyText}</p>
            <Link className="text-link" to="/why-choose-us">
              {t.whyTitlePage}
              <span>↗</span>
            </Link>
          </div>
          <div className="why-list">
            {[
              [t.whyOne, t.whyOneText],
              [t.whyTwo, t.whyTwoText],
              [t.whyThree, t.whyThreeText],
              [t.whyFour, t.whyFourText],
            ].map((item, i) => (
              <div className="why-item" key={item[0]}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </div>
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function About() {
  const t = useCopy();
  return (
    <>
      <PageHero
        tag="MOSSDAFF / ABOUT"
        title={t.aboutTitle}
        lead={t.aboutLead}
        image={images.car}
      />
      <section className="section-pad">
        <div className="container prose-grid">
          <span className="eyebrow">{t.introLabel}</span>
          <div>
            <p className="large-copy">{t.aboutBody}</p>
            <div className="mission-grid">
              <article>
                <span>01 /</span>
                <h3>{t.missionTitle}</h3>
                <p>{t.missionText}</p>
              </article>
              <article>
                <span>02 /</span>
                <h3>{t.visionTitle}</h3>
                <p>{t.visionText}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Services() {
  const t = useCopy();
  return (
    <>
      <PageHero
        tag="MOSSDAFF / SERVICES"
        title={t.servicesTitlePage}
        lead={t.servicesLead}
        image={images.parts}
      />
      <section className="section-pad">
        <div className="container">
          <div className="service-detail-grid">
            <article className="service-detail">
              <img src={images.car} alt="Used car sourcing" />
              <span className="eyebrow">01 / VEHICLES</span>
              <h2>{t.serviceOne}</h2>
              <p>{t.serviceOneText}</p>
              <p>{t.vehiclesText}</p>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>
            <article className="service-detail">
              <img src={images.parts} alt="Automotive spare parts" />
              <span className="eyebrow">02 / PARTS</span>
              <h2>{t.serviceTwo}</h2>
              <p>{t.serviceTwoText}</p>
              <p>{t.partsText}</p>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>
          </div>
          <div className="service-note">
            <span className="eyebrow">03 / COORDINATION</span>
            <h2>{t.serviceThree}</h2>
            <p>{t.serviceThreeText}</p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Business() {
  const t = useCopy();
  return (
    <>
      <PageHero
        tag="MOSSDAFF / OUR BUSINESS"
        title={t.businessTitle}
        lead={t.businessLead}
        image={images.car}
      />
      <section className="section-pad">
        <div className="container business-grid">
          <article className="business-card">
            <img src={images.car} alt="Used vehicle" />
            <div>
              <span className="eyebrow">01 / USED VEHICLES</span>
              <h2>{t.vehicles}</h2>
              <p>{t.vehiclesText}</p>
              <p>{t.serviceOneText}</p>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </div>
          </article>
          <article className="business-card reverse">
            <img src={images.engine} alt="Automotive components" />
            <div>
              <span className="eyebrow">02 / MOTOR SPARE PARTS</span>
              <h2>{t.parts}</h2>
              <p>{t.partsText}</p>
              <p>{t.serviceTwoText}</p>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function WhyChooseUs() {
  const t = useCopy();
  const items = [
    [t.whyOne, t.whyOneText],
    [t.whyTwo, t.whyTwoText],
    [t.whyThree, t.whyThreeText],
    [t.whyFour, t.whyFourText],
  ];
  return (
    <>
      <PageHero
        tag="MOSSDAFF / WHY MOSSDAFF"
        title={t.whyTitlePage}
        lead={t.whyLead}
      />
      <section className="section-pad">
        <div className="container why-page-grid">
          <div>
            <span className="eyebrow">{t.whyLabel}</span>
            <h2>{t.whyTitle}</h2>
            <p className="large-copy">{t.whyText}</p>
          </div>
          <div className="why-list">
            {items.map((item, i) => (
              <div className="why-item" key={item[0]}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </div>
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Approach() {
  const t = useCopy();
  const { language } = useLanguage();
  return (
    <>
      <PageHero
        tag="MOSSDAFF / OUR APPROACH"
        title={t.approachTitle}
        lead={t.approachLead}
        image={images.port}
      />
      <section className="section-pad">
        <div className="container">
          <div className="steps-list">
            {t.steps.map(([n, title, desc]) => (
              <article className="step-row" key={n}>
                <span className="step-number">{n}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
                <span className="step-arrow">↗</span>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            {language === "ja"
              ? "重要：商品の在庫、車両の状態、価格、輸送、関税、支払条件およびその他すべての取引条件は、確認および書面による合意を条件とします。お問い合わせの送信によって、購入または供給の確約が成立するものではありません。"
              : "Important: Product availability, vehicle condition, pricing, shipping, duties, payment terms and all other commercial arrangements are subject to confirmation and written agreement. No purchase or supply commitment is made by submitting an enquiry."}
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Blog() {
  const t = useCopy();
  return (
    <>
      <PageHero
        tag="MOSSDAFF / INSIGHTS"
        title={t.insightsTitle}
        lead={t.insightsLead}
      />
      <section className="section-pad">
        <div className="container article-grid">
          {t.articles.map(([title, body], i) => (
            <article className="article-card" key={title}>
              <span className="eyebrow">TRADE NOTE / 0{i + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              <Link className="text-link" to="/contact">
                {t.contact}
                <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Contact() {
  const t = useCopy();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const send = async (e) => {
    e.preventDefault();
    setStatus("");
    const endpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("setup");
      return;
    }
    setSending(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: "Website enquiry — Mossdaff Investment",
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };
  return (
    <>
      <PageHero
        tag="MOSSDAFF / CONTACT"
        title={t.contactTitle}
        lead={t.contactLead}
      />
      <section className="section-pad">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>{t.contact}</h2>
            <p>{t.ctaText}</p>
            <div className="contact-detail">
              <span>EMAIL</span>
              <a href="mailto:mosdaffinvestment@gmail.com">
                mosdaffinvestment@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <span>PHONE / WHATSAPP</span>
              <a
                href="https://wa.me/819017391322"
                target="_blank"
                rel="noreferrer"
              >
                +81 90 1739 1322 ↗
              </a>
            </div>
            <div className="contact-detail">
              <span>{t.address}</span>
              <p>{t.address}</p>
            </div>
            <a
              className="button button-green whatsapp-button"
              href="https://wa.me/819017391322"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us <span>↗</span>
            </a>
          </aside>
          <form className="contact-form" onSubmit={send}>
            <div className="form-heading">
              <span className="eyebrow">MOSSDAFF / ENQUIRY</span>
              <h2>{t.formTitle}</h2>
            </div>
            {status === "sent" && (
              <p className="form-status success">{t.formSuccess}</p>
            )}
            {status === "error" && (
              <p className="form-status error">{t.formError}</p>
            )}
            {status === "setup" && (
              <p className="form-status">
                {t.formSetup}{" "}
                <a href="mailto:mosdaffinvestment@gmail.com">
                  mosdaffinvestment@gmail.com
                </a>
              </p>
            )}
            <div className="form-row">
              <label>
                {t.name}
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                />
              </label>
              <label>
                {t.company}
                <input
                  name="company"
                  value={form.company}
                  onChange={update}
                  autoComplete="organization"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                {t.email}
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  autoComplete="email"
                />
              </label>
              <label>
                {t.phone}
                <input
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  autoComplete="tel"
                />
              </label>
            </div>
            <label>
              {t.interest}
              <select
                required
                name="interest"
                value={form.interest}
                onChange={update}
              >
                <option value="">{t.choose}</option>
                <option value="Used cars">{t.carOption}</option>
                <option value="Motor spare parts">{t.partsOption}</option>
                <option value="Other sourcing enquiry">{t.otherOption}</option>
              </select>
            </label>
            <label>
              {t.message}
              <textarea
                required
                rows="6"
                name="message"
                value={form.message}
                onChange={update}
              />
            </label>
            <button
              className="button button-green"
              type="submit"
              disabled={sending}
            >
              {sending ? t.sending : t.send}
              <span>↗</span>
            </button>
            <small>{t.formNote}</small>
          </form>
        </div>
      </section>
    </>
  );
}
