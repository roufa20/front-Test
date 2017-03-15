
casper.test.begin('Similar Profils Test', 8, function suite(test) {

      casper.start(site + 'login', function(){

             globalPageTests(this);
            
            test.assertExists('#command', "login div is found");

            this.echo("login Now");
            //Login
            login(this);

          casper.then(function() {    
            this.fill('form[action="customersearch"]', {
                'q': "#all"
            }, true);
          });
  
        casper.then(function() {
          this.evaluate(function() {
            document.getElementsByClassName("btn-search")[0].click();
          });
        });

        casper.then(function(){
            this.evaluate(function() {
                $('.contentWrapper h3 div a')[0].click();
              });
        })        

      casper.then(function() {          
          //Test Time line
          //resizeAction
          this.evaluate(function() {
            $('.trackbtn a')[2].click();
          });
        });  

  casper.then(function() {
        this.wait(1000, function() {
          this.waitForSelector(".isa_users",
              function pass () {
                  test.pass("Found Similar Profils");
              },
              function fail () {
                  test.fail("Did not load element Similar Profils");
              }
          );
           this.capture('img/'+timestamp+'/similar_profil.png');
          });
        });
    });


  casper.run(function() {
    test.done();
  });

});