const app = require('express')()

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
    console.log('--------------------------')
})
