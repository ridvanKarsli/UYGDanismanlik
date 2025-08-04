import { Card } from 'antd';
import Image from 'next/image';
import Script from 'next/experimental-script';
import Head from 'next/head';
const { Meta } = Card;

const Ekibimiz = () => {
    return(
        <>
           <Head>
            <title>Ekibimiz - UYG Yönetim ve Danışmanlık</title>
            <meta charSet="utf-8"/>
            <meta property="keywords" content="ekibimiz,güçlü ekibimiz, uyg danismanlik egitim personelleri, UYG Danışmanlık eğitmenleri,Dijital,eğitim,digital uygulama eğitimi,kurumsal danışmanlık, eğitim ve danışmanlık" key="title" />
            <meta property="og:title" content="Ekibimiz - UYG Danışmanlık Danışmanlık" key="title" />
            <meta name="Description" content="Yürütülen çalışmalarda alanında uzman master ve doktora derecelerine sahip akademik danışmanlarımız sizler için hazırlamış olduğumuz hizmetlerimiz için güncel ve bilimsel yetkinlikleriyle yanınızda. Sizler için yürütülecek her türlü çalışmada şirketimiz akademik danışmanlarımızın rehberliğinde sizlerle işbirliği içinde danışmanlık hizmetleri vermekte ve yine danışmanlarımızın bizzat katılacağı eğitim etkinlikleri düzenlemektedir." />
            <meta name="og:description" content="Yürütülen çalışmalarda alanında uzman master ve doktora derecelerine sahip akademik danışmanlarımız sizler için hazırlamış olduğumuz hizmetlerimiz için güncel ve bilimsel yetkinlikleriyle yanınızda. Sizler için yürütülecek her türlü çalışmada şirketimiz akademik danışmanlarımızın rehberliğinde sizlerle işbirliği içinde danışmanlık hizmetleri vermekte ve yine danışmanlarımızın bizzat katılacağı eğitim etkinlikleri düzenlemektedir." />
            <meta property="og:url" content="/ekibimiz" />
            <meta property="og:image" content="digitalplatform.jpeg" />
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
            <div className='our-team'>
                <h1>Ekibimiz</h1>
                <div className='akademik-personel'>
                    <Card
                        cover={<Image alt="Dr. Emre UYGUR" src='/images/team1.png' width='500' height='500' />}
                    >
                        <Meta title={<><h3>Dr. Emre UYGUR</h3> <span>Akademik Danışman</span></>} description="emreuygur@uygdanismanlik.com" />
                    </Card>
                    <Card
                        cover={<Image alt="Endüstri Müh. Didar TAVLI" src='/images/didartavli.jpg' width='500' height='500' />}
                    >
                        <Meta title='Endüstri Müh. Didar TAVLI' description="didartavli@uygdanismanlik.com" />
                    </Card>
                </div>
            </div>
            
        </>
    )
}

export default Ekibimiz