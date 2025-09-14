const places = [
  {
    id: "johnafalls",
    hero: {
      title: "Johna Falls",
      subtitle: "A serene escape into nature’s beauty…",
      image: "/assets/Jonha_falls.jpg",
      descriptionbold: "A  place that's more than just a pretty picture on a postcard. Johna Falls has a special kind of magic. It’s a place that whispers tales of ancient serenity and showcases the raw, untamed beauty of this land",
      description: "Nestled amidst a verdant expanse, approximately 45 kilometers from the bustling heart of Ranchi, lies Johna Falls. Now, you might hear the locals call it Gautamdhara,. This isn't one of those roaring, thunderous cascades that you have to shout over. Johna is a more graceful affair, a \"hanging valley\" waterfall, where the Kanchi River takes a scenic plunge of approximately 43 meters (roughly 141 feet) into a stunning valley."

    },
    about: {
      title: "About",
      images: ["/assets/c1.jpg", "/assets/c2.png", "/assets/c3.jpg","/assets/c4.jpg"],
      content: "Nestled amidst greenery, Johna Falls is a breathtaking waterfall..."
    },
    discover: {
      title: "Discover",
      image: "/assets/discover.jpg",
      caption: "Journey To The falls",
      description:"To get to the base of the falls, you'll need to descend a series of about 700-odd steps. Don't let that daunt you! With every step, a new, breathtaking vista of the falls and the surrounding forest unfolds before your eyes. It’s a journey in itself.It’s a place that will charm you with its simplicity, soothe you with its serenity, and leave you with memories that you'll cherish for a lifetime. Pack your bags, bring your sense of wonder, and come experience the heart of Jharkhand. You won't be disappointed."

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
  },
  {
    id: "deoghar",
    hero: {
      title: "Deoghar",
      subtitle: "The abode of the Gods and spiritual serenity…",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      descriptionbold: "Deoghar, literally meaning 'Dham of the Devas', is one of the most revered pilgrimage sites in India. Home to the famous Baidyanath Jyotirlinga Temple, this sacred city attracts millions of devotees annually.",
      description: "Nestled in the Santhal Pargana division of Jharkhand, Deoghar is steeped in mythology and spirituality. The city comes alive during Shravan month when devotees undertake the arduous Kanwar Yatra, carrying holy water from the Ganges to offer at the temple."
    },
    about: {
      title: "About",
      images: [
        "https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1580796405775-d9e55a4f0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "Deoghar is renowned for the sacred Baidyanath Jyotirlinga Temple, one of the twelve Jyotirlingas in India..."
    },
    discover: {
      title: "Discover",
      image: "https://images.unsplash.com/photo-1571768414678-ea37c70c7c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Divine Journey",
      description: "Experience the spiritual energy that permeates every corner of Deoghar. The ancient temples, sacred rituals, and devotional atmosphere create an unforgettable pilgrimage experience. Walk the same paths that saints and sages have trodden for centuries, and feel the divine presence that makes this place truly special."
    },
    symphony: {
      title: "Sacred Harmony",
      images: [
        "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542108226-9130e8243a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "The spiritual atmosphere of Deoghar creates a harmony that transcends the physical realm..."
    },
    mustVisit: {
      title: "Sacred Must Visits",
      content: "Baidyanath Temple, Naulakha Mandir, Trikuta Parvat, and Tapovan are essential spiritual destinations..."
    },
    journey: {
      title: "Spiritual Accommodations",
      options: [
        { heading: "Temple Guest Houses", description: "Simple, clean accommodations near the main temples..." },
        { heading: "Dharmshalas", description: "Traditional pilgrimage lodging with basic amenities..." },
        { heading: "Modern Hotels", description: "Comfortable stays with modern facilities for pilgrims..." }
      ]
    },
    gettingThere: {
      title: "Getting There",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      transport: [
        { mode: "By Air", details: "Nearest airport is Patna Airport, 175 km away" },
        { mode: "By Train", details: "Jasidih Junction, 7 km from Deoghar main city" },
        { mode: "By Road", details: "Well-connected by state highways from major cities" }
      ]
    },
    taste: {
      title: "Divine Flavors",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foods: [
        { name: "Prasadam", description: "Sacred offerings blessed by the deity" },
        { name: "Traditional Thali", description: "Simple, sattvic vegetarian meals served in temples" }
      ]
    },
    tribalArt: {
      title: "Sacred Crafts",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571768414678-ea37c70c7c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      crafts: [
        { name: "Religious Items", description: "Sacred threads, rudraksha, and spiritual artifacts..." },
        { name: "Brass Idols", description: "Beautifully crafted deities and religious figurines..." }
      ]
    }
  },
  {
    id: "hirnifalls",
    hero: {
      title: "Hirni Falls",
      subtitle: "Nature's hidden cascade in the heart of Jharkhand…",
      image: "https://images.unsplash.com/photo-1558618666-fbd31c2cd2d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      descriptionbold: "Hirni Falls, a hidden gem nestled in the dense forests of Jharkhand, offers an untouched natural paradise where pristine waters cascade down rocky cliffs into crystal-clear pools below.",
      description: "Located approximately 70 kilometers from Ranchi, Hirni Falls is one of Jharkhand's best-kept secrets. The waterfall plunges from a height of about 120 feet, creating a mesmerizing spectacle that changes with the seasons. During monsoons, it becomes a thundering cascade, while in winter, it transforms into a gentle, serene flow."
    },
    about: {
      title: "About",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "Hirni Falls is surrounded by dense sal forests, creating a pristine ecosystem..."
    },
    discover: {
      title: "Discover",
      image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Adventure Awaits",
      description: "The trek to Hirni Falls is an adventure in itself. Navigate through dense forest trails, cross small streams, and witness diverse wildlife. The journey rewards you with one of the most spectacular waterfalls in Jharkhand, where you can swim in natural pools and experience nature's raw beauty."
    },
    symphony: {
      title: "Forest Symphony",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "The biodiversity around Hirni Falls creates a natural orchestra of sounds..."
    },
    mustVisit: {
      title: "Adventure Must-Do",
      content: "Swimming in natural pools, forest trekking, bird watching, and photography are essential experiences..."
    },
    journey: {
      title: "Adventure Stays",
      options: [
        { heading: "Eco Resorts", description: "Sustainable accommodations in forest settings..." },
        { heading: "Camping", description: "Organized camping experiences near the falls..." },
        { heading: "Forest Lodges", description: "Government forest department lodges for nature lovers..." }
      ]
    },
    gettingThere: {
      title: "Reaching the Falls",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      transport: [
        { mode: "By Air", details: "Ranchi Airport, then drive 70 km through forest roads" },
        { mode: "By Train", details: "Ranchi Railway Station, followed by road journey" },
        { mode: "By Road", details: "4WD vehicle recommended for the final forest stretch" }
      ]
    },
    taste: {
      title: "Forest Flavors",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foods: [
        { name: "Tribal Cuisine", description: "Fresh forest produce and traditional cooking methods" },
        { name: "Barbecue", description: "Freshly grilled food in the wilderness setting" }
      ]
    },
    tribalArt: {
      title: "Forest Crafts",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571768414678-ea37c70c7c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      crafts: [
        { name: "Bamboo Products", description: "Baskets, containers, and decorative items from forest bamboo..." },
        { name: "Wood Carvings", description: "Intricate designs carved from fallen forest wood..." }
      ]
    }
  },
  {
    id: "jagannathmandi",
    hero: {
      title: "Jagannath Mandir",
      subtitle: "Divine architecture and spiritual magnificence…",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      descriptionbold: "The Jagannath Mandir of Ranchi stands as a magnificent replica of the famous Puri Jagannath Temple, representing the spiritual heart of Jharkhand with its stunning architecture and divine atmosphere.",
      description: "Built with exquisite craftsmanship, this temple complex spans several acres and houses the divine trinity - Lord Jagannath, Balabhadra, and Subhadra. The temple's architecture mirrors the classical Kalinga style, featuring intricate stone carvings and towering spires that reach towards the heavens."
    },
    about: {
      title: "About",
      images: [
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "The Jagannath Mandir is renowned for its architectural brilliance and spiritual significance..."
    },
    discover: {
      title: "Discover",
      image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Divine Architecture",
      description: "Marvel at the intricate stone work, explore the beautifully landscaped temple grounds, and witness the daily rituals that bring the temple to life. The annual Rath Yatra celebration transforms the entire complex into a vibrant festival of faith and devotion, attracting thousands of devotees."
    },
    symphony: {
      title: "Architectural Harmony",
      images: [
        "https://images.unsplash.com/photo-1542108226-9130e8243a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1580796405775-d9e55a4f0b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "The temple's design creates perfect harmony between spiritual purpose and architectural beauty..."
    },
    mustVisit: {
      title: "Sacred Experience",
      content: "Main temple darshan, Rath Yatra festival, meditation gardens, and cultural programs are unmissable..."
    },
    journey: {
      title: "Pilgrimage Stays",
      options: [
        { heading: "Temple Accommodation", description: "Guest houses within the temple complex..." },
        { heading: "Nearby Hotels", description: "Modern hotels in Ranchi with temple shuttles..." },
        { heading: "Ashrams", description: "Spiritual retreats for deeper religious experience..." }
      ]
    },
    gettingThere: {
      title: "Temple Access",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      transport: [
        { mode: "By Air", details: "Ranchi Airport, 15 km from the temple complex" },
        { mode: "By Train", details: "Ranchi Railway Station, well connected by local transport" },
        { mode: "By Road", details: "Located on Jagannathpur Road, easily accessible" }
      ]
    },
    taste: {
      title: "Sacred Offerings",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foods: [
        { name: "Mahaprasad", description: "Sacred food offerings blessed by Lord Jagannath" },
        { name: "Traditional Sweets", description: "Kheer, rasgulla, and other temple specialties" }
      ]
    },
    tribalArt: {
      title: "Sacred Arts",
      images: [
        "https://images.unsplash.com/photo-1571768414678-ea37c70c7c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      crafts: [
        { name: "Stone Carvings", description: "Intricate religious sculptures and architectural details..." },
        { name: "Religious Paintings", description: "Traditional Patta paintings depicting divine stories..." }
      ]
    }
  },
  {
    id: "ranchihills",
    hero: {
      title: "Ranchi Hills",
      subtitle: "Rolling hills and scenic vistas of the capital…",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      descriptionbold: "The undulating hills surrounding Ranchi create a picturesque landscape that has earned the city its nickname as the 'City of Hills'. These ancient formations offer breathtaking panoramic views and serene retreat spots.",
      description: "Rising to heights of over 700 meters above sea level, the Ranchi hills provide a natural boundary to the city while offering numerous vantage points for spectacular sunrises and sunsets. The hills are covered with dense forests and dotted with small villages that maintain traditional lifestyles."
    },
    about: {
      title: "About",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "The Ranchi hills form part of the Chota Nagpur plateau, known for their geological significance..."
    },
    discover: {
      title: "Discover",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Scenic Beauty",
      description: "Trek through winding hill paths, discover hidden waterfalls, and enjoy panoramic city views from multiple viewpoints. The hills offer excellent opportunities for photography, bird watching, and peaceful meditation amidst nature's tranquility."
    },
    symphony: {
      title: "Hill Harmony",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      content: "The diverse ecosystem of the hills supports various flora and fauna native to the region..."
    },
    mustVisit: {
      title: "Hill Adventures",
      content: "Rock Garden, Hill View Point, Pahari Mandir, and sunset watching spots are must-visit attractions..."
    },
    journey: {
      title: "Hill Retreats",
      options: [
        { heading: "Hill Resorts", description: "Scenic accommodations with valley views..." },
        { heading: "Eco Lodges", description: "Sustainable stays integrated with natural surroundings..." },
        { heading: "City Hotels", description: "Modern amenities with easy hill access..." }
      ]
    },
    gettingThere: {
      title: "Reaching the Hills",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      transport: [
        { mode: "By Air", details: "Ranchi Airport, various hills accessible by road" },
        { mode: "By Train", details: "Ranchi Railway Station, local transport to hill bases" },
        { mode: "By Road", details: "Well-connected hill roads from the city center" }
      ]
    },
    taste: {
      title: "Hill Station Treats",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      foods: [
        { name: "Hill Tea", description: "Fresh mountain tea served at hilltop stalls" },
        { name: "Local Snacks", description: "Traditional hill station refreshments and treats" }
      ]
    },
    tribalArt: {
      title: "Hill Crafts",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571768414678-ea37c70c7c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      crafts: [
        { name: "Hill Textiles", description: "Handwoven fabrics by hill tribe communities..." },
        { name: "Stone Artifacts", description: "Carved items made from local hill stones..." }
      ]
    }
  }
];

export default places;
