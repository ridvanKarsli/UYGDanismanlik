import Head from 'next/head';
import Script from 'next/experimental-script';

const IhracatKalkinmaAjansi = () => {
    return (
        <>
            <Head>
                <title>İhracat & Kalkınma Ajansı Destekleri - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8"/>
                <meta property="keywords" content="ihracat destekleri,kalkınma ajansı,devlet teşvikleri" key="title" />
                <meta property="og:title" content="İhracat & Kalkınma Ajansı Destekleri Başvuru Hazırlama" key="title" />
                <meta name="Description" content="İhracat yapmayı planlayan işletmeler için çeşitli devlet teşvikleri ve destekleri mevcuttur." />
                <meta name="og:description" content="İhracat yapmayı planlayan işletmeler için çeşitli devlet teşvikleri ve destekleri mevcuttur." />
                <meta property="og:url" content="/ihracat-kalkinma-ajansi" />
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
                    <h1>İhracat & Kalkınma Ajansı</h1>
                    <p className="service-subtitle">Destekleri Başvuru Hazırlama</p>
                </div>
                
                <div className="service-intro">
                    <div className="intro-content">
                        <h2>Profesyonel İhracat ve Kalkınma Ajansı Danışmanlığı</h2>
                        <p>
                            İhracat yapmayı planlayan işletmeler için çeşitli devlet teşvikleri ve destekleri mevcuttur. 
                            Bu desteklerin alınabilmesi için gerekli olan başvuru sürecinde profesyonel danışmanlık hizmeti sunuyoruz.
                        </p>
                    </div>
                </div>

                <div className="service-section">
                    <h2>İhracat Destekleri Başvuru Hazırlama</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">01</div>
                            <h3>İhtiyaç Analizi</h3>
                            <p>İşletmenizin ihracat hedeflerini ve ihtiyaçlarını belirleyerek uygun destek programlarını tespit ediyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">02</div>
                            <h3>Başvuru Dosyasının Hazırlanması</h3>
                            <p>Gereken belgeleri toplayarak ve başvuru formlarını doldurarak eksiksiz bir başvuru dosyası oluşturuyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">03</div>
                            <h3>Müracaatın Yapılması</h3>
                            <p>Başvuru dosyasını ilgili kurumlara zamanında ve doğru bir şekilde teslim ediyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">04</div>
                            <h3>Süreç Takibi</h3>
                            <p>Başvurunun her aşamasını yakından izleyerek, gerekli durumlarda ek belge ve bilgileri temin ediyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">05</div>
                            <h3>Desteklerin Kullanımı</h3>
                            <p>Onaylanan desteklerin nasıl kullanılacağı konusunda danışmanlık sağlıyoruz ve işlemlerinizin doğru bir şekilde ilerlemesini sağlıyoruz.</p>
                        </div>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Kalkınma Ajansı Destekleri Başvuru Hazırlama</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">01</div>
                            <h3>Proje Fikri Geliştirme</h3>
                            <p>İşletmenizin ihtiyaçları ve hedefleri doğrultusunda uygun proje fikirleri geliştiriyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">02</div>
                            <h3>Başvuru Dosyasının Oluşturulması</h3>
                            <p>Proje planı, bütçe ve gerekli tüm belgeleri hazırlayarak eksiksiz bir başvuru dosyası oluşturuyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">03</div>
                            <h3>Müracaatın Gerçekleştirilmesi</h3>
                            <p>Başvuru dosyasını ilgili Kalkınma Ajansına teslim ediyor ve başvurunun kabul sürecini yönetiyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">04</div>
                            <h3>Proje Takibi ve Raporlama</h3>
                            <p>Başvurunun onaylanması sonrasında projenizin ilerleyişini takip ediyor ve gerektiğinde raporlamalar yaparak ajansa bilgi veriyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">05</div>
                            <h3>Desteklerin Yönetimi</h3>
                            <p>Alınan desteklerin verimli ve etkili bir şekilde kullanılmasını sağlıyor, bu süreçte işletmenize gerekli rehberliği sağlıyoruz.</p>
                        </div>
                    </div>
                </div>

                <div className="service-section">
                    <div className="service-intro">
                        <div className="intro-content">
                            <p>
                                Başvuru süreçlerinizde profesyonel destek alarak, ihracat ve kalkınma ajansı desteklerinden 
                                en iyi şekilde yararlanabilirsiniz. Daha fazla bilgi ve danışmanlık hizmeti için bizimle iletişime geçin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IhracatKalkinmaAjansi; 