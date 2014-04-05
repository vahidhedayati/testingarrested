class UrlMappings {
    static mappings = {
        "/"(view:"/index")
        "/$controller/$action?"(parseRequest: true)
    }
}
