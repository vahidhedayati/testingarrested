package testingarrested



import org.junit.*
import static org.junit.Assert.*
import grails.test.mixin.*
import arrested.ArrestedUser
import arrested.ArrestedToken
import grails.test.mixin.support.*

@TestFor(UploadController)
@Mock([ArrestedUser,ArrestedToken])

class UploadControllerUnitTest {
    ArrestedUser user
    ArrestedToken token
    Upload UploadTest

    void setUp() {
        // Tear down logic here
    }

    void tearDown() {
        // Tear down logic here
    }

    void testGetAll(){
        controller.getAll()
        assertNotNull(response)
        assert response.json?.id.size() >= 0
    }

    void testCreate(){
        params.Upload = [] //We must type here the required attributes for the class
        controller.create()
        assert response.json?.response == "Upload_created"
        assertNotNull(response.json.id)
        assertNotNull(Upload.findById(response.json.id as Long))
    }

    void testUpdate(){
        params.Upload = [id:1]
        controller.update()
        assertEquals(response.json.response,"Upload_updated")
    }

    void testDelete(){
        params.id = 1
        controller.delete()
        assertEquals(response.json.response,"Upload_deleted")
        assertNull(Upload.findById(params.id as Long))
    }
}