import React from 'react';
import Head from 'next/head';
import Script from 'next/experimental-script';
import { 
  BookOutlined, 
  FileTextOutlined, 
  FileSearchOutlined, 
  VideoCameraOutlined, 
  DollarOutlined, 
  FolderOutlined,
  ReadOutlined,
  RocketOutlined,
  ExperimentOutlined,
  SettingOutlined,
  GlobalOutlined
} from '@ant-design/icons';

const KutuphanePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kütüphane - UYG Yönetim ve Danışmanlık</title>
        <meta charSet="utf-8"/>
        <meta property="keywords" content="kütüphane,raporlar,makaleler,blog,bültenler,dökümanlar" key="title" />
        <meta property="og:title" content="Kütüphane" key="title" />
        <meta name="Description" content="Eğitim ve etkinlikler, raporlar, makaleler, v-blog, bültenler ve tanım dökümanları." />
        <meta name="og:description" content="Eğitim ve etkinlikler, raporlar, makaleler, v-blog, bültenler ve tanım dökümanları." />
        <meta property="og:url" content="/kutuphane" />
        <meta property="og:image" content="kutuphane.jpeg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script
        src="https://www.google-analytics.com/analytics.js"      />
      <Script id="google-analytics">
      {`
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'G-H7KR0LT2B4', 'auto');
      ga('send', 'pageview');
      `}
      </Script>
      
      <div className='kutuphane-container'>
        <h1>Kütüphane</h1>
        
        <div className="kutuphane-grid">
          <div className="kutuphane-card">
            <div className="card-icon">
              <BookOutlined />
            </div>
            <div className="card-content">
              <h3>Eğitim ve Etkinlikler</h3>
              <p>Kişisel gelişim ve mesleki eğitim materyalleri</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <FileTextOutlined />
            </div>
            <div className="card-content">
              <h3>Raporlar</h3>
              <p>Detaylı analiz ve araştırma raporları</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <FileSearchOutlined />
            </div>
            <div className="card-content">
              <h3>Makaleler</h3>
              <p>Uzman görüşleri ve teknik makaleler</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <VideoCameraOutlined />
            </div>
            <div className="card-content">
              <h3>V-Blog</h3>
              <p>Video blog içerikleri ve eğitimler</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <DollarOutlined />
            </div>
            <div className="card-content">
              <h3>Bültenler</h3>
              <p>Güncel haberler ve sektörel bültenler</p>
            </div>
          </div>

          <div className="kutuphane-card">
            <div className="card-icon">
              <FolderOutlined />
            </div>
            <div className="card-content">
              <h3>Tanım Dökümanları</h3>
              <p>Proje tanımları ve teknik dökümanlar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Eğitimlerimiz Bölümü */}
      <div className='egitimlerimiz-section'>
        <h2>Eğitimlerimiz</h2>
        
        <div className="egitimler-grid">
          <div className="egitim-card">
            <div className="egitim-icon">
              <ReadOutlined />
            </div>
            <div className="egitim-content">
              <h3>Proje Döngüsü Eğitimi</h3>
              <p>Proje yönetimi ve döngü süreçleri hakkında kapsamlı eğitim programı</p>
              <a href="/proje-dongusu-egitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <GlobalOutlined />
            </div>
            <div className="egitim-content">
              <h3>Digital Öğretim Uygulamaları</h3>
              <p>Modern dijital eğitim araçları ve uygulamaları eğitimi</p>
              <a href="/digital-ogrenim-egitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <ExperimentOutlined />
            </div>
            <div className="egitim-content">
              <h3>Elektrik Elektronik Eğitimi</h3>
              <p>Temel elektrik ve elektronik konularında pratik eğitim</p>
              <a href="/eklektirik-elektronik-eigitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <SettingOutlined />
            </div>
            <div className="egitim-content">
              <h3>PLC Teknolojisi Eğitimi</h3>
              <p>Programlanabilir Lojik Kontrol sistemleri eğitimi</p>
              <a href="/plc-teknolojisi-egitimi" className="egitim-link">Detayları Gör</a>
            </div>
          </div>

          <div className="egitim-card">
            <div className="egitim-icon">
              <RocketOutlined />
            </div>
            <div className="egitim-content">
              <h3>Endüstri 4.0 ve Haberleşme Protokolleri</h3>
              <p>Endüstri 4.0 teknolojileri ve iletişim protokolleri eğitimi</p>
              <a href="/endustri4-0" className="egitim-link">Detayları Gör</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .kutuphane-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .kutuphane-container h1 {
          text-align: center;
          margin-bottom: 3rem;
          color: rgb(44, 44, 44);
          font-size: 2.5rem;
          font-weight: 700;
        }

        .kutuphane-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .kutuphane-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          height: 300px;
          display: flex;
          flex-direction: column;
          border: 2px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .kutuphane-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(38, 211, 103, 0.2);
          border-color: rgb(38, 211, 103);
        }

        .card-icon {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgb(44, 44, 44), rgb(38, 211, 103));
          color: white;
        }

        .card-icon svg {
          font-size: 4rem;
          opacity: 0.9;
        }

        .card-content {
          padding: 1.5rem;
          background: white;
          color: rgb(44, 44, 44);
          text-align: center;
        }

        .card-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: rgb(44, 44, 44);
        }

        .card-content p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
          line-height: 1.4;
          color: rgb(44, 44, 44);
        }

        @media (max-width: 768px) {
          .kutuphane-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 1fr);
            gap: 1.5rem;
          }

          .kutuphane-card {
            height: 250px;
          }

          .kutuphane-container {
            padding: 1rem;
          }

          .kutuphane-container h1 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .kutuphane-card {
            height: 200px;
          }

          .card-content {
            padding: 1rem;
          }

          .card-content h3 {
            font-size: 1rem;
          }

          .card-content p {
            font-size: 0.8rem;
          }
        }

        /* Eğitimlerimiz Bölümü Stilleri */
        .egitimlerimiz-section {
          margin-top: 4rem;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 15px;
        }

        .egitimlerimiz-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: rgb(44, 44, 44);
          font-size: 2.5rem;
          font-weight: 700;
          position: relative;
        }

        .egitimlerimiz-section h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, rgb(44, 44, 44), rgb(38, 211, 103));
          border-radius: 2px;
        }

        .egitimler-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .egitim-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .egitim-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(38, 211, 103, 0.2);
          border-color: rgb(38, 211, 103);
        }

        .egitim-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          background: linear-gradient(135deg, rgb(38, 211, 103), rgb(44, 44, 44));
          color: white;
        }

        .egitim-icon svg {
          font-size: 2.5rem;
          opacity: 0.9;
        }

        .egitim-content {
          padding: 1.5rem;
        }

        .egitim-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: rgb(44, 44, 44);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .egitim-content p {
          color: rgb(44, 44, 44);
          line-height: 1.5;
          margin-bottom: 1rem;
          opacity: 0.8;
          font-size: 0.95rem;
        }

        .egitim-link {
          display: inline-block;
          background: linear-gradient(135deg, rgb(44, 44, 44), rgb(38, 211, 103));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .egitim-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(38, 211, 103, 0.3);
          color: white;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .egitimler-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .egitimlerimiz-section {
            padding: 1.5rem;
            margin-top: 3rem;
          }

          .egitimlerimiz-section h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .egitimlerimiz-section {
            padding: 1rem;
          }

          .egitimlerimiz-section h2 {
            font-size: 1.8rem;
          }

          .egitim-content {
            padding: 1rem;
          }

          .egitim-content h3 {
            font-size: 1.1rem;
          }

          .egitim-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default KutuphanePage; 