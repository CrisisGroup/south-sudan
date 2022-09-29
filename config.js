var config = {
    style: 'mapbox://styles/daltonwb/cl8lv82ts000e14pojetu7mph',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Floods in South Sudan</h1><p class="hedp">As the world encounters record-breaking droughts, floods and heat extremes, the manifestations of climate change tends to more severely affect the Global South, where it is a main cause of internal displacement. In 2021, 88% of climate displacement occurs in countries with high conflict risk today, which coincide to create a vicious cycle – exacerbating insecurity and imposing major obstacles to humanitarian interventions.</p>' + '<p class="hedp"><strong>The Horn of Africa is acutely susceptible, where climate related displacement, conflict, poor governance and the absence of basic services create a toxic mix of instability and violence.</strong> The outlook is bleak: the Horn currently experiencing several weather hazards simultaneously: from a historic drought in the Eastern Horn, to floods in South Sudan, which are forecasted to continue throughout 2022.</p><a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a><p id="vidcredit">Video: © UNHCR</p>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributors</strong>: Alan Boswell and Ulrich Eberle<br /><strong>Visualizations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Carolin Graf and Andrew Ciacci<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: 'INTRO',
          alignment: 'left',
          hidden: false,
          title: 'Climate displacement on the rise',
          image: '',
          description: 'As the world encounters record-breaking droughts, floods and heat extremes, the manifestations of climate change tends to more severely affect the Global South, where it is a main cause of internal displacement. In 2021, 88% of climate displacement occurs in countries with high conflict risk today, which coincide to create a vicious cycle – exacerbating insecurity and imposing major obstacles to humanitarian interventions.' + '<div class="spacer"></div>' + 'The Horn of Africa is acutely susceptible, where climate related displacement, conflict, poor governance and the absence of basic services interact to create a toxic mix of instability and violence. And the outlook is bleak: the Horn currently experiencing several weather hazards simultaneously: from a historic drought in the Eastern Horn, to floods in South Sudan, which are forecasted to continue throughout 2022.',
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
          description: 'South Sudan is emblematic of these compound risks, where floods are submerging large swathes of the country and displacing hundreds of thousands. In 2021 alone, over half a million people have been displaced. Humanitarian organization brace for another severe flood season, which has already begun, putting thousands of South Sudanese at the frontline of one of the world’s most overlooked climate disasters. This flooding has also helped drive conflict that has killed dozens (or hundreds?), hundreds of miles to the south.',
          location: {
            center: [31.03374, 7.20294],
            zoom: 5.5,
            pitch: 40.50,
            bearing: 12,
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
            }
        ]
      },
        {
            id: '02',
            alignment: 'right',
            hidden: false,
            title: ' ',
            image: '',
            description: 'The flood’s impact was particularly severe in South Sudan’s central region, which witnessed abnormal flood intensity and duration in recent years. At the forefront are states, shown here with high flood intensity are the states Jonglei, Unity and Upper Nile.',
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
                duration: 3000,
                opacity: 1
              },
              {
                layer: 'idp-map',
                duration: 4000,
                opacity: .4
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
                layer: 'idp-map',
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
            description: '<div class="padding"><h3><span style="background-color: #7e6059; font-size: 24px; font-weight: 600; border-radius: 8px; padding: 5px 10px 5px 10px;">Disaster displacement</span></h3><h4>Flooding by Area (in km2) vs. Displaced Persons by Year</h4><p>Since 2020, the country has struggled with historic floods, putting persistent pressures on affected communities, driving internal displacement.</p></div>' + '<div class="flourish-embed flourish-table" data-src="visualisation/11009243"></div>' + '<br />',
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
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '04',
            alignment: 'right',
            hidden: false,
            title: 'An anatomy of persistent flooding - Summer 2021',
            image: '',
            description: 'In 2021, starting from a high baseline following the lean season, flood levels increased rapidly during the period of July to September.',
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
            description: 'Flood levels peaked in October, reaching their maximal extent across the country, particularly concentrated in South Sudan’s central regions.',
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
            title: 'Early 2022',
            image: '',
            description: 'Unlike usual years, the floods did not recede by the first months of 2022, which kept areas inaccessible as waters were unable to recede, setting the foundation for another severe flood season ahead.',
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
            title: 'Spring 2022',
            image: '',
            description: 'With soaked soils unable to retain more water, minimal additional rains over the coming months have the potential to induce further catastrophic flooding.',
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
            id: '08',
            alignment: 'center',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Even typically dry months, like the low-water mark in April, witnessed substantial flooding in 2022. This can be seen in the greater magnitude of flooding between April-June 2022 than in 2020. Crisis Group’s empirical analysis reveals that the unprecedented duration and magnitude of the floods overwhelms local coping mechanism and prevents people from returning to their homes. In certain instances fuelling tensions with host communities.' + '<div class="spacer"></div>' + 'In anticipation of continued catastrophe, UN OCHA released USD 19 million in May 2022 to protect affected regions, including the Bentiu camp for internally displaced people in Unity State.' + '<br /><br /><div class="video-container"><iframe src="comparison.html" frameborder="0" scrolling="no" /></div>',
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
            description: '<h2 class="liftout">Crisis Group tracked herders displaced by floods who later got caught up in violent attacks with the local communities. Many of them have been unable to return home until the floods recede further. <span style="background-color: #E87722; font-weight: 600; border-radius: 8px; padding: 5px;"><em>Herders uprooted by three straight years</em></span> of catastrophic flooding are clashing with populations in the country’s south, who are trying to force them to return home. Heavily armed, the herders moved south from Jonglei, the epicenter of the Nile water floods, to the Equatoria region, where local communities have also formed armed local militias to push out the displaced.</h2>',
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
            description: '<p class="photocaption">Old Fangkak, South Sudan - Villagers dig out of flooding that hit the region in March 2022. (Photo: UNCHR)</p>' + '<h3>Sam’s Journey</h3>' + 'The impact of the flooding was witnessed early on and persists today. For instance, the unexpected June 2020 flooding took many by surprise. Among them is Samuel, a cattle herder based with his family around Maar in Jonglei, who were displaced together with over 50 other families and several thousand of cattle.' + '<div class="spacer"></div>' + 'According to interviewees, floods have been cited as a main driver of internal displacement in 2020. Displacement triggers are oftentimes complex and multifaceted, with interviewees frequently also citing insecurity and cattle disease.' + '<div class="spacer"></div>' + 'The flood devastated his community – leaving no pasture for grazing, destroying homes, and killing cattle due to increased water levels and diseases – all of which were compounded by insecurity from raids.',
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
            description: 'Samuel and his group travelled hundreds of miles by foot and boat, losing cattle to disease and bandits. As he journeyed southward towards Bor Town, the depth of waters forced Samuel’s group to swim, while carrying children and shepherding the herd. At night Samuel’s party took refuge on higher ground, where flood water were less likely to be a threat.',
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
                duration: 4000,
                opacity: 0
              }
          ]
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'The crossing',
            image: '',
            description: 'The trip reached a dangerous climax when Samuel was forced to embark his cattle on boats to cross the river before reaching Juba – which took all night and a day. During the crossing, he vigilant guarded his livestock, as pirates have been known to raid helpless rafters.',
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
            title: 'The cattle camp: A False Refuge',
            image: '',
            description: 'After crossing the White Nile and arriving in Juba, Samuel and his group disembarked and continued the journey for several days, finally settling in the bushes near other cattle camps that the floods haven’t reached. Samuel explains his decision to settle: “There is no flood here. That is the only reason.” [Other interviewees also cited an improved security situation, better cattle health and pastures as reasons to stay in Equatoria.]',
            location: {
              center: [31.55177, 6.20829],
              zoom: 15,
              pitch: 45,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
            id: '14',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'However, after eluding the floods Samuel found himself in a new form of danger shortly after arrival, as violence erupted after multiple herdsmen were reportedly kidnapped and attacked in cattle camps. Members of Samuel’s group retaliated by destroying the crops and homes of host communities. While Samuel states he was unarmed, most of his fellow herders carried weapons[, as he explains to “(...) to protect our cows.”]' + '<div class="spacer"></div>' + 'Violence between IDPs and host communities is not uncommon. A majority of interviewees reported tensions between displaced herders and host communities, predominantly over land use, destruction caused by cattle and cattle theft, and political grievances, which were usually highest when they were near farms or rebel encampments.',
            location: {
              center: [31.285, 4.079],
              zoom: 17,
              pitch: 60.63,
              bearing: -79.39
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
            id: '14-VIDEO',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/0fkDGUJ6N_o" frameBorder="0" scrolling="no" allowfullscreen></iframe></div>',
            location: {
              center: [31.285, 4.079],
              zoom: 19,
              pitch: 60.63,
              bearing: -79.39,
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

          ]
        },
        {
            id: '15',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">Last year, tensions spiked in particular around Kajo Keji, amplifying the intense grievances already driving an armed insurgency against the government.' + '<div class="spacer"></div>' + 'This year, tensions have erupted near the South Sudan - Uganda border Magwi, Nimule, pitting national elite against each other.' + '<div class="spacer"></div>' + 'National tensions are rising.</h2>',
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
            id: 'NARRATIVE-1',
            alignment: 'full',
            hidden: false,
            title: 'The analysis',
            image: '',
            description: 'Crisis Group has found a direct line between the floods in South Sudan and subsequent deadly violence. Yet a deeper analysis also reveals just how complex that link is, an example of the layered patterns that climate-related violence will likely take in the future.' + '<div class="spacer"></div>' + 'As we have seen elsewhere, the climate displacement in South Sudan is exacerbating existing dynamics rather than creating new ones. The migration, political tensions, and resulting violent conflict are part of a long historical pattern, now accentuated by the floods. This highlights the complex feedback loop that climatic extremes can create in politically unstable areas of the world.' + '<br /><br /' + 'Migration of Dinka from Jonglei to the Equatoria region is not new, nor are communal tensions related to this relocation.' + '<div class="spacer"></div>' + 'Anger at Dinka cattle migration into Equatoria has been a unifying theme for decades among the Equatoria region’s diverse communities, most of which rely heavily on agriculture for their livelihoods.' + '<div class="spacer"></div>' + 'A series of political summits of Equatorian elites over the past couple decades have repeatedly stressed Equatorian grievances over and rejection of the outside cattle migration into their land. Many of these grievances relate to the toxious internal politics of South Sudan’s own violent path to independence.' + '<h3>History of Equatoria-Dinka political tensions</h3><ul><li>1950s Torit rebellion.</li><li>1970s Political tensions rise between Dinka and Equatorian elite.</li><li>1980s SPLM founded, most Equatorian resist</li><li>1990s, Large Dinka migration to some areas of Equatoria amid widespread Equatorian displacement</li></ul>' + '<br />' + 'After the 2005 peace deal, many Equatorians returned home. Some formed new militias to resist incursions by Dinka cattle herders. Most felt marginalised within the new semi-autonomous region. Most Equatorians voted for independence for South Sudan in 2011, but Equatorian political conferences repeated stressed their discontent with the status quo, demand for greater autonomy through a federal political system, and that cattle from outside the region return home.' + '<div class="spacer"></div>' + 'The continued influx of cattle herders remained an iron hot political grievance in Equatoria.' + '<div class="spacer"></div>' + 'After independence, in 2013, South Sudan fell into a brutal civil war. While Equatorian elite initially tried to stay neutral, some Equatorian militias joined the rebels. Most of these rebel forces had early roots as community militias that formed to resist outside cattle herders.' + '<div class="spacer"></div>' + 'In 2018, an insurgent group in Equatoria declined to join the main peace deal, meaning that much of Equatoria now remains an active conflict zone. Many Equatorians continue to believe that they remained sidelined in the peace process and the nation’s politics.' + 'Amid this civil, the Equatorian and Dinka elite continued to clash over Dinka migration into Equatoria. Major influxes of cattle from Jonglei led to presidential directives in TK and TK years for the cattle to leave, to little lasting effect.' + '<div class="spacer"></div>' + 'Equatorians thus viewed the latest influx of cattle herders from Jonglei as just the latest chapter in this long saga.' + '<div class="spacer"></div>' + 'Thus, South Sudan flips several usual narratives about farmer-herder violence on its head.' + '<div class="spacer"></div>' + 'In South Sudan, the political elite hail from pastoral communities, rather than the farming communities. Arms flow directly from the elite in the state security services to the cattle herders on the ground. The farming communities, on the other hand, have less access to state resources, state power, and state guns.' + '<div class="spacer"></div>' + 'Thus, when Samuel headed south from the floods and found himself in clashes, this did not look like climate-related violence to communities on the ground, but as a throughline of a political dispute going back decades.' + '<div class="spacer"></div>' + 'The political rhetoric from Equatorians makes no mention of floods, but rather just the need to defend their land, which they fear will be taken.' + '<h2 class="liftout">Future floods and related displacement could eventually lead to a national political crisis.</h2>' + 'Indeed, a Crisis Group interview with a leading political elder of the Dinka Bor community validates some of the concerns. The retired politician, who is one of the top officials in the ruling party, suggested that the government should allocate “no man’s land” in Equatoria for settlement by Jonglei herders.' + '<div class="spacer"></div>' + 'Equatorian politicians talk of the need to take care of the problem themselves, through force.' + '<div class="spacer"></div>' + 'Both pressure the fractious national government to take their side. Besides the immediate acts of violence, the floods have also increased militarisation – among the herders, forced out of their homes; and among the host communities, who are arming to defend their area from what they see as an malign invasion.' + '<div class="spacer"></div>' + 'Climate-related violence thus strikes twice: in the immediate amplifying effect of the climate disaster on conflicts, but also through the the deleterious effects of militarising at the community level and politicians who seek power through these militias.' + '<div class="spacer"></div>' + 'Such armed mobilisations also empower the politicians and officials who champion these identity and land issues. Over time, this militarisation shifts power to those politicians with militia links. As this plays out across much of the Horn, the region will grow ever more militarised, deadly, and brittle. At a time when rich countries are refusing to meet their commitments to assist Africa in adapting to the climate, South Sudan poses a warning of the kinds of instability that could be down the road: displacement, grievances, conflict over land and resources, and a toxic overlap with violent politics and contested power.',
            location: {
              center: [31.03374, 7.20294],
              zoom: 6.75,
              pitch: 40.50,
              bearing: 12
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
            id: 'END-01',
            alignment: 'left',
            hidden: false,
            title: 'New Disaster Displacement',
            image: '',
            description: 'South Sudan is not an isolated case in the Horn of Africa. Climate and security related internal displacement affect millions of people each year. Yet, humanitarian efforts to alleviate the crisis across the region have fell remarkably short. Most notably, the South Sudan Humanitarian response plan for 2021 fell over half a billion dollars short of what was requested to respond to the crisis',
            location: {
              center: [39.029264, 7.846526],
              zoom: 5,
              pitch: 42,
              bearing: -25.6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'rotateData',
            onChapterEnter: [
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
              },
              {
                layer: 'horn_idp',
                duration: 2000,
                opacity: .9
              },
              {
                layer: 'horn-label',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'horn_idp',
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
            id: 'END-02',
            alignment: 'left',
            hidden: false,
            title: ' ',
            image: '',
            description: 'While floods have been an instrumental driver of displacement and conflict in South Sudan, the region is also simultaneously experiencing other forms of climatic distress.' + '<div class="spacer"></div>' + 'Since 2020, much of the eastern Horn of Africa has been marred by below-average rainfall, currently resulting in historic prolonged droughts, which follow the 2019 locust outbreak that strained farmers in the region. The March-May 2022 rainy season was exceptionally dry and there are elevated chances of a fifth drought for the upcoming October-December short wet season.' + '<div class="spacer"></div>' + '<div class="video-container"><iframe src="https://flo.uri.sh/visualisation/11056737/embed" frameborder="0" scrolling="no"></iframe></div>',
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
              }
            ],
            onChapterExit: [
              {
                layer: 'dryness',
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
            description: 'Just as local climate impacts can devolve into national catastrophe across the country, future disputes over resources due to weather and climate hazards have the potential to spiral into regional instability and crises. As global warming increases unabated, weather and climate extremes are likely to become more severe and frequent – bringing with it catastrophic consequences for peace and security.',
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
        }
    ]
};
