import Image from 'next/image'
import { Collapse } from 'antd';
import Link from 'next/link';
import Script from 'next/experimental-script';
import Head from 'next/head';

const { Panel } = Collapse;
const Corparate = () => {


    return(
        <>
         <Head>
            <title>Kurumsal Yönetim Danışmanlığı Programımız - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="Uygun tasarım,kurumsal proje, proje nasıl yazılır, avrupa birliği projeleri,tkdk,UYG Danışmanlık tel,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Kurumsal Yönetim Danışmanlığı Programımız" key="title" />
            <meta name="Description" content="Kurumsal Yönetim Danışmanlığı Programımız “SÜREKLİ İYİLEŞTİRME VE TOPLAM KALİTE YÖNETİMİ” prensibine dayanarak işletmelerde sistematik bir iyileştirme sürecini hedefler. Bu süreçler bir kurumun sürdürülebilir bir başarı elde edebilmesi için gerekli unsurları oluşturur." />
            <meta name="og:description" content="Kurumsal Yönetim Danışmanlığı Programımız “SÜREKLİ İYİLEŞTİRME VE TOPLAM KALİTE YÖNETİMİ” prensibine dayanarak işletmelerde sistematik bir iyileştirme sürecini hedefler. Bu süreçler bir kurumun sürdürülebilir bir başarı elde edebilmesi için gerekli unsurları oluşturur." />
            <meta property="og:url" content="/kurumsal-yonetim-danismanligi" />
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
            <Image src='/images/kurumsal_yonetim_danismanligi.webp' className='image' width='1920' height='500' />
            <div className='hakkimzda-description'>
                    <h2>Kurumsal Yönetim Danışmanlığı</h2>
            </div>
           </div>
           <div className='hakkimizda-aciklama'>
                <h1>Kurumsal Yönetim Danışmanlığı Programımız</h1>
                <p>Kurumsal Yönetim Danışmanlığı Programımız “SÜREKLİ İYİLEŞTİRME VE TOPLAM KALİTE YÖNETİMİ” prensibine dayanarak işletmelerde sistematik bir iyileştirme sürecini hedefler. Bu süreçler bir kurumun sürdürülebilir bir başarı elde edebilmesi için gerekli unsurları oluşturur. </p>
               <h3>TOPLAM KALİTE YÖNETİMİ ile, </h3>
                <ul>
                    <li>
                        Organizasyonda yeterlilik 
                    </li>
                    <li>
                        Uygun tasarım
                    </li>
                    <li>
                        Yöntemlere uygunluk 
                    </li>
                    <li>
                        Ekipman yeterliliği
                    </li>
                    <li>
                        Nitelikli personel seçimi 
                    </li>
                </ul>
                <p>gibi konularda hizmet kalitesini arttırmak için düzenlemeler yapılır. Bu düzenlemeler ile alanında uzman Endüstri Mühendislerimizin analizleri, alanında doktora derecesine sahip akademik danışmanlarımızın dünyada uygulanan yenilikçi eğitim yaklaşımlarını içeren tavsiyeleri ve başvuran kurumlarımızın istek ve hedefleri entegre edilecek şekilde danışmanlık hizmeti verilmektedir. </p>
               
           </div>
           <div className='hakkimizda-aciklama acordion-box'>
                <h1>Danışmanlık Alanları</h1>
                <Collapse accordion  defaultActiveKey={['1']}>
                    <Panel header={<div className='acordion-custom-header'> Stratejik Planlama <Link href='/iletisim' >İletişime Geç</Link> </div>} key="1">
                    <p>Stratejik planlama bir işletmenin uzun vadeli amaç ve hedeflerinin geliştirilme sürecidir. İşletmelerde durum tespiti ve mevcut durum analizi sonucunda şirketin misyon ve vizyonuna yönelik bir gelecek tasarımı ile strateji planlaması yapılmalı ve doğru şekilde yönetilmelidir. İşletmeler için en önemli eğitimlerden biridir. </p>
                    </Panel>
                    <Panel header= {<div className='acordion-custom-header'>Verimlilik Ve Süreç Analizi <Link href='/iletisim' >İletişime Geç</Link> </div>} key="2">
                    <p>Kurumlar maliyetleri düşürüp karlılığı arttırmayı hedef edinirler. Bu hedefin gerçekleşmesi verimliliği en üst seviyede tutmaya bağlıdır. Girdilerin, kaynakların, iş gücünün, zamanın ve bilginin doğru ve yeterli düzeyde kullanılması ile verimliliği arttırmak mümkündür. Her işletme için verimlilik arttırma kriterleri özeldir. Bu doğrultuda işletmelerde çeşitli analizler ile durum tespiti yapılmalı ve eksikler giderilmelidir.</p>
                    </Panel>
                    <Panel header={<div className='acordion-custom-header'> Toplam Kalite Yönetimi <Link href='/iletisim' >İletişime Geç</Link> </div>} key="3">
                    <p>Toplam Kalite Yönetimi bir yönetim felsefesidir. Bir organizasyonda kaliteyi odak alan, tüm üyelerin katılımına dayanan, müşteri memnuniyeti yoluyla uzun vadeli başarıyı amaçlayan bir yönetim yaklaşımıdır. Çeşitli prensiplere dayanan bu yaklaşımda ölçüm ve istatistik vazgeçilmezdir.</p>
                    </Panel>
                </Collapse>
           </div>
        </>
    )
}

export default Corparate;