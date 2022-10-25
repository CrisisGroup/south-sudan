var config = {
    style: 'mapbox://styles/daltonwb/cl9onn94t005416nymhsinspo',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Floods, Displacement and Violence in South Sudan</h1><p class="hedp">Record-breaking droughts, floods and heat extremes are having a severe effect on the Global South, where climate stresses rank among the main drivers of internal displacement. Climate change’s impact on displacement is amplified in fragile contexts, where political instability and poor governance undermine climate resilience and impede humanitarian interventions.</p>' + '<p class="hedp"><strong>A prime example is South Sudan, reeling from its recent civil war, where four consecutive years of historic flooding have exacerbated food and livelihood insecurity, displacing pastoralists south and contributing to violence in the Equatoria region.</p><a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a><p id="vidcredit">Video: © <a href="https://www.unhcr.org/en-us/news/stories/2022/3/6242bef84/south-sudanese-battle-record-floods-amid-rapidly-changing-climate.html" target="_blank">UNHCR</a></p>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributors</strong>: Ulrich Eberle and Alan Boswell<br /><strong>Visualizations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Carolin Graf and Andrew Ciacci<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><a href="https://acleddata.com/" target="_blank">ACLED</a>. Raleigh, C., A. Linke, H. Hegre and J. Karlsen. 2010. “Introducing ACLED Armed Conflict Location and Event Data.” Journal of Peace Research. 47(5):651-660.<br /><a href="https://displacement.iom.int/datasets?field_country2_target_id_verf=81&field_component2_target_id=82&field_tag1_target_id=All&created=&created_1=&page=0" target="_blank">Baseline Assessment</a>. South Sudan, Round 11 - IDP and Returnee. 2021. IOM.<br /><a href="https://www.chc.ucsb.edu/data/chirps" target="_blank">CHIRPS</a>. Funk, Chris, et al. 2015. "The Climate Hazards Infrared Precipitation with Stations - A New Environmental Record for Monitoring Extremes." Scientific data. 2.1(2015): 1-21.<br /><a href="https://esgf-node.llnl.gov/search/cmip6/" target="_blank">CMIP</a>. Projected Temperature under SSP2-45 Senario. Accessed via <a href="https://climateknowledgeportal.worldbank.org/" target="_blank">World Bank Climate Change Knowledge Portal</a>.<br /><a href="https://www.internal-displacement.org/database/displacement-data" target="_blank">Disaster Internal Displacement</a>. IDMC.<br /><a href="https://gadm.org/" target="_blank">GADM</a>. 2012. Database of Global Administrative Areas.<br /><a href="https://floodmap.modaps.eosdis.nasa.gov/getTile.php?location=030E010N&day=102&year=2022&product=3" target="_blank">MODIS flood data</a>. 14-day composite. Policelli, F., et al. 2017. "The NASA Global Flood Mapping System." Remote Sensing of Hydrological Extremes. 47-63.<br /><a href="https://www.ssec.wisc.edu/flood-map-demo/flood-products/" target="_blank">VIIRS flood data</a>. 5-day composite. Li, Sanmei, et al. 2018. "Automatic Near Real-Time Flood Detection Using Suomi-NPP/VIIRS Data." Remote Sensing of Environment. 204 (2018): 672-689.<br /><a href="https://reliefweb.int/report/south-sudan/south-sudan-flooding-snapshot-no-2-11-october-2022" target="_blank">UN OCHA</a>. October 2022. “South Sudan: Flooding Snapshot No. 2”.<br /><br /><h4>Research Notes</h4><strong>Flood maps, South Sudan</strong> - Based on VIIRS remotely-sensed flood data, aggregated to the pixel-month level, considering partially and fully flood-affected pixels at a spatial resolution of 375m. Seasonal flood maps show the maximum flood extent over the period of 3 months. The 2021 flood map shows the maximum flood extent throughout 2021.<br /><br /><strong>Flood time trend, South Sudan</strong> - Based on 250m MODIS remotely-sensed flood data, aggregated to the month level for all of South Sudan. <br /><br /><strong>Drought map, Horn of Africa</strong> - The map depicts the precipitation anomalies for the 2022 March-April-May (MAM) rainy season, based on CHIRPS data at a spatial resolution of approximately 5km. Z-scores are considered, comparing the 2022 MAM precipitation average to the MAM average of previous years, 2014-2022. Z-score = (meanMAM 2022 - meanMAM 2014-2022) / (sdMAM 2014-2022 + 0.01). A small value of 0.01 is added to the denominator, to avoid high z-scores in areas with low inter-annual precipitation variability.<br /><br /><strong>Displacement map, South Sudan</strong> - Based on Round 11 - IDP and Returnee dataset of the IOM Baseline Assessment. The number of disaster-related departures (IDPs by origin) is geo-coded and aggregated to the admin 2 level.<br /><br /><strong>Map of land-related conflicts, Horn of Africa</strong> - ACLED fatality count over the period January 2017 to August 2022, aggregated to the month-admin 2 level. Only events classified as “battles”, “riots” or “violence against civilians” are considered. Additionally, events are filtered by a land-related keyword search, based on variable “notes” in ACLED, following the methodology in Eberle, Ulrich J., Dominic Rohner, and Mathias Thoenig. 2020. "Heat and Hate: Climate Security and Farmer-Herder Conflicts in Africa.”<br /><br />The share of countries experiencing conflict and crisis in 2021 is based on CrisisWatch.<br /><br />Interviews were conducted with members of 18 different herding communities.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: 'INTRO',
          alignment: 'left',
          hidden: false,
          title: 'Disaster Internal Displacements in 2021',
          image: '',
          description: 'Climatic distress and environmental degradation are increasing the number of internally displaced people around the world. Countries in dark green have the highest numbers. In 2021, 88 per cent of global disaster displacement occurred in countries experiencing conflict and crisis. In some cases, displacement leads to deadly violence, as in the Horn of Africa, where a mix of climate-related displacement, conflict, fragile states, weak governance and the absence of basic services have worsened the region’s instability.' + '<div class="spacer"></div>' + 'The Horn is experiencing several weather hazards simultaneously, including a historic drought in the Eastern Horn and historic floods in South Sudan, both of which are expected to continue through the year.' + '<br /><br />' + '<strong>Rotate the globe by clicking and dragging your pointer, or use the controls in the top right. Throughout this story, you can freely explore the maps where there is a right arrow. &#8594;' + '<br /><br />' + 'Or scroll down to continue. &#8595;</strong>',
          location: {
            center: [25.24688, 3.93630],
            zoom: 2,
            pitch: 0,
            bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: 'enableFreetime',
          onChapterEnter: [
            {
              layer: 'idp-global2',
              duration: 2000,
              opacity: 1
            },
            {
              layer: 'idp-map',
              duration: 2000,
              opacity: 0
            },
            {
              layer: 'south_sudan',
              duration: 4000,
              opacity: 0
            },
            {
              layer: 'satellite',
              duration: 2000,
              opacity: 0
            }
          ],
          onChapterExit: [
            {
              layer: 'idp-global2',
              duration: 2000,
              opacity: 0
            }
        ]
      },
      {
          id: '01',
          alignment: 'left',
          hidden: false,
          title: ' ',
          image: '',
          description: 'In South Sudan, unprecedented floods have submerged large swathes of the country and displaced hundreds of thousands of people. In 2021 alone, over half a million people were displaced internally, and this year’s floods, which have just begun, appear to be more severe. Making matters worse, the flooding has helped drive conflict far to the south, in the country’s Equatoria region, where displaced herders and host farming communities are fighting over land resources, killing at least dozens.' + '<h3 class="white"><span style="background-color: #7e6059; font-size: 24px; font-weight: 600; border-radius: 8px; padding: 5px 10px 5px 10px;">Flood Affected People by State</span></h3><div class="video-container"><iframe src="https://flo.uri.sh/visualisation/11468795/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div>',
          location: {
            center: [28.21862, 7.51420],
            zoom: 5.79,
            pitch: 20.50,
            bearing: 13.60,
            speed: .4
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: 'disableFreetime',
          onChapterEnter: [
            {
              layer: 'idp-map',
              duration: 4000,
              opacity: 1
            },
            {
              layer: 'south_sudan',
              duration: 4000,
              opacity: 1
            },
            {
              layer: 'country_overview',
              duration: 4000,
              opacity: 1
            },
            {
              layer: 'country_overview_label',
              duration: 2000,
              opacity: 1
            },
            {
              layer: 'state_lines',
              duration: 2000,
              opacity: 1
            },
            {
              layer: 'southsudan-states',
              duration: 2000,
              opacity: 1
            }
          ],
          onChapterExit: [
            {
              layer: 'country_overview',
              duration: 4000,
              opacity: 0
            },
            {
              layer: 'country_overview_label',
              duration: 4000,
              opacity: 0
            },
            {
              layer: 'southsudan-states',
              duration: 2000,
              opacity: 0
            },
            {
              layer: 'state_lines',
              duration: 2000,
              opacity: 0
            }
        ]
      },
        {
            id: '02',
            alignment: 'right',
            hidden: false,
            title: ' ',
            image: '',
            description: 'While nearly every state in South Sudan witnessed flooding, the 2021 floods were particularly dire in the country’s centre. The South Sudanese Greater Upper Nile region, comprising Jonglei, Upper Nile and Unity states, were and remain acutely vulnerable. Seasonal flooding is typical in this area, but the extent and duration of these floods in recent years is unprecedented  – with some areas facing inundation twice in the same year.',
            location: {
              center: [31.691412, 7.078249],
              zoom: 6,
              pitch: 42,
              bearing: -20.80,
              speed: .1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'flood-intensity',
                duration: 6000,
                opacity: 1
              },
              {
                layer: 'idp-map',
                duration: 4000,
                opacity: .7
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'flood-intensity',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 0
              }
          ]
        },
        {
            id: 'chart03',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<div class="padding"><h3 class="white"><span style="background-color: #7e6059; font-size: 24px; font-weight: 600; border-radius: 8px; padding: 5px 10px 5px 10px;">Flood Extent and Internal Displacements in South Sudan</span></h3><p>Since 2019, the country has struggled with historic floods, putting persistent pressures on affected communities, driving internal displacement, overwhelming local coping mechanisms and preventing people from returning to their homes.</p></div>' + '<div class="flourish-embed flourish-table" data-src="visualisation/11009243"></div>' + '<br />',
            location: {
              center: [31.691412, 7.078249],
              zoom: 7.01,
              pitch: 42,
              bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sat-flood',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'idp-map',
                duration: 2000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '03-QUOTE',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">South Sudan’s exposed floodplains and Nile Basin location render it uniquely susceptible to flooding. In upstream countries, rainfall elevates Lake Victoria and Lake Albert’s water levels, and increases the flow of other sources that feed the White Nile, which amplifies downstream flows. These factors, combined with intensified local precipitation and poor river management, further compound the flood risk in South Sudan.</h2>',
            location: {
              center: [31.691412, 7.078249],
              zoom: 7.01,
              pitch: 42,
              bearing: -20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sat-flood',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'idp-map',
                duration: 2000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '04',
            alignment: 'right',
            hidden: false,
            title: 'July to September 2021',
            image: '',
            description: 'Previous floods have been so severe that waters did not fully recede in the intervening dry seasons. This worsened the next year’s floods and set the stage for rapid inundation during the 2021 rainy season.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sat-flood',
                duration: 2000,
                opacity: .6
              },
              {
                layer: 'flood4a',
                duration: 2000,
                opacity: .8
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'flood4a',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '05',
            alignment: 'right',
            hidden: false,
            title: 'October to December 2021',
            image: '',
            description: 'Although annual precipitation usually peaks in August, the floods tend to reach their maximum level in October, particularly in South Sudan’s central regions.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'flood4b',
                duration: 2000,
                opacity: .8
              }
            ],
            onChapterExit: [
              {
                layer: 'flood4b',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '06',
            alignment: 'right',
            hidden: false,
            title: 'January to March 2022',
            image: '',
            description: 'Unusually, water did not recede in early 2022. Even typically dry months like March saw substantial flooding,  which keeps some areas inaccessible and prevents wetlands from fully drying out between flood seasons.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'flood4c',
                duration: 2000,
                opacity: .8
              }
            ],
            onChapterExit: [
              {
                layer: 'flood4c',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '07',
            alignment: 'right',
            hidden: false,
            title: 'April to June 2022',
            image: '',
            description: 'With saturated soils unable to retain additional water, even minimal rainfall can cause further catastrophic flooding. Erratic rain between April and June – still months away from the annual flood peak – caught many by surprise in recent years, displacing thousands. Months ahead of this year’s  flood peak, the National Aeronautics and Space Administration and United States Geological Survey forecasts were already drawing a bleak picture of another record-breaking flood season.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'flood4d',
                duration: 2000,
                opacity: .8
              },
              {
                layer: 'sat-flood',
                duration: 2000,
                opacity: .6
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'flood4d',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'south_sudan',
                duration: 4000,
                opacity: 0
              }
          ]
        },
        {
            id: '08B',
            alignment: 'center',
            hidden: false,
            title: ' ',
            image: '',
            description: '<a href="https://www.humanitarianresponse.info/sites/www.humanitarianresponse.info/files/documents/files/south_sudan_flooding_snapshot_no.2_11-oct-2022.pdf" target="_blank">As of October 2022</a>, this season’s floods, which have affected over 900,000 people, are already more expansive than in previous years, and the flooding is expected to worsen before the end of year. As in the past, Unity, Upper Nile, and Jonglei communities were particularly hard hit.  This year, previously spared areas, including Northern Bahr el Ghazal, Warrap, Unity and Western Equatoria states, have also been inundated. Insufficient funding and access limitations have constrained the humanitarian response.' + '<br /><br /><div class="video-container"><iframe src="comparison.html" frameborder="0" scrolling="no" /></div>',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sat-flood',
                duration: 2000,
                opacity: .6
              }
            ],
            onChapterExit: [
              {
                layer: 'sat-flood',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '09',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">Crisis Group has tracked herders displaced by floods who later were involved in violent clashes with local communities.</h2>',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6,
              pitch: 40.50,
              bearing: 12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'sam1',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'sam2',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'sam3',
                duration: 3000,
                opacity: 0
              },
              {
                layer: 'sam4',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'sam5',
                duration: 5000,
                opacity: 0
              },
              {
                layer: 'sam6',
                duration: 5500,
                opacity: 0
              },
              {
                layer: 'sam7',
                duration: 6000,
                opacity: 0
              },
              {
                layer: 'sam_label1',
                duration: 1000,
                opacity: 0
              },
              {
                layer: 'sam_label2',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'sam_label3',
                duration: 3000,
                opacity: 0
              },
              {
                layer: 'sam_label4',
                duration: 4000,
                opacity: 0
              },
              {
                layer: 'sam_label5',
                duration: 5000,
                opacity: 0
              },
              {
                layer: 'sam_label6',
                duration: 5500,
                opacity: 0
              },
              {
                layer: 'sam_label7',
                duration: 6000,
                opacity: 0
              },
              {
                layer: 'road',
                duration: 1000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'ch10',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'images/sam_poster.jpg',
            description: '<p class="photocaption">Old Fangkak, South Sudan - Villagers dig out of flooding that hit the region in March 2022. (Photo: UNCHR)</p>' + '<h3>Samuel’s Daunting Journey</h3>' + 'Among those displaced in the unexpected June 2020 flooding was Samuel, who herded cattle near Maar village in Jonglei state. He and his family were displaced with over 50 other families and several thousand heads of cattle.' + '<div class="spacer"></div>' + 'Many factors contributed to their collective decision to flee, among them contemporaneous large-scale violence. But Samuel, in conversation with Crisis Group, laid the blame for his family’s flight on the local floods in the Sudd wetlands.' + '<div class="spacer"></div>' + 'The flood devastated his community, wiping out pasture land, destroying homes and killing cattle. Raids by a neighbouring community, the Murle, further compounded their suffering.',
            location: {
              center: [31.976400, 5.300356],
              zoom: 7.75,
              pitch: 46,
              bearing: -15.19
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
          			layer: 'sam1',
          			duration: 1000,
          			opacity: 1
          		},
              {
          			layer: 'sam2',
          			duration: 2000,
          			opacity: 1
          		},
              {
          			layer: 'sam3',
          			duration: 3000,
          			opacity: 1
          		},
              {
          			layer: 'sam4',
          			duration: 4000,
          			opacity: 1
          		},
              {
          			layer: 'sam5',
          			duration: 5000,
          			opacity: 1
          		},
              {
          			layer: 'sam6',
          			duration: 5500,
          			opacity: 1
          		},
              {
          			layer: 'sam7',
          			duration: 6000,
          			opacity: 1
          		},
              {
          			layer: 'sam_label1',
          			duration: 1000,
          			opacity: 1
          		},
              {
          			layer: 'sam_label2',
          			duration: 2000,
          			opacity: 1
          		},
              {
          			layer: 'sam_label3',
          			duration: 3000,
          			opacity: 1
          		},
              {
          			layer: 'sam_label4',
          			duration: 4000,
          			opacity: 1
          		},
              {
          			layer: 'sam_label5',
          			duration: 5000,
          			opacity: 1
          		},
              {
          			layer: 'sam_label6',
          			duration: 5500,
          			opacity: 1
          		},
              {
          			layer: 'sam_label7',
          			duration: 6000,
          			opacity: 1
          		},
              {
          			layer: 'road',
          			duration: 1000,
          			opacity: .4
          		},
              {
                layer: 'bor2',
                duration: 4000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
          			layer: 'sam1',
          			duration: 1000,
          			opacity: 0
          		},
              {
          			layer: 'sam2',
          			duration: 2000,
          			opacity: 0
          		},
              {
          			layer: 'sam3',
          			duration: 3000,
          			opacity: 0
          		},
              {
          			layer: 'sam4',
          			duration: 4000,
          			opacity: 0
          		},
              {
          			layer: 'sam5',
          			duration: 5000,
          			opacity: 0
          		},
              {
          			layer: 'sam6',
          			duration: 5500,
          			opacity: 0
          		},
              {
          			layer: 'sam7',
          			duration: 6000,
          			opacity: 0
          		},
              {
          			layer: 'sam_label1',
          			duration: 1000,
          			opacity: 0
          		},
              {
          			layer: 'sam_label2',
          			duration: 2000,
          			opacity: 0
          		},
              {
          			layer: 'sam_label3',
          			duration: 3000,
          			opacity: 0
          		},
              {
          			layer: 'sam_label4',
          			duration: 4000,
          			opacity: 0
          		},
              {
          			layer: 'sam_label5',
          			duration: 5000,
          			opacity: 0
          		},
              {
          			layer: 'sam_label6',
          			duration: 5500,
          			opacity: 0
          		},
              {
          			layer: 'sam_label7',
          			duration: 6000,
          			opacity: 0
          		},
              {
          			layer: 'road',
          			duration: 1000,
          			opacity: 0
          		}
          ]
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Samuel and his group travelled hundreds of miles by foot and boat, losing cattle to disease and bandits along the way. As he journeyed southward toward Bor Town, the Jonglei state capital, deep flood waters forced Samuel’s group to ford the water with their children on their backs and herds in tow.' + '<div class="spacer"></div>' + 'At night Samuel’s party took refuge on higher ground, relatively protected from flood waters.',
            location: {
              center: [31.51148, 6.21925],
              zoom: 14.11,
              pitch: 65.00,
              bearing: 116.03
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
          			layer: 'bor2',
          			duration: 4000,
          			opacity: 1
          		}
            ],
            onChapterExit: [
              {
                layer: 'bor2',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Samuel and his group were finally able to load their cattle onto boats, and travelled some 24 hours upriver on the swollen While Nile to Juba, South Sudan’s capital city. Their trip took them into South Sudan’s southern region of Equatoria. Other displaced herders described this part of the journey as especially harrowing, since bandits sometimes attack the boats to raid the cattle.',
            location: {
              center: [31.62268, 4.84110],
              zoom: 16.44,
              pitch: 45.00,
              bearing: -9.56
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'rotateData',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: 'The Cattle Camps: A False Refuge',
            image: '',
            description: 'Samuel and his group continued for several more days beyond Juba, finally settling in the bush near other cattle camps in the Kajo Keji and Yei areas south and southwest of Juba. The entire journey took nearly two weeks. They had escaped the floods but now faced new dangers.',
            location: {
              center: [31.58919, 4.82295],
              zoom: 14.12,
              pitch: 50.64,
              bearing: 26.01
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
                layer: 'sam_label5',
                duration: 4000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'sam_label5',
                duration: 4000,
                opacity: 0
              }
          ]
        },
        {
            id: '14',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Samuel soon was caught in escalating tensions between local Equatorian farmers and migrant Dinka herders, of whom he was one. In Kajo Keji county, angry locals kidnapped three of his fellow herders. They were never found and are presumed dead. Samuel suspects that a rebel group, the National Salvation Front (NAS), which refused to sign a 2018 peace deal with the South Sudanese government, was behind the attack.' + '<div class="spacer"></div>' + 'One of the factors driving the insurgency since it formed in 2016 was the repeated waves, over generations, of armed Dinka herders pushing into Equatoria so their cattle could graze its lands. The arrival of Samuel and others like him further fanned the flames of these grievances.',
            location: {
              center: [31.42253, 4.25150],
              zoom: 12.15,
              pitch: 44.13,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'rotateData',
            onChapterEnter: [
              {
                layer: 'idp-map',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'VIDEO',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<p class="top-narrative">A couple months later, another pair of attacks injured more members of Samuel’s group. This time, the group retaliated by attacking a nearby village and burning its homes. Not all interaction between the villagers and the new arrivals were hostile. They also established trade relations, and sometimes managed to negotiate peaceful resolutions to some disputes. Still, Samuel’s group faced local anger whenever its cattle destroyed crops and lived in fear of rebel attacks. To avoid those tensions, Samuel and his group move away from the area and deeper into the surrounding bush.</p>' + '<div class="spacer"></div>' + '<p class="top-narrative">Samuel’s story is not unique. Last year, tensions between local Equatorians and migrant Dinka herders spiked around Kajo Keji, in Central Equatoria. This year, there has been fighting near the South Sudan-Uganda border in Magwi, in Eastern Equatoria. The wave of additional flood-displaced herders added to these pressures.</p>' + '<div class="spacer"></div>' + '<div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/0fkDGUJ6N_o" frameBorder="0" scrolling="no" allowfullscreen></iframe></div>',
            location: {
              center: [31.42253, 4.25150],
              zoom: 15,
              pitch: 44.13,
              bearing: 0.00,
              speed: 1.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'idp-map',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: 'NARRATIVE-1',
            alignment: 'full',
            hidden: false,
            title: 'Conflict in Equatoria',
            image: '',
            description: 'The South Sudanese conflict dynamic is unusual for the region. It flips the standard script about farmer-herder violence on its head. In South Sudan, the dominant political elite hail from pastoral communities, namely the Dinka and Nuer groups, rather than predominantly farming communities, which historically hold power across much of the post-colonial Sahel. In South Sudan, arms flow directly from the elite in the state security services to the cattle herders on the ground. The predominantly farming communities, on the other hand, have less access to state resources, state power and state guns.' + '<div class="spacer"></div>' + 'Over decades, occasional floods and the allure of better grazing ground, as well as the quiet backing of key political figures, have pushed and pulled ethnic Dinka to Equatoria. Anger at these newcomers for arriving and appropriating local resources without permission has been a unifying theme over generations among the region’s diverse communities , most of which rely heavily on agriculture for their livelihoods.' + '<div class="spacer"></div>' + 'Tensions within South Sudan continued to percolate after the 2005 peace deal that ended a long-running insurgency and paved the way for the country’s 2011 independence. Herd sizes swelled as politically connected ethnic Dinka transformed the new country’s petrodollars into heads of cattle, further alienating Equatorian communities, who viewed the growing number of armed cattle camps as an occupying force.' + '<div class="spacer"></div>' + 'In 2013, South Sudan fell into a brutal civil war. Equatorian elites initially tried to stay neutral, but some local militias joined the rebels — indeed, many of the rebel forces themselves in Equatoria had evolved out of community militias that had formed in earlier times to resist outside cattle herders. Though a peace deal was struck in 2018, the key insurgent group in Equatoria declined to join. Off-and-on fighting continues, and with it, the feeling of marginalisation.' + '<div class="spacer"></div>' + 'Several presidential directives over the years ordering cattle herders to return to their places of origin have had scant lasting effect. The ad hoc, ineffective nature of these orders highlights the need for a stronger legal framework backed by political dialogue.' + '<div class="spacer"></div>' + 'In light of this history, it is little surprise that Equatorians did not treat Samuel and his fellow travellers as victims of displacements in need of support, but rather as the latest wave of state-backed Dinka intent on roaming their land by force. The ramifications of these clashes are likely to outlast the floods. Militarisation is increasing, both among the herders, defending what they have been able to save, and also among the host communities, defending their lands. As similar reverberations from climate displacement play out across much of the Horn, the region could grow ever more militarised, deadly and brittle.' + '<div class="spacer"></div>' + 'South Sudan exemplifies the compounding forms of instability and violence that, from all climate indications, the rest of the Horn and indeed much of the continent will face.  The failure of wealthy countries to meet their commitments to assist Africa in adapting to climate change deprives government and local communities of a crucial tool to mitigate the violence.',
            location: {
              center: [31.42253, 4.25150],
              zoom: 15,
              pitch: 44.13,
              bearing: 0.00,
              speed: 1.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'disableFreetime',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: 'END-02',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'While floods have done much to drive displacement and conflict in South Sudan, the region is also simultaneously experiencing other forms of climatic distress.' + '<div class="spacer"></div>' + 'Since 2020, much of the nearby eastern Horn of Africa has endured below-average rainfall  resulting in historic prolonged droughts, on top of the 2019 locust outbreak that strained agriculture in the region. The March-April-May 2022 rainy season was exceptionally dry and there are elevated chances of a fifth drought for the upcoming October-November-December short wet season. Water scarcity brings its own conflict risks.' + '<div class="spacer"></div>' + '<div class="video-container"><iframe src="https://flo.uri.sh/visualisation/11056737/embed" frameborder="0" scrolling="no"></iframe></div>',
            location: {
              center: [31.73713, 7.21163],
              zoom: 5,
              pitch: 44.00,
              bearing: 23.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: 'dryness',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'horn-countries',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'horn-label',
                duration: 2000,
                opacity: 1
              },
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'dryness',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'horn-countries',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'horn-label',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: 'END-03',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'The effects of climate change today are felt mainly locally, even if their political ramifications sometimes reverberate at the national level, as in South Sudan. As global warming increases, weather and climate extremes are likely to become more severe and frequent – bringing with it catastrophic consequences for peace and security at greater scale. Rich countries responsible for the bulk of historic carbon emissions could do much more to ease the pain.',
            location: {
              center: [31.73713, 7.21163],
              zoom: 5,
              pitch: 44.00,
              bearing: 23.20,
              speed: .7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: 'fatalities',
                duration: 2000,
                opacity: .3
              },
              {
                layer: 'horn-countries',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'fatalities',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'horn-countries',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: 'NARRATIVE-END',
            alignment: 'full',
            hidden: false,
            title: 'Recommendations',
            image: '',
            description: 'External partners and the United Nations should work with South Sudanese authorities, religious leaders, community elders and others to de-escalate tensions and create security for both displaced and host communities, while protecting the needs of both. This includes the right to safe shelter for the displaced and the rights of host communities in their own land. During years of projected major flooding, such efforts should be augmented to mitigate the potential cascading effects of displacement.' + '<div class="spacer"></div>' + 'Aid agencies should work with the national legislature to craft laws and policies on land rights and protection for the displaced. In addition to legal and administrative steps, authorities should try to ease the political tensions by organising a conference of Jonglei and Equatorian leaders from to agree on basic modalities in the likely event of future displacement, including potential migration corridors, grazing land, timetables for returns, protections for farmers and host communities, and adjudication mechanisms. Though this dialogue will be contentious given the heated politics, the alternative is worsening violence as climate change worsens. Even while treating the climate change’s effects, outside stakeholders should not lose sight of the broader political issues, and re-focus their attention on resolving the conflict in the Equatoria region, including by resuscitating the stalled peace talks in Rome between the South Sudanese government and the Equatoria-based National Salvation Front insurgent group.' + '<div class="spacer"></div>' + 'Aid groups should preposition aid for the displaced and help displaced communities return home. As part of their adaptation funding, rich countries should also offer technical experts to work with national and local South Sudanese authorities on crafting strategies to mitigate the harmful impacts of the flooding while protecting the ecosystems preserving traditional livelihoods that rely on seasonal floods. Donor countries should then offer to fund these flood mitigation strategies, while taking care that the funds do not simply disappear amid the <a href="https://www.crisisgroup.org/africa/horn-africa/south-sudan/305-oil-or-nothing-dealing-south-sudans-bleeding-finances" target="_blank">extreme corruption</a> that characterises South Sudan’s young state.',
            location: {
              center: [31.73713, 7.21163],
              zoom: 5,
              pitch: 44.00,
              bearing: 23.20,
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
