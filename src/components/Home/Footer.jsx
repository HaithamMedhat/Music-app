import React from 'react'
import style from './Footer.module.css';
import Footer_UL from './Footer_UL';

const dummy_data = [
  {
    id : 1,
    data : ['Company','About','Jobs','For the Record']
  },
  {
    id : 2,
    data :['communites','For Artists','Developers','Adveristing','Investors','Vendors']
  },
  {
    id : 3,
    data : ['useful Links','Support','Web Player','Free Mobile App']
  }
];

export default function Footer() {
  return (
    <div className={"p-5 " +style['footer-style']}>
        <section className="container">
            <div className="row">
                {dummy_data.map((e)=><Footer_UL key={e.id} data={e.data}/>)}
                <div className="col-md-3 p-5">
                    <div className={style.item}>
                      <ul className='d-flex'>
                          <li><i className={"fa-brands fa-facebook " + style['fa-brands_style']}></i></li>
                          <li><i className={"fa-brands fa-instagram " + style['fa-brands_style']}></i></li>
                          <li><i className={"fa-brands fa-twitter " + style['fa-brands_style']}></i></li>
                      </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
