import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';

import './contact.styles.scss';

const ContactPage = () => (
    <div id="contact" className='contactcontainer'>
        <h2 className='contacttitle'>Contact</h2>
        
        <div className='contactcontent'>   
            <div className='contactimg'></div>
            <div className='contactinfo'>
                <div><RoomIcon className='contactitem'/> <p className='contactitem'>Aliso Viejo, CA</p></div>
                <div><EmailIcon className='contactitem' /> <p className='contactitem'>linda3632000@hotmail.com</p></div>
                <div>
                    <Button>
                        <GetAppIcon className='contactitem' /> <p className='contactitem'>Download resume(.pdf)</p>
                    </Button>
                </div>
            </div>
            
        </div>
    </div>
);

export default ContactPage;