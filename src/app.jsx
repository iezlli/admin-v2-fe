// // console.log(123)

// let a=12;
// let test=(value)=>{
//     return value*2;
// };

// test(1);
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDom from 'react-dom';


import './index.css';
import './index.scss';

ReactDom.render(
<div>
        <i className="fa fa-address-book"></i>
        <h1>hello react webpack2 </h1>,
</div>,
        document.getElementById('app')
    );
