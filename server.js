const PORT = process.env.PORT || 8000
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express()

const spacificArticles = []


const videos = [
    {
        name:"page1",
        address: "https://www.xnxx.com/search/brazzers",
    },
    {
        name:'page2',
        address: "https://www.xnxx.com/search/brazzers/1",

    },
    {
        name: 'page3',
        address: "https://www.xnxx.com/search/brazzers/2",
    },
    {
        name: 'page4',
        address: "https://www.xnxx.com/search/brazzers/3",
    },
    {
        name: 'page5',
        address: "https://www.xnxx.com/search/brazzers/4",
    },
    {
        name: 'page6',
        address: "https://www.xnxx.com/search/brazzers/5",
    },
    {
        name: 'page7',
        address: "https://www.xnxx.com/search/brazzers/6",
    },
    {
        name: 'page8',
        address: "https://www.xnxx.com/search/brazzers/7",
    },
    {
        name: 'page9',
        address: "https://www.xnxx.com/search/brazzers/8",
    },
    {
        name: 'page10',
        address: "https://www.xnxx.com/search/brazzers/9",
    },
    {
        name: 'page11',
        address: "https://www.xnxx.com/search/brazzers/10",
    },
    {
        name: 'page12',
        address: "https://www.xnxx.com/search/brazzers/11",
    },
    {
        name: 'page13',
        address: "https://www.xnxx.com/search/brazzers/12",
    },
    {
        name: 'page14',
        address: "https://www.xnxx.com/search/brazzers/13",
    },
    {
        name: 'page315',
        address: "https://www.xnxx.com/search/brazzers/14",
    },
    {
        name: 'page16',
        address: "https://www.xnxx.com/search/brazzers/15",
    },
    {
        name: 'page17',
        address: "https://www.xnxx.com/search/brazzers/16",
    },
    {
        name: 'page18',
        address: "https://www.xnxx.com/search/brazzers/17",
    },
    {
        name: 'page19',
        address: "https://www.xnxx.com/search/brazzers/18",
    },
    {
        name: 'page20',
        address: "https://www.xnxx.com/search/brazzers/19",
    },
    {
        name: 'page21',
        address: "https://www.xnxx.com/search/brazzers/20",
    },
    {
        name: 'page22',
        address: "https://www.xnxx.com/search/brazzers/21",
    },
    {
        name: 'page23',
        address: "https://www.xnxx.com/search/brazzers/22",
    },
    {
        name: 'page24',
        address: "https://www.xnxx.com/search/brazzers/23",
    },
    {
        name: 'page25',
        address: "https://www.xnxx.com/search/brazzers/24",
    },
    {
        name: 'page26',
        address: "https://www.xnxx.com/search/brazzers/25",
    },
    {
        name: 'page27',
        address: "https://www.xnxx.com/search/brazzers/26",
    },
    {
        name: 'page28',
        address: "https://www.xnxx.com/search/brazzers/27",
    },
    {
        name: 'page29',
        address: "https://www.xnxx.com/search/brazzers/28",
    },
    {
        name: 'page30',
        address: "https://www.xnxx.com/search/brazzers/29",
    },
    {
        name: 'page31',
        address: "https://www.xnxx.com/search/brazzers/30",
    },
    {
        name: 'page32',
        address: "https://www.xnxx.com/search/brazzers/31",
    },
    {
        name: 'page33',
        address: "https://www.xnxx.com/search/brazzers/32",
    },
    {
        name: 'page33',
        address: "https://www.xnxx.com/search/brazzers/33",
    },
    {
        name: 'page34',
        address: "https://www.xnxx.com/search/brazzers/34",
    },
    {
        name: 'page35',
        address: "https://www.xnxx.com/search/brazzers/35",
    },
    {
        name: 'page36',
        address: "https://www.xnxx.com/search/brazzers/36",
    },
    {
        name: 'page37',
        address: "https://www.xnxx.com/search/brazzers/37",
    },
    {
        name: 'page38',
        address: "https://www.xnxx.com/search/brazzers/38",
    },
    {
        name: 'page39',
        address: "https://www.xnxx.com/search/brazzers/39",
    },
    {
        name: 'page40',
        address: "https://www.xnxx.com/search/brazzers/40",
    },
    {
        name: 'page41',
        address: "https://www.xnxx.com/search/brazzers/41",
    },
    {
        name: 'page42',
        address: "https://www.xnxx.com/search/brazzers/42",
    },
    {
        name: 'page43',
        address: "https://www.xnxx.com/search/brazzers/43",
    },
    {
        name: 'page44',
        address: "https://www.xnxx.com/search/brazzers/44",
    },
    {
        name: 'page45',
        address: "https://www.xnxx.com/search/brazzers/45",
    },
    {
        name: 'page46',
        address: "https://www.xnxx.com/search/brazzers/46",
    },
    {
        name: 'page47',
        address: "https://www.xnxx.com/search/brazzers/47",
    },
    {
        name: 'page48',
        address: "https://www.xnxx.com/search/brazzers/48",
    },
    {
        name: 'page49',
        address: "https://www.xnxx.com/search/brazzers/49",
    },
    {
        name: 'page50',
        address: "https://www.xnxx.com/search/brazzers/50",
    },
    {
        name: 'page51',
        address: "https://www.xnxx.com/search/brazzers/51",
    },
    {
        name: 'page52',
        address: "https://www.xnxx.com/search/brazzers/52",
    },
    {
        name: 'page53',
        address: "https://www.xnxx.com/search/brazzers/53",
    },
    {
        name: 'page54',
        address: "https://www.xnxx.com/search/brazzers/54",
    },
    {
        name: 'page55',
        address: "https://www.xnxx.com/search/brazzers/55",
    },
    {
        name: 'page56',
        address: "https://www.xnxx.com/search/brazzers/56",
    },
    {
        name: 'page57',
        address: "https://www.xnxx.com/search/brazzers/56",
    },
    {
        name: 'page58',
        address: "https://www.xnxx.com/search/brazzers/57",
    },
    {
        name: 'page59',
        address: "https://www.xnxx.com/search/brazzers/58",
    },
    {
        name: 'page60',
        address: "https://www.xnxx.com/search/brazzers/59",
    },
    {
        name: 'page61',
        address: "https://www.xnxx.com/search/brazzers/60",
    },
    {
        name: 'page62',
        address: "https://www.xnxx.com/search/brazzers/61",
    },
    {
        name: 'page63',
        address: "https://www.xnxx.com/search/brazzers/62",
    },
    {
        name: 'page64',
        address: "https://www.xnxx.com/search/brazzers/63",
    },
    {
        name: 'page65',
        address: "https://www.xnxx.com/search/brazzers/64",
    },
    {
        name: 'page66',
        address: "https://www.xnxx.com/search/brazzers/65",
    },
    {
        name: 'page67',
        address: "https://www.xnxx.com/search/brazzers/66",
    },
    {
        name: 'page68',
        address: "https://www.xnxx.com/search/brazzers/67",
    },
    {
        name: 'page69',
        address: "https://www.xnxx.com/search/brazzers/68",
    },
    {
        name: 'page70',
        address: "https://www.xnxx.com/search/brazzers/69",
    },
    {
        name: 'page71',
        address: "https://www.xnxx.com/search/brazzers/70",
    },
    {
        name: 'page72',
        address: "https://www.xnxx.com/search/brazzers/71",
    },
    {
        name: 'page73',
        address: "https://www.xnxx.com/search/brazzers/72",
    },
    {
        name: 'page74',
        address: "https://www.xnxx.com/search/brazzers/73",
    },
    {
        name: 'page75',
        address: "https://www.xnxx.com/search/brazzers/74",
    },
    {
        name: 'page76',
        address: "https://www.xnxx.com/search/brazzers/75",
    },
    {
        name: 'page77',
        address: "https://www.xnxx.com/search/brazzers/76",
    },
    {
        name: 'page78',
        address: "https://www.xnxx.com/search/brazzers/77",
    },
    {
        name: 'page79',
        address: "https://www.xnxx.com/search/brazzers/78",
    },
    {
        name: 'page80',
        address: "https://www.xnxx.com/search/brazzers/79",
    },
    {
        name: 'page81',
        address: "https://www.xnxx.com/search/brazzers/80",
    },
    {
        name: 'page82',
        address: "https://www.xnxx.com/search/brazzers/81",
    },
    {
        name: 'page83',
        address: "https://www.xnxx.com/search/brazzers/82",
    },
    {
        name: 'page84',
        address: "https://www.xnxx.com/search/brazzers/83",
    },
    {
        name: 'page85',
        address: "https://www.xnxx.com/search/brazzers/84",
    },
    {
        name: 'page86',
        address: "https://www.xnxx.com/search/brazzers/85",
    },
    {
        name: 'page87',
        address: "https://www.xnxx.com/search/brazzers/86",
    },
    {
        name: 'page88',
        address: "https://www.xnxx.com/search/brazzers/87",
    },
    {
        name: 'page89',
        address: "https://www.xnxx.com/search/brazzers/88",
    },
    {
        name: 'page90',
        address: "https://www.xnxx.com/search/brazzers/89",
    },
    {
        name: 'page91',
        address: "https://www.xnxx.com/search/brazzers/90",
    },
    {
        name: 'page92',
        address: "https://www.xnxx.com/search/brazzers/91",
    },
    {
        name: 'page92',
        address: "https://www.xnxx.com/search/brazzers/92",
    },
    {
        name: 'page94',
        address: "https://www.xnxx.com/search/brazzers/93",
    },
    {
        name: 'page95',
        address: "https://www.xnxx.com/search/brazzers/94",
    },
    {
        name: 'page96',
        address: "https://www.xnxx.com/hits/1",
    },
    {
        name: 'page97',
        address: "https://www.xnxx.com/hits/2",
    },
    {
        name: 'page98',
        address: "https://www.xnxx.com/hits/3",
    },
    {
        name: 'page99',
        address: "https://www.xnxx.com/hits/4",
    },
    {
        name: 'page100',
        address: "https://www.xnxx.com/hits/5",
    },
    {
        name: 'page101',
        address: "https://www.xnxx.com/hits/6",
    },
    {
        name: 'page102',
        address: "https://www.xnxx.com/hits/7",
    },
    {
        name: 'page103',
        address: "https://www.xnxx.com/hits/8",
    },
    {
        name: 'page104',
        address: "https://www.xnxx.com/hits/9",
    },
    {
        name: 'page105',
        address: "https://www.xnxx.com/hits/10",
    },
    {
        name: 'page106',
        address: "https://www.xnxx.com/hits11",
    },
    {
        name: 'page107',
        address: "https://www.xnxx.com/hits/12",
    },
    {
        name: 'page108',
        address: "https://www.xnxx.com/hits/13",
    },
    {
        name: 'page109',
        address: "https://www.xnxx.com/hits/14",
    },
    {
        name: 'page110',
        address: "https://www.xnxx.com/hits/15",
    },
    {
        name: 'page111',
        address: "https://www.xnxx.com/hits/16",
    },
    {
        name: 'page112',
        address: "https://www.xnxx.com/hits/17",
    },
    {
        name: 'page113',
        address: "https://www.xnxx.com/hits/18",
    },
    {
        name: 'page114',
        address: "https://www.xnxx.com/hits/19",
    },
    {
        name: 'page115',
        address: "https://www.xnxx.com/hits/20",
    },
    {
        name: 'page116',
        address: "https://www.xnxx.com/hits/21",
    },
    {
        name: 'page117',
        address: "https://www.xnxx.com/hits/22",
    },
    {
        name: 'page118',
        address: "https://www.xnxx.com/hits/23",
    },
    {
        name: 'page119',
        address: "https://www.xnxx.com/hits/24",
    },
    {
        name: 'page120',
        address: "https://www.xnxx.com/hits/25",
    },
    {
        name: 'page121',
        address: "https://www.xnxx.com/hits/26",
    },
    {
        name: 'page122',
        address: "https://www.xnxx.com/hits/27",
    },
    {
        name: 'page123',
        address: "https://www.xnxx.com/hits/28",
    },
    {
        name: 'page124',
        address: "https://www.xnxx.com/hits/29",
    },
    {
        name: 'page125',
        address: "https://www.xnxx.com/hits/30",
    },
    {
        name: 'page126',
        address: "https://www.xnxx.com/hits/31",
    },
    {
        name: 'page127',
        address: "https://www.xnxx.com/hits/32",
    },
    {
        name: 'page128',
        address: "https://www.xnxx.com/hits/33",
    },
    {
        name: 'page129',
        address: "https://www.xnxx.com/hits/34",
    },
    {
        name: 'page130',
        address: "https://www.xnxx.com/hits/35",
    },
    {
        name: 'page131',
        address: "https://www.xnxx.com/hits/36",
    },
    {
        name: 'page132',
        address: "https://www.xnxx.com/hits/37",
    },
    {
        name: 'page133',
        address: "https://www.xnxx.com/hits/38",
    },
    {
        name: 'page134',
        address: "https://www.xnxx.com/hits/39",
    },
    {
        name: 'page135',
        address: "https://www.xnxx.com/hits/40",
    },
    {
        name: 'page136',
        address: "https://www.xnxx.com/hits/41",
    },
    {
        name: 'page137',
        address: "https://www.xnxx.com/hits/42",
    },
    {
        name: 'page138',
        address: "https://www.xnxx.com/hits/43",
    },
    {
        name: 'page139',
        address: "https://www.xnxx.com/hits/44",
    },
    {
        name: 'page140',
        address: "https://www.xnxx.com/hits/45",
    },
    {
        name: 'page141',
        address: "https://www.xnxx.com/hits/46",
    },
    {
        name: 'page142',
        address: "https://www.xnxx.com/hits/47",
    },
    {
        name: 'page143',
        address: "https://www.xnxx.com/hits/48",
    },
    {
        name: 'page144',
        address: "https://www.xnxx.com/hits/49",
    },
    {
        name: 'page145',
        address: "https://www.xnxx.com/hits/50",
    },
    {
        name: 'page146',
        address: "https://www.xnxx.com/hits/51",
    },
    {
        name: 'page147',
        address: "https://www.xnxx.com/hits/52",
    },
    {
        name: 'page148',
        address: "https://www.xnxx.com/hits/53",
    },
    {
        name: 'page149',
        address: "https://www.xnxx.com/hits/54",
    },
    {
        name: 'page150',
        address: "https://www.xnxx.com/hits/55",
    },
    {
        name: 'page151',
        address: "https://www.xnxx.com/hits/56",
    },
    {
        name: 'page152',
        address: "https://www.xnxx.com/hits/57",
    },
    {
        name: 'page153',
        address: "https://www.xnxx.com/hits/58",
    },
    {
        name: 'page154',
        address: "https://www.xnxx.com/hits/59",
    },
    {
        name: 'page155',
        address: "https://www.xnxx.com/hits/60",
    },
    {
        name: 'page156',
        address: "https://www.xnxx.com/hits/61",
    },
    {
        name: 'page157',
        address: "https://www.xnxx.com/hits/62",
    },
    {
        name: 'page158',
        address: "https://www.xnxx.com/hits/63",
    },
    {
        name: 'page159',
        address: "https://www.xnxx.com/hits/64",
    },
    {
        name: 'page160',
        address: "https://www.xnxx.com/hits/65",
    },
    {
        name: 'page161',
        address: "https://www.xnxx.com/hits/66",
    },
    {
        name: 'page162',
        address: "https://www.xnxx.com/hits/67",
    },
    {
        name: 'page163',
        address: "https://www.xnxx.com/hits/68",
    },
    {
        name: 'page164',
        address: "https://www.xnxx.com/hits/69",
    },
    {
        name: 'page165',
        address: "https://www.xnxx.com/hits/70",
    },
    {
        name: 'page166',
        address: "https://www.xnxx.com/hits/71",
    },
    {
        name: 'page167',
        address: "https://www.xnxx.com/hits/72",
    },
    {
        name: 'page168',
        address: "https://www.xnxx.com/hits/73",
    },
    {
        name: 'page169',
        address: "https://www.xnxx.com/hits/74",
    },
    {
        name: 'page170',
        address: "https://www.xnxx.com/hits/75",
    },
    {
        name: 'page171',
        address: "https://www.xnxx.com/hits/76",
    },
    {
        name: 'page172',
        address: "https://www.xnxx.com/hits/77",
    },
    {
        name: 'page173',
        address: "https://www.xnxx.com/hits/78",
    },
    {
        name: 'page174',
        address: "https://www.xnxx.com/hits/79",
    },
    {
        name: 'page175',
        address: "https://www.xnxx.com/hits/80",
    },
    {
        name: 'page176',
        address: "https://www.xnxx.com/hits/81",
    },
    {
        name: 'page177',
        address: "https://www.xnxx.com/hits/82",
    },
    {
        name: 'page178',
        address: "https://www.xnxx.com/hits/83",
    },
    {
        name: 'page179',
        address: "https://www.xnxx.com/hits/84",
    },
    {
        name: 'page180',
        address: "https://www.xnxx.com/hits/85",
    },
    {
        name: 'page181',
        address: "https://www.xnxx.com/hits/86",
    },
    {
        name: 'page182',
        address: "https://www.xnxx.com/hits/87",
    },
    {
        name: 'page183',
        address: "https://www.xnxx.com/hits/88",
    },
    {
        name: 'page184',
        address: "https://www.xnxx.com/hits/89",
    },
    {
        name: 'page185',
        address: "https://www.xnxx.com/hits/90",
    },
    {
        name: 'page186',
        address: "https://www.xnxx.com/hits/91",
    },
    {
        name: 'page187',
        address: "https://www.xnxx.com/hits/92",
    },
    {
        name: 'page188',
        address: "https://www.xnxx.com/hits/93",
    },
    {
        name: 'page189',
        address: "https://www.xnxx.com/hits/94",
    },
    {
        name: 'page190',
        address: "https://www.xnxx.com/hits/95",
    },
    {
        name: 'page191',
        address: "https://www.xnxx.com/hits/96",
    },
    {
        name: 'page192',
        address: "https://www.xnxx.com/hits/97",
    },
    {
        name: 'page193',
        address: "https://www.xnxx.com/hits/98",
    },
    {
        name: 'page194',
        address: "https://www.xnxx.com/hits/99",
    },
    {
        name: 'page195',
        address: "https://www.xnxx.com/hits/100",
    },
    {
        name: 'page196',
        address: "https://www.xnxx.com/hits/101",
    },
    {
        name: 'page197',
        address: "https://www.xnxx.com/hits/102",
    },
    {
        name: 'page198',
        address: "https://www.xnxx.com/hits/103",
    },
    {
        name: 'page199',
        address: "https://www.xnxx.com/hits/104",
    },
    {
        name: 'page200',
        address: "https://www.xnxx.com/hits/105",
    },
    {
        name: 'page201',
        address: "https://www.xnxx.com/hits/106",
    },
    {
        name: 'page202',
        address: "https://www.xnxx.com/hits/107",
    },
    {
        name: 'page203',
        address: "https://www.xnxx.com/hits/108",
    },
    {
        name: 'page204',
        address: "https://www.xnxx.com/hits/109",
    },
    {
        name: 'page205',
        address: "https://www.xnxx.com/hits/110",
    },
    {
        name: 'page206',
        address: "https://www.xnxx.com/hits/111",
    },
    {
        name: 'page207',
        address: "https://www.xnxx.com/hits/112",
    },
    {
        name: 'page208',
        address: "https://www.xnxx.com/hits/113",
    },
    {
        name: 'page209',
        address: "https://www.xnxx.com/hits/114",
    },
    {
        name: 'page210',
        address: "https://www.xnxx.com/hits/115",
    },
    {
        name: 'page211',
        address: "https://www.xnxx.com/hits/116",
    },
    {
        name: 'page212',
        address: "https://www.xnxx.com/hits/117",
    },
    {
        name: 'page213',
        address: "https://www.xnxx.com/hits/118",
    },
    {
        name: 'page214',
        address: "https://www.xnxx.com/hits/119",
    },
    {
        name: 'page215',
        address: "https://www.xnxx.com/hits/120",
    },

]

app.get('/all',(req,res)=>{
    res.json(videos)
})

app.get('/all/:pageId',(req,res,)=>{
    const pageId = req.params.pageId
    const pageAddress = videos.filter(video => video.name == pageId)[0].address
    // console.log(pageAddress)
    axios.get(pageAddress)
    .then(response => {
        const videoUrl = []
        var html = response.data
        var $ = cheerio.load(html)
        $('.with-uploader', html).each(function(){
            const url = $(this).find('.thumb-inside').find('a').attr('href')
            const urlFull = url.split('/')
            const name = urlFull[1]
            const img = $(this).find('.thumb-inside').find('a').find('img').attr('data-src')
            const description = $(this).find('.thumb-under').find('a').attr('title')
            const videoDetails = $(this).find('.metadata').text()
            const video = videoDetails.split('\n')
            const videoLength = video[2]
            videoUrl.push({
                    url: `https://www.xnxx.com${url}`,
                    img,
                    description,
                    videoLength,
                    name
                })
            })
            res.json(videoUrl)
        }).catch(err => console.log(err))
    })



app.get('/all/:pageId/:videoId',(req,res,)=>{
    const pageId = req.params.pageId
    const videoId = req.params.videoId
    const pageAddress = videos.filter(video => video.name == pageId)[0].address
    axios.get(pageAddress)
    .then(response => {
        const videoUrl = []
        const html = response.data
        const $ = cheerio.load(html)
        $('.with-uploader', html).each(function(){
            const url = $(this).find('.thumb-inside').find('a').attr('href')
            const urlFull = url.split('/')
            const name = urlFull[1]
            const img = $(this).find('.thumb-inside').find('a').find('img').attr('data-src')
            const description = $(this).find('.thumb-under').find('a').attr('title')
            const videoDetails = $(this).find('.metadata').text()
            const video = videoDetails.split('\n')
            const videoLength = video[2]
            videoUrl.push({
                    url: `https://www.xnxx.com${url}`,
                    img,
                    description,
                    videoLength,
                    name
                })
            })
            const videoAddress = videoUrl.filter(video => video.name == videoId)[0].url
            axios.get(videoAddress)
            .then(response => {
                const html = response.data
                const $ = cheerio.load(html);
                const title = $('.clear-infobar').find('strong').text()
                const spacificArticles = []
                const script = $('script').eq(2).text()
                const https = $('script').eq(2).text().lastIndexOf('https')
                const mp4 = $('script').eq(2).text().lastIndexOf('mp4')+3
                const url = script.slice(https, mp4)
                const img = $('script').eq(2).text().indexOf('https://img')
                const jpg = $('script').eq(2).text().indexOf('.jpg')+4
                const image = script.slice(img, jpg)
                spacificArticles.push({
                title,
                url,
                image,
                })
                res.json(spacificArticles)
            }).catch(err => console.log(err))
    })
})
app.listen(PORT, () => console.log('Server running on port '+ PORT))

