const querystring = require('querystring');

module.exports = (hostname, path, query) => {
    return new Promise((resolve, reject) => {
        const http = require('http');
        console.log(query);
        const options = {
            hostname,
            port: 80,
            method: "POST",
            path: path
        };
        // 创建请求
        const httpReq = http.request(options, (response) => {
            response.setEncoding('utf8');
            //接收数据
            let result = '';
            response.on('data', (data) => {
                result += data;
            })
            // 接收完毕，返回结果
            response.on('end', () => {
                resolve(result);
            })
        });

        httpReq.on('error', (e) => {
            console.error(`请求遇到问题: ${e.message}`);
            reject(e.message);
        });
        httpReq.write(querystring.stringify(query));
        //发送请求
        httpReq.end();
    })
}