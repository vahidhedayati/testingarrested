package arrested


class SecurityFilters {
    def filters = {
        arrested(uri: "/**/#/**") {
            before = {
				
				// Small "logging" filter for controller & actions
				if (log.infoEnabled) {
					if (!params.password ) {
						log.info(!params.controller ? '/: ' + params : params.controller +"."+(params.action ?: "index")+": "+params)
					}else{
						log.info (params.controller+","+params.action+":"+params?.username)
					}
				}
				
                if(controllerName == 'auth' || (controllerName == 'arrestedUser' && actionName == 'save') || (!controllerName && !actionName)){
                    return true
                }
				
                if(params.token){
                    ArrestedToken token = ArrestedToken.findByToken(params.token as String)
                    if(token?.valid){
                        return true
                    }
                }
                return false
          
			
			}
		}
	}
}	
