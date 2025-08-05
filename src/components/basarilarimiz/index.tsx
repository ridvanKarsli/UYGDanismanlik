import React from 'react';
import { TrophyOutlined, RocketOutlined, GlobalOutlined, ExperimentOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';

const Basarilarimiz: React.FC = () => {
  const basarilar = [
    {
      icon: <TrophyOutlined />,
      title: "TEKNOPARK DESTEKLERİ",
      description: "6 ADET ARGE PROJESİ İLE TEKNOPARKA ŞİRKET KURULUMU SAĞLANDI.",
      color: "linear-gradient(135deg, #26d367, #2c2c2c)"
    },
    {
      icon: <RocketOutlined />,
      title: "ULUSAL VE ULUSLARARASI PROJELER",
      description: "2 ADET KOSGEB ARGE ÜRGE İNOVASYON PROJESİ",
      color: "linear-gradient(135deg, #2c2c2c, #26d367)"
    },
    {
      icon: <GlobalOutlined />,
      title: "YURT DIŞI PAZAR DESTEKLERİ",
      description: "2 ADET YURT DIŞI PAZAR DESTEKLERİ",
      color: "linear-gradient(135deg, #26d367, #2c2c2c)"
    },
    {
      icon: <ExperimentOutlined />,
      title: "TÜBİTAK TEYDEB",
      description: "1 ADET TÜBİTAK TEYDEP 1507",
      color: "linear-gradient(135deg, #2c2c2c, #26d367)"
    },
    {
      icon: <ShopOutlined />,
      title: "KOSGEB İŞLETME GELİŞTİRME",
      description: "6 ADET KOSGEB İŞLETME GELİŞTİRME DESTEĞİ",
      color: "linear-gradient(135deg, #26d367, #2c2c2c)"
    },
    {
      icon: <TeamOutlined />,
      title: "MÜŞTERİ REFERANSI",
      description: "30+ MÜŞTERİ REFERANSI",
      color: "linear-gradient(135deg, #2c2c2c, #26d367)"
    }
  ];

  return (
    <div className="basarilarimiz-section">
      <div className="section-title">
        <h2>BAŞARILARIMIZ</h2>
      </div>
      
      <div className="basarilar-grid">
        {basarilar.map((basari, index) => (
          <div key={index} className="basari-card">
            <div className="basari-icon" style={{ background: basari.color }}>
              {basari.icon}
            </div>
            <div className="basari-content">
              <h3>{basari.title}</h3>
              <p>{basari.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .basarilarimiz-section {
          border-radius: 20px;
          margin: 20px auto;
          width: 90%;
          max-width: 1550px;
          padding: 40px 20px;
          background: #ffffff;
        }

        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title h2 {
          font-weight: 700;
          font-size: 32px;
          color: rgb(44, 44, 44);
          position: relative;
          margin-bottom: 0;
        }

        .section-title h2::after {
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

        .basarilar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .basari-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .basari-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(38, 211, 103, 0.2);
          border-color: rgb(38, 211, 103);
        }

        .basari-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          color: white;
        }

        .basari-icon svg {
          font-size: 2.5rem;
          opacity: 0.9;
        }

        .basari-content {
          padding: 25px;
        }

        .basari-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: rgb(44, 44, 44);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .basari-content p {
          color: rgb(44, 44, 44);
          line-height: 1.5;
          margin: 0;
          opacity: 0.8;
          font-size: 0.95rem;
        }

        @media only screen and (max-width: 768px) {
          .basarilar-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title h2 {
            font-size: 24px;
          }

          .basari-content {
            padding: 20px;
          }

          .basari-content h3 {
            font-size: 1rem;
          }

          .basari-content p {
            font-size: 0.9rem;
          }
        }

        @media only screen and (max-width: 480px) {
          .basarilarimiz-section {
            padding: 20px 15px;
          }

          .section-title h2 {
            font-size: 20px;
          }

          .basari-icon {
            height: 60px;
          }

          .basari-icon svg {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export { Basarilarimiz }; 