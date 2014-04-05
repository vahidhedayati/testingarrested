package testingarrested



import static org.junit.Assert.*
import org.junit.*

class BooksControllerIntegrationTest {
    def BooksControllerTest,tokenAdmin

    @Before
     void setUp() {

        BooksControllerTest = new BooksController()
        tokenAdmin = ArrestedUser.findByUsername('user@test.me')?.token.token
    }

    @After
    void tearDown() {
        // Tear down logic here
    }

    @Test
    void testGetById(){
        BooksControllerTest.params.id =  1
        BooksControllerTest.getById()
        assertNotNull(BooksControllerTest.response.json)
    }

    @Test
    void testGetAll(){
        BooksControllerTest.getAll()
        assertNotNull(BooksControllerTest.response)
        assert BooksControllerTest.response.json?.id.size() >= 0
    }

    @Test
    void testCreate() {
        BooksControllerTest.params.Books = [] //We must type here the required attributes for the class
        BooksControllerTest.create()
        assertEquals(BooksControllerTest.response.json.response,"Books_created")
        assert BooksControllerTest.response != null
        assertNotNull(Books.findById(BooksControllerTest.response.json.id))
    }

    @Test
    void testUpdate() {
        BooksControllerTest.params.Books = [id: 1L]//We need to search for a specific attribute of the class
        BooksControllerTest.update()
        assertEquals(BooksControllerTest.response.json?.response,"Books_updated")
    }

    @Test
    void testDelete(){
        BooksControllerTest.params.id = 1L //We need to search for a specific attribute of the class
        BooksControllerTest.delete()
        assertEquals(response.json.response,"Books_deleted")
        assertNull(Books.findById(BooksControllerTest.params.id as Long))
    }
}