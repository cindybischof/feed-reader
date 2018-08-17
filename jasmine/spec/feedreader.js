/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are contained within the $() function,
 * since some of these tests may require DOM elements. This
 * ensures these tests won't run until the DOM is ready.
 */
$(function() {
    /* First test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed in the allFeeds
         * object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url defined', function() {
           for(let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         });

        /* Test loops through each feed in the allFeeds
         * object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() {
           for(let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.url).not.toBe('',"",null);
           }
         });
    });


    //Second test suite focused on the menu
    describe('The Menu', function(){
        // Test ensures the menu element is hidden by default
         it('hidden by default', function(){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Next two tests ensure the menu changes visibility when
          * the menuicon is clicked. First test checks that the menu
          * displays when clicked. Second test checks that the mneu
          * hides when clicked again.
          */
          it('display on click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
          });

          it('hide on click', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
      });

    //Third test suite focused on initial entries
    describe('Initial Entries', function(){
        /* Test ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry
         * element within the .feed container.
         * Note: loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
           loadFeed(0);
           done();
         });

         it('feed container not empty', function(done){
           expect($('.feed')).not.toBe('',"",null);
           done();
         });
    });

    // Fourth test suite focused on New Feed Selection
    /* Test ensures that when a new feed is loaded by the
    * loadFeed function that the content actually changes.
    * Note: loadFeed() is asynchronous. Loads two separate
    * feeds and saves the inner text from the first h1
    * header title from each feed and then compares the two.*/
    describe('New Feed Selection', function(){
        let feedOne;
        let feedTwo;
        beforeEach(function(done){
            loadFeed(0,function(){
            feedOne = $('h1.header-title')[0].innerText;

            loadFeed(1, function(){
            feedTwo = $('h1.header-title')[0].innerText;
            done();
            });
          });
        });
        it('content changes upon feed load', function(){
          expect(feedOne).not.toEqual(feedTwo);
       });
    });
}());
