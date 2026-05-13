class Reservation {
    constructor(guest, room, days) {
        this.guest = guest;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee;

    }

    static baseFee = 150;

    static showBaseFee() {
        console.log(`The base fee for a reservation is $${Reservation.baseFee}`);
    }

    static get premiumFee() {
        return Reservation.baseFee * 1.5;
    }



}


Reservation.showBaseFee();

Reservation.baseFee = 200;

const r1 = new Reservation('John Doe', '101', 3);
console.log(r1);
console.log(`The premium fee for a reservation is $${Reservation.premiumFee}`);