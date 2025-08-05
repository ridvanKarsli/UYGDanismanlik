import Head from 'next/head';
import Script from 'next/experimental-script';

const TeknolojiGelistirmeBolgesi = () => {
    return (
        <>
            <Head>
                <title>Teknoloji Geliştirme Bölgesi - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8"/>
                <meta property="keywords" content="teknopark,teknokent,teknoloji geliştirme bölgesi" key="title" />
                <meta property="og:title" content="Teknoloji Geliştirme Bölgesi (Teknopark/Teknokent) Başvuru ve Sürdürülebilirliği" key="title" />
                <meta name="Description" content="4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu'nun amacı, üniversiteler, araştırma kurumları ve üretim sektörleri arasındaki işbirliğini teşvik ederek ülke sanayisini uluslararası rekabetçi ve ihracata yönelik bir yapıya dönüştürmektir." />
                <meta name="og:description" content="4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu'nun amacı, üniversiteler, araştırma kurumları ve üretim sektörleri arasındaki işbirliğini teşvik ederek ülke sanayisini uluslararası rekabetçi ve ihracata yönelik bir yapıya dönüştürmektir." />
                <meta property="og:url" content="/teknoloji-gelistirme-bolgesi" />
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
                    <h1>Teknoloji Geliştirme Bölgesi</h1>
                    <p className="service-subtitle">Teknopark/Teknokent Başvuru ve Sürdürülebilirliği</p>
                </div>
                
                <div className="service-intro">
                    <div className="intro-content">
                        <h2>Profesyonel Teknoloji Geliştirme Bölgesi Danışmanlığı</h2>
                        <p>
                            4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu'nun amacı, üniversiteler, araştırma 
                            kurumları ve üretim sektörleri arasındaki işbirliğini teşvik ederek ülke sanayisini 
                            uluslararası rekabetçi ve ihracata yönelik bir yapıya dönüştürmektir. Bu kanun, 
                            teknolojik bilgi üretmeyi, yenilikçi ürün ve üretim yöntemleri geliştirmeyi, ürün 
                            kalitesini ve standartlarını artırmayı, verimliliği yükseltmeyi ve üretim maliyetlerini 
                            düşürmeyi hedefler. Ayrıca, teknolojik bilginin ticarileştirilmesini, teknoloji yoğun 
                            üretim ve girişimciliğin desteklenmesini ve KOBİ'lerin yeni ve ileri teknolojilere 
                            uyum sağlamasını amaçlar. Türkiye'de bu amaçlarla faaliyet gösteren 100'den fazla 
                            Teknoloji Geliştirme Bölgesi bulunmaktadır.
                        </p>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Danışmanlık Hizmetlerimiz</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">01</div>
                            <h3>Teknoloji Geliştirme Bölgesi Değerlendirme Hizmeti</h3>
                            <p>Teknoloji Geliştirme Bölgelerinin performansını ve potansiyelini analiz ederek, stratejik yol haritaları sunuyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">02</div>
                            <h3>Teknoloji Geliştirme Bölgesi Başvuru Danışmanlığı</h3>
                            <p>Teknoloji Geliştirme Bölgelerine başvuru süreçlerinde gerekli belgelerin hazırlanması ve prosedürlerin tamamlanması konusunda destek sağlıyoruz.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">03</div>
                            <h3>Teknoloji Geliştirme Bölgesi Uygulama ve Yönetim Hizmeti</h3>
                            <p>Teknoloji Geliştirme Bölgelerindeki projelerin etkin bir şekilde yürütülmesi ve yönetilmesi için kapsamlı hizmetler sunuyoruz.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeknolojiGelistirmeBolgesi; 