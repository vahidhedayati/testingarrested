package arrested


import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController
import org.apache.shiro.crypto.hash.Sha256Hash

class AuthController extends ArrestedController {

    static allowedMethods = [login: "POST", logout: "GET"]

	def showLogin() {
		withFormat {
			html {
				render(view: "login")
			}
		}
	}
	def showSignup() {
		withFormat {
			html {
				render(view: "signup")
			}
		}
	}

    def login(String username, String passwordHash){
        if(username){
            if(passwordHash){
                ArrestedUser user = ArrestedUser.findByUsername(username)
                if(user){
                    if (user.passwordHash == new Sha256Hash(passwordHash as String).toHex()){
                        Date valid = new Date()
                        valid + 1
                        ArrestedToken token = ArrestedToken.get(user.token)
                        if(!token){
                            user.setToken(new ArrestedToken( token: UUID.randomUUID().toString(), valid: true, owner: user.id).save(flush: true).id)
                            user.save(flush: true)
                        }else if(token.lastUpdated.time > valid.time || !token.valid){
                            token.token = UUID.randomUUID()
                            token.valid = true
                            token.save(flush: true)
                        }
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
                        renderConflict("${message(code: 'default.usernamepassword.invalid.label', default: 'Username and/or password incorrect')}")
                    }
                }
                else{
                   renderConflict("${message(code: 'default.usernamepassword.invalid.label', default: 'Username and/or password incorrect')}")
                }
            }
            else{
                renderMissingParam("${message(code: 'default.password.missing.label', default: 'PasswordHash missing')}")
            }
        }
        else{
            renderMissingParam("${message(code: 'default.username.missing.label', default: 'Username missing')}")
        }
    }

    def logout(String token) {
        if(token){
            ArrestedToken arrestedToken = ArrestedToken.findByToken(token)
            if(arrestedToken){
                ArrestedUser user = ArrestedUser.findByToken(arrestedToken.id)
                if(user){
                    arrestedToken.valid = false
                    arrestedToken.save(flush: true)
                    withFormat{
                        xml {
                            render "${message(code: 'default.logout.success.label', default: 'Logout successfully')}"
                        }
                        json  {
                            render "${message(code: 'default.logout.success.label', default: 'Logout successfully')}"
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