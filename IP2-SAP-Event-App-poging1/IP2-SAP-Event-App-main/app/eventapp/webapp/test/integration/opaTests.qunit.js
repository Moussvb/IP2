sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ip2/eventapp/test/integration/FirstJourney',
		'ip2/eventapp/test/integration/pages/EventsMain'
    ],
    function(JourneyRunner, opaJourney, EventsMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ip2/eventapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEventsMain: EventsMain
                }
            },
            opaJourney.run
        );
    }
);