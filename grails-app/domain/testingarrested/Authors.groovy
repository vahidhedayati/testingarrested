package testingarrested

class Authors {

	String firstName
	String surName
	String emailAddress
	static hasMany = [ books: Books]
	static constraints = {
		emailAddress(maxLength:50,email:true,unique:true)

	}
	
	
	String toString() {
		"${firstName}:${surName}"
	}
}