import React from 'react';
import data from './portfolio.data.json';
import './profolio.styles.scss';

const ProfolioPage = () => (  
    <div className='profoliocontainer'  id='project'>
        <h2 className='profoliotitle'>Project</h2>
        <div className='profoliocontent'>
            {data.map(({ name, path }) => (
                <div className='profolioitem'>
                <div class="flip-profolioitem-inner">
                    <div class="flip-profolioitem-front">
                        <h2>{name}</h2>
                    </div>
                    <div class="flip-profolioitem-back">
                        <h2>{path}</h2>
                    </div>
                    </div>
                </div>
             ))}
        </div>
    </div>
);



export default ProfolioPage;