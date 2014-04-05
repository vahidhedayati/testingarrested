package arrested



import static org.junit.Assert.*
import org.junit.*

class AuthControllerIntegrationTests {
    private authCont = new AuthController()

    @Before
    void setUp() {
        // Setup logic here

        ArrestedUser userTest = ArrestedUser.findByUsername('user@test.me')
        if(!userTest){
            //Create User for test
            new ArrestedUser(
                    username: "user@test.me",
                    passwordHash: "admin",
                    dateCreated: new Date()
            ).save(flush: true, failOnError: true)
        }
    }

    @After
    void tearDown() {
        // Tear down logic here
    }

    @Test
    void testLogin() {
        authCont.params.username = 'user@test.me'
        authCont.params.passwordHash = 'admin'
        authCont.login()
        assertEquals(authCont.response.json?.username,authCont.params.username)
        assertNotNull(authCont.response.json.token)
    }

    @Test
    void testLogout(){
        authCont.params.token = ArrestedUser.findByUsername('user@test.me').token.token
        authCont.logout()
        assertEquals(authCont.response.json.response,'logout_successfully')
        assertEquals(ArrestedToken.findByToken(authCont.params.token as String).owner.token.valid, false)
    }
}