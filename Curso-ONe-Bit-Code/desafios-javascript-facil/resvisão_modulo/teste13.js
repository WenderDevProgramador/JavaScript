
class Pilot {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = new Date(birthday)
        this.flyingLicense = false
    }

    generateFlyingLicense() {
        
    }
}




const pilot1 =new Pilot('Jhon','Doe','05-25-1977')
const pilot2 =new Pilot('Hal','Jordan','09-02-1995')
const pilot3 =new Pilot('Carol','Danvers','08-17-1968')
const pilot4 =new Pilot('Poe','Dameron','03-09-1979')

pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()
pilot3.generateFlyingLicense()
pilot4.generateFlyingLicense()

console.log(pilot1)
console.log(pilot2)
console.log(pilot3)
console.log(pilot4)