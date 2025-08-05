import type React from "react"
import Link from "next/link"
import { Card as AntdCard, Menu } from "antd"

const hizmetler = [
  {
    id: 1,
    title: "Teknopark'a Giriş Yapmak İçin Bilmeniz Gerekenler",
    slug: "teknopark-giris-bilmeniz-gerekenler",
    content:
      "Teknopark'lara giriş yapmak için gerekli kriterler, başvuru süreçleri ve dikkat edilmesi gereken önemli noktalar hakkında detaylı bilgi. Teknopark avantajları ve şirketiniz için sağlayacağı faydalar...",
  },
  {
    id: 2,
    title: "İşletmeniz İçin Proje Çağrılarını Takip Edebileceğiniz Sistem",
    slug: "proje-cagrilari-takip-sistemi",
    content:
      "İşletmenizin gelişimi için kritik öneme sahip proje çağrılarını takip edebileceğiniz gelişmiş sistem. Devlet destekleri, teşvikler ve fırsatları kaçırmamak için profesyonel takip hizmeti...",
  },
  {
    id: 3,
    title: "Bültenler",
    slug: "bultenler",
    content:
      "Sektördeki son gelişmeler, yeni teşvikler, proje çağrıları ve önemli duyurular hakkında güncel bilgiler içeren düzenli bültenler. Abone olarak tüm fırsatları kaçırmayın...",
  },
]

const Hizmetler: React.FC = () => {
  return (
    <div className="hizmetler-section">
      <h3 className="section-title">HİZMETLERİMİZ</h3>
      <div className="hizmetler-grid">
        {hizmetler.map((item) => (
          <div key={item.id} className="hizmet-card">
            <AntdCard 
              className="hizmet-card-inner"
              bordered={false}
              hoverable
            >
              <div className="card-content">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-description">
                  {item.content.length > 160 ? `${item.content.slice(0, 160)}...` : item.content}
                </p>
                <div className="card-action">
                  <Link href={item.id === 1 ? "/teknopark" : item.id === 2 ? "/projeTakipSistemi" : item.id === 3 ? "/bultenler" : `/blog/${item.slug || item.title.toLowerCase().replace(/ /g, "-")}`}>
                    <div className="header-style-button">
                      Devamı Oku
                    </div>
                  </Link>
                </div>
              </div>
            </AntdCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Hizmetler }


