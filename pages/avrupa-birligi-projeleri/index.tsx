import Head from 'next/head';
import Script from 'next/experimental-script';

const AvrupaBirligiProjeleri = () => {
    return (
        <>
            <Head>
                <title>Avrupa Birliği Projeleri - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8"/>
                <meta property="keywords" content="Avrupa Birliği,AB projeleri,Horizon Europe,Erasmus+" key="title" />
                <meta property="og:title" content="Avrupa Birliği Projeleri Programları" key="title" />
                <meta name="Description" content="Avrupa Birliği Projeleri Programları, işletmeler, kamu kurumları, STK'lar ve akademik kurumlar için finansman ve destek sağlar." />
                <meta name="og:description" content="Avrupa Birliği Projeleri Programları, işletmeler, kamu kurumları, STK'lar ve akademik kurumlar için finansman ve destek sağlar." />
                <meta property="og:url" content="/avrupa-birligi-projeleri" />
                <meta property="og:image" content="endustri.jpeg" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Script
                src="https://www.google-analytics.com/analytics.js"
            />
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
            
            <div className='hakkimizda-aciklama'>
                <div className="service-hero">
                    <h1>Avrupa Birliği Projeleri</h1>
                    <p className="service-subtitle">Programları ve Danışmanlık Hizmetleri</p>
                </div>
                
                <div className="service-intro">
                    <div className="intro-content">
                        <h2>Profesyonel AB Proje Danışmanlığı</h2>
                        <p>
                            Avrupa Birliği Projeleri Programları, işletmeler, kamu kurumları, STK'lar ve akademik 
                            kurumlar için finansman ve destek sağlar. Bu programlar, inovasyonu teşvik etmek, 
                            sürdürülebilir kalkınmayı desteklemek ve işbirliğini güçlendirmek amacıyla oluşturulmuştur.
                        </p>
                    </div>
                </div>

                <div className="service-section">
                    <h2>AB Destek Programları</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">01</div>
                            <h3>Horizon Europe</h3>
                            <p>Bilimsel araştırma ve yenilik projelerine büyük finansman fırsatları sunar. En büyük AB araştırma ve inovasyon programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">02</div>
                            <h3>Erasmus+</h3>
                            <p>Eğitim, gençlik ve spor alanlarında öğrenci değişimi, personel hareketliliği ve işbirliği projelerini destekler.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">03</div>
                            <h3>Avrupa Yapısal ve Yatırım Fonları</h3>
                            <p>Bölgesel kalkınma, altyapı, yenilikçilik ve iş yaratma projelerini destekler.</p>
                        </div>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Destek ve Başvuru</h2>
                    <div className="service-intro">
                        <div className="intro-content">
                            <p>
                                AB proje programlarına başvuru sürecinde rehberlik ve destek sunuyoruz. 
                                Daha fazla bilgi ve destek için bizimle iletişime geçin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvrupaBirligiProjeleri; 