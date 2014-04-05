package arrested


class ArrestedToken {
    String token
    Boolean valid
    Date lastUpdated
    Long owner

    static constraints = {
        token blank: false
        valid nullable: true
        lastUpdated nullable: true
        owner nullable: true
    }

    def showInformation(){
        return [id: id,
                token: token,
                lastUpdated: lastUpdated,
                valid: valid]
    }
}