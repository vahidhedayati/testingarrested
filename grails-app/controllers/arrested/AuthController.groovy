package arrested


import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController
import org.apache.shiro.crypto.hash.Sha256Hash

class AuthController extends ArrestedController {

    static allowedMethods = [login: "POST", logout: "GET"]

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
                        renderConflict("Username and/or password incorrect")
                    }
                }
                else{
                    renderConflict("Username and/or password incorrect")
                }
            }
            else{
                renderMissingParam("passwordHash")
            }
        }
        else{
            renderMissingParam("username")
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
                            render "Logout successfully"
                        }
                        json  {
                            render "Logout successfully"
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