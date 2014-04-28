package arrested


import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController
import arrested.ArrestedController
import org.apache.shiro.crypto.hash.Sha256Hash

class ArrestedUserController extends ArrestedController {

    static allowedMethods = [show: "GET", list: "GET", save: "POST", update: "PUT", delete: "DELETE"]

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
                    renderNotFound("", "${message(code: 'default.user.notfound.label', default: 'User not found')}")
                }
            }
            else{
                renderNotFound("", "${message(code: 'default.token.notfound.label', default: 'Token not found')}")
            }
        }
        else{
            renderMissingParam("${message(code: 'default.token.missing.label', default: 'Token missing')}")
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

	def save(){
		def data = request.JSON

		String username=data.username as String
		String passwordHash=data.passwordHash as String
		String passwordConfirm=data.passwordConfirm as String

		if(username){
			if((passwordHash&&passwordConfirm)&&(passwordHash.equals(passwordConfirm))){
				if (ArrestedUser.findByUsername(username)) {
					renderConflict("${message(code: 'default.username.used.label', default: 'Username already in use')}")
				} else {
					ArrestedUser user = new ArrestedUser( username:username, passwordHash: new Sha256Hash(passwordHash).toHex() )
					user.save(flush: true)

					ArrestedToken token = new ArrestedToken( token: 'token', valid: true, owner: user.id )
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
				renderMissingParam("${message(code: 'default.password.missing.label', default: 'PasswordHash missing')}")
			}
		}else{
			renderMissingParam("${message(code: 'default.username.missing.label', default: 'Username missing')}")
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
                            renderConflict("${message(code: 'default.username.used.label', default: 'Username already in use')}")
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
                        renderNotFound(data.id, "${message(code: 'default.user.notfound.label', default: 'User not found')}")
                    }
                }
                else{
                    renderNotFound("", "${message(code: 'default.token.notfound.label', default: 'Token not found')}")
                }
            }
            else{
                renderMissingParam("${message(code: 'default.token.missing.label', default: 'Token missing')}")
            }
        }
        else{
            renderMissingParam("${message(code: 'default.username.missing.label', default: 'Username missing')}")
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
                            render "${message(code: 'default.username.deleted.label', default: 'User deleted')}"
                        }
                        json {
                            response.status = 200
                            render "${message(code: 'default.username.deleted.label', default: 'User deleted')}"
                        }
                    }
                }
                else{
                    renderNotFound("", "${message(code: 'default.user.notfound.label', default: 'User not found')}")
                }
            }
            else{
                renderNotFound("", "${message(code: 'default.token.notfound.label', default: 'Token not found')}")
            }
        }
        else{
            renderMissingParam("${message(code: 'default.token.missing.label', default: 'Token missing')}")
        }
    }
}