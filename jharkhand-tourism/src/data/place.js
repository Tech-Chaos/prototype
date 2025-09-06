const places = [
  {
    id: "JohnaFalls",
    hero: {
      title: "Johna Falls",
      subtitle: "A serene escape into nature’s beauty…",
      image: "/assets/johna-hero.jpg"
    },
    about: {
      title: "About",
      images: ["/assets/johna1.jpg", "/assets/johna2.jpg", "/assets/johna3.jpg"],
      content: "Nestled amidst greenery, Johna Falls is a breathtaking waterfall..."
    },
    discover: {
      title: "Discover",
      image: "/assets/discover-johna.jpg",
      content: "To get to the base of the falls, you need to trek down 700 steps..."
    },
    symphony: {
      title: "A Symphony of Green",
      images: ["/assets/green1.jpg", "/assets/green2.jpg", "/assets/green3.jpg"],
      content: "The area around Johna Falls is a thriving ecosystem..."
    },
    mustVisit: {
      title: "A Must Visit",
      content: "Johna Falls is a refreshing experience for travelers..."
    },
    journey: {
      title: "Immerse Yourself",
      options: [
        { heading: "For the Comfort Seeker", description: "Resorts and hotels near Ranchi…" },
        { heading: "For the Daily Explorer", description: "Budget-friendly guest houses…" },
        { heading: "For the Culture Enthusiast", description: "Homestays offering local experiences…" }
      ]
    },
    gettingThere: {
      title: "Getting There and Around",
      image: "/assets/johna-signboard.jpg",
      transport: [
        { mode: "By Air", details: "Nearest airport is Birsa Munda Airport, Ranchi" },
        { mode: "By Train", details: "Ranchi Railway Station, 40 km away…" },
        { mode: "By Road", details: "Regular buses and taxis available…" }
      ]
    },
    taste: {
      title: "Feast for Your Senses",
      image: "/assets/litti-chokha.jpg",
      foods: [
        { name: "Litti Chokha", description: "Roasted wheat balls with spicy mashed vegetables" },
        { name: "Traditional Delicacies", description: "Rice beer, chutneys, and local dishes…" }
      ]
    },
    tribalArt: {
      title: "Treasure Trove of Tribal Art",
      images: ["/assets/market.jpg", "/assets/handicraft.jpg"],
      crafts: [
        { name: "Bamboo Crafts", description: "Beautiful woven baskets, mats, and decor…" },
        { name: "Tribal Jewelry", description: "Unique ornaments made from beads, shells, metals…" }
      ]
    }
  }
];

export default places;
