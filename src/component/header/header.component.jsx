import React from 'react';
import './header.styles.scss';

const HeaderPage = () => (
  <div className='headercontainer'>
    <div className='option'><a className='linkoption' href='#home'>HOME</a></div>
    <div className='option'><a className='linkoption' href='#project'>PROJECT</a></div>
    <div className='option'><a className='linkoption' href='#skills'>SKILL</a></div>
    <div className='option'><a className='linkoption' href='#contact'>CONTACT</a></div>
  </div>
);

export default HeaderPage;
