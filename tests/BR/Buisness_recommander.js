
casper.test.begin('Buisness Recommander Test', 21, function suite(test) {

      casper.start(site + 'login', function(){

             globalPageTests(this);
            
            test.assertExists('#command', "login div is found");

            this.echo("login Now");
            //Login
            login(this);

          casper.then(function() {   
          this.wait(1000, function() { 
            this.fill('form[action="customersearch"]', {
                'q': "553450207"
            }, true);
          })
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
        this.wait(1000, function() {
            test.assertEvalEquals(function() {
                return $('.OCResultList').length
            }, 2, 'Found 2 Recommander');
            this.evaluate(function() {
              $('.btn-nav .fa-bell').click()
            });
            test.assertExists('.notifOn', "Buisness Recommander for client profile is printed");
            test.assertEvalEquals(function() {
                return $('div.OCResultList > ul > li.hit.hit-list.hit-default.businessRecommenderOutputStyle_1_1 > div > div > div.action-detail > div> div > h3').text()
             }, 'Ancienneté', 'Found "Ancienneté"" as first Recommandation for client profile');
            test.assertEvalEquals(function() {
                return $('div.OCResultList > ul > li.hit.hit-list.hit-default.businessRecommenderOutputStyle_1_6 > div > div > div.action-detail > div> div > h3').text()
             }, 'Conso Totale', 'Found "Conso Totale" as seconde Recommandation for client profile');
            this.evaluate(function() {
              $('.btn-nav .fa-bell').click()
            });
            test.assertDoesntExist('.notifOn', "Buisness Recommander for client profile is disabled");
          });
         
        });
         
        

  
   casper.then(function() {
        
            this.evaluate(function() {
             $('.searchWidget.parc.col-md-12.OneCallTelcoCollapsableReload.line-skin >h2').click()
            });
            
            this.wait(2000, function() {
              test.assertEvalEquals(function() {
                  return $('.OCResultList').length
              }, 3, 'Found 1 Recommandation');
              this.evaluate(function() {
                $('.searchWidget.parc.col-md-12.OneCallTelcoCollapsableReload.line-skin > h2 .notif').mousedown()
              });
              test.assertExists('.notifOn', "Buisness Recommander for all subscriptions is printed");
              test.assertEvalEquals(function() {
                return $('div.OCResultList > ul > li > div > div > div.action-detail > div.businessrecommender-why.businessrecommender-why_2_0 > div > h3').text()
              }, 'Produits Inactifs', 'Found "Produits Inactifs" as first Recommandation for all subscriptions');
              this.evaluate(function() {
              $('.searchWidget.parc.col-md-12.OneCallTelcoCollapsableReload.line-skin > h2 .notif').mousedown()
              });
              test.assertDoesntExist('.notifOn', "Buisness Recommander for all subscriptions is disabled");
            });            
  });      

  casper.then(function() {
    this.evaluate(function() {
          $('.searchWidget.parc.col-md-12.OneCallTelcoCollapsableReload.line-skin .forEachHit > div > h2')[0].click();
    })
     this.wait(2000, function() {
        this.evaluate(function() {
          $($('.searchWidget.parc.col-md-12.OneCallTelcoCollapsableReload.line-skin .forEachHit > div > h2 .notif')[0]).mousedown()
        });
        test.assertExists('.notifOn', "Buisness Recommander for first subscription is printed"); 
        test.assertEvalEquals(function() {
                return $('div.OCResultList > ul > li > div > div > div.action-detail > div.businessrecommender-why.businessrecommender-why_4_0 > div > h3').text()
        }, 'Délai de fin d\'Engagement', 'Found "Délai de fin d\'Engagement" as first Recommandation for the first subscription  with product_id 0402332301 type internet');
        test.assertEvalEquals(function() {
           return $('div.OCResultList > ul > li > div > div > div.action-detail > div.businessrecommender-why.businessrecommender-why_4_2 > div > h3').text()
        }, 'Offre Business Group', 'Found "Offre Business Group" as seconde Recommandation for the first subscription with product_id 0402332301 type internet');
        test.assertEvalEquals(function() {
          return $('div.OCResultList > ul > li > div > div > div.action-detail > div.businessrecommender-why.businessrecommender-why_4_6 > div > h3').text()
        }, 'Offre Business Data', 'Found "Offre Business Data" as third Recommandation for the first subscription with product_id 0402332301 type internet');

        this.evaluate(function() {
          $($('.searchWidget.parc.col-md-12.OneCallTelcoCollapsableReload.line-skin .forEachHit > div > h2 .notif')[0]).mousedown()
        });
        test.assertDoesntExist('.notifOn', "Buisness Recommander for first subscription is disabled");
     })
      
  }); 



})
   
  casper.run(function() {
    test.done();
  });

});