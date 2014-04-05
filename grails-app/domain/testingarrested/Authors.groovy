package testingarrested

class Authors {
	String firstName
	String surName
	static hasMany = [ books: Books]
	static constraints = {
	}
	
	
	String toString() {
		"${firstName}:${surName}"
	}
}