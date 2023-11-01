const axios = require("axios");
const manipulateData = require("../services/manipulateData.js");

exports.getAllNews = async (req, res) => {
  try {
    // const newsAPI = await axios.get(
    //   `http://api.mediastack.com/v1/news?access_key=b99a5dd6612146e8b30857b6eade8521`
    // );

    // Extract the array of articles from the API response
    // const news = newsAPI.data.data;
    const newsAPI = JSON.parse(`{
    "pagination": {
        "limit": 25,
        "offset": 0,
        "count": 25,
        "total": 10000
    },
    "data": [
        {
            "author": "The Associated Press",
            "title": "Russia: A week after mutiny, many questions still remain",
            "description": "One senior military official, Gen. Sergei Surovikin, who had longtime ties with Prigozhin, is believed to have been detained, two people familiar with the matter told The Associated Press, citing U.S. and Ukrainian intelligence assessments. It's not clear whether Surovikin faces any charges or where he is being held.",
            "url": "https://www.pasadenastarnews.com/2023/06/30/russia-a-week-after-mutiny-many-questions-still-remain/",
            "source": "pasadenastarnews",
            "image": "https://www.pasadenastarnews.com/wp-content/uploads/2023/06/sjm-utiny-Mysteries_110773125.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:11:19+00:00"
        },
        {
            "author": "The Associated Press",
            "title": "Russia: A week after mutiny, many questions still remain",
            "description": "One senior military official, Gen. Sergei Surovikin, who had longtime ties with Prigozhin, is believed to have been detained, two people familiar with the matter told The Associated Press, citing U.S. and Ukrainian intelligence assessments. It's not clear whether Surovikin faces any charges or where he is being held.",
            "url": "https://www.presstelegram.com/2023/06/30/russia-a-week-after-mutiny-many-questions-still-remain/",
            "source": "Press-Telegram",
            "image": "https://www.presstelegram.com/wp-content/uploads/2023/06/sjm-utiny-Mysteries_110773125.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:11:19+00:00"
        },
        {
            "author": "The Associated Press",
            "title": "Russia: A week after mutiny, many questions still remain",
            "description": "One senior military official, Gen. Sergei Surovikin, who had longtime ties with Prigozhin, is believed to have been detained, two people familiar with the matter told The Associated Press, citing U.S. and Ukrainian intelligence assessments. It's not clear whether Surovikin faces any charges or where he is being held.",
            "url": "https://www.dailybreeze.com/2023/06/30/russia-a-week-after-mutiny-many-questions-still-remain/",
            "source": "dailybreeze",
            "image": "https://www.dailybreeze.com/wp-content/uploads/2023/06/sjm-utiny-Mysteries_110773125.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:11:19+00:00"
        },
        {
            "author": "",
            "title": "Strong earthquake shakes Indonesia’s main island of Java",
            "description": "The quake killed one and damaged at least 93 houses, schools, health centres, and houses of worship and government facilities in Yogyakarta and its neighbouring provinces.",
            "url": "https://www.theage.com.au/world/asia/strong-earthquake-shakes-indonesia-s-main-island-of-java-20230701-p5dkzk.html?ref=rss&utm_medium=rss&utm_source=rss_world",
            "source": "The Age",
            "image": "https://static.ffx.io/images/$zoom_0.08825%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_99/t_crop_custom/q_86%2Cf_jpg/609400e2cc7611a7029938986441eada561b2ce1",
            "category": "general",
            "language": "en",
            "country": "au",
            "published_at": "2023-07-01T00:17:28+00:00"
        },
        {
            "author": "Howard Fischer, Capitol Media Services",
            "title": "Public schools will be inspected regularly, committee will update campuses for safety",
            "description": "Public schools across Arizona will be inspected regularly to make sure they meet minimum standards to educate students under a new executive order issued by Gov. Katie Hobbs. And in a separate order, the governor formed a committee to update those to 2023 levels to ensure the schools have what it takes to help protect students during a campus shooting.",
            "url": "https://azcapitoltimes.com/news/2023/06/30/public-schools-will-be-inspected-regularly-committee-will-update-campuses-for-safety/",
            "source": "azcapitoltimes",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:13:05+00:00"
        },
        {
            "author": "Josh Cain",
            "title": "LAFD shows off power and danger of illegal fireworks in explosive display",
            "description": "LAFD Fire Chief Kristin Crowley said her department has seized 250,000 pounds of illegal fireworks since last July 4th.",
            "url": "https://www.whittierdailynews.com/2023/06/30/lafd-shows-off-power-and-danger-of-illegal-fireworks-in-explosive-display/",
            "source": "whittierdailynews",
            "image": "https://www.whittierdailynews.com/wp-content/uploads/2023/06/LDN-L-FIRE-0701-03.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:05:20+00:00"
        },
        {
            "author": "Josh Cain",
            "title": "LAFD shows off power and danger of illegal fireworks in explosive display",
            "description": "LAFD Fire Chief Kristin Crowley said her department has seized 250,000 pounds of illegal fireworks since last July 4th.",
            "url": "https://www.presstelegram.com/2023/06/30/lafd-shows-off-power-and-danger-of-illegal-fireworks-in-explosive-display/",
            "source": "Press-Telegram",
            "image": "https://www.presstelegram.com/wp-content/uploads/2023/06/LDN-L-FIRE-0701-03.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:05:20+00:00"
        },
        {
            "author": "Harry G. Broadman, Contributor",
            "title": "It’s Time For A Post-Putin Economic Plan",
            "description": "It would be naive to rule out a re-shuffling of the leadership in Moscow that results in a military official at the Kremlin’s helm.",
            "url": "https://www.forbes.com/sites/harrybroadman/2023/06/30/its-time-for-a-post-putin-economic-plan/",
            "source": "Leadership",
            "image": "https://imageio.forbes.com/specials-images/imageserve/649f67b842dac057d1f8d8ff/0x0.jpg?width=960",
            "category": "general",
            "language": "en",
            "country": "ng",
            "published_at": "2023-07-01T00:05:37+00:00"
        },
        {
            "author": "Chris Haire",
            "title": "Aquarium of the Pacific debuts Southern California Gallery",
            "description": "Long Beach's aquarium is celebrating its 25th anniversary this year -- and to mark the occasion, it opened a new gallery on Friday, June 30.",
            "url": "https://www.dailybreeze.com/2023/06/30/aquarium-of-the-pacific-debuts-southern-california-gallery/",
            "source": "dailybreeze",
            "image": "https://www.dailybreeze.com/wp-content/uploads/2023/06/LPT-L-AOP-SOCAL-0701-02-BM.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:04:53+00:00"
        },
        {
            "author": "Mark Giuliani",
            "title": "ACME Tire and Oil",
            "description": "ACME Tire and Oil needs to hire a certified mechanic with 6 years of experience as an auto mechanic. Position is full time and benefits include a medical, retirement, and vacation. email us at ....",
            "url": "https://www.wgmd.com/acme-tire-and-oil/",
            "source": "wgmd",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:11:26+00:00"
        },
        {
            "author": "The Associated Press",
            "title": "Yellen addresses Essence Festival crowd, discusses economy, efforts to enfold minority communities",
            "description": "NEW ORLEANS (AP)&#8211;U.S. Treasury Secretary Janet Yellen on Friday touted the Biden administration&#8217;s efforts to build a &#8220;fairer economy.&#8221; &#8220;I strongly believe that our racial equity work is not just the morally right thing to do. It&#8217;s in the best economic interests of our entire country,&#8221; Yellen told a crowd gathered for the Global Black [&#8230;]",
            "url": "https://financialpost.com/pmn/business-pmn/yellen-addresses-essence-festival-crowd-discusses-economy-efforts-to-enfold-minority-communities",
            "source": "Financial Post | Canada Business News",
            "image": null,
            "category": "business",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:35:26+00:00"
        },
        {
            "author": "CNN Newsource",
            "title": "McDonald’s bet on viral success with its Grimace shake. TikTok users are pretending it killed them",
            "description": "Originally Published: 28 JUN 23 14:32 ET Updated: 30 JUN 23 17:49 ET By Scottie Andrew, CNN (CNN) —&#160;With a vibrant purple hue, a meme-able mascot and limited window of availability, McDonald’s had all the ingredients to turn its Grimace milkshake into a viral sensation. What the company likely did not intend was for theThe post McDonald’s bet on viral success with its Grimace shake. TikTok users are pretending it killed them appeared first on KION546.",
            "url": "https://kion546.com/news/2023/06/30/mcdonalds-bet-on-viral-success-with-its-grimace-shake-tiktok-users-are-pretending-it-killed-them/",
            "source": "kionrightnow",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:32:18+00:00"
        },
        {
            "author": "",
            "title": "Mark Taylor commends Australia for turning it around in Lord's: Tubby's Takeaway - Day 3, 2nd Test",
            "description": "Join Louise Ransome and Mark Taylor as they review Day 3 of the 2nd Test. Mark Taylor praises Australia's efforts to turn around the day after the loss of Nathan Lyon, especially given the poor conditions.",
            "url": "https://www.theage.com.au/national/mark-taylor-commends-australia-for-turning-it-around-in-lords-tubbys-takeaway-day-3-2nd-test-20230701-p5dkzo.html?ref=rss&utm_medium=rss&utm_source=rss_national",
            "source": "The Age",
            "image": "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_fill/q_86%2Cf_jpg/590dbca58ff36cffa14ca3f1e7fd0831d2028526",
            "category": "general",
            "language": "en",
            "country": "au",
            "published_at": "2023-07-01T00:38:00+00:00"
        },
        {
            "author": "Senior Airman Bridgitte Taylor",
            "title": "CATM Instructors Gun For Change",
            "description": "Combat Arms Training and Maintenance instructors came from across the nation to attend the Combat Arms Working Group project at Joint Base Andrews, Md., June 26, 2023. The goal of the working group was to collaborate on current issues in the CATM field and focus on long-term, sustainable solutions.",
            "url": "https://www.dvidshub.net/news/448445/catm-instructors-gun-change",
            "source": "dvidshub",
            "image": "https://cdn.dvidshub.net/media/thumbs/photos/2306/7891285/250x167_q75.jpg",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:26:34+00:00"
        },
        {
            "author": "Josh Gross",
            "title": "LAFC defender Ryan Hollingshead is finally an MLS All-Star",
            "description": "The 32-year-old in his 10th season admits to thinking 'it's just not in the cards' before getting named to play against Arsenal on July 19 in Washington D.C.",
            "url": "https://www.dailynews.com/2023/06/30/lafc-defender-ryan-hollingshead-is-finally-an-mls-all-star/",
            "source": "dailynews",
            "image": "https://www.dailynews.com/wp-content/uploads/2023/06/LDN-L-LAFC-0615-20-1.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:28:41+00:00"
        },
        {
            "author": null,
            "title": "Sarah Jessica Parker discusses Kim Cattrall's return as Samantha Jones to And Just Like That... ",
            "description": "Sarah Jessica Parker has candidly discussed frenemy Kim Cattrall's shock return as Samantha Jones in And Just Like That.. season two.",
            "url": "https://www.dailymail.co.uk/tvshowbiz/article-12252855/Sarah-Jessica-Parker-discusses-Kim-Cattralls-return-Samantha-Jones-Just-Like-That.html?ns_mchannel=rss&ito=1490&ns_campaign=1490",
            "source": "dailymail",
            "image": "https://i.dailymail.co.uk/1s/2023/07/01/00/72732727-0-Candid_Sarah_Jessica_Parker_has_candidly_discussed_frenemy_Kim_C-m-65_1688166585871.jpg",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:26:25+00:00"
        },
        {
            "author": "Mike Klan",
            "title": "Former UCSB star Gabe Vincent agrees to a big free agent contract with the Lakers",
            "description": "Former UCSB standout Gabe Vincent agrees to a 3-year/33 million dollar contract with the Los Angeles Lakers.The post Former UCSB star Gabe Vincent agrees to a big free agent contract with the Lakers appeared first on News Channel 3-12.",
            "url": "https://keyt.com/sports/local-sports/2023/06/30/former-ucsb-star-gabe-vincent-agrees-to-a-big-free-agent-contract-with-the-lakers/",
            "source": "keyt",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:35:49+00:00"
        },
        {
            "author": "_",
            "title": "Zanu PF Hooligans Threaten To Kill CCC Activist",
            "description": "By Stephen Sarkozy Chuma In Mwenezi West in Rushangarumwe, Mananga area, CCC candidate for Ward 11, Thilisiwe Moyo is being &#8230; Continue reading Zanu PF Hooligans Threaten To Kill CCC Activist",
            "url": "https://www.zimeye.net/2023/07/01/zanu-pf-hooligans-threaten-to-kill-ccc-activist/",
            "source": "ZimEye",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "zw",
            "published_at": "2023-07-01T00:30:00+00:00"
        },
        {
            "author": "Yahoo Sports",
            "title": "NBA free agency 2023: Kevin Love agrees return to Heat",
            "description": "Kevin Love averaged 7.7 points in 21 regular season games with the Heat last season.",
            "url": "https://sports.yahoo.com/nba-free-agency-2023-kevin-love-agrees-return-to-heat-003406092.html?src=rss",
            "source": "sports",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:34:06+00:00"
        },
        {
            "author": "Jeff Fletcher",
            "title": "Brothers David, Dominic Fletcher meet for first time in MLB as Angels face Diamondbacks",
            "description": "The Angels infielder and Diamondbacks outfielder reunite in the majors less than three weeks after they lost their father. “This would have been one of his proudest moments,” Dominic Fletcher says.",
            "url": "https://www.dailybulletin.com/2023/06/30/brothers-david-dominic-fletcher-meet-for-first-time-in-mlb-as-angels-face-diamondbacks/",
            "source": "dailybulletin",
            "image": "https://www.dailybulletin.com/wp-content/uploads/2023/06/Fletcher-brothers.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:47:39+00:00"
        },
        {
            "author": "Jeff Fletcher",
            "title": "Brothers David, Dominic Fletcher meet for first time in MLB as Angels face Diamondbacks",
            "description": "The Angels infielder and Diamondbacks outfielder reunite in the majors less than three weeks after they lost their father. “This would have been one of his proudest moments,” Dominic Fletcher says.",
            "url": "https://www.dailybreeze.com/2023/06/30/brothers-david-dominic-fletcher-meet-for-first-time-in-mlb-as-angels-face-diamondbacks/",
            "source": "dailybreeze",
            "image": "https://www.dailybreeze.com/wp-content/uploads/2023/06/Fletcher-brothers.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:47:39+00:00"
        },
        {
            "author": "Jeff Fletcher",
            "title": "Brothers David, Dominic Fletcher meet for first time in MLB as Angels face Diamondbacks",
            "description": "The Angels infielder and Diamondbacks outfielder reunite in the majors less than three weeks after they lost their father. “This would have been one of his proudest moments,” Dominic Fletcher says.",
            "url": "https://www.pressenterprise.com/2023/06/30/brothers-david-dominic-fletcher-meet-for-first-time-in-mlb-as-angels-face-diamondbacks/",
            "source": "pe",
            "image": "https://www.pressenterprise.com/wp-content/uploads/2023/06/Fletcher-brothers.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:47:39+00:00"
        },
        {
            "author": "Doug Smith - Sports Reporter",
            "title": "Raptors guard Fred VanVleet signs with Houston Rockets: report",
            "description": "VanVleet has been an NBA all-star, was a key to Toronto’s 2019 championship and has become one of the most accomplished players in franchise history.",
            "url": "https://www.thestar.com/sports/raptors/2023/06/30/raptors-guard-fred-vanvleet-signs-with-houston-rockets-report.html",
            "source": "thestar",
            "image": "https://www.thestar.com/content/dam/thestar/sports/raptors/2023/06/30/raptors-guard-fred-vanvleet-signs-with-houston-rockets-report/fred_vanvleet.jpg",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:59:00+00:00"
        },
        {
            "author": "ezn2_spadmin",
            "title": "New coaching experience not daunting, TFC’s interim head coach Dunfield says",
            "description": "TORONTO — Interim Toronto FC manager Terry Dunfield has been on the job for four days, but he told the media at his first pre-match press conference that he&#8217;s working…L’article New coaching experience not daunting, TFC&#8217;s interim head coach Dunfield says est apparu en premier sur Cornwall Seaway News.",
            "url": "https://www.cornwallseawaynews.com/ontario-news/new-coaching-experience-not-daunting-tfcs-interim-head-coach-dunfield-says/",
            "source": "cornwallseawaynews",
            "image": null,
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:49:02+00:00"
        },
        {
            "author": "Andrew Knoll",
            "title": "NHL free agency: Kings’ goalie quest could be costly",
            "description": "Up against the salary cap like most of the league, the Kings will likely be compelled to make a trade and pay dearly for a netminder",
            "url": "https://www.pressenterprise.com/2023/06/30/nhl-free-agency-kings-goalie-quest-could-be-costly/",
            "source": "pe",
            "image": "https://www.pressenterprise.com/wp-content/uploads/2023/06/AP23062191362750.jpg?w=1400px&strip=all",
            "category": "general",
            "language": "en",
            "country": "us",
            "published_at": "2023-07-01T00:54:34+00:00"
        }
    ]
}`);

    // const news = newsAPI.data.data;

    // Filter out duplicate titles
    // const filteredDataWithoutDuplicates =
    //   manipulateData.removeDuplicateTitles(news);

    // const filteredData = filteredDataWithoutDuplicates;

    res.render("news", { allNews: newsAPI.data });
  } catch (err) {
    if (err.response) {
      res.render("news", { allNews: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      res.render("news", { allNews: null });
      console.log(err.request);
    } else {
      res.render("news", { allNews: null });
      console.error("Error", err.message);
    }
  }
};

// exports.singleNews= async(req,res )=>{

// let newsURL = req.body.url;

//   try {
//     const newsAPI = await axios.get(
//       `https://api.worldnewsapi.com/extract-news?api-key=45fb59620fd64f979dd338bd5fc6a5c9&analyze=true&url=${newsURL}`
//     );
//     res.render("newsSingle", { article: newsAPI.data });
//   } catch (err) {
//     if (err.response) {
//       res.render("newsSingle", { article: null });
//       console.log(err.response.data);
//       console.log(err.response.status);
//       console.log(err.response.headers);
//     } else if (err.requiest) {
//       res.render("newsSingle", { article: null });
//       console.log(err.requiest);
//     } else {
//       res.render("newsSingle", { article: null });
//       console.error("Error", err.message);
//     }
//   }
// };
