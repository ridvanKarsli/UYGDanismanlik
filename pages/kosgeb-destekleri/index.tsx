import Head from 'next/head';
import Script from 'next/experimental-script';

const KosgebDestekleri = () => {
    return (
        <>
            <Head>
                <title>KOSGEB Destek Programları - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8"/>
                <meta property="keywords" content="KOSGEB,destek programları,KOBİ destekleri" key="title" />
                <meta property="og:title" content="KOSGEB Destek Programları Başvuru ve Yürütme" key="title" />
                <meta name="Description" content="KOSGEB programının amacı; Mikro ve Küçük İşletmelerin salgın şartlarında faaliyetlerini sürdürmelerinin ve geçmiş dönem ortalama istihdam seviyelerini koruyarak yeni personel istihdam etmelerinin sağlanmasıdır." />
                <meta name="og:description" content="KOSGEB programının amacı; Mikro ve Küçük İşletmelerin salgın şartlarında faaliyetlerini sürdürmelerinin ve geçmiş dönem ortalama istihdam seviyelerini koruyarak yeni personel istihdam etmelerinin sağlanmasıdır." />
                <meta property="og:url" content="/kosgeb-destekleri" />
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
                    <h1>KOSGEB Destek Programları</h1>
                    <p className="service-subtitle">Başvuru ve Yürütme Danışmanlığı</p>
                </div>
                
                <div className="service-intro">
                    <div className="intro-content">
                        <h2>Profesyonel KOSGEB Danışmanlığı</h2>
                        <p>
                            KOSGEB programının amacı; Mikro ve Küçük İşletmelerin salgın şartlarında faaliyetlerini 
                            sürdürmelerinin ve geçmiş dönem ortalama istihdam seviyelerini koruyarak yeni personel 
                            istihdam etmelerinin sağlanmasıdır. Bu program çerçevesinde, projenizin şartlara uygunluğunun 
                            belirlenmesi için bir araştırma ve geliştirme sürecine girmekteyiz. Onaylanan projelerin 
                            tüm hazırlık ve başvuru süreçleri proje koordinatörlerimiz tarafından yönetilecektir.
                        </p>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Danışmanlığını Yaptığımız KOSGEB Programları</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">01</div>
                            <h3>KOBİ Enerji Verimliliği Destek Programı</h3>
                            <p>Küçük ve orta ölçekli işletmelerin (KOBİ'lerin) enerji verimliliğini artırmayı hedefleyen bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">02</div>
                            <h3>Girişimci Destek Programı</h3>
                            <p>Yeni işletme kurmak isteyen girişimcilere yönelik olarak sunulan bir destek mekanizmasıdır. Bu programlar, genç girişimcilerin iş fikirlerini hayata geçirmeleri ve işletme süreçlerini yönetmeleri için finansal, teknik ve danışmanlık destekleri sağlar.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">03</div>
                            <h3>İş Birliği Destek Programı</h3>
                            <p>Kuruluşlar arası işbirliğini teşvik etmeyi amaçlayan bir destek mekanizmasıdır. Bu programlar, farklı kurumlar arasında ortak projeler geliştirilmesi ve yürütülmesi için finansal, teknik veya lojistik destek sağlar.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">04</div>
                            <h3>KOBİ Dijital Dönüşüm Destek Programı</h3>
                            <p>Küçük ve orta ölçekli işletmelerin (KOBİ'lerin) dijital teknolojileri kullanarak iş süreçlerini iyileştirmelerini ve rekabet güçlerini artırmalarını hedefleyen bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">05</div>
                            <h3>KOBİ Teknolojik Ürün Yatırım (KOBİ TEKNOYATIRIM) Destek Programı</h3>
                            <p>Küçük ve orta ölçekli işletmelerin (KOBİ'lerin) teknolojik ürün geliştirme ve yenilikçi projelerine finansal destek sağlayan bir programdır. Bu programlar, KOBİ'lerin Ar-Ge faaliyetlerini teşvik etmeyi, teknolojik rekabet güçlerini artırmayı ve pazar paylarını genişletmeyi amaçlar.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">06</div>
                            <h3>Stratejik Ürün Destek Programı</h3>
                            <p>Belirli bir sektör veya endüstride önemli bir etkiye sahip olan stratejik ürünlerin geliştirilmesini ve üretimini teşvik etmeyi amaçlayan bir destek programıdır.</p>
                        </div>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Danışmanlık Süreci</h2>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Proje Analiz Süreci</h3>
                                <p>Projenin uygunluğunun KOSGEB değerlendirme kriterlerine göre incelenmesi ve gerekli yol haritası danışmanlarımız tarafından hazırlanması.</p>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Proje Hazırlama Süreci</h3>
                                <ul>
                                    <li>Proje uygunluk test sonucunun değerlendirilmesi</li>
                                    <li>Proje planı ve ekibinin oluşturulması</li>
                                    <li>Projenin faaliyet, zaman ve kaynak planlamasının yapılması</li>
                                    <li>Başvuru dosyalarının hazırlanması ve sistem girişleri desteğinin sağlanması</li>
                                    <li>Proje sunumunun hazırlanması ve hakem görüşmeleri desteğinin verilmesi</li>
                                    <li>Proje değerlendirme ve sözleşme süreçlerinin takibi</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Proje Yönetme Süreci</h3>
                                <ul>
                                    <li>Projenin kriterlere uygunluğunun değerlendirilmesi</li>
                                    <li>İş paketlerinin hazırlanması ve raporların oluşturulması</li>
                                    <li>Teknik ve mali raporların oluşturulması</li>
                                    <li>Denetleme süreçlerinde danışmanlık hizmetinin sağlanması</li>
                                    <li>Proje sonuç raporunun hazırlanması</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KosgebDestekleri; 