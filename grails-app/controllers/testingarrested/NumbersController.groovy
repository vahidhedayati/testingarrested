package testingarrested

import grails.converters.JSON
import grails.converters.XML
import arrested.ArrestedController

class NumbersController extends ArrestedController {

    static allowedMethods = [show: "GET", list: "GET", save: "POST", update: "PUT", delete: "DELETE"]

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
                renderNotFound(id, "Numbers")
            }
        }
        else{
            renderMissingParam("id")
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
        if (params.instance) {
            def data = JSON.parse(params.instance)
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
				print "AAAA--------------"+instance
                render409orEdit(instance)
            }
        }
        else{
            renderMissingParam("Numbers")
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
                renderNotFound(data.id, "Numbers")
            }
        }
        else{
            renderMissingParam("Numbers")
        }
    }

    def delete(Long id) {
        if (id){
            Numbers instance = Numbers.get(id)
            if (instance){
                instance.delete(flush: true)
                withFormat {
                    xml {
                        response.status = 200
                        render "Numbers deleted"
                    }
                    json {
                        response.status = 200
                        render "Numbers deleted"
                    }
                }
            }
            else{
                renderNotFound(id, "Numbers")
            }
        }
        else{
            renderMissingParam("id")
        }
    }
}
