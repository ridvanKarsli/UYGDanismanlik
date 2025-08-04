import React from 'react';
import Image from 'next/image'
import { Card } from 'antd';
import Script from 'next/experimental-script';
import Head from 'next/head';


const CorporateProject: React.FC = () => {

    return (
        <>
            <Head>
                <title>Dijital Çözümler - UYG Yönetim ve Danışmanlık</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="dijital çözümler, web çözümleri, e-ticaret, dijital pazarlama, SEO, UYG Danışmanlık" />
                <meta property="og:title" content="Dijital Çözümler" key="title" />
                <meta name="description" content="Dijital Çözümler sayfamızda; web geliştirme, e-ticaret sistemleri, dijital pazarlama ve SEO hizmetleri sunarak işletmenizin dijital dünyada güçlenmesini sağlıyoruz." />
                <meta property="og:description" content="Dijital Çözümler sayfamızda; web geliştirme, e-ticaret sistemleri, dijital pazarlama ve SEO hizmetleri sunarak işletmenizin dijital dünyada güçlenmesini sağlıyoruz." />
                <meta property="og:url" content="/dijital-cozumler" />
                <meta property="og:image" content="digital_solutions.jpg" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Script
                src="https://www.google-analytics.com/analytics.js" />
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
                <Image src='/images/dijital_cozumler.png' className='image' width='1920' height='500' />
                <div className='hakkimzda-description'>
                    <h2>Dijital Çözümler</h2>
                </div>
            </div>
            <div className='hakkimizda-aciklama'>
                <h1>DİJİTAL ÇÖZÜMLER</h1>
                <p><b>UYG Yönetim ve Danışmanlık</b> olarak, <b><a href="https://enmdigital.com" target="_blank" rel="noopener noreferrer">ENM Digital</a></b> ile stratejik ortaklığımız aracılığıyla sunduğumuz çeşitli dijital çözümlerle işletmenizin dijital dönüşümünü hızlandırıyoruz. İşte sunulan bazı temel hizmetler:</p>
            </div>
            <div className='tesvikler-card-full-part'>
                <div className='tesvikler-card'>
                    <Card title={
                        <Image src='/images/dijital_cozumler/web_gelistirme_ve_tasarimi.png' width='200' height='200' alt='web_gelistirme_ve_tasarimi.png' />
                    } >
                        <h4>Web Geliştirme ve Tasarımı</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak sunulan "Web Geliştirme ve Tasarımı" hizmetimiz, işletmelerin çevrimiçi varlıklarını güçlendirme ve marka kimliklerini dijital ortamda etkili bir şekilde temsil etme hedefine yöneliktir. ENM Digital ile işbirliği çerçevesinde, kullanıcı deneyimini önceliklendiren responsive (uyumlu) web tasarımları geliştiriyoruz. Modern teknolojileri kullanarak HTML5, CSS3 ve JavaScript gibi güncel web teknolojileriyle donatılmış, hızlı ve güvenli web siteleri tasarlayıp geliştiriyoruz.</p>
                    </Card>
                    <Card title={
                        <Image src='/images/dijital_cozumler/e-ticaret_cozumleri.png' width='200' height='200' alt='e-ticaret_cozumleri.png' />
                    } >
                        <h4>E-Ticaret Çözümleri</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak sunulan "E-Ticaret Çözümleri" hizmetimiz, işletmelerin online pazar yerlerinde etkin ve verimli bir şekilde yer almasını sağlamak için tasarlanmıştır. ENM Digital ile işbirliğimiz çerçevesinde, Magento, Shopify, WooCommerce gibi önde gelen e-ticaret platformları üzerinde özelleştirilmiş çözümler geliştiriyoruz. Bu platformlar, işletmelerin ürünlerini etkili bir şekilde sergilemelerine, satış süreçlerini kolaylaştırmalarına ve müşteri deneyimlerini iyileştirmelerine olanak tanır.</p>
                    </Card>
                    <Card title={
                        <Image src='/images/dijital_cozumler/seo_ve_dijital_pazarlama.png' width='200' height='200' alt='seo_ve_dijital_pazarlama.png' />
                    } >
                        <h4>SEO ve Dijital Pazarlama</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak sunulan "SEO ve Dijital Pazarlama" hizmetlerimiz, işletmelerin dijital dünyada görünürlüğünü artırmayı ve marka bilinirliğini genişletmeyi hedefler. ENM Digital ile işbirliği yaparak, güncel SEO tekniklerini ve dijital pazarlama stratejilerini kullanarak işletmelerin çevrimiçi etkileşimini ve dönüşüm oranlarını maksimize etmeye odaklanıyoruz.</p>
                    </Card>
                    <Card title={
                        <Image src='/images/dijital_cozumler/mobil_uygulama_gelistirme.png' width='200' height='200' alt='mobil_uygulama_gelistirme.png' />
                    } >
                        <h4>Mobil Uygulama Geliştirme</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak sunduğumuz "Mobil Uygulama Geliştirme" hizmetleri, işletmelerin mobil dünyada etkin bir şekilde var olmalarını sağlamak amacıyla tasarlanmıştır. ENM Digital ile işbirliğimiz sayesinde, iOS ve Android işletim sistemleri için native (yerel) ve hibrit mobil uygulamalar geliştiriyoruz. Bu uygulamalar, modern kullanıcı arayüzleri ve kullanıcı deneyimini önceliklendiren özelliklerle donatılmıştır.</p>
                    </Card>
                    <Card title={
                        <Image src='/images/dijital_cozumler/veri_analizi_ve_is_zekasi.png' width='200' height='200' alt='veri_analizi_ve_is_zekasi.png' />
                    } >
                        <h4>Veri Analizi ve İş Zekâsı</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak sunulan "Veri Analizi ve İş Zekâsı" hizmetlerimiz, işletmelerin büyük veri kümelerinden değerli bilgiler çıkararak daha bilinçli kararlar almasına yardımcı olmak için tasarlanmıştır. ENM Digital ile işbirliğimiz sayesinde, gelişmiş analitik araçlar ve metodolojiler kullanarak işletmelerin veri yönetimi ve analiz kapasitelerini artırıyoruz.</p>
                    </Card>
                    <Card title={
                        <Image src='/images/dijital_cozumler/bulut_cozumleri.png' width='200' height='200' alt='bulut_cozumleri.png' />
                    } >
                        <h4>Bulut Çözümleri</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak sunulan "Bulut Çözümleri" hizmetimiz, işletmelerin teknoloji altyapılarını modernize etmelerine ve operasyonel verimliliklerini artırmalarına olanak tanıyan kapsamlı hizmetler sunar. ENM Digital ile işbirliğimiz sayesinde, AWS (Amazon Web Services), Microsoft Azure ve Google Cloud Platform gibi önde gelen bulut platformlarında özelleştirilmiş çözümler geliştiriyoruz.</p>
                    </Card>
                    <Card title={
                        <Image src='/images/dijital_cozumler/yapay_zeka_cozumleri.png' width='200' height='200' alt='yapay_zeka_cozumleri.png' />
                    } >
                        <h4>Yapay Zeka Çözümleri</h4>
                        <p>UYG Yönetim ve Danışmanlık olarak, ENM Digital ile işbirliği içinde sunduğumuz yapay zeka çözümleri ile işletmelerin verimliliklerini artırmayı, iş süreçlerini otomatize etmeyi ve veri tabanlı karar alma mekanizmalarını güçlendirmeyi hedefliyoruz. Gelişmiş makine öğrenimi modelleri ve algoritmalar kullanarak, müşteri davranış analizleri, tedarik zinciri optimizasyonu, finansal tahminler ve daha pek çok alanda özelleştirilmiş çözümler geliştiriyoruz. Bu hizmetlerimiz, müşterilerimize rekabet avantajı sağlarken aynı zamanda sürdürülebilir büyüme potansiyellerini maksimize etmelerine olanak tanımaktadır. Yapay zeka tabanlı çözümlerimizle, işletmelerin daha akıllı ve bağlantılı sistemler kurmalarına yardımcı oluyoruz.</p>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CorporateProject;
