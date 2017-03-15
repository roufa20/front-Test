
casper.test.begin('Customer 360 Test', 17, function suite(test) {


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
      //this.echo(userId);
      test.assertTitle("Customer 360°","Page name is correct");
  
      //left menu
      test.assertExists('.nav-region', "Navigation bare is found");
  
      //Top div
      test.assertExists('.top-wrapper', "Top div is found");
  
      //Parc Div
      test.assertExists('.parc', "Parc instaler is found");
  
      //Information financier 
      test.assertExists('.info-financ', "Information financier  is found");
  
      //Fidelisation
      test.assertExists('.fidelisation', "Fidelisation is found");
  
      //Equipmenet
      test.assertExists('.equipement', "Equipmenet  is found");

      //Timeline + Application
      test.assertExists('.sidebar-region', "Timeline + Application is found");

      //list application Application
      test.assertExists('.OneCallTelcoApplication', "Applications List is found");
      
      this.evaluate(function() {
            $('.trackbtn a')[2].click();
          });

      casper.then(function() {
        test.assertExists('.OneCallTelcoSimilarProfiles', "Similar Profiles is found");
      })

      this.capture('img/'+timestamp+'/Search360Page.png');

  	});
  });




  casper.run(function() {
    test.done();
  });

});