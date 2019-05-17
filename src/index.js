import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { BaseLayout } from './components/BaseLayout';
import Welcome from './components/Welcome'
import  Categories  from './components/Categories';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import Questions from  './components/Questions'


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
    <Switch>
        <Route path="/" exact component={Welcome}/>
        <Route path="/categories" exact component={Categories}/>
        <Route path="/categories/:catId/questions" component={Questions}></Route>
    </Switch>
    </BaseLayout>
    </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
