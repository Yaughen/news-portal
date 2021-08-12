import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import OneNews from './pages/OneNews';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PagesPaths} from "./config";
import WebFont from 'webfontloader';
import './index.scss'

WebFont.load({
    google: {
        families: ['Montserrat']
    }
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path={PagesPaths.HOME} component={Main}/>
                <Route exact path={PagesPaths.ONE_NEWS} component={OneNews}/>
                <Route path='*' component={()=>(<div>404</div>)}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals