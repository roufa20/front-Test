 test_data=[{"q":"Kids","count":5,"search_criteria":"search_query"}
            ,{"q":"Josette","count":16,"search_criteria":"search_query"}
            ,{"q":"551450031","count":1,"search_criteria":"search_customer_code"}
            ,{"q":"0402332397","count":1,"search_criteria":"search_msisdn"}]
// add 7 to the number of test for every data in test_data
number_test=18+test_data.length*7
casper.test.begin('Search Page Test', number_test, function suite(test) {
  casper.start(site + 'login', function() {

            globalPageTests(this);
            
            test.assertExists('#command', "login div is found");

            this.echo("login Now");
            //Login
            login(this);

        casper.then(function() {  
          this.capture('img/'+timestamp+'/AfterLogin.png');
          test.assertUrlMatch(/gosearch/, "is connected success");
          test.assertTitle("Global Search - Exalead OneCall","Page name is correct")

          test.assertExists('.searchFormContent', "Search Form is found");
          test.assertExists('.searchable_criteria', "search Options is found");
          
         
        
        });

        casper.then(function() {
           this.fill('form[action="customersearch"]', {
              'q': "#all"
          }, true);
          this.evaluate(function() {
            document.getElementsByClassName("btn-search")[0].click();
          });
        });

        casper.then(function(){

            checkSearchStructure(test)  

            //looking for 10 result from serch query
            test.assertEvalEquals(function() {
                return parseInt($(document.querySelectorAll('div.searchWidget.navigationHeader > div > span:nth-child(5)')).text())
            }, 125, 'Found 125 search results');

            //serch page screenShot
            this.capture('img/'+timestamp+'/resultPage.png');

        })
        for (data in test_data){


         searchCustomer(this,test,test_data[data])
        }

  });

  casper.run(function() {
    test.done();
  });

});