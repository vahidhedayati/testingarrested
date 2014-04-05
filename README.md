

BuildConfig.groovy
```
compile ':arrested:1.3'
```

ctrl alt shift g 
```
create-arrested-app

```
or grails command:
```
grails create-arrested-app
```



ctrl alt shift g 
```
create-domain-class Books


create-domain-class Authors

```

domainClass Books.groovy:
```
package grails.arrested.tester

class Books {
	
	String name
	Authors author
    static constraints = {
    }
	
	String toString() {
		"${name}"
	}
}
```

domainClass Authors.groovy:
```
package grails.arrested.tester

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

Create controllers:
```
create-arrested-controller Books
create-arrested-controller Authors
```

Create views:
```
create-arrested-view Books
create-arrested-view Authors
```


BootStrap:
```
import org.apache.shiro.crypto.hash.Sha256Hash

import arrested.ArrestedToken
import arrested.ArrestedUser

class BootStrap {

   def init = { servletContext ->
	ArrestedUser user,user1
		ArrestedToken token,token1
		
		user = new ArrestedUser(
			username: "me@domain.com",
			passwordHash: new Sha256Hash("password").toHex(),
			dateCreated: new Date()
		).save()
		
		 //Create tokens for users
		token = new ArrestedToken(
			token: 'token',
			valid: true,
			owner: user.id
		).save(flush: true)
		user.setToken(token.id)
		user.save()
		
    
    }
    def destroy = {
    }
}
```

Done


Limitations:

1. The relationship does not appear to be working or passed between authors and books - possibly using a true DB will get around this issue, since a refresh to main site also logs user back out.

2. Your project name should not have - (dashes) for some reason an example project called arrested-test doing this exact task bypasses authentication - and does not allow any record manipluation, after a few tests it turned out to be related to dashes in project name.
 
