/**
 * Created by shc on 16/12/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');

import { Router, Route, hashHistory } from 'react-router';

/**导航配置**/
var Main = require('./main');
var Fenlei = require('./fenlei');
var Faxian = require('./faxian');
var Wode = require('./wode');
var PicLazy = require('./picLazy');
var Zhekou = require('./zhekou');
var NearStore = require('./near_store');
var RenWu = require('./renwu');
var ShopPro = require('./shop_pro');
var XinPin = require('./xinpin');
var Cart = require('./cart');

var routes = (

    <Router history={hashHistory}>
        <Route path="/" component={Main} onEnter={enterHook}/>
        <Route path="/fenlei" component={Fenlei} onEnter={enterHook}/>
        <Route path="/faxian" component={Faxian} onEnter={enterHook}/>
        <Route path="/wode" component={Wode} onEnter={enterHook}/>
        <Route path="/zhekou" component={Zhekou} onEnter={enterHook}/>
        <Route path="/picLazy" component={PicLazy} onEnter={enterHook}/>
        <Route path="/near_store" component={NearStore} onEnter={enterHook}/>
        <Route path="/renwu" component={RenWu} onEnter={enterHook}/>
        <Route path="/shop_pro" component={ShopPro} onEnter={enterHook}/>
        <Route path="/xinpin" component={XinPin} onEnter={enterHook}/>
        <Route path="/cart" component={Cart} onEnter={enterHook}/>
    </Router>
);
function enterHook(nextState, replace, callback) {
    var pathname = nextState.location.pathname;
    callback();
}
ReactDOM.render(routes, document.getElementById('container'));
