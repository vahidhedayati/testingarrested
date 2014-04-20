package testingarrested



import static org.junit.Assert.*
import org.junit.*

class UploadControllerIntegrationTest {
    def UploadControllerTest,tokenAdmin

    @Before
     void setUp() {

        UploadControllerTest = new UploadController()
        tokenAdmin = ArrestedUser.findByUsername('user@test.me')?.token.token
    }

    @After
    void tearDown() {
        // Tear down logic here
    }

    @Test
    void testGetById(){
        UploadControllerTest.params.id =  1
        UploadControllerTest.getById()
        assertNotNull(UploadControllerTest.response.json)
    }

    @Test
    void testGetAll(){
        UploadControllerTest.getAll()
        assertNotNull(UploadControllerTest.response)
        assert UploadControllerTest.response.json?.id.size() >= 0
    }

    @Test
    void testCreate() {
        UploadControllerTest.params.Upload = [] //We must type here the required attributes for the class
        UploadControllerTest.create()
        assertEquals(UploadControllerTest.response.json.response,"Upload_created")
        assert UploadControllerTest.response != null
        assertNotNull(Upload.findById(UploadControllerTest.response.json.id))
    }

    @Test
    void testUpdate() {
        UploadControllerTest.params.Upload = [id: 1L]//We need to search for a specific attribute of the class
        UploadControllerTest.update()
        assertEquals(UploadControllerTest.response.json?.response,"Upload_updated")
    }

    @Test
    void testDelete(){
        UploadControllerTest.params.id = 1L //We need to search for a specific attribute of the class
        UploadControllerTest.delete()
        assertEquals(response.json.response,"Upload_deleted")
        assertNull(Upload.findById(UploadControllerTest.params.id as Long))
    }
}