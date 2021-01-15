const http = require('http')
const internalIp = require('internal-ip')
const publicIp = require('public-ip')

const log = str => process.stdout.write(str + '\n')

internalIp.v4().then(val => log(val))
publicIp.v4().then(val => log(val))

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello :', req.url)
})

server.listen(8080, '0.0.0.0', () => log('server is running'))