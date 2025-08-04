import React from 'react';
import Image from 'next/image'
import Script from 'next/experimental-script';
import Head from 'next/head';


const CorporateProject: React.FC = () => {
  
    return (
        <>
          <Head>
            <title>Kurumsal Proje Danışmanlığı Programımız - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="kurumsal proje, proje nasıl yazılır, avrupa birliği projeleri,tkdk,UYG Danışmanlık tel,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Kurumsal Proje Danışmanlığı Programımız" key="title" />
            <meta name="Description" content="Avrupa Birliği tarafından ‘Proje Döngüsü Yönetimi’ olarak da ifade edilen bu hizmet; proje fikrinin belirlenmesi, durum analizi yapılması, iş planı hazırlanması, finansman, projenin uygulanması ve değerlendirilmesi aşamalarını kapsayan danışmanlık hizmetidir." />
            <meta name="og:description" content="Avrupa Birliği tarafından ‘Proje Döngüsü Yönetimi’ olarak da ifade edilen bu hizmet; proje fikrinin belirlenmesi, durum analizi yapılması, iş planı hazırlanması, finansman, projenin uygulanması ve değerlendirilmesi aşamalarını kapsayan danışmanlık hizmetidir.ı" />
            <meta property="og:url" content="/kurumsal-proje-danismanligi" />
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
            <Image src='/images/kurumsal_proje_danismanligi.webp' className='image' width='1920' height='500' />
            <div className='hakkimzda-description'>
                    <h2>Kurumsal Proje Danışmanlığı</h2>
            </div>
        </div>
        <div className='hakkimizda-aciklama'>
                <h1>Kurumsal Proje Danışmanlığı Programımız</h1>
                <p>Avrupa Birliği tarafından ‘Proje Döngüsü Yönetimi’ olarak da ifade edilen bu hizmet; proje fikrinin belirlenmesi, durum analizi yapılması, iş planı hazırlanması, finansman, projenin uygulanması ve değerlendirilmesi aşamalarını kapsayan danışmanlık hizmetidir.</p>
                <h3>Proje Yazımı;</h3>
                <p>Proje yazımına sektörel analizden sonra başlanmalıdır. Destekler detaylı bir şekilde incelendikten sonra finansman desteği veren kurum veya kuruluşa göre hazırlanacak projeler gerçekçi ve büyük özen gösterilerek yazılmalıdır. Proje yazmak disiplinli bir çalışma gerektirir. özellikle büyük hibe desteği veren projelerde teklif metinlerinin profesyoneller tarafından hazırlanması işinizi şansa bırakmaz. 
                Proje Yazımı hizmeti, hedeflenen amaçlara göre her kurumun kendi belirlediği standartlar çerçevesinde evrakların hazırlanması aşamasını içermektedir. Şirket veya gerçek kişiler için durum analizi yapılarak hazırlanan proje taslakları ön değerlendirme için ilgili kurum veya kuruluşlara gönderilmektedir</p>
                <h3>İş Planı;</h3>
                <p>Proje sürecindeki en önemli adımdır. Yatırımcının finansal destek verebilmesi için çok iyi hazırlanmış bir iş planı görmesi gerekmektedir. Özenli bir iş planı mutlaka aşağıdaki adımları içermelidir.   </p>
                <ul>
                    <li>
                        Amaç, Hedef 
                    </li>
                    <li>
                        Proje bilgileri ya da faaliyet geçmişi 
                    </li>
                    <li>Tanımlar, farklılıklar, katma değer ve sürdürülebilirlik </li>
                    <li>Ekip bilgisi ve ekip üyelerinin yetkinlikleri </li>
                    <li>Pazar araştırması ve pazarlama stratejileri</li>
                    <li>İmalat ve Ar-Ge analizleri</li>
                    <li>SWOT Analizi</li>
                </ul>
                <h3>Proje Yönetimi;</h3>
                <p>Finansman desteği alındıktan sonra projenin hayata geçirilmesidir. Finansal kaynakların doğru yönetilmesini ve kaliteli iş yapılmasını hedefler. Alanında uzman kişilerle çalışmak proje yönetiminde işinizi kolaylaştırır. </p>
        </div>
    </>
  );
};

export default CorporateProject;
