function resolve (payload) {
    return JSON.stringify({
        code: 200,
        data: payload
    })
}

function reject (payload) {
    const errMsgs = {
        400: '请求参数错误',
        401: '未授权',
        403: '禁止访问',
        404: '资源不存在',
        500: '服务器错误'
    }

    return JSON.stringify({
        code: errMsgs[payload] ? payload : 500,
        msg: errMsgs[payload] ?? payload
    })
}

const handlers = [
    {
        pattern: '/api/test',
        handle: (req, res) => {
            res.end('test' + req.url)
        }
    },
    {
        pattern: '/api/upload',
        method: 'POST',
        handle: (req, res, ret) => {
            if (Math.random() > 0.5) {
                ret.success({
                    url: 'https://avatars.githubusercontent.com/u/23536402?v=4'
                })
            } else {
                ret.fail(500)
            }
        }
    }
]

module.exports = handlers.map(handler => {
    return {
        ...handler,
        handle: (req, res) => {
            // 设置 utf-8
            res.setHeader('Content-Type', 'application/json;charset=utf-8')

            // 提供 success 和 fail 方法
            const ret = {
                success: payload => {
                    res.end(resolve(payload))
                },
                fail: payload => {
                    res.end(reject(payload))
                }
            }

            handler.handle(req, res, ret)
        }
    }
})
