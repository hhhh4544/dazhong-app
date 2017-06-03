let express=require('express')
let app=express()
let bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
//解析url路径
app.listen(3000)

let ad=require('./home/ad')
app.get('/api/ad',function (req,res) {
    res.send(ad)
})

/*
fetch(url,{Accept:"application/json"}).then(res=res.json()).then(data=>{console.log('ok')})*/

let list=require('./home/list')
app.get('/api/list/:city/:page',function (req,res) {
    console.log(req.params.city)
    console.log(req.params.page)
    res.send(list)
})

let info=require('./detail/info')
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info)
})
let comment=require('./detail/comment')
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment)
})

//订单列表  用户名  /api/orderlist/:id
let orderList=require('./orderlist/orderList')
app.get('/api/orderlist/:username',((req,res)=>{
    res.send(orderList)
} ))

app.post('/api/comment',(req,res)=>{//npm install body-parser -S解析请求体
    console.log(req.body);
    res.send({msg:'ok'})
})