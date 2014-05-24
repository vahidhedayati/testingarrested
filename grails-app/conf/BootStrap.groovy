import org.apache.shiro.crypto.hash.Sha256Hash

import testingarrested.Numbers
import arrested.ArrestedToken
import arrested.ArrestedUser

class BootStrap {

   def init = { servletContext ->
	ArrestedUser user,user1
		ArrestedToken token,token1
		
		user = new ArrestedUser(
			username: "admin",
			passwordHash: new Sha256Hash("admin").toHex(),
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
		
		for (i in 1..40) { 
			Numbers.findOrSaveWhere(firstNumber: i)
		}
				
    }
   	
    def destroy = {
    }
}

