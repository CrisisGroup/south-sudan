var config = {
    style: 'mapbox://styles/daltonwb/cl6kq7h9s006i16p906dmxn2p',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="100" height="100" /></a><br /><h1>Floods in South Sudan</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ulrich Eberle<br /><strong>Visualizations</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Carolin Graf and Andrew Ciacci<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: '00',
          alignment: 'left',
          hidden: false,
          title: 'Climate displacement on the rise',
          image: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          location: {
            center: [25.24688, 3.93630],
            zoom: 3.5,
            pitch: 0,
            bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [

          ],
          onChapterExit: [

        ]
      },
        {
            id: '01',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<div class="html-video-container"><video width="100%" height="100%" autoplay="" loop="" muted="">&gt;<source src="images/placeholder.mp4" type="video/mp4"></video></div>Catastrophic floods are pummeling South Sudan, submerging large swathes of the country and displacing hundreds of thousands.' + '<br /><br />' + 'Forecasts project a fourth straight year of floods after the rainy season, which has already begun, putting thousands of South Sudanese at the frontline of one of the world’s most invisible climate disasters.' + '<br /><br />' + 'This flooding has also helped drive conflict that has killed dozens (or hundreds?), hundreds of miles to the south.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '02',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">Crisis Group has tracked herders displaced by floods who later got caught up in violent attacks with the local communities. Many of these have been unable to return home until the floods recede further. Herders uprooted by three straight years of catastrophic flooding are clashing with populations in the country’s south, who are trying to force them to return home.  Heavily armed, the herders moved south from Jonglei, the epicenter of the Nile water floods, to the Equatoria region, where local communities have also formed armed local militias to push out the displaced.</h2>',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '03',
            alignment: 'left',
            hidden: false,
            title: 'Sam’s Journey',
            image: '',
            description: 'Crisis Group has tracked herders displaced by floods who later got caught up in violent attacks with the local communities. Many of these have been unable to return home until the floods recede further. Herders uprooted by three straight years of catastrophic flooding are clashing with populations in the country’s south, who are trying to force them to return home.  Heavily armed, the herders moved south from Jonglei, the epicenter of the Nile water floods, to the Equatoria region, where local communities have also formed armed local militias to push out the displaced.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
          			layer: 'satellite',
          			duration: 2000,
          			opacity: 1
          		},
              {
          			layer: 'sam',
          			duration: 2000,
          			opacity: 1
          		}
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
              },
              {
          			layer: 'sam',
          			duration: 2000,
          			opacity: 0
          		}
          ]
        },
        {
            id: '03',
            alignment: 'center',
            hidden: false,
            title: 'Disaster displacement',
            image: '',
            description: 'Since 2020, the country has struggled with historic floods, putting persistent pressures on affected communities/regions. States like Jonglei where Samuel is from, have been at the forefront.<div class="video-container"><iframe src="https://flo.uri.sh/visualisation/10858067/embed" frameborder="0" scrolling="no"></iframe></div><br /><div class="video-container"><iframe src="https://flo.uri.sh/visualisation/10808249/embed" frameborder="0" scrolling="no"></iframe></div>',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '04',
            alignment: 'center',
            hidden: false,
            title: 'The persistance of flooding',
            image: '',
            description: 'Heightened flood levels today increase flood risk tomorrow, as soils are still soaked and retention capabilities will soon be reached – requiring minimal additional rains over the coming months to induce floods.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '05',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Even typically dry months, like the low-water mark in April, witnessed substantial flooding in recent years. Like Samuel, many IDPs would prefer to return home, the persistent flooding keeps areas inaccessible as waters are unable to recede.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '06',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'These floods have contributed to widespread livelihood insecurity and displacement across the country, driving many south for refuge.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '07',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Lorem ipsum dolor amet',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        }
    ]
};
