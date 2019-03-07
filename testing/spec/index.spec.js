describe('index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '/testing/script';
        loadFixtures('index.html');
    });

    describe('Tourist website', function() {

        it('should lead to the page linked to the button', function() {
            var spyEvent = spyOnEvent('.btn-primary', 'click');
            $('.btn-primary').click();
            expect('click').toHaveBeenTriggeredOn('.btn-primary');
            expect(spyEvent).toHaveBeenTriggered();
        });


        describe('Navbar', function() {
            it('should contain all classes for navbar', function() {
                expect($('.navbar')[0]).toBeInDOM();
                expect($('<nav class="navbar navbar-default navbar-fixed-top" role="navigation"></nav>')).toHaveClass("navbar navbar-default navbar-fixed-top");
            });

            it('should invoke the navbar-toggle click event', function() {
                var spyEvent = spyOnEvent('.navbar-toggle', 'click');
                $('.navbar-toggle').click();
                expect('click').toHaveBeenTriggeredOn('.navbar-toggle');
                expect(spyEvent).toHaveBeenTriggered();
            });

            it('should contain five tabs in the burger menu', function() {
                expect($('li > a')).toHaveLength(5);
            });

            it('should contain 18 cards to visit places ', function() {
                expect($('div > h4')).toHaveLength(18);
            });
        });

        describe('New York', function() {

            it('should exist with right id and have a child with the class: landing-text ', function() {
                expect($('#newyork')[0]).toBeInDOM();
                expect($('<div id="newyork"><div class="landing-text"></div></div>')).toContainElement('div.landing-text');
            });

            it('should have right title ', function() {
                expect($('<div id="newyork"><div class="landing-text"><h1>NEW YORK</h1></div></div>')).toContainText('NEW YORK');
            });

            it('should have right grid structure', function() {
                expect($('<div class="col-xs-12 col-sm-6 col-md-4"></div>')).toHaveClass("col-xs-12 col-sm-6 col-md-4");

            });

        });

        describe('London', function() {

            it('should exist with right id and have a child with the class: landing-text ', function() {
                expect($('#london')[0]).toBeInDOM();
                expect($('<div id="london"><div class="landing-text"></div></div>')).toContainElement('div.landing-text');
            });

            it('should have right title ', function() {
                expect($('<div id="london"><div class="landing-text"><h1>LONDON</h1></div></div>')).toContainText('LONDON');
            });

            it('should have right grid structure', function() {
                expect($('<div class="col-xs-12 col-sm-6 col-md-4"></div>')).toHaveClass("col-xs-12 col-sm-6 col-md-4");

            });

        });

        describe('Tokyo', function() {

            it('should exist with right id and have a child with the class: landing-text ', function() {
                expect($('#tokyo')[0]).toBeInDOM();
                expect($('<div id="tokyo"><div class="landing-text"></div></div>')).toContainElement('div.landing-text');
            });

            it('should have right title ', function() {
                expect($('<div id="tokyo"><div class="landing-text"><h1>TOKYO</h1></div></div>')).toContainText('TOKYO');
            });

            it('should have right grid structure', function() {
                expect($('<div class="col-xs-12 col-sm-6 col-md-4"></div>')).toHaveClass("col-xs-12 col-sm-6 col-md-4");

            });

        });

        describe('Rio De Janerio', function() {

            it('should exist with right id and have a child with the class: landing-text ', function() {
                expect($('#riode')[0]).toBeInDOM();
                expect($('<div id="riode"><div class="landing-text"></div></div>')).toContainElement('div.landing-text');
            });

            it('should have right title ', function() {
                expect($('<div id="riode"><div class="landing-text"><h1>RIO DE JANERIO</h1></div></div>')).toContainText('RIO DE JANERIO');
            });

            it('should have right grid structure', function() {
                expect($('<div class="col-xs-12 col-sm-6 col-md-4"></div>')).toHaveClass("col-xs-12 col-sm-6 col-md-4");

            });

        });

        describe('Cape Town', function() {

            it('should exist with right id and have a child with the class: landing-text ', function() {
                expect($('#cape')[0]).toBeInDOM();
                expect($('<div id="cape"><div class="landing-text"></div></div>')).toContainElement('div.landing-text');
            });

            it('should have right title ', function() {
                expect($('<div id="cape"><div class="landing-text"><h1>CAPE TOWN</h1></div></div>')).toContainText('CAPE TOWN');
            });

            it('should have right grid structure', function() {
                expect($('<div class="col-xs-12 col-sm-6 col-md-4"></div>')).toHaveClass("col-xs-12 col-sm-6 col-md-4");

            });

        });

        describe('Sydney', function() {

            it('should exist with right id and have a child with the class: landing-text ', function() {
                expect($('#sydney')[0]).toBeInDOM();
                expect($('<div id="sydney"><div class="landing-text"></div></div>')).toContainElement('div.landing-text');
            });

            it('should have right title ', function() {
                expect($('<div id="sydney"><div class="landing-text"><h1>SYDNEY</h1></div></div>')).toContainText('SYDNEY');
            });

            it('should have right grid structure', function() {
                expect($('<div class="col-xs-12 col-sm-6 col-md-4"></div>')).toHaveClass("col-xs-12 col-sm-6 col-md-4");

            });

        });




        describe('Footer', function() {

            it('should have right grid structure', function() {
                expect($('<div class="col-sm-6 "></div>')).toHaveClass("col-sm-6");
            });

            it('should have five social media icons', function() {
                expect($('.fa')).toHaveLength(5);
            });

        });
    });
});
