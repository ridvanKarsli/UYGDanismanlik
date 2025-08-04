import React, { useState } from "react";
import { Row,Col } from 'antd';
import Link from 'next/link'

export const VisitorStatement: React.FC = () => {

  const [current , setCurrent] = useState('');

  const handleClick = (e : any)=> {
    setCurrent( e.key);
  };

  return (
    <>
       <Row justify="space-around"  className='visitor'>
        <Col span={24} className='title-box'>
            <div className='title'> 
                <h3>Ziyaretinizi Neye Borçluyuz</h3>
            </div>
            <div className='feature-box-part'>
                <Link href='/sss' >
                    <div className='feature-box'>
                        <h4>ŞİRKETİMİN YÖNETİMSEL FAALİYETLERİNE KATKI SAĞLAMAK İSTİYORUM.</h4>
                    </div>
                </Link>
                <Link href='/sss' >
                    <div className='feature-box'>
                        <h4>PROJEMİ HAYATA GEÇİRMEK İÇİN TEŞVİK ARAŞTIRIYORUM.</h4>
                    </div>
                </Link>
                <Link href='/sss' >
                    <div className='feature-box'>
                        <h4>ÇALIŞANLARIMA VE/VEYA ÖĞRENCİLERİME EĞİTİM ALDIRMAK İSTİYORUM.</h4>
                    </div>
                </Link>
            </div>
         </Col>
       
      </Row>
    </>
  );
};
