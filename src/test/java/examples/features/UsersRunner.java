package examples.features;
import com.intuit.karate.junit5.Karate;

class UsersRunner {
    
    @Karate.Test
    Karate testSearch() {
        return Karate.run("search").relativeTo(getClass());
    }    

}
