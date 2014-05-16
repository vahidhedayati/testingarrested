package arrested

import grails.converters.JSON
import grails.converters.XML

class ArrestedController {

    def renderNotFound(id, className){
        withFormat{
            xml {
                response.status = 404
                render className+" "+id
            }
            json {
                response.status = 404
                render className+" "+id
            }
        }
    }

    def render409orEdit(instance){
        withFormat{
            xml {
                response.status = 409
                render instance.errors.allErrors as XML
            }
            json {
                response.status = 409
                render instance.errors.allErrors as JSON
            }
        }
    }

    def renderConflict(conflict){
        withFormat{
            xml {
                response.status = 409
                render conflict
            }
            json {
                response.status = 409
                render conflict
            }
        }
    }

	def renderSuccess(id, value) {
		withFormat{
			xml {
				response.status = 200
				render id+' '+value
			}
			json {
				response.status = 200
				render id+' '+value
			}
		}
	}
	
    def renderMissingParam(param){
        withFormat{
            xml {
                response.status = 412
                render param
            }
            json {
                response.status = 412
                render param
            }
        }
    }
}