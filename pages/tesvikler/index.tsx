import React from 'react';
import Image from 'next/image'
import { Card } from 'antd';
import Script from 'next/experimental-script';
import Head from 'next/head';

const Incentives: React.FC = () => {
  
    return (
        <>
            <Head>
            <title>Teşvikler - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="teşvikler,prje teşviği,avrupa birliği teşvik,eğitim,danışmanlık,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Teşvikler" key="title" />
            <meta name="Description" content="Tarım ve Kırsal Kalkınmayı Destekleme Kurumu, AB tarafından fonlanan IPARD programının uygulanmasından sorumlu kurumdur. İl, sektör veya bölge bazlı açtığı hibe programları ile tarımı ve kırsal kalkınmayı hedeflemektedir." />
            <meta name="og:description" content="Tarım ve Kırsal Kalkınmayı Destekleme Kurumu, AB tarafından fonlanan IPARD programının uygulanmasından sorumlu kurumdur. İl, sektör veya bölge bazlı açtığı hibe programları ile tarımı ve kırsal kalkınmayı hedeflemektedir." />
            <meta property="og:url" content="/tesvikler" />
            <meta property="og:image" content="corparate.jpeg" />
            <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Script
            src="https://www.google-analytics.com/analytics.js"      />
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
            <div className='hakkmizda-banner'>
                <Image src='/images/tesvikler.png' className='image' width='1920' height='500' />
                <div className='hakkimzda-description'>
                        <h2>Teşvikler</h2>
                </div>
            </div>
            <div className='hakkimizda-aciklama'>
                    <h1>TEŞVİKLER (KAMU & ÖZEL)</h1>
            </div>
        <div className='tesvikler-card-full-part'>
            <div className='tesvikler-card'>
                <Card title={
                    <Image src='/images/tesvikler/tkdk.png' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>TKDK </h4>
                    <p>
                        Tarım ve Kırsal Kalkınmayı Destekleme Kurumu, AB tarafından fonlanan IPARD programının uygulanmasından sorumlu kurumdur. İl, sektör veya bölge bazlı açtığı hibe programları ile tarımı ve kırsal kalkınmayı hedeflemektedir. 
                        Büyükbaş, küçükbaş hayvancılık, 

                        arıcılık, aromatik bitki yetiştiriciliği, 

                        kırsal turizm gibi çok geniş bir yelpazede 

                        destekler sunmaktadır. </p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/kosgeb.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>KOSGEB </h4>
                    <p> Hemen her alanda teşvik sağlayan KOSGEB destek paketlerini "Girişimcilik", "AR-GE, Teknolojik Üretim ve Yerlileştirme", "İşletme Geliştirme, Büyüme ve Uluslararasılaşma" ve"KOBİ Finansman" başlıkları altında toplamıştır.  Hem gerçek hem de tüzel kişilerin başvuruda bulunabileceği KOSGEB konusuna göre 1 milyon TL’ye varan hibe desteğinde bulunabilmektedir.</p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/tubitak.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>TÜBİTAK </h4>
                    <p>  Daha çok teknoloji şirketleri için başvurular alınsa da gerçek kişilere de yine teknoloji içerikli projeler için hibeler verilmektedir. Bilim ve teknoloji alanlarında yönlendirici, katma değere sahip fikirlerin hayata geçirilmesi için Tekno Ofis, laboratuvar, yurt içi ve yurt dışı fuar etkinlikleri gibi birçok imkan sunan TÜBİTAK, öncelikli olarak sanayi projelerini fonlamakta ve ülkenin rekabet gücünü arttırmayı hedeflemektedir.</p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/ab.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>AB TEŞVİKLERİ </h4>
                    <p> “Katılım Öncesi Mali Yardım Aracı” olarak adlandırılan program Türkiye’nin AB’ye katılmadan önce belirlenen alanlarda uyum sürecini kolaylaştırmak adına kalkındırılmasını hedeflemektedir. IPA kapsamında ticaret ve sanayi odaları, meslek odaları, dernekler, vakıflar, üniversiteler, kooperatifler, sendikalar ve diğer sivil toplum kuruluşları geliştirdikleri projeler kapsamında değerlendirilip hibe programına alınmaktadırlar. </p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/ajans.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>KALKINMA AJANSLARI </h4>
                    <p> Bölgesel kalkınmayı desteklemek amacıyla kurulan kalkınma ajansları, sorumlu oldukları bölgelere özel projelerin hayata geçirilmesinde büyük önem taşımaktadır. Kalkınma Ajansları kaynakların yerinde kullanılmasını, etkinliğin sağlanmasını ve yerel potansiyeli ortaya çıkarmaya çalışarak bölgeler arası gelişmişlik farklarını en aza indirmeyi hedeflemektedir. </p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/ttgv.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>TTGV </h4>
                    <p>Türkiye Teknoloji Geliştirme Vakfı, başta iklim dostu teknolojileri, yenilenebilir enerji projelerini ve temiz üretim teknolojilerini desteklemekle beraber innovasyon içeren fikirlerin hayata geçirilmesi için teşvikler vermektedir. Türkiye’de aktif olarak en az 3 yıldır faaliyette bulunan firmalar başvuru yapabilmektedir. Ayrıca 400.000 ABD dolarına kadar hibe veren kuruluşun projeyi destekleme süresi 15 aydır.</p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/ekonomi-bakanligi.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>EKONOMİ BAKANLIĞI </h4>
                    <p>Ekonomi Bakanlığı bünyesinde kooperatifçilik, yurtdışı lojistik merkezi, döviz kazandırıcı hizmetler, pazara girişte dijital faaliyetlerin desteklenmesi yapılmaktadır. Kooperatifçilik desteğinden yararlanmak için ortakların %90 ı kadın olması halinde hibe oranı arttırılmaktadır. Ayrıca döviz kazandırıcı hizmetler içinde sağlık turizmi, eğitim ve yönetim danışmanlığı ön plana çıkmaktadır. Yurtdışı lojistik merkezlerinin kurulmasında ise ana hedef uluslar arası faaliyet gösteren firmaların yaşadıkları sorunları minimuma indirmektir.</p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/ticaret-bakanligi.png' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>TİCARET BAKANLIĞI </h4>
                    <p>İhracat ve ithalat desteği, TURQUALITY® programı, CE belgesi, yurt dışı tanıtım ve fuar destekleri gibi daha çok markalaşma ve dünyaya Türk malını tanıtma faaliyetleri çerçevesinde destekler vermektedir. TURQUALITY® Ülkemizin rekabet avantajını elinde bulundurduğu markalaşma potansiyeli yüksek ürün/hizmet gruplarının üretimi, pazarlanması, satışı ve satış sonrası hizmetleri kapsayan destek programıdır. Bu çerçevede sunulan hizmet/ürün ilk olarak TURQUALITY® sertifikasına haiz olmalıdır</p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/banka.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>BANKA KREDİLERİ </h4>
                    <p>Bazı sektörler niteliği itibariyle hibe programlarından yararlanamamaktadır. Bu aşamada bankaların çok uygun faizle verdikleri krediler devreye girmektedir. Bu krediler her yıl ya devletin belirlediği birkaç sektör için ya da genel anlamda herkesin başvurabileceği şekilde kullandırılmaktadır. Kredi başvurusu için hazırlanacak iyi bir fizibilite dosyası kuşkusuz girişimcinin en önemli gücü olmaktadır. </p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/eximbank.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>EXIMBANK </h4>
                    <p>İhracatın geliştirilmesi, ihraç edilen ürünlerin çeşitlendirilmesine yönelik olarak yeni pazarların açılması için girişimcilere kredi, garanti ve sigorta gibi geniş bir alanda destekler vermektedir. Ayrıca yurtdışında aktif olan müteahhit ve yatırımcıların rekabet gücünün artması için faaliyetlerini sürdürmektedir. </p>
                </Card>
                <Card title={
                    <Image src='/images/tesvikler/melek.jpeg' width='200' height='200' alt='TKDK'  />
                } >
                    <h4>MELEK YATIRIMCILAR </h4>
                    <p>Melek yatırımcılar için en önemli başlıklar şüphesiz fikrin katma değeri, iş planı ve sürdürülebilirliğidir. Melek yatırımcılar ya projenin tamamını satın alarak ya da yatırımcı ortak olarak iş fikirlerinin hayata geçirilmesini sağlamaktadırlar. </p>
                </Card>
            </div>
        </div>
    </>
  );
};

export default Incentives;
