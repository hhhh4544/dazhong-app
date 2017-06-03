import React from 'react'
import {render} from 'react-dom'
import App from './containers/index' //负责选择哪一个页面
import './assets/index.less'
import {Provider} from 'react-redux'
import {configureStore} from './store'
let store=configureStore(/*{userInfo:{cityName:'上海'}}*/)  //注入store
render(<Provider store={store}>
    <App></App>
</Provider>,document.getElementById('root'))
