import React, { useEffect, useState } from "react";
import { Menu,Row,Col,Alert, Button, Drawer } from 'antd';
import { MailOutlined, AppstoreOutlined,WhatsAppOutlined,UnorderedListOutlined,
   AimOutlined ,PieChartOutlined, RadarChartOutlined} from '@ant-design/icons';
import { Logo } from "@components";
import Marquee from 'react-fast-marquee';
import Link from "next/link";
import { useRouter } from 'next/router'

const { SubMenu } = Menu;

const newsContent : any = {
  "en": {
    title: "Your News"
  },
  "tr": {
    title: "Deneme Deneme"
  },
};

export const Header: React.FC = ()=> {
  const router = useRouter()
  // const { locale, locales, defaultLocale } : any = router;

  const [current , setCurrent] = useState('');
  const [windowSize, setWindowSize] = useState(0);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e : any)=> {
    setVisible(false)
    setCurrent(e.key);
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize(window.screen.width);
    }
  })

  if(windowSize < 500){
    return(
      <>
        <div className='contact-area'>
          <Col span={4} className='email-contact'>
            <MailOutlined />
              <div>
                <span>Email</span>
                <span>  
                  <a href='mailto:onder.sahin.com' >
                      info@uygdanismanlik.com
                    </a>
                  </span>
              </div>
          </Col>
          <Col span={4} className='phone-contact'>
            <WhatsAppOutlined />
                <div>
                  <span>Telefon</span>
                  <span>
                    <a href='tel:+905528048454' >
                      +90 552 804 84 54
                    </a>
                  </span>
                </div>
            </Col>
        </div>
        <div className="mobile-logo">
          <Button type="default" onClick={showDrawer}>
            <UnorderedListOutlined />
          </Button>
          <Logo/>
        </div>
        
        <Drawer title="Menü" className="mobile-menu"  placement="left" onClose={onClose} visible={visible}>
        <Menu  onClick={handleClick} selectedKeys={[current]} mode="inline">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                  <Link href='/'>
                     Anasayfa
                    </Link>
                
              </Menu.Item>
              <SubMenu key="offices" icon={<AppstoreOutlined />}title="Şirketimiz">
                  <Menu.Item key="offices:1">
                    <Link href='/hakkimizda'>
                        Hakkımızda
                    </Link>
                    </Menu.Item>
                  <Menu.Item key="offices:2">
                      <Link href='/ekibimiz'>
                        Ekibimiz
                      </Link>
                    </Menu.Item>
              </SubMenu>
              <SubMenu key="hizmetler" icon={<PieChartOutlined />} title="Hizmetlerimiz">
                  <Menu.Item key="kurumsal:1">
                    <Link href='/kurumsal-yonetim-danismanligi'> Kurumsal Yönetim Danışmanlığı </Link>
                  </Menu.Item>
                  <Menu.Item key="kurumsal:2"> 
                    <Link href='/kurumsal-proje-danismanligi'>Kurumsal Proje Danışmanlığı </Link>
                  </Menu.Item>
                  <Menu.Item key="kurumsal:3">
                    <Link href='/tesvikler'>Teşvikler</Link>
                  </Menu.Item>
                  <Menu.Item key="kurumsal:4">
                    <Link href='/dijital-cozumler'>Dijital Çözümler</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu key="egitim" icon={<RadarChartOutlined />} title="Eğitimlerimiz">
                  <Menu.Item key="egitim:1">
                    <Link href='/proje-dongusu-egitimi'> Proje Döngüsü Eğitimi</Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:2">
                    <Link href='/digital-ogrenim-egitimi'>Digital Öğretim Uygulamarı </Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:3">
                    <Link href='/stem-egitimi'>Steam Eğitimi</Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:4">
                    <Link href='/eklektirik-elektronik-eigitimi'>Elektrik Elektronik Eğitimi</Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:5">
                      <Link href='/plc-teknolojisi-egitimi'>PLC Teknolojisi Eğitimi</Link> 
                    </Menu.Item>
                  <Menu.Item key="egitim:6">
                    <Link href='/endustri4-0'>
                      Endüstri 4.0 ve Haberleşme Protokolleri Eğitimleri 
                      </Link> 
                  </Menu.Item>
              </SubMenu>
              <SubMenu key="organizsyon" icon={<AimOutlined />} title="Organizasyon">
                  <Menu.Item key="organizsyon:1">
                    <Link href='/yurtdisi-egitim-turlari'>Yurt Dışı Eğitim Turları </Link> 
                  </Menu.Item>
                  <Menu.Item key="organizsyon:2">
                  <Link href='/yurtici-egitim-turlari'>Yurt İçi Eğitim Turları </Link>  </Menu.Item>
              </SubMenu>
              <Menu.Item key="contact">
                <Link href='/iletisim'>
                  İletişim
                </Link>
              </Menu.Item>
            </Menu>
        </Drawer>
      </>
    )
  }
  else {
    return (
      <>
      {/* <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>{newsContent[locale].title}</p> */}
      {/* <Link
            href={`/tr`}
            locale="tr"
          >
           Tr
          </Link>

          <Link
            href={`/en`}
            locale="en"
          >
            en-US
          </Link>
      <p>Configured locales: {JSON.stringify(locales)}</p> */}
      <div className='contact-area'>
          <Col span={4} className='email-contact'>
            <MailOutlined />
              <div>
                <span>Email</span>
                <span>  
                  <a href='mailto:onder.sahin.com' >
                      info@uygdanismanlik.com
                    </a>
                  </span>
              </div>
          </Col>
            <Col span={4} className='phone-contact'>
            <WhatsAppOutlined />
                <div>
                  <span>Telefon</span>
                  <span>
                    <a href='tel:+905528048454' >
                      +90 552 804 84 54
                    </a>
                  </span>
                </div>
            </Col>
        </div>
        <Row justify="space-around"  className='row-contact'>
            <Col span={5} className='logo-area'>
                <Logo/>
            </Col>
            <Col span={14} className='marque'>
              <Alert message={
                <Marquee pauseOnHover gradient={false}>
                Katılacağınız bu gezilerde bilim, kültür, sanat, felsefe, folklor, sportif etkinlikler içeren atölyelere katılarak ülkemizin kültürel zenginliğini yakından tanıma fırsatına sahip olacaksınız.  
              </Marquee>
              } type="info"  />
            </Col>
            <Col span={4} className='logo-area'>
            {/* <div>
              <button onClick={changeLanguage}>{t(`common:language.en`)}</button>
              <button onClick={changeLanguage}>{t(`common:language.tr`)}</button>
            </div> */}
            🇹🇷 Türkçe
            </Col>
            {/* <Col span={4} className='email-contact'>
              <SendOutlined />
              <div>
                <span>Email</span>
                <span>  
                  <a href='mailto:onder.sahin.com' >
                    info@uygdanismanlik.com
                    </a>
                  </span>
              </div>
            </Col>
            <Col span={4} className='phone-contact'>
              <PhoneOutlined />
                <div>
                  <span>Telefon</span>
                  <span>
                    <a href='tel:05548384350' >
                      05548384350
                    </a>
                    
                    </span>
                </div>
            </Col> */}
          </Row>
          <div style={{ backgroundColor: "#20232a", textAlign: "center" }}>
    
            <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                  <Link href='/'>
                      Anasayfa
                    </Link>
                
              </Menu.Item>
              <SubMenu key="offices" icon={<AppstoreOutlined />}title="Şirketimiz">
                  <Menu.Item key="offices:1">
                    <Link href='/hakkimizda'>
                        Hakkımızda
                    </Link>
                    </Menu.Item>
                  <Menu.Item key="offices:2">
                      <Link href='/ekibimiz'>
                        Ekibimiz
                      </Link>
                    </Menu.Item>
              </SubMenu>
              <SubMenu key="hizmetler" icon={<PieChartOutlined />} title="Hizmetlerimiz">
                  <Menu.Item key="kurumsal:1">
                    <Link href='/kurumsal-yonetim-danismanligi'>Kurumsal Yönetim Danışmanlığı</Link>
                  </Menu.Item>
                  <Menu.Item key="kurumsal:2"> 
                    <Link href='/kurumsal-proje-danismanligi'>Kurumsal Proje Danışmanlığı </Link>
                  </Menu.Item>
                  <Menu.Item key="kurumsal:3">
                    <Link href='/tesvikler'>Teşvikler</Link></Menu.Item>
                  <Menu.Item key="kurumsal:4">
                    <Link href='/dijital-cozumler'>Dijital Çözümler</Link>
                  </Menu.Item>
              </SubMenu>
              <SubMenu key="egitim" icon={<RadarChartOutlined />} title="Eğitimlerimiz">
                  <Menu.Item key="egitim:1">
                    <Link href='/proje-dongusu-egitimi'> Proje Döngüsü Eğitimi</Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:2">
                    <Link href='/digital-ogrenim-egitimi'>Digital Öğretim Uygulamarı </Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:3">
                    <Link href='/eklektirik-elektronik-eigitimi'>Elektrik Elektronik Eğitimi</Link>
                  </Menu.Item>
                  <Menu.Item key="egitim:4">
                      <Link href='/plc-teknolojisi-egitimi'>PLC Teknolojisi Eğitimi</Link>
                    </Menu.Item>
                  <Menu.Item key="egitim:5">
                    <Link href='/endustri4-0'>
                      Endüstri 4.0 ve Haberleşme Protokolleri Eğitimleri 
                      </Link> 
                  </Menu.Item>
              </SubMenu>
              <Menu.Item key="contact">
                <Link href='/iletisim'>
                  İletişim
                </Link>
              </Menu.Item>
            </Menu>
        </div>
      </>
    );
  }

};