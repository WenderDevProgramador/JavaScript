
class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee  
    }

    static baseFee = 200

    static showBasefee(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFree() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBasefee()
const r1 = new Reservation(3,'201',5)
const r2 = new Reservation(2,'104',2)
console.log(r1)
console.log(r2)

console.log(`Premium fee is $${Reservation.premiumFree}`)