const artists = [
    {
      id: 1,
      name: "Alice Monroe",
      countryBorn: "USA",
      preferredMedium: "Photography",
      currentlyExhibited: "Modern Art Museum, New York",
      mostFamousPiece: "assets/heart.png"
    },
    {
      id: 2,
      name: "Javier Ortega",
      countryBorn: "Spain",
      preferredMedium: "Abstract Photography",
      currentlyExhibited: "Madrid Contemporary Gallery",
      mostFamousPiece: "assets/swirl.png"
    },
    {
      id: 3,
      name: "Lena Kowalski",
      countryBorn: "Poland",
      preferredMedium: "City Scape Photography",
      currentlyExhibited: "Warsaw Art Center",
      mostFamousPiece: "assets/road.png"
    },
    {
      id: 4,
      name: "Haruto Tanaka",
      countryBorn: "Japan",
      preferredMedium: "Digital Art",
      currentlyExhibited: "Tokyo Digital Expo",
      mostFamousPiece: "assets/two_tone.png"
    },
    {
      id: 5,
      name: "Sofia Mendes",
      countryBorn: "Portugal",
      preferredMedium: "People / Black and white",
      currentlyExhibited: "Lisbon Sculpture Garden",
      mostFamousPiece: "assets/hat.png"
    },
    {
      id: 6,
      name: "Ethan Clarke",
      countryBorn: "Australia",
      preferredMedium: "Retro Photography",
      currentlyExhibited: "Sydney Art Pavilion",
      mostFamousPiece: "assets/car_light.png"
    },
    {
      id: 7,
      name: "Amara Patel",
      countryBorn: "India",
      preferredMedium: "Patterns in Photography",
      currentlyExhibited: "Mumbai Fine Arts Gallery",
      mostFamousPiece: "assets/lines.png"
    },
    {
      id: 8,
      name: "Giovanni Russo",
      countryBorn: "Italy",
      preferredMedium: "Photography",
      currentlyExhibited: "Venice Art Festival",
      mostFamousPiece: "assets/upwards.png"
    },
    {
      id: 9,
      name: "Isla Thompson",
      countryBorn: "UK",
      preferredMedium: "Photgrapghy",
      currentlyExhibited: "London National Gallery",
      mostFamousPiece: "assets/figure.png"
    },
    {
      id: 10,
      name: "Noah Fischer",
      countryBorn: "Germany",
      preferredMedium: "Mixed Media",
      currentlyExhibited: "Berlin Art Week",
      mostFamousPiece: "assets/lights.png"
    }
  ];
  
const artistGallery = document.getElementById('artist-gallery')

artists.forEach((artist) => {
    artistGallery.innerHTML += `
        <div class="flex flex-col border-b border-b-slate-200 py-6 text-lg lg:flex-row md:justify-between w-10/12 mx-auto last:border-b-0">
            <div>
                <p><span class="font-medium">Name:</span> <span class="italic font-thin">${artist.name}</span></p>
                <p><span class="font-medium">Born:</span> <span class="italic font-thin">${artist.countryBorn}</span></p>
                <p><span class="font-medium">Medium:</span> <span class="italic font-thin">${artist.preferredMedium}</span></p>
                <p><span class="font-medium">Currently being exhibeted at:</span> <span class="italic font-thin">${artist.currentlyExhibited}</span></p>
            </div>
            <img src="${artist.mostFamousPiece}" class="w-full md:h-[200px] md:w-auto rounded-md border border-slate-200 p-1 shadow-2xl">
        </div>
    `
}) 

  