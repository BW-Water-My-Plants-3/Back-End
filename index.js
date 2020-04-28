const server = require('./api/server');

const port = process.env.PORT || 6870;

server.listen(port, () => {
    console.log(`\n === Running on port ${port} ===\n`)
})