function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  var loc = read('locators.json');
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    locators: loc,
    webUrl: "https://galaxy.ansible.com/",
    apiUrl: "https://galaxy.ansible.com/api/internal/ui/search/?order_by=-relevance&page=1"
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
  
  return config;
}