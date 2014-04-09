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
            if (ArrestedUser.findByUsername(data.username as String)) {
                renderConflict("Username used")
            } else {
                ArrestedUser user = new ArrestedUser(username:data.username, passwordHash: new Sha256Hash(data.passwordHash as String).toHex())
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
            renderMissingParam("user")
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