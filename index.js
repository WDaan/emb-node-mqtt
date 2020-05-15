const mqtt = require('mqtt')

const GPIO = require('./gpio').default

// connect
const client = mqtt.connect('mqtt://test.mosquitto.org')
client.on('connect', () => {
    client.subscribe('SET_OUTPUT', err => {
        if (err) console.log(err)
    })
})

// when output gets clicked
client.on('message', (topic, message) => {
    console.log(`topic: ${topic}, message: ${message}`)
    if (String(message) === 'on') GPIO.relaisOn()
    if (String(message) === 'off') GPIO.relaisOff()
})

// when input changes
// eslint-disable-next-line no-restricted-syntax
for (const [index, el] of GPIO.inputs.entries()) {
    el.watch((err, value) => {
        if (err) console.log(err)
        console.log(value)
        client.publish('CHANGE_DETECTED', JSON.stringify({ index, value }))
    })
}
