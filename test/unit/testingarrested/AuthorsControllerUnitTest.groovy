package testingarrested



import org.junit.*
import static org.junit.Assert.*
import grails.test.mixin.*
import arrested.ArrestedUser
import arrested.ArrestedToken
import grails.test.mixin.support.*

@TestFor(AuthorsController)
@Mock([ArrestedUser,ArrestedToken])

class AuthorsControllerUnitTest {
    ArrestedUser user
    ArrestedToken token
    Authors AuthorsTest

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
        params.Authors = [] //We must type here the required attributes for the class
        controller.create()
        assert response.json?.response == "Authors_created"
        assertNotNull(response.json.id)
        assertNotNull(Authors.findById(response.json.id as Long))
    }

    void testUpdate(){
        params.Authors = [id:1]
        controller.update()
        assertEquals(response.json.response,"Authors_updated")
    }

    void testDelete(){
        params.id = 1
        controller.delete()
        assertEquals(response.json.response,"Authors_deleted")
        assertNull(Authors.findById(params.id as Long))
    }
}