class Reservation {
    constructor(guests, room , days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }

    static showBaseFee() {
        console.log(`Base fee is ${Reservation.baseFee}`)
    }
}

Reservation.showBaseFee()

const r1 = new Reservation(3,'201',5)
console.log(r1)

console.log(`Premium fee is ${Reservation.premiumFee}`)