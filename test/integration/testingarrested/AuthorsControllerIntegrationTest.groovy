package testingarrested



import static org.junit.Assert.*
import org.junit.*

class AuthorsControllerIntegrationTest {
    def AuthorsControllerTest,tokenAdmin

    @Before
     void setUp() {

        AuthorsControllerTest = new AuthorsController()
        tokenAdmin = ArrestedUser.findByUsername('user@test.me')?.token.token
    }

    @After
    void tearDown() {
        // Tear down logic here
    }

    @Test
    void testGetById(){
        AuthorsControllerTest.params.id =  1
        AuthorsControllerTest.getById()
        assertNotNull(AuthorsControllerTest.response.json)
    }

    @Test
    void testGetAll(){
        AuthorsControllerTest.getAll()
        assertNotNull(AuthorsControllerTest.response)
        assert AuthorsControllerTest.response.json?.id.size() >= 0
    }

    @Test
    void testCreate() {
        AuthorsControllerTest.params.Authors = [] //We must type here the required attributes for the class
        AuthorsControllerTest.create()
        assertEquals(AuthorsControllerTest.response.json.response,"Authors_created")
        assert AuthorsControllerTest.response != null
        assertNotNull(Authors.findById(AuthorsControllerTest.response.json.id))
    }

    @Test
    void testUpdate() {
        AuthorsControllerTest.params.Authors = [id: 1L]//We need to search for a specific attribute of the class
        AuthorsControllerTest.update()
        assertEquals(AuthorsControllerTest.response.json?.response,"Authors_updated")
    }

    @Test
    void testDelete(){
        AuthorsControllerTest.params.id = 1L //We need to search for a specific attribute of the class
        AuthorsControllerTest.delete()
        assertEquals(response.json.response,"Authors_deleted")
        assertNull(Authors.findById(AuthorsControllerTest.params.id as Long))
    }
}