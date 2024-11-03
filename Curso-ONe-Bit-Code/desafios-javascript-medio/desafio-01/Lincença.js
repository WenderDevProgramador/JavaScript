const Licença = class License {
    constructor (name, lastName, dateOfBirth) {
        this.name = name
        this.lastName = lastName
        this.dateOfBirth = new Date(dateOfBirth) 
        this.license = false
        
    }

    generateLicense() {
        let license = ""
        for(let i = 0; i < 5 ; i++ ) {
            license += this.lastName[i] ? this.lastName[i].toUpperCase() : '9'
        }

        license += '-'
        license += this.dateOfBirth.getFullYear().toString()[2]
        license += this.toMonth()
        license += this.dateOfBirth.getFullYear().toString()[3]
        license += '.'
        license += this.name[0].toLowerCase()

        return this.license = license
    }

    toMonth() {
        let month = this.dateOfBirth.getMonth()
        if( month < 9) {
            return `0${month + 1}`
        } else {
            return `${month + 1}`
        }
    }
}


module.exports = Licença