package testingarrested

import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController

class BooksController extends ArrestedController {

    static allowedMethods = [show: "GET", list: "GET", save: "POST", update: "PUT", delete: "DELETE"]

    def show(Long id) {
        if(id){
            Books instance = Books.get(id)
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
                renderNotFound(id, "Books")
            }
        }
        else{
            renderMissingParam("id")
        }
    }

    def list() {
        def instances = Books.list()
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
            Books instance = new Books() 
                        if(data.author) instance.author = testingarrested.Authors.get(data.author.id as Long)
                        
                        if(data.name) instance.name = data.name
                        
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
            renderMissingParam("Books")
        }
    }

    def update() {
        if (params.instance) {
            def data = JSON.parse(params.instance)
            Books instance = Books.get(data.id as Long)
            if(instance){ 
                            if(data.author) instance.author = testingarrested.Authors.get(data.author.id as Long)
                            
                            if(data.name) instance.name = data.name
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
                renderNotFound(data.id, "Books")
            }
        }
        else{
            renderMissingParam("Books")
        }
    }

    def delete(Long id) {
        if (id){
            Books instance = Books.get(id)
            if (instance){
                instance.delete(flush: true)
                withFormat {
                    xml {
                        response.status = 200
                        render "Books deleted"
                    }
                    json {
                        response.status = 200
                        render "Books deleted"
                    }
                }
            }
            else{
                renderNotFound(id, "Books")
            }
        }
        else{
            renderMissingParam("id")
        }
    }
}
