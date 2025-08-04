import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProjeTakipSistemiPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>İşletmeniz İçin Proje Çağrılarını Takip Edebileceğiniz Sistem</title>
        <meta name="description" content="Sektörünüz için en uygun ihale ve hibe çağrılarını kaçırmayın. Her gün taranan ihale ve hibe çağrıları ile fırsatları kaçırmadan, başvuru sürecini hızlandırın." />
      </Head>
      
      <div className="teknopark-page">
        <div className="page-container">
          <h1 className="page-title">Sektörünüz için En Uygun İhale ve Hibe Çağrılarını Kaçırmayın</h1>
          
          <div className="content-section">
            <p style={{ fontSize: '1.2em', textAlign: 'center', marginBottom: '30px' }}>
              Her gün taranan ihale ve hibe çağrıları ile fırsatları kaçırmadan, başvuru sürecini hızlandırın.
            </p>
          </div>

          <div className="content-section">
            <h2>Sunduğumuz Hizmetler</h2>
            <div className="advantages-grid">
              <div className="advantage-item">
                <h3>Her Gün Güncellenen İhale Takibi</h3>
                <p>Sektörünüz için uygun ihale ve hibe çağrılarını her gün otomatik olarak tarar ve size özel bildirimler gönderir.</p>
              </div>
              <div className="advantage-item">
                <h3>Akıllı Rehberlik</h3>
                <p>Başvuru koşullarını hızlıca öğrenmenizi ve başvuru sırasında adım adım yönlendirilmenizi sağlar.</p>
              </div>
              <div className="advantage-item">
                <h3>Kapsamlı Sektörel Analiz</h3>
                <p>Sektörünüzü derinlemesine analiz ederek en uygun fırsatları değerlendirmenizi sağlar.</p>
              </div>
              <div className="advantage-item">
                <h3>Tek Tıkla Başvuru</h3>
                <p>Uygun ihale ve hibelere tek tıkla başvurmanızı kolaylaştırır.</p>
              </div>
              <div className="advantage-item">
                <h3>Dinamik Raporlama Araçları</h3>
                <p>Faaliyetlerinizle ilgili kapsamlı raporlar oluşturarak stratejik kararlar almanıza yardımcı olur.</p>
              </div>
              <div className="advantage-item">
                <h3>Anlık Bildirimler</h3>
                <p>Değişiklikler ve yeni fırsatlar hakkında anında bilgilendirme sağlayarak hızlı aksiyon almanıza olanak tanır.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Ödeme Planları</h2>
            <div className="pricing-grid">
              <div className="pricing-item">
                <h3>Sektör Bazlı</h3>
                <div className="price">2000$ + KDV/ yıllık</div>
                <ul>
                  <li>Tam sektör analizi</li>
                  <li>Yapay zeka asistanı ile tam etkileşim</li>
                  <li>Gelişmiş raporlama araçları</li>
                  <li>Haftalık güncellemeler</li>
                  <li>2 sektör takibi</li>
                  <li>Telefon ve e-posta desteği</li>
                </ul>
              </div>
              <div className="pricing-item featured">
                <h3>Tüm Sektörler</h3>
                <div className="price">20000$ + KDV / yıllık</div>
                <ul>
                  <li>Tüm sektörlerde tam analiz</li>
                  <li>Yapay zeka asistanı ile tam etkileşim</li>
                  <li>Gelişmiş raporlama araçları</li>
                  <li>Günlük güncellemeler</li>
                  <li>Sınırsız sektör takibi</li>
                  <li>Öncelikli telefon ve e-posta desteği</li>
                  <li>Özel danışmanlık hizmeti</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Sık Sorulan Sorular</h2>
            <div className="faq-section">
              <div className="faq-item">
                <h3>Proje Sihirbazı nedir?</h3>
                <p>Proje Sihirbazı, sektörünüz için en uygun ihale ve hibe çağrılarını takip eden gelişmiş bir platformdur.</p>
              </div>
              <div className="faq-item">
                <h3>Hangi sektörler için uygundur?</h3>
                <p>Tüm sektörler için uygundur. Sektör bazlı veya tüm sektörler paketlerinden size uygun olanı seçebilirsiniz.</p>
              </div>
              <div className="faq-item">
                <h3>Yapay zeka asistanı nasıl çalışır?</h3>
                <p>Yapay zeka asistanı, başvuru koşullarını analiz eder ve size özel rehberlik sağlar.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı ile nasıl bildirim alırım?</h3>
                <p>Anlık bildirimler ile yeni fırsatlar hakkında anında bilgilendirilirsiniz.</p>
              </div>
              <div className="faq-item">
                <h3>Proje Sihirbazı'nın maliyeti nedir?</h3>
                <p>Sektör bazlı paket 2000$ + KDV/yıllık, tüm sektörler paketi 20000$ + KDV/yıllıktır.</p>
              </div>
            </div>
          </div>

          <div className="content-section" style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Portal'a Erişim</h2>
            <p style={{ marginBottom: '20px' }}>
              Proje Sihirbazı platformuna erişmek için aşağıdaki linke tıklayabilirsiniz.
            </p>
            <a 
              href="https://projesihirbazi.enmdigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="portal-link"
            >
              Proje Sihirbazı Portalına Git
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjeTakipSistemiPage; 