import React from 'react';

import './Page.css'

const Page = (props) => {
    return <div className='Page'>{props.children}</div>;
}
 
export default Page;