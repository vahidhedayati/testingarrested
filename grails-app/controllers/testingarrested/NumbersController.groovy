package testingarrested

import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController

class NumbersController extends ArrestedController {

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
            Numbers instance = Numbers.get(id)
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
				renderNotFound(id, "${message(code: 'default.Numbers.notfound.label', default:'Numbers not found')}")
				
            }
        }
        else{
            renderMissingParam("${message(code: 'default.id.missing.label', default: 'id missing')}")
        }
    }

    def list() {
        def instances = Numbers.list()
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
			Numbers instance = new Numbers() 
						if(data.firstNumber) instance.firstNumber = data.firstNumber
						

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
			renderMissingParam("${message(code: 'default.Numbers.missing.label', default: 'Numbers missing')}")
        }
    }

    def update() {
        if (params.instance) {
            def data = JSON.parse(params.instance)
            Numbers instance = Numbers.get(data.id as Long)
            if(instance){ 
                            if(data.firstNumber) instance.firstNumber = data.firstNumber
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
				renderNotFound(data.id, "${message(code: 'default.Numbers.notfound.label', default: 'Numbers not found')}")
            }
        }
        else{
			renderMissingParam("${message(code: 'default.Numbers.missing.label', default: 'Numbers missing')}")
        }
    }

    def delete(Long id) {
        if (id){
            Numbers instance = Numbers.get(id)
            if (instance){
                instance.delete(flush: true)
              	renderSuccess(id, "${message(code: 'default.Numbers.deleted.label', default: 'Numbers deleted')}")
            }
            else{
				renderNotFound(id, "${message(code: 'default.Numbers.notfound.label', default: 'Numbers not found')}")
            }
        }
        else{
			renderMissingParam("${message(code: 'default.id.missing.label', default: 'id missing')}")
        }
    }
}
