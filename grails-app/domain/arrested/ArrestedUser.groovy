package arrested



class ArrestedUser {
    String username
    String passwordHash
    Date dateCreated
    Date lastUpdated
    Long token

    static constraints = {
        username blank: false, unique: true
        passwordHash blank: false
        dateCreated nullable: true
        lastUpdated nullable: true
        token nullable: true
    }
	
	//static hasMany = [roles: ArrestedRole, permissions: String]
	
    def toObject(){
        return [id: id,
                username: username,
                token: ArrestedToken.get(token)?.token]
    }

    def showInformation(){
        return [id: id,
                username: username]
    }
}