import React from "react";
import Head from 'next/head';
import Activities from '../../src/components/activities';

const BultenlerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bültenler - Etkinlikler ve Güncel Haberler</title>
        <meta name="description" content="Sektördeki son gelişmeler, yeni teşvikler, proje çağrıları ve önemli duyurular hakkında güncel bilgiler içeren düzenli bültenler." />
      </Head>
      
      <div className="teknopark-page">
        <div className="page-container">
          <h1 className="page-title">Bültenler</h1>
          
          <div className="content-section">
            <p style={{ fontSize: '1.2em', textAlign: 'center', marginBottom: '30px' }}>
              Sektördeki son gelişmeler, yeni teşvikler, proje çağrıları ve önemli duyurular hakkında güncel bilgiler içeren düzenli bültenler.
            </p>
          </div>

          <div className="content-section">
            <Activities />
          </div>

        </div>
      </div>
    </>
  );
};

export default BultenlerPage; 