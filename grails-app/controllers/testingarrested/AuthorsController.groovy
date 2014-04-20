package testingarrested

import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController

class AuthorsController extends ArrestedController {

    static allowedMethods = [show: "GET", list: "GET", save: "POST", update: "PUT", delete: "DELETE"]
	def listing() { 
		withFormat {
			html {
				render(view: "list")
			}
		}
	}
	def edit() {}
	
    def show(Long id) {
        if(id){
            Authors instance = Authors.get(id)
            if(instance){
                withFormat{
                    xml {
                        render instance as XML
                    }
                    json {
                        render instance as JSON
                    }
                }
            }
            else{
                renderNotFound(id, "Authors")
            }
        }
        else{
            renderMissingParam("id")
        }
    }

    def list() {
        def instances = Authors.list()
        withFormat{
            xml {
                render instances as XML
            }
            json {
                render instances as JSON
            }
        }
    }

    def save() {
        if (params.instance) {
            def data = JSON.parse(params.instance)
            Authors instance = new Authors() 
                        if(data.emailAddress) instance.emailAddress = data.emailAddress
                        
                        if(data.firstName) instance.firstName = data.firstName
                        
                        if(data.surName) instance.surName = data.surName
                        
            if(instance.save(flush: true)){
                withFormat {
                    xml {
                        response.status = 200
                        render instance as XML
                    }
                    json {
                        response.status = 200
                        render instance as JSON
                    }
                }
            }
            else{
                render409orEdit(instance)
            }
        }
        else{
            renderMissingParam("Authors")
        }
    }

    def update() {
        if (params.instance) {
            def data = JSON.parse(params.instance)
            Authors instance = Authors.get(data.id as Long)
            if(instance){ 
                            if(data.emailAddress) instance.emailAddress = data.emailAddress
                            
                            if(data.firstName) instance.firstName = data.firstName
                            
                            if(data.surName) instance.surName = data.surName
                            if(instance.save(flush: true)){
                    withFormat {
                        xml {
                            response.status = 200
                            render instance as XML
                        }
                        json {
                            response.status = 200
                            render instance as JSON
                        }
                    }
                }
                else{
                    render409orEdit(instance)
                }
            }
            else{
                renderNotFound(data.id, "Authors")
            }
        }
        else{
            renderMissingParam("Authors")
        }
    }

    def delete(Long id) {
        if (id){
            Authors instance = Authors.get(id)
            if (instance){
                instance.delete(flush: true)
                withFormat {
                    xml {
                        response.status = 200
                        render "Authors deleted"
                    }
                    json {
                        response.status = 200
                        render "Authors deleted"
                    }
                }
            }
            else{
                renderNotFound(id, "Authors")
            }
        }
        else{
            renderMissingParam("id")
        }
    }
}
