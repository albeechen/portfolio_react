import React from 'react';
import './header.styles.scss';

const HeaderPage = () => (
  <div className='headercontainer'>
    <a className='linkoption' href='#home'><div className='option'>HOME</div></a>
    <a className='linkoption' href='#project'><div className='option'>PROJECT</div></a>
    <a className='linkoption' href='#skills'><div className='option'>SKILLS</div></a>
    <a className='linkoption' href='#contact'><div className='option'>CONTACT</div></a>
  </div>
);

export default HeaderPage;
