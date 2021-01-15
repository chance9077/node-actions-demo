const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello :', req.url)
})

server.listen(8080, '0.0.0.0', () => process.stdout.end('server is running.\n'))