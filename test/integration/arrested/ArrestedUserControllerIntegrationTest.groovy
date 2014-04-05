package arrested



import static org.junit.Assert.*
import org.junit.*

class UserControllerIntegrationTests {
    def userCont,tokenAdmin,tokenUser

    @Before
    void setUp() {
        // Setup logic here
        userCont = new ArrestedUserController()
        tokenAdmin = ArrestedUser.findByUsername('user@test.me')?.token.token
        ArrestedUser UserTest = ArrestedUser.findByUsername('user@test.me')
        if(UserTest != null){
            new ArrestedUser(
                    username: "user@test.me",
                    passwordHash:'admin',
            ).save(flush: true, failOnError: true)
        }
    }

    void loginUser(userName, userPW){
        def authCont = new ArrestedToken()
        authCont.params.username = userName as String
        authCont.params.passwordHash = userPW as String
        authCont.login()
        tokenUser = authCont.response.json?.token
    }

    @After
    void tearDown() {
        // Tear down logic here
        ArrestedUser admin = ArrestedUser.findByUsername('user@test.me')
        admin?.setPasswordHash('admin')
        admin?.save(flush: true)
    }

    @Test
    void testCreate() {
        userCont.params.user = [email: "create@test.me",passwordHash:'admin']
        userCont.create()
        assert userCont.response.json.response == 'user_created'
        assertNotNull(ArrestedUser.findByUsername(userCont.params.user.email as String))
        assertEquals(ArrestedUser.findByUsername(userCont.params.user.email as String).name,userCont.params.user.name)
        loginUser(userCont.params.user.email as String,userCont.params.user.passwordHash as String)
    }

    @Test
    void testGetCurrent(){
        userCont.params.token = tokenAdmin
        userCont.getCurrent()
        assertNotNull(userCont.response.json.id)
        assertEquals(userCont.response.json.username,'user@test.me')
    }

    @Test
    void testUserCreateEmailUsed(){
        userCont.params.user = [email: "user@test.me",passwordHash:'admin']
        userCont.create()
        assert userCont.response.json.response == 'email_used'
        assertNotNull(ArrestedUser.findByUsername(userCont.params.user.email as String))
    }

    @Test
    void testUpdateEmailUsed(){
        userCont.params.token = ArrestedUser.findByUsername('user@test.me')?.token.token
        userCont.params.user = [username:'user@test.me']
        userCont.update()
        assertEquals(userCont.response.json?.response,'email_used')
        assertNotNull(ArrestedUser.findByUsername(userCont.params.user.username as String))

    }

    @Test
    void testUpdate(){
        userCont.params.token = ArrestedUser.findByUsername('create@test.me')?.token.token
        userCont.params.user = [username:'create@ourwod.me']
        userCont.update()
        assertEquals(userCont.response.json.response,'user_updated')
        assertNotNull(ArrestedUser.findByUsername(userCont.params.user.username))
    }

    @Test
    void testChangePasswordIncorrect(){
        userCont.params.token = ArrestedUser.findByUsername('create@test.me')?.token.token
        userCont.params.currentPassword = 'admin1'
        userCont.params.newPassword = 'admin123'
        userCont.changePassword()
        assertEquals(userCont.response.json.response,'password_incorrect')
    }

    @Test
    void testChangePassword(){
        userCont.params.token = ArrestedUser.findByUsername('create@test.me')?.token.token
        userCont.params.currentPassword = 'admin'
        userCont.params.newPassword = 'admin123'
        userCont.changePassword()
        assertEquals(userCont.response.json.response,'user_updated')
        assertEquals(ArrestedToken.findByToken(userCont.params.token as String).owner.passwordHash,userCont.params.newPassword as String)
    }

    @Test
    void testDelete(){
        userCont.params.token = ArrestedUser.findByUsername('create@test.me')?.token.token
        userCont.delete()
        assertEquals(userCont.response.json.response,'user_deleted')
        assertNull(ArrestedToken.findByToken(userCont.params.token as String))
    }
}