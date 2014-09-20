package testingarrested

import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController
import java.text.SimpleDateFormat
class AuthorsController extends ArrestedController {

    def grailsApplication
    
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
				renderNotFound(id, "${message(code: 'default.Authors.notfound.label', default:'Authors not found')}")
				
            }
        }
        else{
            renderMissingParam("${message(code: 'default.id.missing.label', default: 'id missing')}")
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
		if (request.JSON.instance) {
			def data = request.JSON.instance
			Authors instance = new Authors() 
						
						  if(data.emailAddress) instance.emailAddress = data.emailAddress 
						
						
						
						  if(data.firstName) instance.firstName = data.firstName 
						
						
						
						  if(data.surName) instance.surName = data.surName 
						
						
						 
						  if(data.testDate) instance.testDate = setDate(data.testDate)
						
						

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
			renderMissingParam("${message(code: 'default.Authors.missing.label', default: 'Authors missing')}")
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
                            
                            if(data.testDate) instance.testDate = data.testDate
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
				renderNotFound(data.id, "${message(code: 'default.Authors.notfound.label', default: 'Authors not found')}")
            }
        }
        else{
			renderMissingParam("${message(code: 'default.Authors.missing.label', default: 'Authors missing')}")
        }
    }

    def delete(Long id) {
        if (id){
            Authors instance = Authors.get(id)
            if (instance){
                instance.delete(flush: true)
              	renderSuccess(id, "${message(code: 'default.Authors.deleted.label', default: 'Authors deleted')}")
            }
            else{
				renderNotFound(id, "${message(code: 'default.Authors.notfound.label', default: 'Authors not found')}")
            }
        }
        else{
			renderMissingParam("${message(code: 'default.id.missing.label', default: 'id missing')}")
        }
    }
    private setDate (String d) {
      String dFormat=grailsApplication?.config.arrested.dateFormat ?: 'dd/MM/yyyy'
      return (new SimpleDateFormat(dFormat)).parse(d)
    }
}
