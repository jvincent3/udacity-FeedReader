/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
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


        it('all URL are defined and not empty', function() {
            allFeeds.map(function(x){
                expect(x.url).toBeDefined();
                expect(x.url).not.toBe('');
            });
        })

         it('it has a name defined', function() {
            allFeeds.map(function(x){
                expect(x.name.length).toBeGreaterThan(0);
                expect(x.name.length).toBeGreaterThan(0)
                expect(x.name).not.toBe('');
            });
         });
    });


    describe('The Menu', function() {

         const menuIcon = document.querySelector(".menu-icon-link");
         const body = document.querySelector('body');
         it('Menu hidden by default', function() {
            expect(body.className).toContain("menu-hidden");
         });

            it('menu is clicked', function() {
                menuIcon.click();
                expect(body.className).not.toContain("menu-hidden");
                
            });
            
            it("body has 'menu-hidden' initially", function() {
                menuIcon.click();
                  expect(body.className).toContain("menu-hidden");
            });


    });
    
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('loadFeed has 1 or more entries.',function(done) {
            const entries = $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        let feedContainerOnFirstLoad;
        let feedContainerOnSecondLoad;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedContainerOnFirstLoad = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it("New feed is loaded", function(done) {
            expect(feedContainerOnFirstLoad).not.toEqual(feedContainerOnSecondLoad);
            done();
          });
        });
    
    
}());
