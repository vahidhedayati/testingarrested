package arrested


class SecurityFilters {
    def filters = {
        arrested(uri: "/**/#/**") {
            before = {
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
