

 casper.test.begin('Home page Test', 7, function suite(test) {
        casper.start(site+'login', function() {

            //this.echo(this.getTitle());
            globalPageTests(this);
            
            test.assertExists('#command', "login div is found");

            this.echo("login Now");
            //Login
            login(this);    
            this.capture('img/'+timestamp+'/BeforeLogin.png');
        });

    casper.run(function() {
        test.done();
    });

});