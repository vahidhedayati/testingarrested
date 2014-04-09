package testingarrested


class Books {
	
	String name
	String content
	Integer orderby
	Integer pricerange
	Boolean displayOnMenu=false
	byte[] attachment
	//Authors author
	static belongsTo = [ author: Authors]
	static constraints = {
		name(maxLength:200,unique:true, blank: false, nullable: false, size:5..20,)
		attachment(maxSize: 8388608, blank:false, minsize: 1) // 1MB
		pricerange min:1, max:99
	}	
	static mapping = {
		attachment type: "binary" // or "blob"?
		content type: 'text'
		orderby defaultValue: 1
		displayOnMenu defaultValue: false
		
	}
	String toString() {
		"${name}"
	}

}
