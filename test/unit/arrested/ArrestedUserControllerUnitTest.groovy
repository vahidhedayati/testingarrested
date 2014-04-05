package arrested



import static org.junit.Assert.*

import grails.test.mixin.*
import grails.test.mixin.support.*
import org.junit.*


@TestMixin(GrailsUnitTestMixin)
@TestFor(ArrestedUserController)
@Mock([ArrestedUser,ArrestedToken])

class ArrestedUserControllerUnitTest {
    ArrestedUser user,user1
    ArrestedToken token,token1

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

        user1 = new ArrestedUser(
                username: 'user1@test.me',
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

        token1 = new ArrestedToken(
                token: 'token1',
                valid: true,
                owner: user1.id
        ).save(flush: true)
        user1.setToken(token1)
        user1.save()
    }

    void tearDown() {
        // Tear down logic here
    }

    void testGetCurrent() {
        params.token = token.token
        controller.getCurrent()
        assertNotNull(response.json)
        assertEquals(response.json?.id,1)
        assertEquals(response.json?.username,'user@test.me')
        assertEquals(response.json?.token,params.token)
    }

    void testGetAll(){
        controller.getAll()
        assertNotNull(response)
        assert response.json?.id.size() >= 0
        if(response.json?.id.size() > 0) assert response.json.id.contains(1)
    }

    void testCreate(){
        params.user = [email: "create@test.me", passwordHash:'admin']
        controller.create()
        assert response.json?.response == "user_created"
        assertNotNull(ArrestedUser.findByUsername(params.user.email))
        assertEquals(ArrestedUser.findByUsername(params.user.email).name,params.user.name)
    }

    void testCreateFail(){
        params.user = [email: "user1@test.me", passwordHash:'admin']
        controller.create()
        assertEquals(response.json?.response,"email_used")
        assertNotNull(ArrestedUser.findByUsername(params.user.email))
    }

    void testUpdate(){
        params.token = token.token
        params.user = [username: 'update@test.me']
        controller.update()
        assertEquals(response.json.response,'user_updated')
        assertNotNull(ArrestedUser.findByUsername(params.user.username))
    }

    void testUpdateFail(){
        params.token = token.token
        params.user = [username: 'user1@test.me']
        controller.create()
        assertEquals(response.json?.response,"email_used")
        assertNotNull(ArrestedUser.findByUsername(params.user.email))
    }

    void testChangePassword(){
        params.token = token.token
        params.currentPassword = 'admin'
        params.newPassword = 'admin123'
        controller.changePassword()
        assertEquals(response.json.response,'user_updated')
        assertEquals(user.passwordHash,params.newPassword as String)
    }

    void testChangePasswordIncorrect(){
        params.token = token.token
        params.currentPassword = 'admin1'
        params.newPassword = 'admin123'
        controller.changePassword()
        assertEquals(response.json.response,'password_incorrect')
    }

    void testDeleteAccount(){
        params.token = token1.token
        controller.deleteAccount()
        assert response.json.response == 'user_deleted'
    }
}