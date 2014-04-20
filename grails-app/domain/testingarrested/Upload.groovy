package testingarrested

class Upload {
	byte[] attachment
    static constraints = {
		attachment(maxSize: 8388608, blank:false, minSize: 1024) // 1MB
    }
	static mapping = {
		attachment type: "binary" // or "blob"?
	}	
}
