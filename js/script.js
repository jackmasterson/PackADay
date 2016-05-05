var model = {
  sections: 
  [
    {
      title: "Our Goal is Simple",
      subHead: [
        {
          listHead: "Give away backpacks full of essentials to as many" +
            " homeless people as we can.",
          listItem: ["By partnering with St. John's Soup Kitchen in Newark, NJ," +
        " we're collecting new and gently used backpacks, filling them" +
        " with the materials we gather (listed below), and handing them out at " +
        "mealtimes to those who need them."]
        }
      ],
      color: "#15c188"
    },
    {
      title: "What We're Looking For",
      subHead: [
        {
          listHead: "Toiletries", 
          listItem: ["Razors", " Baby Wipes", " Shaving Cream", " Body Wash",
            " Shampoo", " Toothbrush/toothpaste", " Floss", " Mouthwash",
            " Deodorant"]
        },
        {
          listHead: "Clothing", 
          listItem: [" Heavy Scarves", " Dark T-Shirts", " Sweatpants",
            " Socks", " Underwear"]
        },
        {
          listHead: "Miscellaneous",
          listItem: [" Backpacks", " Reusable Water Bottles", " Band-Aids",
            " Sunscreen", " Non-perishables"]
        }
      ],
      color: "#f0eb81"
    },
    {
      title: "How You Can Help",
      subHead: [
        {
          listHead: "Submit Your Email Above, and We'll Send You Information" +
            " About:",
          listItem: ["Item Quality Requirements", " Drop-Off or Pick-Up Locations",
        " How Your Donation will be Used", " Volunteering Information",
        " Monetary Donation Information", " How to Get in Touch" +
          " if you have any Questions"]
        }
      ],
      color: "#15c188"
    }
      
  ]
};
console.log(model.sections);

var viewModel = {
  init: function() {

  }
}
ko.applyBindings(viewModel);