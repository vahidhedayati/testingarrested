

BuildConfig.groovy
```
compile ':arrested:1.5'
```

ggts (ctrl alt shift g) or grails command line run: 
```
create-arrested-app

```
or from command line run:
```
grails create-arrested-app
```



ggts (ctrl alt shift g) or grails command line run: 
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
```

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
```groovy
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


