import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import {Header} from './components/header'
import {Left} from './components/Left'
import {Right} from './components/Right'
import {AboutUs} from './components/aboutus'
import {Footer} from './components/Footer'


const Main = () => (
<div>
    <div className="up">
    <Header/>
    <div className="center">
    <Left/>
    <Right/>
    
    </div>
    </div>
    <AboutUs/>
    <Footer/>
    
</div>

)


  
  ReactDOM.render(<Main/>, document.getElementById('app'));
