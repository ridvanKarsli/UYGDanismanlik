import Head from 'next/head';
import Script from 'next/experimental-script';

const YatirimTesvikBelgesi = () => {
    return (
        <>
            <Head>
                <title>Yatırım Teşvik Belgesi - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8"/>
                <meta property="keywords" content="yatırım teşvik belgesi,teşvik belgesi,KDV istisnası" key="title" />
                <meta property="og:title" content="Yatırım Teşvik Belgesi Başvuru ve Sürdürülebilirliği" key="title" />
                <meta name="Description" content="İthalat bağımlılığını azaltmak ve yerli üretimi teşvik etmek için, yüksek ve orta-yüksek teknoloji içeren yatırımlar desteklenmektedir." />
                <meta name="og:description" content="İthalat bağımlılığını azaltmak ve yerli üretimi teşvik etmek için, yüksek ve orta-yüksek teknoloji içeren yatırımlar desteklenmektedir." />
                <meta property="og:url" content="/yatirim-tesvik-belgesi" />
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
                    <h1>Yatırım Teşvik Belgesi</h1>
                    <p className="service-subtitle">Başvuru ve Sürdürülebilirliği</p>
                </div>
                
                <div className="service-intro">
                    <div className="intro-content">
                        <h2>Profesyonel Yatırım Teşvik Danışmanlığı</h2>
                        <p>
                            İthalat bağımlılığını azaltmak ve yerli üretimi teşvik etmek için, yüksek ve orta-yüksek 
                            teknoloji içeren yatırımlar desteklenmekte, aynı zamanda en az gelişmiş bölgelere yönelik 
                            yatırım teşvikleri artırılmaktadır. Bu adımlar, bölgesel gelişmişlik farklarını azaltmayı, 
                            destek unsurlarının etkinliğini artırmayı ve kümelenme faaliyetlerini teşvik etmeyi hedeflemektedir.
                        </p>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Bölgesel Teşvik</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">01</div>
                            <h3>Bölgesel Teşvik Programı</h3>
                            <p>Amacı, iller arasındaki gelişmişlik farkını azaltarak, illerin üretim ve ihracat potansiyellerini artırmak olan bir politikayı uygulamaktır.</p>
                        </div>
                    </div>
                    
                    <div className="service-section">
                        <h3>DESTEK UNSURLARI</h3>
                        <div className="sectors-grid">
                            <div className="sector-item">KDV İstisnası</div>
                            <div className="sector-item">Gümrük Vergisi Muafiyeti</div>
                            <div className="sector-item">Vergi İndirimi</div>
                            <div className="sector-item">Sigorta Primi İşveren Hissesi Desteği</div>
                            <div className="sector-item">Faiz veya Kâr Payı Desteği</div>
                            <div className="sector-item">Yatırım Yeri Tahsisi</div>
                            <div className="sector-item">Sigorta Primi Desteği</div>
                        </div>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Genel Teşvik</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">02</div>
                            <h3>Genel Teşvik Programı</h3>
                            <p>Teşvik edilmeyecek yatırım konuları dışında kalan tüm yatırımları kapsayan bir politika izlenir. Teşvik edilmeyecek yatırım konuları dışında kalan ve belirlenen asgari sabit yatırım tutarını sağlayan yatırımlar, diğer teşvik uygulamaları kapsamında yer alır.</p>
                        </div>
                    </div>
                    
                    <div className="service-section">
                        <h3>DESTEKLER:</h3>
                        <div className="sectors-grid">
                            <div className="sector-item">KDV İstisnası</div>
                            <div className="sector-item">Gümrük Vergisi Muafiyeti</div>
                        </div>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Danışmanlık Süreci</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Fizibilite ve Başvuru Hazırlığı</h3>
                                <p>Yatırımın mali, ekonomik ve teknik fizibilitesini değerlendirmek ve gerekli başvuru dosyasını hazırlamak.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Başvuru ve Takip Süreci</h3>
                                <ul>
                                    <li>Teşvik Uygulama ve Yabancı Sermaye Genel Müdürlüğüne başvuruda bulunmak ve süreci takip etmek</li>
                                    <li>Onaylanan Yatırım Teşvik Belgesini kontrol ederek KDV, Gelir Vergisi ve Kurumlar Vergisi istisnası ve indirimi için vergi dairesine başvurmak</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Uygulama ve Denetim</h3>
                                <ul>
                                    <li>Hesap planında gerekli hesapları oluşturmak ve dönemsel yatırım takip formlarını hazırlamak</li>
                                    <li>Yatırımları etiketlemek ve Kurumlar Vergisi indirimini hesaplamak</li>
                                    <li>Yatırım Teşvik Belgesi revizyon ve kapatma başvurularını yapmak</li>
                                    <li>Teşvik Uygulama ve Yabancı Sermaye Genel Müdürlüğü uzmanlarının yapacağı denetimleri yönetmek</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default YatirimTesvikBelgesi; 