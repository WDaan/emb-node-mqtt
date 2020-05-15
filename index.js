const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://10.0.0.12:1883')

client.on('connect', () => {
    client.subscribe('test_receive', err => {
        if (err) console.log(err)
    })

    setInterval(() => {
        client.publish('test_send', 'Hello mqtt')
    }, 5000)
})
client.on('message', (topic, message) => {
    console.log(`topic: ${topic}, message: ${message}`)
})
