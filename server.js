import http from 'http';

class AtomixAPI {
    
    constructor () {
        this.port;
        this.http = http.createServer
        this.routes_ = null;
    }

    server(){
        this.http((req, res) => {
            if(this.routes_) {
                this.routes_.map((route, index) => {
                    if(route[req.url]){
                        route[req.url](req, res);
                        return
                    } else {
                        res.end("404")
                    }
                })
            } else {
                res.end("404")
            }
        }).listen(this.port, () => {
            console.log(`\n Server is listening on Port: ${this.port} \n URL: http://localhost:${this.port}/`);
        })
    }

    listen(port){
        this.port = port;
        this.server()
    }   

    routes(routes__){
        this.routes_ = routes__;
    }
}

export default new AtomixAPI;
