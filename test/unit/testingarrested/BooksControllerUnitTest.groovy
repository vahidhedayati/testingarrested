package testingarrested



import org.junit.*
import static org.junit.Assert.*
import grails.test.mixin.*
import arrested.ArrestedUser
import arrested.ArrestedToken
import grails.test.mixin.support.*

@TestFor(BooksController)
@Mock([ArrestedUser,ArrestedToken])

class BooksControllerUnitTest {
    ArrestedUser user
    ArrestedToken token
    Books BooksTest

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
        params.Books = [] //We must type here the required attributes for the class
        controller.create()
        assert response.json?.response == "Books_created"
        assertNotNull(response.json.id)
        assertNotNull(Books.findById(response.json.id as Long))
    }

    void testUpdate(){
        params.Books = [id:1]
        controller.update()
        assertEquals(response.json.response,"Books_updated")
    }

    void testDelete(){
        params.id = 1
        controller.delete()
        assertEquals(response.json.response,"Books_deleted")
        assertNull(Books.findById(params.id as Long))
    }
}