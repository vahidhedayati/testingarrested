package arrested



import static org.junit.Assert.*

import grails.test.mixin.*
import grails.test.mixin.support.*
import org.junit.*


@TestFor(ArrestedUserController)
@Mock([ArrestedUser,ArrestedToken])
class AuthControllerUnitTest {
    ArrestedUser user,user1
    ArrestedToken token

    void setUp() {
        // Setup logic here

        mockForConstraintsTests(ArrestedUser)
        mockForConstraintsTests(ArrestedToken)

        //Create User for test
        user = new ArrestedUser(
                username: "user@test.me",
                passwordHash: "admin",
                dateCreated: new Date()
        ).save()


        //Create tokens for users
        token = new ArrestedToken(
                token: 'token',
                valid: true,
                owner: user.id
        ).save(flush: true)
        user.setToken(token)
        user.save()
    }

    void tearDown() {
        // Tear down logic here
    }

    void testLogin() {
        params.passwordHash = 'admin'
        params.username = 'user@test.me'
        controller.login()
        assert response.json.username == 'user@test.me'
        assert response.json.id == 1
        assertNotNull(user.token)
    }

    void testLogout(){
        params.token = 'token'
        controller.logout()
        assertEquals(response.json.response,'logout_successfully')
        assertEquals(user1.token.valid,false)
    }
}