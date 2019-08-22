//获取时间戳
function getTimestamp(){
    let date = new Date();
    return date.getTime();
}

//精品推荐换一换
const JP_URL = "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1566459787&type=2&resetcache=&func_id=19&orderid=6&mid=6&lmkTxt=index&sign=028BD7232D862FDF3B04DDD534CF4FCF&key=shuqiapi&_=" + getTimestamp();

//女生热文换一换
const NVS_URL = "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1566459957&type=2&resetcache=&func_id=19&orderid=11&mid=12&lmkTxt=index&sign=EF3AB399DAE496EFA2FB868C5E7B6208&key=shuqiapi&_=" + getTimestamp();

//男生热文换一换
const NS_URL = "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1566460000&type=2&resetcache=&func_id=19&orderid=16&mid=17&lmkTxt=index&sign=013FDC3B6F22728D7EC033DD10F390E8&key=shuqiapi&_=" + getTimestamp();

//分类
const CLASSIFY_URL = "http://walden1.shuqireader.com/webapi/rank/classrelation?_=" + getTimestamp();

//排行
const STANDINGS_URL = "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1566460999&type=2&resetcache=&sign=84D7DCA4C4D265684DE12E2A386547CD&key=shuqiapi&_=" + getTimestamp();

//女频
const GIRL_CHANNEL_URL = "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1566461420&type=2&resetcache=&sign=1D6C02C1ED4D475F16ABC056EB5B697A&key=shuqiapi&_=" + getTimestamp();

//男频
const BOY_CHANNEL_URL = "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=2&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1566461857&type=2&resetcache=&sign=90F81648F921C2D6E2BC65BE5CF68E19&key=shuqiapi&_=" + getTimestamp();

//精品书单
const BOOK_LIST_URL = "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=" + getTimestamp();

//书籍详情换一换
const BOOK_DETAILS_URL = "http://bookapi.shuqiapi.com/?bamp=sqdk&dataFrom=sm&bid=7947750&bkName=%E8%B1%AA%E5%A9%BF&authName=%E7%BB%9D%E4%BA%BA&authorid=4200980&limit=8&ver=07.30.17.12&fr_pr_id=10002&tk=Nzk0Nzc1MDQxN2FjNTllOWY0MjAwOTgw&shuqi_h5=&_=" + getTimestamp()
module.exports = {
    JP_URL,
    NVS_URL,
    NS_URL,
    CLASSIFY_URL,
    STANDINGS_URL,
    GIRL_CHANNEL_URL,
    BOY_CHANNEL_URL,
    BOOK_LIST_URL,
    BOOK_DETAILS_URL
}