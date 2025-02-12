const artists = [
    {
      id: 1,
      name: "Alice Monroe",
      countryBorn: "USA",
      preferredMedium: "Photography",
      currentlyExhibited: "Modern Art Museum, New York",
      mostFamousPiece: "assets/heart.png",
      bio: "Alice Monroe captures the raw beauty of everyday life through her lens. Her work focuses on urban landscapes and human emotions, often blending light and shadow to tell compelling stories. She believes that photography is more than just an image—it's a narrative frozen in time. Alice’s compositions reflect a deep understanding of her subjects, often portraying candid moments that reveal the intricacies of human connection. Her signature style combines high contrast with a subtle warmth that makes her work instantly recognizable."

    },
    {
      id: 2,
      name: "Javier Ortega",
      countryBorn: "Spain",
      preferredMedium: "Abstract Photography",
      currentlyExhibited: "Madrid Contemporary Gallery",
      mostFamousPiece: "assets/swirl.png",
      bio: "Javier Ortega is known for his bold, expressive brushstrokes and vibrant color palettes. His paintings often depict Spanish culture and tradition, reinterpreted through a modern lens. Javier’s work explores emotion and movement, drawing viewers into his passionate world of color and form. Inspired by the works of Picasso and Miró, he takes traditional Spanish themes and reinvents them with an abstract expressionist approach. His paintings pulsate with energy, often featuring dynamic compositions that create a sense of motion and depth."
    },
    {
      id: 3,
      name: "Lena Kowalski",
      countryBorn: "Poland",
      preferredMedium: "City Scape Photography",
      currentlyExhibited: "Warsaw Art Center",
      mostFamousPiece: "assets/road.png",
      bio: "Lena Kowalski specializes in black and white photography, capturing the essence of minimalism. Her work focuses on human solitude and the quiet moments of life, often presenting stark contrasts that highlight deep emotions and introspection. Lena’s photographs often feature single subjects in vast, empty spaces, evoking a sense of isolation and contemplation. She uses natural light to create dramatic shadows, adding a layer of depth to her compositions. Her work is often described as poetic, evoking emotions of nostalgia and quiet contemplation."
    },
    {
      id: 4,
      name: "Haruto Tanaka",
      countryBorn: "Japan",
      preferredMedium: "Digital Art",
      currentlyExhibited: "Tokyo Digital Expo",
      mostFamousPiece: "assets/two_tone.png",
      bio: "Haruto Tanaka blends technology and creativity, crafting mesmerizing digital artworks inspired by cyberpunk aesthetics. His work often portrays futuristic cities and dreamlike landscapes, utilizing AI-generated elements and cutting-edge design techniques. Haruto’s compositions feature neon-lit streets, glitch effects, and surreal lighting, creating immersive scenes that transport viewers into a digital future. His work challenges the boundary between art and technology, making him a pioneer in the digital art movement."

    },
    {
      id: 5,
      name: "Sofia Mendes",
      countryBorn: "Portugal",
      preferredMedium: "People / Black and white",
      currentlyExhibited: "Lisbon Sculpture Garden",
      mostFamousPiece: "assets/hat.png",
      bio: "Sofia Mendes creates intricate sculptures that merge organic and industrial materials. Her pieces explore themes of transformation and resilience, often depicting the balance between nature and human influence. Her sculptures frequently incorporate salvaged materials, reinforcing themes of sustainability and rebirth. Sofia’s work encourages viewers to engage with her pieces physically, as they are designed to be both seen and touched, creating a multi-sensory experience."
    },
    {
      id: 6,
      name: "Ethan Clarke",
      countryBorn: "Australia",
      preferredMedium: "Retro Photography",
      currentlyExhibited: "Sydney Art Pavilion",
      mostFamousPiece: "assets/car_light.png",
      bio: "Ethan Clarke is an adventurous photographer who captures the rugged beauty of the Australian outback. His work showcases vast landscapes, wildlife, and the spirit of exploration, bringing nature's grandeur into focus through his lens. Ethan’s compositions highlight the raw, untouched beauty of nature, often featuring dramatic skies and sweeping desert expanses. His deep appreciation for conservation is evident in his photography, which tells a story of the land and its delicate ecosystems."
    },
    {
      id: 7,
      name: "Amara Singh",
      countryBorn: "India",
      preferredMedium: "Patterns in Photography",
      currentlyExhibited: "Mumbai Fine Arts Gallery",
      mostFamousPiece: "assets/lines.png",
      bio: "Amara Singh weaves together tradition and contemporary storytelling in her intricate textile art. Drawing from India’s rich heritage of embroidery and fabric dyeing, her work explores themes of identity and cultural memory. Each piece tells a story, blending traditional techniques like Kantha stitching with modern, abstract patterns. Her use of bold colors and layered textures creates a tactile experience that invites viewers to explore deeper narratives."
    },
    {
      id: 8,
      name: "Giovanni Russo",
      countryBorn: "Italy",
      preferredMedium: "Photography",
      currentlyExhibited: "Venice Art Festival",
      mostFamousPiece: "assets/upwards.png",
      bio: "Giovanni Russo captures the charm of everyday Italian life through his lens. His photography is deeply influenced by classic cinema, often featuring dramatic lighting and rich contrasts. His work highlights the beauty in mundane moments, from bustling markets to quiet alleyways, portraying a timeless elegance that echoes through each frame."
    },
    {
      id: 9,
      name: "Isla Thompson",
      countryBorn: "UK",
      preferredMedium: "Photgrapghy",
      currentlyExhibited: "London National Gallery",
      mostFamousPiece: "assets/figure.png",
      bio: "Isla Thompson specializes in portrait photography, capturing raw and intimate moments that reveal her subjects' inner worlds. Her work often focuses on themes of identity and self-expression, using natural lighting and muted tones to create a sense of vulnerability and depth."
    },
    {
      id: 10,
      name: "Noah Fischer",
      countryBorn: "Germany",
      preferredMedium: "Mixed Media",
      currentlyExhibited: "Berlin Art Week",
      mostFamousPiece: "assets/lights.png",
      bio: "Noah Fischer is an experimental artist who merges painting, sculpture, and digital elements to create immersive installations. His work explores urban landscapes and the intersection of technology with human emotion, often incorporating interactive components to engage viewers in new and unexpected ways."
    }
  ];
  
const artistGallery = document.getElementById('artist-gallery')


artists.forEach((artist) => {
    artistGallery.innerHTML += `
        <div class="flex flex-col border-b border-b-slate-200 py-6 text-lg w-10/12 mx-auto last:border-b-0">
          <div class="flex flex-col lg:flex-row md:justify-between">
              <div>
                  <p><span class="font-medium">Name:</span> <span class="italic font-thin">${artist.name}</span></p>
                  <p><span class="font-medium">Born:</span> <span class="italic font-thin">${artist.countryBorn}</span></p>
                  <p><span class="font-medium">Medium:</span> <span class="italic font-thin">${artist.preferredMedium}</span></p>
                  <p><span class="font-medium">Currently being exhibeted at:</span> <span class="italic font-thin">${artist.currentlyExhibited}</span></p>
                  <p class="line-clamp-2" id="bio-${artist.id}"><span class="font-medium">Bio:</span> <span class="italic font-thin">${artist.bio}</span></p>
              </div>
              <img src="${artist.mostFamousPiece}" class="w-full md:h-[200px] md:w-auto rounded-md border border-slate-200 p-1 shadow-2xl md:ml-4">
            </div>
            <div class="flex w-full justify-center pt-2">
              <i class="fa-solid fa-angle-down text-3xl text-slate-400 hover:animate-bounce cursor-pointer p-2" id="see-more" data-index="${artist.id}"></i>
            </div>
        </div>
    `
}) 

// const artistBio = document.getElementById('artist-bio')

// artistGallery.addEventListener('click', function(e) {

//   if(e.target.tagName === "I") {
//     let artistIndex = Number(e.target.dataset.index)
//     const currentArtist = artists.find(artist => artist.id === artistIndex)
//     if(currentArtist) {
//       const artistBio = document.getElementById('artist.id')
//       console.log(currentArtist)
//       artistBio.classList.toggle('line-clamp-2')
//     } else {
//       console.log('nopoe')
//     }
//   }
// })

// thank ChatGPT for tweaks

artistGallery.addEventListener('click', function(e) {
  if (e.target.tagName === "I") {
    let artistIndex = Number(e.target.dataset.index);
    const currentArtist = artists.find(artist => artist.id === artistIndex);
    
    if (currentArtist) {
      console.log(currentArtist);

      // Find the specific bio of the clicked artist
      const artistBio = document.querySelector(`#bio-${artistIndex}`);

      if (artistBio) {
        // Toggle the 'line-clamp-2' class on the correct bio element
        artistBio.classList.toggle('line-clamp-2');
      } 
    } 
  }
});


  