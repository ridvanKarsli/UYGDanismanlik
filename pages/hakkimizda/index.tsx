import Image from "next/image"
import Script from 'next/experimental-script';
import Head from 'next/head';

const Hakkimizda = () => {
    return(
        <>
         <Head>
            <title>Hakkımızda - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="kurumsal danışmanlık,eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Eğitimin değerinin farkındayız. Dünyayı değiştirmenin yolunun eğitimden geçtiğini biliyoruz. Öğrenmekten keyif alan ve her zaman daha iyisinin hayalini kurup hayallerinin peşinde koşan, kültür seviyesi yüksek nesiller yetiştirmeyi hedefliyoruz." key="title" />
            <meta name="Description" content="Eğitimin değerinin farkındayız. Dünyayı değiştirmenin yolunun eğitimden geçtiğini biliyoruz. Öğrenmekten keyif alan ve her zaman daha iyisinin hayalini kurup hayallerinin peşinde koşan, kültür seviyesi yüksek nesiller yetiştirmeyi hedefliyoruz." />
            <meta name="og:description" content="Eğitimin değerinin farkındayız. Dünyayı değiştirmenin yolunun eğitimden geçtiğini biliyoruz. Öğrenmekten keyif alan ve her zaman daha iyisinin hayalini kurup hayallerinin peşinde koşan, kültür seviyesi yüksek nesiller yetiştirmeyi hedefliyoruz." />
            <meta property="og:url" content="/hakkimizda" />
            <meta property="og:image" content="endustri.jpeg" />
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
           <Image className='hakkimizda-image' src="/images/image1.webp" alt='Hakkımızda ' width='1920' height='500' />
           <div className='hakkimzda-description'>
                <h2>UYG Yönetim ve Danışmanlık</h2>
                <p>Güvenilir, etik değerlere bağlı, yenilikçi, ihtiyaca yönelik, çözüm odaklı eğitim ve danışmanlık hizmetleri veren "bilgi sermayesi" katkı sağlamaktır. </p>
           </div>
           </div>
           <div className='hakkimizda-aciklama'>
                <h1>Hakkımızda</h1>
                
                <div className="content-section">
                    <p>
                        Dünya üzerinde artan küreselleşme ile her alanda hızla yaşanan gelişmelere şahit olmaktayız. 
                        Mal, hizmet ve bilgi üretimi yapan işletmeler, bu gelişmelere ayak uyduramadıkları takdirde 
                        birçok problemle karşı karşıya kalmaktadır. İşletmelerin yaşamlarını sürdürebilmek ve 
                        rekabet üstünlüğü sağlayabilmek için yapmaları gerekenler vardır. Bu küresel rekabet ortamında, 
                        teknolojiyi kullanan ve geliştiren, dünya standartlarında üretim yapmayı hedefleyen, doğru 
                        zamanda doğru kararlar alabilen, ülke ekonomisine katkı sağlayan, çalışanlarına değer veren 
                        ve sürekli eğitim odaklı işletmeler ayakta kalabilecektir.
                    </p>
                </div>

                <div className="content-section">
                    <p>
                        Yenilikçilik ve Ar-Ge sürdürülebilir rekabet üstünlüğü için vazgeçilmez unsurlardır. 
                        İşletmeler, varlıklarını sürdürebilmek için yeni ürün ve süreçler geliştirmek zorundadır. 
                        Bu noktada kurumların Ar-Ge ve yenilikçi yatırımlarının planlanması, projelerin takibi ve 
                        gerekli desteklerin sağlanması büyük önem taşır. Tüm bu süreçlerin doğru stratejilerle 
                        planlanması için etkili bir iş ortağından destek alınması tavsiye edilmektedir.
                    </p>
                </div>

                <div className="content-section">
                    <p>
                        UYG Yönetim Danışmanlık, dinamik kadrosu, çok sayıda proje referansı, eğitim ve 
                        mühendislik tecrübesi ile profesyonel danışmanlık hizmetleri sunmaktadır. İşletmeler 
                        için proje fikri geliştirme aşamasından projenin teslimine kadar olan tüm süreci kapsayan 
                        danışmanlık hizmetleri ile yanınızdayız.
                    </p>
                </div>

                <div className="content-section">
                    <p>
                        Proje yönetimi ve danışmanlığı, proje döngüsü eğitimleri, ulusal ve uluslararası Ar-Ge 
                        fonları, yatırım teşvik danışmanlığı gibi birçok alanda sağladığımız hizmetlerle 
                        işletmenizin sürdürülebilir başarıya ulaşmasına katkı sağlamaktayız.
                    </p>
                </div>

                <div className="content-section">
                    <p>
                        UYG Danışmanlık olarak, işletmenizin ihtiyaçlarını karşılamak ve rekabet gücünüzü 
                        artırmak için yanınızdayız. Bizimle çalışarak, geleceğinizi güvence altına alabilirsiniz.
                    </p>
                </div>
           </div>
        </>
    )
}

export default Hakkimizda