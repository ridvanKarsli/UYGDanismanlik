import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'antd';

const TeknoparkPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Teknopark'a Giriş Yapmak İçin Bilmeniz Gerekenler</title>
        <meta name="description" content="Teknoparklara giriş süreçleri, başvuru koşulları, avantajları ve dikkat edilmesi gerekenler hakkında detaylı bilgiler." />
      </Head>
      
      <div className="teknopark-page">
        <div className="page-container">
          <h1 className="page-title">Teknopark'a Giriş Yapmak İçin Bilmeniz Gerekenler</h1>
          
          <div className="content-section">
            <h2>Teknopark Nedir?</h2>
            <p>
              Teknoparklar, Ar-Ge ve inovasyon faaliyetlerini desteklemek amacıyla kurulmuş özel bölgelerdir. 
              Bu bölgeler, şirketlere vergi avantajları, hibe ve destek programlarına erişim, üniversite-sanayi 
              işbirliği imkanları gibi birçok fayda sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>Teknopark'a Giriş Kriterleri</h2>
            <ul>
              <li>Ar-Ge projelerine sahip olmak</li>
              <li>Yenilikçi ürün veya hizmet geliştirmek</li>
              <li>Belirli bir teknoloji alanında faaliyet göstermek</li>
              <li>İş planı sunabilmek</li>
              <li>Teknik değerlendirmeyi geçebilmek</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Başvuru Süreci</h2>
            <ol>
              <li><strong>Ön Değerlendirme:</strong> Şirketinizin teknopark kriterlerine uygunluğunun kontrol edilmesi</li>
              <li><strong>İş Planı Hazırlama:</strong> Detaylı iş planı ve proje sunumu</li>
              <li><strong>Teknik Değerlendirme:</strong> Uzman komisyon tarafından teknik inceleme</li>
              <li><strong>Mülakat:</strong> Yüz yüze görüşme ve sunum</li>
              <li><strong>Kabul:</strong> Başarılı adayların teknoparka kabul edilmesi</li>
            </ol>
          </div>

          <div className="content-section">
            <h2>Teknopark Avantajları</h2>
            <div className="advantages-grid">
              <div className="advantage-item">
                <h3>Vergi Avantajları</h3>
                <p>Kurumlar vergisi muafiyeti, KDV iadesi ve diğer vergi kolaylıkları</p>
              </div>
              <div className="advantage-item">
                <h3>Hibe ve Destekler</h3>
                <p>TÜBİTAK, KOSGEB ve diğer kurumlardan destek programlarına erişim</p>
              </div>
              <div className="advantage-item">
                <h3>Üniversite İşbirliği</h3>
                <p>Akademik personel ve laboratuvar imkanlarından yararlanma</p>
              </div>
              <div className="advantage-item">
                <h3>Networking</h3>
                <p>Diğer teknoloji şirketleri ile işbirliği fırsatları</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Dikkat Edilmesi Gerekenler</h2>
            <p>
              Teknoparklara kabul edildikten sonra, firmalar genellikle uygun ofis alanlarına, 
              ortak laboratuvarlara ve mentorluk hizmetlerine erişim sağlarlar. Bu ekosistem, 
              startup'lar ve teknoloji şirketleri için büyüme ve gelişme açısından kritik bir rol oynar.
            </p>
            <p>
              Başvuru yapmadan önce ilgili teknoparkın özel kriterlerini ve sunduğu imkanları 
              detaylıca incelemek önemlidir. Her teknoparkın kendine özgü kuralları ve avantajları 
              bulunmaktadır.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default TeknoparkPage; 