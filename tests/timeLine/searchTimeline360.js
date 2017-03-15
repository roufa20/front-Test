casper.test.begin('Timeline Test', 11, function suite(test) {

    casper.start(site + 'login', function() {

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

            this.evaluate(function() {
                $('.contentWrapper h3 div a')[0].click();
            });
        });

        casper.then(function() {
            //Test Time line
            //resizeAction
            this.evaluate(function() {
              $('.trackbtn a')[1].click();
            })
            this.wait(2000, function() {
                this.capture('img/' + timestamp + '/timelinePage.png');
                this.evaluate(function() {
                  $('#resizeAction').click();
                })
            });
            this.wait(1000, function() {
                //time line page is Open
                test.assertSelectorHasText('.widgetHeader', 'Timeline');
                test.assertExists('.controls ul.controlCategory', "filter control of timeline is found");
                test.assertExists('.contentEvent .post-wrapper .content img', "SLA image exist");
                //contentEvent
                test.assertExists('.contentEvent', "timeline container");
                this.capture('img/' + timestamp + '/timelineFullPage.png');
            });
        });
    });

    casper.run(function() {
        test.done();
    });

});