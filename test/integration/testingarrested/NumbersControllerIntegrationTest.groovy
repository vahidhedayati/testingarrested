package testingarrested



import static org.junit.Assert.*
import org.junit.*

class NumbersControllerIntegrationTest {
    def NumbersControllerTest,tokenAdmin

    @Before
     void setUp() {

        NumbersControllerTest = new NumbersController()
        tokenAdmin = ArrestedUser.findByUsername('user@test.me')?.token.token
    }

    @After
    void tearDown() {
        // Tear down logic here
    }

    @Test
    void testGetById(){
        NumbersControllerTest.params.id =  1
        NumbersControllerTest.getById()
        assertNotNull(NumbersControllerTest.response.json)
    }

    @Test
    void testGetAll(){
        NumbersControllerTest.getAll()
        assertNotNull(NumbersControllerTest.response)
        assert NumbersControllerTest.response.json?.id.size() >= 0
    }

    @Test
    void testCreate() {
        NumbersControllerTest.params.Numbers = [] //We must type here the required attributes for the class
        NumbersControllerTest.create()
        assertEquals(NumbersControllerTest.response.json.response,"Numbers_created")
        assert NumbersControllerTest.response != null
        assertNotNull(Numbers.findById(NumbersControllerTest.response.json.id))
    }

    @Test
    void testUpdate() {
        NumbersControllerTest.params.Numbers = [id: 1L]//We need to search for a specific attribute of the class
        NumbersControllerTest.update()
        assertEquals(NumbersControllerTest.response.json?.response,"Numbers_updated")
    }

    @Test
    void testDelete(){
        NumbersControllerTest.params.id = 1L //We need to search for a specific attribute of the class
        NumbersControllerTest.delete()
        assertEquals(response.json.response,"Numbers_deleted")
        assertNull(Numbers.findById(NumbersControllerTest.params.id as Long))
    }
}