var config = {
    style: 'mapbox://styles/daltonwb/cl98hqyaa000s15s1wkwzja6n',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    projection: 'globe',
    use3dTerrain: false,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Floods, Displacement and Violence in South Sudan</h1><p class="hedp">Record-breaking droughts, floods and heat extremes are having a severe effect on the Global South, where climate stresses rank among the main drivers of internal displacement. Climate change’s impact on displacement is amplified in fragile contexts, where political instability and poor governance undermine climate resilience and impede humanitarian interventions.</p>' + '<p class="hedp"><strong>A prime example is South Sudan, reeling from its recent civil war, where four consecutive years of historic flooding have exacerbated food and livelihood insecurity, displacing pastoralists south and contributing to violence in the Equatoria region.</p><a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a><p id="vidcredit">Video: © UNHCR</p>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributors</strong>: Alan Boswell and Ulrich Eberle<br /><strong>Visualizations & Design</strong>: Paul Franz and Claire Boccon-Gibod<br /><strong>Support</strong>: Carolin Graf and Andrew Ciacci<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
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
          description: 'South Sudan is emblematic of these compound risks, where floods are submerging large swathes of the country and displacing hundreds of thousands. In 2021 alone, over half a million people have been displaced. Humanitarian organization brace for another severe flood season, which has already begun, putting thousands of South Sudanese at the frontline of one of the world’s most overlooked climate disasters. This flooding has also helped drive conflict that has killed dozens (or hundreds?), hundreds of miles to the south.' + '<div class="video-container"><iframe src="https://flo.uri.sh/visualisation/11468795/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div>',
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
              layer: 'district_lines',
              duration: 2000,
              opacity: .8
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
            },
            {
              layer: 'district_lines',
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
            description: '<div class="padding"><h3 class="white"><span style="background-color: #7e6059; font-size: 24px; font-weight: 600; border-radius: 8px; padding: 5px 10px 5px 10px;">Disaster displacement</span></h3><h4>Flooding by Area (in km2) vs. Displaced Persons by Year</h4><p>Since 2020, the country has struggled with historic floods, putting persistent pressures on affected communities, driving internal displacement.</p></div>' + '<div class="flourish-embed flourish-table" data-src="visualisation/11009243"></div>' + '<br />',
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
            id: '08B',
            alignment: 'center',
            hidden: false,
            title: ' ',
            image: '',
            description: 'Here is the same period of comparison in September.' + '<br /><br /><div class="video-container"><iframe src="comparison.html" frameborder="0" scrolling="no" /></div>',
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
            description: '<h2 class="liftout">Crisis Group tracked herders displaced by floods who later got caught up in violent attacks with the local communities. Many of them have been unable to return home until the floods recede further. <br /><br /><span style="background-color: #E87722; font-weight: 700; border-radius: 8px; padding: 3px 18px 3px 18px;"><em>Herders uprooted by three straight years</em></span> of catastrophic flooding are clashing with populations in the country’s south, who are trying to force them to return home. Heavily armed, the herders moved south from Jonglei, the epicenter of the Nile water floods, to the Equatoria region, where local communities have also formed armed local militias to push out the displaced.</h2>',
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
            title: '',
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
            description: 'However, after eluding the floods Samuel found himself in a new form of danger shortly after arrival, as violence erupted after multiple herdsmen were reportedly kidnapped and attacked in cattle camps. Members of Samuel’s group retaliated by destroying the crops and homes of host communities. While Samuel states he was unarmed, most of his fellow herders carried weapons[, as he explains to “(...) to protect our cows.”]' + '<div class="spacer"></div>' + 'Violence between IDPs and host communities is not uncommon. A majority of interviewees reported tensions between displaced herders and host communities, predominantly over land use, destruction caused by cattle and cattle theft, and political grievances, which were usually highest when they were near farms or rebel encampments.',
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
            description: '<div class="video-container"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/0fkDGUJ6N_o" frameBorder="0" scrolling="no" allowfullscreen></iframe></div>',
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
            description: '<h2 class="liftout">Last year, tensions spiked in particular around Kajo Keji, amplifying the intense grievances already driving an armed insurgency against the government.' + '<div class="spacer"></div>' + 'This year, tensions have erupted near the South Sudan - Uganda border Magwi, Nimule, pitting national elite against each other.' + '<div class="spacer"></div>' + 'National tensions are rising.</h2>' + 'The South Sudanese conflict dynamic is unusual for the region. It flips the standard script about farmer-herder violence on its head. In South Sudan, the dominant political elite hail from pastoral communities, namely the Dinka and Nuer groups, rather than predominantly farming communities, which historically hold power across much of the post-colonial Sahel. In South Sudan, arms flow directly from the elite in the state security services to the cattle herders on the ground. The predominantly farming communities, on the other hand, have less access to state resources, state power and state guns.' + '<div class="spacer"></div>' + 'Over decades, occasional floods and the allure of better grazing ground, as well as the quiet backing of key political figures, have pushed and pulled ethnic Dinka to Equatoria. Anger at these newcomers for arriving and appropriating local resources without permission has been a unifying theme over generations among the region’s diverse communities , most of which rely heavily on agriculture for their livelihoods.' + '<div class="spacer"></div>' + 'Tensions within South Sudan continued to percolate after the 2005 peace deal that ended a long-running insurgency and paved the way for the country’s 2011 independence. Herd sizes swelled as politically connected ethnic Dinka transformed the new country’s petrodollars into heads of cattle, further alienating Equatorian communities, who viewed the growing number of armed cattle camps as an occupying force.' + '<div class="spacer"></div>' + 'In 2013, South Sudan fell into a brutal civil war. Equatorian elites initially tried to stay neutral, but some local militias joined the rebels — indeed, many of the rebel forces themselves in Equatoria had evolved out of community militias that had formed in earlier times to resist outside cattle herders. Though a peace deal was struck in 2018, the key insurgent group in Equatoria declined to join. Off-and-on fighting continues, and with it, the feeling of marginalisation.' + '<div class="spacer"></div>' + 'Several presidential directives over the years ordering cattle herders to return to their places of origin have had scant lasting effect. The ad hoc, ineffective nature of these orders highlights the need for a stronger legal framework backed by political dialogue.' + '<div class="spacer"></div>' + 'In light of this history, it is little surprise that Equatorians did not treat Samuel and his fellow travellers as victims of displacements in need of support, but rather as the latest wave of state-backed Dinka intent on roaming their land by force. The ramifications of these clashes are likely to outlast the floods. Militarisation is increasing, both among the herders, defending what they have been able to save, and also among the host communities, defending their lands. As similar reverberations from climate displacement play out across much of the Horn, the region could grow ever more militarised, deadly and brittle.' + '<div class="spacer"></div>' + 'South Sudan exemplifies the compounding forms of instability and violence that, from all climate indications, the rest of the Horn and indeed much of the continent will face.  The failure of wealthy countries to meet their commitments to assist Africa in adapting to climate change deprives government and local communities of a crucial tool to mitigate the violence.',
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
                opacity: 1
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
        },
        {
            id: 'NARRATIVE-END',
            alignment: 'full',
            hidden: false,
            title: 'Conflict in Equatoria',
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
