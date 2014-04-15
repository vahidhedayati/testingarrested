package testingarrested



import org.junit.*
import static org.junit.Assert.*
import grails.test.mixin.*
import arrested.ArrestedUser
import arrested.ArrestedToken
import grails.test.mixin.support.*

@TestFor(NumbersController)
@Mock([ArrestedUser,ArrestedToken])

class NumbersControllerUnitTest {
    ArrestedUser user
    ArrestedToken token
    Numbers NumbersTest

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
        params.Numbers = [] //We must type here the required attributes for the class
        controller.create()
        assert response.json?.response == "Numbers_created"
        assertNotNull(response.json.id)
        assertNotNull(Numbers.findById(response.json.id as Long))
    }

    void testUpdate(){
        params.Numbers = [id:1]
        controller.update()
        assertEquals(response.json.response,"Numbers_updated")
    }

    void testDelete(){
        params.id = 1
        controller.delete()
        assertEquals(response.json.response,"Numbers_deleted")
        assertNull(Numbers.findById(params.id as Long))
    }
}