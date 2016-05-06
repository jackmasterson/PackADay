var model = {
  sections: 
  [
    {
      title: "Everybody's got the funny in them. We just bring it out.",
      subHead: [
        {
          listHead: "Sign up for our improv, acting, and writing workshops " +
            "and tap into your creative side.",
          listItem: "All the world's a stage, and all the men and women" +
            " merely players. - The Bard, William Shakespeare",
          src: 'img/shakespeare.png',
          id: 'note',
          href: 'http://shorefunimprov.com/upcoming-events.html',
          hrefTxt: 'Workshops'
        },
      ],
      color: "#15c188"
    },
    {
      title: "Who We Are",
      subHead: [
        {
          listHead: "Mr. Harvey", 
          listItem: ["Over 22 Years Teaching Experience",                     
                    " Manasquan High School Teacher of the Year",              
                    " Who's Who Among American Teachers",                   
                    " Teacher of AP Literature & Composition, Writing",       
                    " Honors English, Screenwriting, & Acting", 
                    " Frequent MHS Drama Club Asst. Director & Actor ",
                    " MA Rutgers University",
                    " UCLA School of Film, Theater & Television",
                    " Philadelphia ComedySportz Team Founding Member"],
          src: "img/harvey.jpg",
          id: 'harvey',
          href: 'http://www.manasquanschools.org/site/Default.aspx?PageID=691',
          hrefTxt: 'School Page'
        },
        {
          listHead: "Mr. Mawn", 
          listItem: ["Over 21 Years Teaching Experience",
                    " Manasquan High School Teacher of the Year",
                    " Who's Who Among American Teachers",
                    " Teacher of AP Composition and Writing",   
                    " Honors English, and Journalism",           
                    " Advisor for MHS Newspaper The Blue & Gray",
                    " Advisor for MHS Literary Magazine",
                    " MA Teachers College, Columbia University"],
          src: "img/mawn.jpg",
          id: 'mawn',
          href: 'http://www.manasquanschools.org/site/Default.aspx?PageID=816',
          hrefTxt: 'School Page'
        }
      ],
      color: "#b21e1e"
    },
    {
      title: "What You'll Learn",
      subHead: [
        {
          listHead: "Improv teaches more than just how to be funny." +
            " You'll Learn or Get Better At:",
          listItem: ["Stage Presence", " Mental Quickness",
        " Poise Under Pressure", " Quick Decision-Making",
        " Social Skills", " Verbal/Nonverbal Communication",
          " Storytelling", " How to Command a Room", " and Much, Much More!"],
          src: ko.observableArray([]),
          id: 'pen',
          href: 'workshops.html',
          hrefTxt: 'More Info'
        }
      ],
      color: "#15c188"
    }
      
  ]
};

var getInfo = '<a href="#/">Get More Info Here</a>';
var picLink = 'http://shorefunimprov.com/photos--shows.html';
var pics = '</br><a target="_blank" href="' + picLink + '">See Some Pictures!</a>';
$('#note').append(getInfo);
$('#outtro-foot').append(pics);
console.log(model.sections);

var viewModel = {
  init: function() {

  }
}
ko.applyBindings(viewModel);