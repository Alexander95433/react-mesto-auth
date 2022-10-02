

class ApiAuth {
    constructor(options) {
        this._host = options.host;
        this._headers = options.headers;

    }

    _responseAnalysis(res) {
        debugger
        if (res.ok || res.status === 201) { return res.json(); }
        return Promise.reject(res.status)
    }
    //zzalexanderkomarov994@gmail.com qq



    _request(data) {
        debugger
        const config = {
            method: data.methodName,
            headers: {
                "Content-Type": "application/json",
                ...(!!data.token && { Authorization: `Bearer ${data.token}` }),
            },
            ...(!!data.body && { body: JSON.stringify(data.body)}),
        };
        return fetch(`${this._host}${data.endpoint}`,config).
        then(res => this._responseAnalysis(res))
    }

    register(data) {
        return this._request(data)
    };

    authorization(data) {
        return this._request(data)
    }

    checkToken(data) {
        return this._request(data)
    }

}


const apiAuth = new ApiAuth({
    host: 'https://auth.nomoreparties.co/',
    headers: { "Content-Type": "application/json" }
})

export default apiAuth;

