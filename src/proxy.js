var PROXY_CONFIG = [
    {
        context: [
            "/test",
            "/api"
        ],
        target: "http://localhost:8085",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
