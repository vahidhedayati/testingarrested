

BuildConfig.groovy
```
compile ':arrested:1.8'
```

ggts (ctrl alt shift g) or grails command line run: 
```
create-arrested-app

```
or from command line run:
```
grails create-arrested-app
```

This will show something like:
```
| Created file grails-app/domain/arrested/ArrestedToken.groovy
| Created file grails-app/domain/arrested/ArrestedUser.groovy
| Created file grails-app/controllers/arrested/ArrestedController.groovy
ArrestedController.groovy created
| Created file grails-app/controllers/arrested/ArrestedUserController.groovy
| Created file test/integration/arrested/ArrestedUserControllerIntegrationTest.groovy
| Created file test/unit/arrested/ArrestedUserControllerUnitTest.groovy
ArrestedUserController.groovy created and Unit & Integration Tests
| Created file web-app/js//userCtrl.js
| Created file web-app/Views/auth/login.html
userController.js and login.html created
| Created file grails-app/controllers/arrested/AuthController.groovy
| Created file test/integration/arrested/AuthControllerIntegrationTests.groovy
| Created file test/unit/arrested/AuthControllerUnitTest.groovy
| Created file grails-app/conf/arrested/SecurityFilters.groovy
UrlMappings.groovy updated
ApplicationResources.groovy updated
| Created file web-app/js//services.js
index.js created
main.gsp, index.gsp, arrested.css, _navbar.gsp updated
```

Now check out web-app js and web-app/Views 

Arrested plugin will produce a working project something very similar to what grails provides but with gsps as html inside:
``` 
web-app/Views/{domainClass}
```

Each time you create a new domainClass it updates web-app/index.js with the new pages, so in short angularJS 
is now controlling your site and these are the bits if you so wish to manually update.


Each time you create a domainClass and create-arrested-controller domainClass a js file is placed in this folder.
 




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

class Numbers {
	Integer firstNumber
    static constraints = {
		firstNumber min:1, max:99
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

Typical output from creating controllers :
```
|Created file grails-app/controllers/testingarrested/NumbersController.groovy
..
|Created file test/integration/testingarrested/NumbersControllerIntegrationTest.groovy
..
|Created file test/unit/testingarrested/NumbersControllerUnitTest.groovy
```


Create views:
```
create-arrested-view Books
create-arrested-view Authors
```

Typical output from view creation:
```
.........................................
|Created file web-app/Views/numbers/list.html
.
|Created file web-app/Views/numbers/edit.html
..
|Created file web-app/js//NumbersCtrl.js
index.js created
ApplicationResources.groovy updated
```

This has now created content in web-app folder, inside two folders js and Views
This now makes a complete site like you would get from a default grails site but now controlled from within these folders.

If you now open edit.html for numbers you will see something like:
```gsp
<div class="fieldcontain">
            <label for="firstNumber">
                firstNumber
            </label>
            <input name="firstNumber" type="number" min="1" max="99" data-ng-model='numbers.firstNumber'  required=""/>
        </div>
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


