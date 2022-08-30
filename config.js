var config = {
    style: 'mapbox://styles/daltonwb/cl7akurzy000h14quhwj0uoa9',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg_logo.png" width="150" height="150" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Floods in South Sudan</h1><p id="first"><em>As the world encounters record-breaking droughts, floods and heat extremes, the manifestations of climate change tends to more severely affect the Global South, where it is a main cause of internal displacement. In 2021, 88% of climate displacement occurs in countries with high conflict risk today, which coincide to create a vicious cycle – exacerbating insecurity and imposing major obstacles to humanitarian interventions.</em></p>' + '<p id="second">The Horn of Africa is acutely susceptible, where climate related displacement, conflict, poor governance and the absence of basic services interact to create a toxic mix of instability and violence. And the outlook is bleak: the Horn currently experiencing several weather hazards simultaneously: from a historic drought in the Eastern Horn, to floods in South Sudan, which are forecasted to continue throughout 2022.</p><a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Ulrich Eberle<br /><strong>Visualizations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Carolin Graf and Andrew Ciacci<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
      {
          id: 'INTRO',
          alignment: 'left',
          hidden: false,
          title: 'Climate displacement on the rise',
          image: '',
          description: 'As the world encounters record-breaking droughts, floods and heat extremes, the manifestations of climate change tends to more severely affect the Global South, where it is a main cause of internal displacement. In 2021, 88% of climate displacement occurs in countries with high conflict risk today, which coincide to create a vicious cycle – exacerbating insecurity and imposing major obstacles to humanitarian interventions.' + '<br /><br />' + 'The Horn of Africa is acutely susceptible, where climate related displacement, conflict, poor governance and the absence of basic services interact to create a toxic mix of instability and violence. And the outlook is bleak: the Horn currently experiencing several weather hazards simultaneously: from a historic drought in the Eastern Horn, to floods in South Sudan, which are forecasted to continue throughout 2022.',
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
          title: '',
          image: '',
          description: 'South Sudan is emblematic of these compound risks, where floods are submerging large swathes of the country and displacing hundreds of thousands. In 2021 alone, over half a million people have been displaced. Humanitarian organization brace for another severe flood season, which has already begun, putting thousands of South Sudanese at the frontline of one of the world’s most overlooked climate disasters. This flooding has also helped drive conflict that has killed dozens (or hundreds?), hundreds of miles to the south.',
          location: {
            center: [31.03374, 7.20294],
            zoom: 6.75,
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
            }
          ],
          onChapterExit: [

        ]
      },
        {
            id: '02',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The flood’s impact was particularly severe in South Sudan’s central region, which witnessed abnormal flood intensity and duration in recent years. At the forefront are states, shown here with high flood intensity are the states Jonglei, Unity and Upper Nile.',
            location: {
              center: [31.691412, 7.078249],
              zoom: 7.25,
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
              }
          ]
        },
        {
            id: 'chart03',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<div class="padding"><h3>Disaster displacement</h3><p>Since 2020, the country has struggled with historic floods, putting persistent pressures on affected communities, driving internal displacement.</p></div>' + '<br /><br />' + '<div class="flourish-embed flourish-table" data-src="visualisation/11009243" style="padding: 0;"></div>',
            location: {
              center: [31.691412, 7.078249],
              zoom: 7.25,
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
            alignment: 'left',
            hidden: false,
            title: 'An anatomy of persistent flooding - Summer 2021',
            image: '',
            description: 'In 2021, starting from a high baseline following the lean season, flood levels increased rapidly during the period of July to September.',
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
                layer: 'sat-flood',
                duration: 2000,
                opacity: 1
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
            alignment: 'left',
            hidden: false,
            title: 'October to December 2021',
            image: '',
            description: 'Flood levels peaked in October, reaching their maximal extent across the country, particularly concentrated in South Sudan’s central regions.',
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
            alignment: 'left',
            hidden: false,
            title: 'Early 2022',
            image: '',
            description: 'Unlike usual years, the floods did not recede by the first months of 2022, which kept areas inaccessible as waters were unable to recede, setting the foundation for another severe flood season ahead.',
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
            alignment: 'left',
            hidden: false,
            title: 'Spring 2022',
            image: '',
            description: 'With soaked soils unable to retain more water, minimal additional rains over the coming months have the potential to induce further catastrophic flooding.',
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
                layer: 'flood4d',
                duration: 2000,
                opacity: .8
              }
            ],
            onChapterExit: [
              {
                layer: 'flood4d',
                duration: 2000,
                opacity: 0
              }
          ]
        },
        {
            id: '08',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Even typically dry months, like the low-water mark in April, witnessed substantial flooding in 2022. This can be seen in the greater magnitude of flooding between April-June 2022 than in 2020. Crisis Group’s empirical analysis reveals that the unprecedented duration and magnitude of the floods overwhelms local coping mechanism and prevents people from returning to their homes. In certain instances fuelling tensions with host communities.' + '<br /><br />' + 'In anticipation of continued catastrophe, UN OCHA released USD 19 million in May 2022 to protect affected regions, including the Bentiu camp for internally displaced people in Unity State.' + '<br /><br /><div class="video-container"><iframe src="https://crisisgroup.github.io/south-sudan/comparison.html" frameborder="0" scrolling="no" /></div>',
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
            id: '09',
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
              {
                layer: 'satellite',
                duration: 2000,
                opacity: 0
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
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Sam’s Journey',
            image: '',
            description: 'The impact of the flooding was witnessed early on and persists today. For instance, the unexpected June 2020 flooding took many by surprise. Among them is Samuel, a cattle herder based with his family around Maar in Jonglei, who were displaced together with over 50 other families and several thousand of cattle.' + '<br /><br />' + 'According to interviewees, floods have been cited as a main driver of internal displacement in 2020. Displacement triggers are oftentimes complex and multifaceted, with interviewees frequently also citing insecurity and cattle disease.' + '<br /><br />' + 'The flood devastated his community – leaving no pasture for grazing, destroying homes, and killing cattle due to increased water levels and diseases – all of which were compounded by insecurity from raids.',
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
          			layer: 'sam',
          			duration: 2000,
          			opacity: 0
          		}
          ]
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">Samuel and his group travelled hundreds of miles by foot and boat, losing cattle to disease and bandits. As he journeyed southward towards Bor Town, the depth of waters forced Samuel’s group to swim, while carrying children and shepherding the herd. At night Samuel’s party took refuge on higher ground, where flood water were less likely to be a threat.</h2>',
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

            ],
            onChapterExit: [

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
              center: [31.55177, 6.20829],
              zoom: 15,
              pitch: 45,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'rotateData',
            onChapterEnter: [

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

            ],
            onChapterExit: [

          ]
        },
        {
            id: '14',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'However, after eluding the floods Samuel found himself in a new form of danger shortly after arrival, as violence erupted after multiple herdsmen were reportedly kidnapped and attacked in cattle camps. Members of Samuel’s group retaliated by destroying the crops and homes of host communities. While Samuel states he was unarmed, most of his fellow herders carried weapons[, as he explains to “(...) to protect our cows.”]' + '<br /><br />' + 'Violence between IDPs and host communities is not uncommon. A majority of interviewees reported tensions between displaced herders and host communities, predominantly over land use, destruction caused by cattle and cattle theft, and political grievances, which were usually highest when they were near farms or rebel encampments.' + '<div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/B3PjuunEYP4" frameBorder="0"></iframe></div>',
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
                layer: 'idp-map',
                duration: 2000,
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '15',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">Last year, tensions spiked in particular around Kajo Keji, amplifying the intense grievances already driving an armed insurgency against the government.</h2>' + '<br /><br />' + '<h2 class="liftout">This year, tensions have erupted near the South Sudan - Uganda border Magwi, Nimule, pitting national elite against each other.</h2>' + '<br /><br />' + '<h2 class="liftout">National tensions are rising.</h2>',
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
            description: 'Crisis Group has found a direct line between the floods in South Sudan and subsequent deadly violence. Yet a deeper analysis also reveals just how complex that link is, an example of the layered patterns that climate-related violence will likely take in the future.' + '<br /><br />' + 'As we have seen elsewhere, the climate displacement in South Sudan is exacerbating existing dynamics rather than creating new ones. The migration, political tensions, and resulting violent conflict are part of a long historical pattern, now accentuated by the floods. This highlights the complex feedback loop that climatic extremes can create in politically unstable areas of the world.' + '<br /><br /' + 'Migration of Dinka from Jonglei to the Equatoria region is not new, nor are communal tensions related to this relocation.' + '<br /><br />' + 'Anger at Dinka cattle migration into Equatoria has been a unifying theme for decades among the Equatoria region’s diverse communities, most of which rely heavily on agriculture for their livelihoods.' + '<br /><br />' + 'A series of political summits of Equatorian elites over the past couple decades have repeatedly stressed Equatorian grievances over and rejection of the outside cattle migration into their land. Many of these grievances relate to the toxious internal politics of South Sudan’s own violent path to independence.' + '<h3>History of Equatoria-Dinka political tensions</h3><ul><li>1950s Torit rebellion.</li><li>1970s Political tensions rise between Dinka and Equatorian elite.</li><li>1980s SPLM founded, most Equatorian resist</li><li>1990s, Large Dinka migration to some areas of Equatoria amid widespread Equatorian displacement</li></ul>' + '<br />' + 'After the 2005 peace deal, many Equatorians returned home. Some formed new militias to resist incursions by Dinka cattle herders. Most felt marginalised within the new semi-autonomous region. Most Equatorians voted for independence for South Sudan in 2011, but Equatorian political conferences repeated stressed their discontent with the status quo, demand for greater autonomy through a federal political system, and that cattle from outside the region return home.' + '<br /><br />' + 'The continued influx of cattle herders remained an iron hot political grievance in Equatoria.' + '<br /><br />' + 'After independence, in 2013, South Sudan fell into a brutal civil war. While Equatorian elite initially tried to stay neutral, some Equatorian militias joined the rebels. Most of these rebel forces had early roots as community militias that formed to resist outside cattle herders.' + '<br /><br />' + 'In 2018, an insurgent group in Equatoria declined to join the main peace deal, meaning that much of Equatoria now remains an active conflict zone. Many Equatorians continue to believe that they remained sidelined in the peace process and the nation’s politics.' + 'Amid this civil, the Equatorian and Dinka elite continued to clash over Dinka migration into Equatoria. Major influxes of cattle from Jonglei led to presidential directives in TK and TK years for the cattle to leave, to little lasting effect.' + '<br /><br />' + 'Equatorians thus viewed the latest influx of cattle herders from Jonglei as just the latest chapter in this long saga.' + '<br /><br />' + 'Thus, South Sudan flips several usual narratives about farmer-herder violence on its head.' + '<br /><br />' + 'In South Sudan, the political elite hail from pastoral communities, rather than the farming communities. Arms flow directly from the elite in the state security services to the cattle herders on the ground. The farming communities, on the other hand, have less access to state resources, state power, and state guns.' + '<br /><br />' + 'Thus, when Samuel headed south from the floods and found himself in clashes, this did not look like climate-related violence to communities on the ground, but as a throughline of a political dispute going back decades.' + '<br /><br />' + 'The political rhetoric from Equatorians makes no mention of floods, but rather just the need to defend their land, which they fear will be taken.' + '<h2 class="liftout">Future floods and related displacement could eventually lead to a national political crisis.</h2>' + 'Indeed, a Crisis Group interview with a leading political elder of the Dinka Bor community validates some of the concerns. The retired politician, who is one of the top officials in the ruling party, suggested that the government should allocate “no man’s land” in Equatoria for settlement by Jonglei herders.' + '<br /><br />' + 'Equatorian politicians talk of the need to take care of the problem themselves, through force.' + '<br /><br />' + 'Both pressure the fractious national government to take their side. Besides the immediate acts of violence, the floods have also increased militarisation – among the herders, forced out of their homes; and among the host communities, who are arming to defend their area from what they see as an malign invasion.' + '<br /><br />' + 'Climate-related violence thus strikes twice: in the immediate amplifying effect of the climate disaster on conflicts, but also through the the deleterious effects of militarising at the community level and politicians who seek power through these militias.' + '<br /><br />' + 'Such armed mobilisations also empower the politicians and officials who champion these identity and land issues. Over time, this militarisation shifts power to those politicians with militia links. As this plays out across much of the Horn, the region will grow ever more militarised, deadly, and brittle. At a time when rich countries are refusing to meet their commitments to assist Africa in adapting to the climate, South Sudan poses a warning of the kinds of instability that could be down the road: displacement, grievances, conflict over land and resources, and a toxic overlap with violent politics and contested power.',
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
            id: 'END-01',
            alignment: 'left',
            hidden: false,
            title: 'New Disaster Displacement',
            image: '',
            description: 'South Sudan is not an isolated case in the Horn of Africa. Climate and security related internal displacement affect millions of people each year. Yet, humanitarian efforts to alleviate the crisis across the region have fell remarkably short. Most notably, the South Sudan Humanitarian response plan for 2021 fell over half a billion dollars short of what was requested to respond to the crisis',
            location: {
              center: [35.527068, 6.971801],
              zoom: 3.85,
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
                opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: 'END-02',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'While floods have been an instrumental driver of displacement and conflict in South Sudan, the region is also simultaneously experiencing other forms of climatic distress.' + '<br /><br />' + 'Since 2020, much of the eastern Horn of Africa has been marred by below-average rainfall, currently resulting in historic prolonged droughts, which follow the 2019 locust outbreak that strained farmers in the region. The March-May 2022 rainy season was exceptionally dry and there are elevated chances of a fifth drought for the upcoming October-December short wet season.',
            location: {
              center: [35.527068, 6.971801],
              zoom: 3.85,
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
            id: 'END-03',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Just as local climate impacts can devolve into national catastrophe across the country, future disputes over resources due to weather and climate hazards have the potential to spiral into regional instability and crises. As global warming increases unabated, weather and climate extremes are likely to become more severe and frequent – bringing with it catastrophic consequences for peace and security.',
            location: {
              center: [16.762332, 6.119170],
              zoom: 3,
              pitch: 24,
              bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'acled',
                duration: 2000,
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer: 'acled',
                duration: 2000,
                opacity: 0
              }
          ]
        }
    ]
};
