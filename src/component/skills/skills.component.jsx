import React from 'react';
import data from './skills.data.json';
import LinearWithValueLabel from './linearprogess.component';

import './skills.styles.scss';

const SkillsPage = () =>  (
    <div className='skillcontainer' id='skills'>
        <h2 className='skillttitle'>SKILL</h2>
        {data.map(({title, value}) => (
            <div className='skillcontent'>
                <div className='skill'>
                    <p>{title}</p>
                </div>          
                <div className='progressbar'>
                    <LinearWithValueLabel value={value}  />
                </div>                  
            </div>
        ))}   
    </div>
);


export default SkillsPage;