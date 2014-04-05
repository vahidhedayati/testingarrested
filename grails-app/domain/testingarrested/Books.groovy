package testingarrested


class Books {
	
	String name
	//Authors author
	static belongsTo = [ author: Authors]
	static constraints = {
	}
	
	String toString() {
		"${name}"
	}
}
