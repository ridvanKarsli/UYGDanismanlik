import React from "react";
import { Row,Col,Card } from 'antd';
import { AimOutlined ,BankOutlined, ReadOutlined,RocketOutlined} from '@ant-design/icons';

const { Meta } = Card;


export const MainFeatures: React.FC = () => {


  return (
    <>
       <Row justify="space-around"  className='features'>
        <Col span={16} xs={24} xxl={16} xl={16} className='title-box'>
            <div className='title'> 
                <h3>Neler Yapıyoruz</h3>
                <p>Verdiğimiz eğitimler ve desteklediğimiz projeler ile işletmelerin, çalışanların ve ülkemizin ekonomik gelişimine katkı sağlamayı hedef ediniyoruz. Bunun yanı sıra gerçekleştirdiğimiz turlar ve uluslararası projeler sayesinde öğrencilerden mühendislere, şirket yöneticilerinden akademisyenlere, gelişmeleri takip etmek isteyen tüm paydaşlarımızın dünya standartlarını yakından gözlemlemelerine destek oluyoruz.</p>
            </div>
            <div className='feature-box-part'>
                <div className='feature-box'>
                    <AimOutlined />
                    <h4>KURUMSAL PROJE DANIŞMANLIĞI</h4>
                    <p>Kurumunuzun bir proje fikri mi var. Ancak nasıl projelendirip hibe alacağınızı bilmiyor musunuz? Proje fikrinizi proje önerisi haline getirmek ve yüzlerce fon çağrısının olduğu bir sistemde hibe alarak hayata geçirmek için lütfen bizimle iletişime geçiniz.</p>
                </div>
                <div className='feature-box'>
                    <ReadOutlined />
                    <h4>EĞİTİM SEMİNERLERİ</h4>
                    <p>Küreselleşen Dünya’da firmalar ayakta kalabilmek için sürekli gelişme göstermek zorunda. Bu gelişim teknolojik cihazların kullanılmasıyla beraber, insan kaynaklarının da sürekli gelişimini mecbur kılmakta. Alan uzmanlarımızca firmanıza özel öğretim programları eşliğinde en son güncel eğitim içeriklerimize ulaşmak için lütfen bizimle iletişime geçiniz.</p>
                </div>
                <div className='feature-box'>
                    <BankOutlined />
                    <h4>TEŞVİKLER</h4>
                    <p>Bir proje fikriniz için finansman desteğine mi ihtiyacınız var? Firmanıza özel teşvik mekanizmaları ile bölgesel, ulusal ve uluslararası hibe desteklerinden faydalanmak için profesyonel ekibimizle projenizi hayata geçirmek için lütfen bizimle iletişime geçiniz.</p>
                </div>
                <div className='feature-box'>
                    <RocketOutlined />
                    <h4>EĞİTİM TURLARI</h4>
                    <p>Çok okuyan mı bilir, çok gezen mi? Bize göre hem okuyup hem gezen bilir. Eğitim temalı yurt içi ve yurt dışı organizasyonlarımız hakkında detaylı bilgi almak için lütfen bizimle iletişime geçiniz.</p>
                </div>
            </div>
         </Col>
        <Col span={8} xs={24} xxl={8} xl={8} className='feature-card'>
            <Card
                hoverable
                cover={
                    <img alt="example" src="https://preview.colorlib.com/theme/consolution/images/about.jpg.webp" />
                }
            >
                <Meta title="KURUMSAL EĞİTİM DANIŞMANLIĞI" description={
                    <>
                        <p>
                            Biz, UYG Danışmanlık Yönetim Danışmanlık ailesi olarak firmalarımızın ihtiyaç duydukları mesleki eğitimler alanında, firmalara özel eğitimler düzenlemekteyiz. Kurumsal Eğitim Danışmanlığı sürecinde firma özelinde yapılan analiz çalışmaları yapılmakta ve firmaya özgü bir öğretim planlaması oluşturulmaktadır. Alanında uzman (en az master derecesine sahip) eğitmenlerimizce gerçekleştirilen eğitimlerimiz, öğrenen merkezli, çağın gereklerine uygun öğretim materyalleri eşliğinde, en son güncel gelişmeleri içeren öğretim programına sahiptir. Eğitim içeriklerimizle ilgili detaylı bilgi için lütfen iletişime geçiniz.
                        </p>
                    </>
                } />
            </Card>
        </Col>
      </Row>
    </>
  );
};
