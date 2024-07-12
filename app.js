import app from './server.js'
import urls from './urls.js'

const port = 3000 || process.env.PORT;

app.routes(urls);
app.listen(port)