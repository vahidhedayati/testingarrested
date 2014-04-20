package testingarrested


class Books {
	
	String name
	String content
	Integer orderby
	Integer pricerange
	Boolean displayOnMenu=false
	static belongsTo = [ author: Authors]
	static constraints = {
		name(minLength: 5, maxLength:20,unique:true, blank: false, nullable: false, size:5..20,)	
		pricerange min:4, max:10
	}	
	static mapping = {
		content type: 'text'
		orderby defaultValue: 1
		displayOnMenu defaultValue: false
		
	}
	String toString() {
		"${name}"
	}

}
