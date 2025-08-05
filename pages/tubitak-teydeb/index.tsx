import Head from 'next/head';
import Script from 'next/experimental-script';

const TubitakTeydeb = () => {
    return (
        <>
            <Head>
                <title>TÜBİTAK-TEYDEB Destek Programları - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8"/>
                <meta property="keywords" content="TÜBİTAK,TEYDEB,destek programları,Ar-Ge projeleri" key="title" />
                <meta property="og:title" content="TÜBİTAK-TEYDEB Destek Programları Başvuru Ve Yürütme" key="title" />
                <meta name="Description" content="TÜBİTAK TEYDEB Destek Programları çerçevesinde, proje koordinatörlerimiz, firmaların veya bireylerin proje fikirlerini dinleyerek, başvurulacak programın değerlendirme ölçütlerine dayanarak analiz eder ve planlama yapar." />
                <meta name="og:description" content="TÜBİTAK TEYDEB Destek Programları çerçevesinde, proje koordinatörlerimiz, firmaların veya bireylerin proje fikirlerini dinleyerek, başvurulacak programın değerlendirme ölçütlerine dayanarak analiz eder ve planlama yapar." />
                <meta property="og:url" content="/tubitak-teydeb" />
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
                    <h1>TÜBİTAK-TEYDEB Destek Programları</h1>
                    <p className="service-subtitle">Başvuru ve Yürütme Danışmanlığı</p>
                </div>
                
                <div className="service-intro">
                    <div className="intro-content">
                        <h2>Profesyonel TÜBİTAK-TEYDEB Danışmanlığı</h2>
                        <p>
                            TÜBİTAK TEYDEB Destek Programları çerçevesinde, proje koordinatörlerimiz, firmaların
                            veya bireylerin proje fikirlerini dinleyerek, başvurulacak programın değerlendirme
                            ölçütlerine dayanarak analiz eder ve planlama yapar. Projenin uygunluğu belirlendikten
                            sonra, gereken tüm belgelendirme hazırlığı, başvuru süreci ve sunum faaliyetleri, kabul
                            alındıktan sonra projenin adım adım ilerleyişini izleme ve raporlama süreçlerini
                            danışmanlık hizmetimiz kapsamında yönetiriz.
                        </p>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Danışmanlığını Yaptığımız Sektörler</h2>
                    <div className="sectors-grid">
                        <div className="sector-item">Tarım</div>
                        <div className="sector-item">Madencilik</div>
                        <div className="sector-item">Makine</div>
                        <div className="sector-item">Otomotiv</div>
                        <div className="sector-item">Savunma</div>
                        <div className="sector-item">Elektronik</div>
                        <div className="sector-item">Turizm</div>
                        <div className="sector-item">Mobilya</div>
                        <div className="sector-item">Finans</div>
                        <div className="sector-item">İnşaat</div>
                        <div className="sector-item">Lojistik</div>
                        <div className="sector-item">Medya</div>
                        <div className="sector-item">Gıda</div>
                        <div className="sector-item">Tekstil</div>
                        <div className="sector-item">Enerji</div>
                        <div className="sector-item">Metal</div>
                        <div className="sector-item">Eğitim</div>
                        <div className="sector-item">Plastik</div>
                        <div className="sector-item">Sağlık</div>
                        <div className="sector-item">Kimya</div>
                    </div>
                </div>

                <div className="service-section">
                    <h2>Danışmanlığını Yaptığımız TÜBİTAK-TEYDEB Destekleme Programları</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-number">1503</div>
                            <h3>Proje Pazarları Destekleme Programı</h3>
                            <p>Programın temel amacı, yenilikçi ve özgün projelerin geliştirilmesini, sürdürülebilirliklerinin artırılmasını ve ticarileştirilmelerini desteklemektir.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1505</div>
                            <h3>Üniversite-Sanayi İşbirliği Destek Programı</h3>
                            <p>Türkiye'de üniversiteler ile sanayi arasında işbirliğini teşvik etmek ve bu işbirliğinden kaynaklanan yenilikçi projelerin geliştirilmesini desteklemek amacıyla kurulmuş bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1509</div>
                            <h3>TÜBİTAK Uluslararası Sanayi Ar-Ge Projeleri Destekleme Programı</h3>
                            <p>Türkiye'de bulunan sanayi kuruluşlarının uluslararası işbirliği yaparak yenilikçi Ar-Ge projelerini geliştirmelerini teşvik etmek için oluşturulmuş bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1511</div>
                            <h3>TÜBİTAK Öncelikli Alanlar Araştırma Teknoloji Geliştirme ve Yenilik Projeleri Destekleme Programı</h3>
                            <p>Türkiye'deki bilim ve teknoloji alanlarında öncelikli olarak belirlenmiş konularda araştırma, teknoloji geliştirme ve yenilik projelerini desteklemek için oluşturulmuş bir TÜBİTAK programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1002</div>
                            <h3>Hızlı Destek Programı</h3>
                            <p>Programın temel amacı, bilim ve teknoloji alanlarında hızlı ve etkili bir şekilde çözüm odaklı projelerin geliştirilmesini ve desteklenmesini sağlamaktır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1005</div>
                            <h3>Ulusal Yeni Fikirler ve Ürünler Araştırma Destek Programı</h3>
                            <p>Türkiye'de yenilikçi fikirlerin ve ürünlerin geliştirilmesini teşvik etmek amacıyla TÜBİTAK tarafından yürütülen bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1007</div>
                            <h3>Kamu Kurumları Araştırma ve Geliştirme Projelerini Destekleme Programı</h3>
                            <p>Türkiye'de kamu kurumlarının bilimsel araştırma ve teknolojik geliştirme faaliyetlerini desteklemek için TÜBİTAK tarafından hayata geçirilmiş bir programdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1071</div>
                            <h3>Uluslararası Araştırma Fonlarından Yararlanma Kapasitesinin ve Uluslararası Ar-Ge İşbirliklerine Katılımın Arttırılmasına Yönelik Destek Programı</h3>
                            <p>Türkiye'deki araştırmacıların uluslararası araştırma fonlarına erişimini kolaylaştırmayı ve uluslararası Ar-Ge işbirliklerine katılımını teşvik etmeyi amaçlayan bir TÜBİTAK programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1515</div>
                            <h3>Öncül Ar-Ge Laboratuvarları Destekleme Programı</h3>
                            <p>Türkiye'deki öncül Ar-Ge laboratuvarlarının kurulmasını ve geliştirilmesini teşvik etmek amacıyla TÜBİTAK tarafından yürütülen bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1601</div>
                            <h3>Yenilik ve Girişimcilik Alanlarında Kapasite Artırılmasına Yönelik Destek Programı</h3>
                            <p>Türkiye'de yenilik ve girişimcilik alanlarında kapasitenin artırılmasını ve teknoloji transferinin güçlendirilmesini hedefleyen bir TÜBİTAK programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1602</div>
                            <h3>TÜBİTAK Patent Destek Programı</h3>
                            <p>Türkiye'de bulunan icat ve buluşların patentlenebilirliğini artırmayı ve bu sayede yerli teknolojinin korunmasını ve ticarileştirilmesini teşvik etmeyi amaçlayan bir destek programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1702</div>
                            <h3>Patent Tabanlı Teknoloji Transferi Destekleme Çağrısı</h3>
                            <p>Türkiye'de patentlenmiş buluşların ticarileştirilmesini teşvik etmek amacıyla TÜBİTAK tarafından yapılan bir destek çağrısıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1704</div>
                            <h3>Sanayi Yenilik Ağ Mekanizması (SAYEM) Yeşil Dönüşüm Çağrısı</h3>
                            <p>Türkiye'deki sanayi işletmelerinin çevresel etkilerini azaltmayı ve yeşil teknolojilere geçişi teşvik etmeyi amaçlayan bir destek çağrısıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1707</div>
                            <h3>Siparişe Dayalı Ar-Ge Projeleri için KOBİ Destekleme Çağrısı</h3>
                            <p>Türkiye'deki KOBİ'lerin yeşil inovasyon ve çevre dostu teknolojilere geçişi desteklemeyi amaçlayan bir TÜBİTAK programıdır.</p>
                        </div>
                        
                        <div className="program-card">
                            <div className="program-number">1833</div>
                            <h3>SAYEM Yeşil Dönüşüm Çağrısı</h3>
                            <p>Türkiye'deki sanayi işletmelerinin çevresel etkilerini azaltmayı ve yeşil teknolojilere geçişi teşvik etmeyi amaçlar.</p>
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
                                <p>Projenin uygunluğunun TÜBİTAK-TEYDEP değerlendirme kriterlerine göre incelenmesi ve gerekli yol haritası danışmanlarımız tarafından hazırlanması.</p>
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

export default TubitakTeydeb; 