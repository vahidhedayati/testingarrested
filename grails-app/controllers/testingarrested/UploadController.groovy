package testingarrested

import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController

class UploadController extends ArrestedController {

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
            Upload instance = Upload.get(id)
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
                renderNotFound(id, "Upload")
            }
        }
        else{
            renderMissingParam("id")
        }
    }

    def list() {
        def instances = Upload.list()
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
            Upload instance = new Upload() 
                        if(data.attachment) instance.attachment = data.attachment
                        
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
            renderMissingParam("Upload")
        }
    }

    def update() {
        if (params.instance) {
            def data = JSON.parse(params.instance)
            Upload instance = Upload.get(data.id as Long)
            if(instance){ 
                            if(data.attachment) instance.attachment = data.attachment
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
                renderNotFound(data.id, "Upload")
            }
        }
        else{
            renderMissingParam("Upload")
        }
    }

    def delete(Long id) {
        if (id){
            Upload instance = Upload.get(id)
            if (instance){
                instance.delete(flush: true)
                withFormat {
                    xml {
                        response.status = 200
                        render "Upload deleted"
                    }
                    json {
                        response.status = 200
                        render "Upload deleted"
                    }
                }
            }
            else{
                renderNotFound(id, "Upload")
            }
        }
        else{
            renderMissingParam("id")
        }
    }
}
