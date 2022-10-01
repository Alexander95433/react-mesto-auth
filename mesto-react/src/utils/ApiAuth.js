

class ApiAuth {
    constructor(options) {
        this._host = options.host;
        this._headers = options.headers;
    }

     

    _responseAnalysis(res) {
        debugger
         if (res.status === 200 ||res.status === 201 ) { return res.json(); }
        return Promise.reject(res.status)
    }

    _request(data, email, password,) {
        return fetch(`${this._host}${data.url}`, {
            method: data.methodName,
            headers: this._headers,
            body: JSON.stringify({ 'password': password, 'email': email })
        }).then(res => this._responseAnalysis(res))
    }

    register(data,  email, password) {
        return this._request({
            url: data.endpoint,
            methodName: data.methodName,
        }, email, password)
    };

    authorization(data,  email, password) {
        return this._request({
            url: data.endpoint,
            methodName: data.methodName,
        }, email, password)
    }

    checkToken(data, token) {
        return this._request({
            url: data.endpoint,
            methodName: data.methodName,
            token,
        })
    }

}


const apiAuth = new ApiAuth({
    host: 'https://auth.nomoreparties.co/',
    headers: { "Content-Type": "application/json" }
})

export default apiAuth;

