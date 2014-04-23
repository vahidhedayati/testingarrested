package arrested


import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController
import arrested.ArrestedController
import org.apache.shiro.crypto.hash.Sha256Hash

class ArrestedUserController extends ArrestedController {

    static allowedMethods = [show: "GET", list: "GET", save: "POST", update: "PUT", delete: "DELETE"]

	def lookup() { 
		println "------------"+params
	}
    def show(String token) {
        if(token){
            ArrestedToken arrestedToken = ArrestedToken.findByToken(token)
            if(arrestedToken){
                ArrestedUser user = ArrestedUser.findByToken(arrestedToken.id)
                if(user){
                    withFormat{
                        xml {
                            render user.toObject() as XML
                        }
                        json  {
                            render user.toObject() as JSON
                        }
                    }
                }
                else{
                    renderNotFound("", "User")
                }
            }
            else{
                renderNotFound("", "Token")
            }
        }
        else{
            renderMissingParam("token")
        }
    }

    def list() {
        def users = ArrestedUser.list().collect { it.showInformation() }
        withFormat{
            xml {
                render users as XML
            }
            json  {
                render users as JSON
            }
        }
    }

	def save() {
		if (params.instance) {
			def data = JSON.parse(params.instance)
			String username=data.username
			String passwordHash=data.passwordHash
			String passwordConfirm=data.passwordConfirm
			if(username){
				if((passwordHash&&passwordConfirm)&&(passwordHash.equals(passwordConfirm))){
					if (ArrestedUser.findByUsername(username)) {
						renderConflict("Username used")
					} else {
						ArrestedUser user = new ArrestedUser( username:username, passwordHash: new Sha256Hash(passwordHash).toHex() )
						user.save(flush: true)
						
						ArrestedToken token = new ArrestedToken( token: 'token',	valid: true, owner: user.id )
						token.save(flush: true)
						user.setToken(token.id)
						if(user.save(flush: true)){
							withFormat {
								xml {
									response.status = 200
									render user.toObject() as XML
								}
								json {
									response.status = 200
									render user.toObject() as JSON
								}
							}
						}else{
							render409orEdit(user)
						}
					}
					
				}else{
					renderMissingParam("passwordHash")
				}
			}else{
				renderMissingParam("username")
			}
		}
	}

    def update(String token) {
        if(params.instance){
            def data = JSON.parse(params.instance)
            if(token){
                ArrestedToken arrestedToken = ArrestedToken.findByToken(token)
                if(arrestedToken){
                    ArrestedUser user = ArrestedUser.findByToken(arrestedToken.id)
                    if(user){
                        if (user.username != data.username && ArrestedUser.findByUsername(data.username as String)){
                            renderConflict("Username used")
                        } else {
                            user.properties = data
                            if(user.save(flush: true)){
                                withFormat {
                                    xml {
                                        response.status = 200
                                        render user.toObject() as XML
                                    }
                                    json {
                                        response.status = 200
                                        render user.toObject() as JSON
                                    }
                                }
                            }
                            else{
                                render409orEdit(user)
                            }
                        }
                    }
                    else{
                        renderNotFound(data.id, "User")
                    }
                }
                else{
                    renderNotFound("", "Token")
                }
            }
            else{
                renderMissingParam("token")
            }
        }
        else{
            renderMissingParam("user")
        }
    }

    def delete(String token) {
        if(token){
            ArrestedToken arrestedToken = ArrestedToken.findByToken(token)
            if (arrestedToken){
                ArrestedUser user = ArrestedUser.findByToken(arrestedToken.id)
                if (user){
                    arrestedToken.delete(flush: true)
                    user.delete(flush: true)
                    withFormat {
                        xml {
                            response.status = 200
                            render "User deleted"
                        }
                        json {
                            response.status = 200
                            render "User deleted"
                        }
                    }
                }
                else{
                    renderNotFound("", "User")
                }
            }
            else{
                renderNotFound("", "Token")
            }
        }
        else{
            renderMissingParam("token")
        }
    }
}