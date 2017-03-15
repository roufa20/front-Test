casper.test.begin('i18n Test', 15, function suite(test) {

    casper.start(site + 'login', function() {
        globalPageTests(this);

        test.assertExists('#command', "login div is found");

        this.echo("login Now");
        //Login
        login(this);


        casper.then(function() {

            var somePartOfText = 'Nom complet';
            test.assertEval(
                function(varFromCasperContext) {
                    return $($('.searchable_criteria label')[2]).html() != -1;
                },
                'i18n fr gosearch True',
                somePartOfText
            );
        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[1].click();
            });
        })

        casper.then(function() {

            var somePartOfText = 'Fullname';
            casper.then(function() {
                test.assertEval(
                    function(varFromCasperContext) {
                        return $($('.searchable_criteria label')[2]).html() != -1;
                    },
                    'i18n en gosearch True',
                    somePartOfText
                );
            })
        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[0].click();
            });
        })

        casper.then(function() {
            this.evaluate(function() {
                document.getElementsByClassName("btn-search")[0].click();
            });
        });

        casper.then(function() {
            var somePartOfText = 'Aucun document ne correspond à votre recherche';

            test.assertEval(
                function(varFromCasperContext) {
                    return $($('.noresult h3')[0]).text() != -1;
                },
                'i18n fr Noresult True',
                somePartOfText
            );
        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[1].click();
            });
        })

        casper.then(function() {
            var somePartOfText = 'No document matched your search';
            test.assertEval(
                function(varFromCasperContext) {
                    return $($('.noresult h3')[0]).text() != -1;
                },
                'i18n en Noresult True',
                somePartOfText
            );
        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[0].click();
            });
        })

        casper.then(function() {
            this.evaluate(function() {
                document.getElementsByClassName("btn-nav searchFormToggle")[0].click();
            });
        });

        casper.then(function() {
            this.fill('form[action="customersearch"]', {
                'q': "#all"
            }, true);
        });

        casper.then(function() {
            var somePartOfText = 'Segment valeur :';
            test.assertEval(
                function(varFromCasperContext) {
                    return $($('span:contains("Segment valeur")')[0]).text() != -1;
                },
                'i18n fr customersearch True',
                somePartOfText
            );
        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[1].click();
            });
        })

        casper.then(function() {
            var somePartOfText = 'Segment value :';
            test.assertEval(
                function(varFromCasperContext) {
                    return $($('span:contains("Segment value")')[0]).text() != -1;
                },
                'i18n en customersearch True',
                somePartOfText
            );
        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[0].click();
            });
        })


        casper.then(function() {
            this.evaluate(function() {
                $('.contentWrapper h3 div a')[0].click();
            });
        })

        casper.then(function() {

            var somePartOfText = ' Parc installé';
            test.assertEval(
                function(varFromCasperContext) {
                    return $($('span:contains("Parc installé")')[0]).text() != -1;
                },
                'i18n fr customer_360 True',
                somePartOfText
            );

        })

        casper.then(function() {
            this.evaluate(function() {
                $('.language-choices label')[1].click();
            });
        })


        casper.then(function() {

            var somePartOfText = ' INSTALLED PRODUCTS';
            test.assertEval(
                function(varFromCasperContext) {
                    return $($('span:contains(" INSTALLED PRODUCTS")')[0]).text() != -1;
                },
                'i18n en customer_360 True',
                somePartOfText
            );
        })

    });

    casper.run(function() {
        test.done();
    });

});
