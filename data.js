const defaultSong = {
  image: "img31.jpeg",
  song: "song29.mp3",
  title: "Hanuman Chalisa",
  artist: "Gulshan Kumar",
}
const data = [
  {
    image: "img3.jpeg",
    song: "song1.mp3",
    title: "Besabriyaan",
    artist: "Armaan Malik",
    type: ["msd"],
  },
  {
    image: "img3.jpeg",
    song: "song2.mp3",
    title: "Jab Tak",
    artist: "Armaan Malik",
    type: ["msd", 'arijit'],

  },
  {
    image: "img3.jpeg",
    song: "song3.mp3",
    title: "Kaun Tujhe",
    artist: "Palak Muchhal",
    type: ["msd", 'arijit'],

  },
  {
    image: "img1.jpeg",
    song: "song4.mp3",
    title: "Pahle Bhi Mai",
    artist: "Paarmish Verma, PARDHAAN, Sadhana Sargam",
    type: ["lofi"],

  },
  {
    image: "img3.jpeg",
    song: "song5.mp3",
    title: "Phir Kabhi",
    artist: "Arijit Singh",
    type: ["msd", 'arijit'],

  },
  {
    image: "img1.jpeg",
    song: "song6.mp3",
    title: "Saari Duniya Jalaa Denga",
    artist: "Jaani, B Araak",
    type: ["arijit", "lofi"],

  },
  {
    image: "img2.jpeg",
    song: "song7.mp3",
    title: "Hasi-Male version",
    artist: "Ami Mishra",
    type: ["lofi", "arijit"],

  },
  {
    image: "img10.jpeg",
    song: "song8.mp3",
    title: "Aam Jahe Munde",
    artist: "Parmish Verma",
    type: ["punjabi","lofi", "like"],

  },
  {
    image: "img9.jpeg",
    song: "song9.mp3",
    title: "Daku",
    artist: "Chani Nattan,Shidu",
    type: ["punjabi"],

  },
  {
    image: "img11.jpeg",
    song: "song10.mp3",
    title: "Ve Kamleya-Lofi",
    artist: "Deepanshu, Arijit Singh",
    type: ["lofi", "arijit", "arijit2", "like"],

  },
  {
    image: "img4.jpeg",
    song: "song11.mp3",
    title: "Phir Bhi Tumko Chaahuga",
    artist: "Arijit Singh",
    type: ["arijit", "lofi"],

  },
  {
    image: "img7.jpeg",
    song: "song12.mp3",
    title: "Tere Sang Yara",
    artist: "Atif Aslam",
    type: ["lofi"],

  },
  {
    image: "img6.jpeg",
    song: "song13.mp3",
    title: "Asal Mein",
    artist: "Darshan Raval",
    type: ["lofi"],

  },
  {
    image: "img14.jpeg",
    song: "song14.mp3",
    title: "Baarish",
    artist: "Shashaa Tirupati",
    type: ["relax"],

  },
  {
    image: "img22.jpeg",
    song: "song18.mp3",
    title: "Soulmte",
    artist: "Badshah, Arijit Singh",
    type: ["motivation"],
  },
{
    image: "img16.jpeg",
    song: "song16.mp3",
    title: 'Heer Aasani(From "fighter"',
    artist: "B Praak, Vishal Dadlani",
    type: ["motivation", "lofi"],

  },
  {
    image: "img15.jpeg",
    song: "song15.mp3",
    title: "Believer",
    artist: "Imagine Dragons",
    type: ["motivation"],
  },
  
  {
    image: "img17.jpeg",
    song: "song17.mp3",
    title: "Unstoppable",
    artist: "Sia",
    type: ["motivation"],

  },
  {
    image: "img23.jpeg",
    song: "song19.mp3",
    title: "Dekhte Dekhte",
    artist: "Atif Aslam",
    type: ["relax","lofi"],
  },
  {
    image: "img20.jpeg",
    song: "song20.mp3",
    title: "Uska Hi Banana",
    artist: "Arijit Singh",
    type: ["relax", "like"],
  },
  {
    image: "img21.jpeg",
    song: "song21.mp3",
    title: 'Meree_E_Ishaq(from "Zid")',
    artist: "Shaarib Toshi, Arijit Singh",
    type: ["relax"],
  },
  {
    image: "img24.jpeg",
    song: "song22.mp3",
    title: "Soni Soni",
    artist: "Darshan Raval",
    type: ["lofi"],
  },
  {
    image: "img25.jpeg",
    song: "song23.mp3",
    title: "O Saathi",
    artist: "Atif Aslam, Manoj Bajpayee",
    type: ["relax","lofi", "relax2", "like"],
  },
  {
    image: "img31.jpeg",
    song: "song29.mp3",
    title: "Hanuman Chalisa",
    artist: "Gulsahan Kumar",
    type: ["bhakti"],
  },
  {
    image: "img26.jpeg",
    song: "song24.mp3",
    title: "Hawayein",
    artist: "Arijit Singh, Pritam",
    type: ["arijit", "arijit2", "relax", "relax2", "like"],
  },
  {
    image: "img27.jpeg",
    song: "song25.mp3",
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh, Mithoon",
    type: ["arijit", "arijit2", "relax", "relax2", "like"],
  },
  {
    image: "img28.jpeg",
    song: "song26.mp3",
    title: "Roke Na Ruke Naina",
    artist: "Arijit Singh",
    type: ["arijit", "arijit2", "relax", "relax2", "like"],
  },
  {
    image: "img29.jpeg",
    song: "song27.mp3",
    title: "Choo Lo",
    artist: "The Local Train",
    type: ["arijit", "arijit2", "relax", "relax2", "motivation", "like"],
  },
  {
    image: "img30.jpeg",
    song: "song28.mp3",
    title: "Apna Bana Le",
    artist: "Arijit Singh, Sachin",
    type: ["arijit", "arijit2", "relax", "relax2", "like"],
  },



]

const playlist = [
  {
    image: "img5.jpeg",
    title: "Lofi Songs (sukoon vibes)",
    type: "lofi",
  },
  {
    image: "img3.jpeg",
    title: "Ms. Dhoni All Songs",
    type: "msd",
  },
  {
    image: "img12.jpeg",
    title: "PUNJABI SONGS",
    type: "punjabi",
  },
  {
    image: "img4.jpeg",
    title: "The Arijit Singh Cool",
    type: "arijit"
  }
]
const todayData = [
  {
    image: "img13.jpeg",
    title: "Bhakti (santi vibes)",
    type: "bhakti",
  },
]

const backInData = [
  {
    image: "img8.jpeg",
    title: "Arijit Singh Mix",
    type: "arijit2",
  },
  {
    image: "img6.jpeg",
    title: "Chill-Love Songs",
    type: "relax2"
  },
  {
    image: "img10.jpeg",
    title: "Punjabi Hits",
    type: "punjabi",
  },
  {
    image: "img5.jpeg",
    title: "Relax-Lofi",
    type: "lofi",
  },

]
const freshData = [
  {
    image: "img18.jpeg",
    title: "Top motivation",
    type: "motivation",
  },
  {
    image: "img19.jpeg",
    title: "Mind Relax",
    type: "relax",
  },
 ]

const browsingData = [
  {
    title: "Arijit",
    imgSrc: "img21.jpeg",
    background: "#830000"
   },
  {
    title: "Asal",
    imgSrc: "img6.jpeg",
    background: "deeppink"
   },
  {
    title: "Reverse",
    imgSrc: "img5.jpeg",
    background: "rebeccapurple"
   },
  {
    title: "Action",
    imgSrc: "img1.jpeg",
    background: "deepskyblue"
   },
 ]

const libraryBoxData = [
  {
    title: "Arijit Singh",
    imgSrc: "img32.jpeg",
    type: "arijit",
  },
  {
    title: "Darshan Raval",
    imgSrc: "img33.jpeg",
    type: "relax2",
  },
]

const likeSongData = [
  {
    title: "Saurav's favourite",
    image: "img34.jpeg",
    type: "like",
  }
]
