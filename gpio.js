const { Gpio } = require('onoff')

class GPIO {
    constructor() {
        console.log('GPIO helper created!')
        this.relais = new Gpio(23, 'out')

        /** 3 inputs */
        this.inputs = []
        this.inputs.push(new Gpio(17, 'in', 'both'))
        this.inputs.push(new Gpio(27, 'in', 'both'))
        this.inputs.push(new Gpio(22, 'in', 'both'))
    }

    relaisOn() {
        this.relais.writeSync(1)
    }

    relaisOff() {
        this.relais.writeSync(0)
    }
}

exports.default = new GPIO()
