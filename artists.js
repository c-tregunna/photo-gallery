const artists = [
    {
      id: 1,
      name: "Alice Monroe",
      countryBorn: "USA",
      yearBorn: 1980,
      preferredMedium: "Photography",
      style: "Urban street photography with candid human interactions and dynamic contrasts.",
      quote: "Photography is the art of freezing emotions in time.",
      currentlyExhibited: "Modern Art Museum, New York",
      mostFamousPiece: "assets/heart.png",
      bio: "Alice Monroe captures the raw beauty of everyday life through her lens. She specializes in urban street photography, focusing on candid human interactions and the play of natural light. Her compositions often feature dynamic contrasts, creating a sense of depth and realism. She is passionate about documenting the essence of city life and the fleeting emotions that define it. Through her work, she aims to reveal unnoticed moments, turning them into powerful visual narratives that provoke thought and emotion. Alice has exhibited her photographs internationally, earning praise for her ability to transform ordinary scenes into extraordinary pieces of art. She continues to explore different urban environments, seeking new inspiration in the ever-changing streets around her. Her ability to blend authenticity with artistic flair has made her a significant name in contemporary street photography, influencing emerging artists. Alice also conducts workshops, sharing her techniques and inspiring the next generation of visual storytellers."
    },
    {
      id: 2,
      name: "Javier Ortega",
      countryBorn: "Spain",
      yearBorn: 1975,
      preferredMedium: "Abstract Photography",
      style: "Experimental photography using slow shutter speeds and motion blur to create dreamlike images.",
      quote: "Art is not what you see, but what you make others feel.",
      currentlyExhibited: "Madrid Contemporary Gallery",
      mostFamousPiece: "assets/swirl.png",
      bio: "Javier Ortega is known for his experimental and abstract photography, often using slow shutter speeds and motion blur to create dreamlike images. His work challenges conventional perspectives, making the viewer question the boundary between reality and imagination. Javier is constantly exploring new techniques to evoke deep emotional responses. His artistic approach is deeply rooted in a desire to push the boundaries of perception, crafting visuals that blur the line between movement and stillness. His pieces have been described as hauntingly beautiful, often evoking a sense of nostalgia and introspection. With a commitment to artistic evolution, Javier continues to refine his methods, drawing inspiration from both classical and contemporary influences. His exhibitions attract art enthusiasts worldwide, offering immersive experiences that invite viewers into his unique perspective. Beyond his artistic pursuits, he mentors aspiring photographers, helping them embrace experimental techniques and develop their distinctive styles."
    },
    {
      id: 3,
      name: "Lena Kowalski",
      countryBorn: "Poland",
      yearBorn: 1982,
      preferredMedium: "City Scape Photography",
      style: "Black and white cityscape photography focusing on urban solitude and high contrasts.",
      quote: "Every city has a story, I just help tell it through my lens.",
      currentlyExhibited: "Warsaw Art Center",
      mostFamousPiece: "assets/road.png",
      bio: "Lena Kowalski is a master of black and white cityscape photography, using high contrasts to depict urban solitude. She captures the interplay between architecture and human presence, highlighting the stark beauty of city life. Her meticulous attention to detail allows her to tell compelling stories through seemingly simple compositions. Her work often reflects themes of isolation and resilience, providing a striking contrast between urban landscapes and the people within them. Lena has gained international recognition for her emotionally evocative imagery, inspiring photographers to embrace monochromatic storytelling. She frequently collaborates with city planners and cultural historians, using photography to document the evolving identity of urban spaces."
    },
    {
      id: 4,
      name: "Haruto Tanaka",
      countryBorn: "Japan",
      yearBorn: 1990,
      preferredMedium: "Digital Art",
      style: "Cyberpunk-inspired digital compositions blending neon-lit dreamscapes and futuristic aesthetics.",
      quote: "Art is the bridge between reality and imagination.",
      currentlyExhibited: "Tokyo Digital Expo",
      mostFamousPiece: "assets/two_tone.png",
      bio: "Haruto Tanaka fuses photography with digital manipulation, creating surreal cyberpunk-inspired compositions. His work is a blend of neon-lit dreamscapes and futuristic aesthetics, often reflecting themes of technology and urbanization. Haruto’s art pushes the boundaries of visual storytelling, transporting viewers into alternate realities. His fascination with digital landscapes has led him to collaborate with major tech companies, integrating augmented reality into his artwork. Haruto’s exhibitions are known for their immersive, multi-sensory experiences, making them a highlight in the digital art community. He continues to experiment with AI-driven art forms, constantly redefining the limits of creative expression."
    },
    {
      id: 5,
      name: "Sofia Mendes",
      countryBorn: "Portugal",
      yearBorn: 1985,
      preferredMedium: "People / Black and white",
      style: "Black-and-white portraiture capturing raw human emotions with classic lighting techniques.",
      quote: "A great portrait is one that speaks even in silence.",
      currentlyExhibited: "Lisbon Sculpture Garden",
      mostFamousPiece: "assets/hat.png",
      bio: "Sofia Mendes excels in black-and-white portraiture, capturing raw human emotions with a classic touch. Her photographs explore themes of identity, resilience, and personal history. She masterfully balances light and shadow to create depth, drawing viewers into the intimate stories of her subjects. Her attention to facial expressions and body language allows her to convey deep emotion in her portraits. Sofia believes that the best portraits transcend time, offering a glimpse into the subject’s soul. She continues to push creative boundaries, incorporating traditional and modern techniques to craft visually striking and meaningful images."
    },
  {
    id: 6,
    name: "Ethan Clarke",
    countryBorn: "Australia",
    yearBorn: 1978,
    preferredMedium: "Retro Photography",
    style: "Retro-style photography with a nostalgic, film-like aesthetic.",
    quote: "Photography is time travel—capturing the past in the present.",
    currentlyExhibited: "Sydney Art Pavilion",
    mostFamousPiece: "assets/car_light.png",
    bio: "Ethan Clarke specializes in retro-style photography, evoking nostalgia through film-like colors and vintage compositions. His work often transports viewers to different eras, capturing the timeless charm of old cars, neon signs, and classic fashion. His passion for analog aesthetics sets his work apart in the modern digital age. He meticulously recreates the look and feel of past decades by using authentic film cameras, expired film stocks, and vintage post-processing techniques. Ethan’s photographs often feature settings that feel like they belong to a different time, allowing viewers to experience the aesthetics of the past in a contemporary context. His attention to detail and love for the imperfections of film give his work an organic, handcrafted quality that contrasts with the precision of modern digital photography. Through his art, he seeks to preserve the visual language of history, ensuring that the charm of analog photography remains relevant in the ever-evolving world of digital media."
  },
  {
    id: 7,
    name: "Amara Singh",
    countryBorn: "India",
    yearBorn: 1987,
    preferredMedium: "Patterns in Photography",
    style: "Pattern-focused photography that highlights symmetry and spontaneous beauty in daily life.",
    quote: "Patterns exist everywhere—we just need to learn how to see them.",
    currentlyExhibited: "Mumbai Fine Arts Gallery",
    mostFamousPiece: "assets/lines.png",
    bio: "Amara Singh captures intricate patterns and textures found in daily life, from textiles to architecture. Her compositions blend symmetry and spontaneity, revealing the hidden beauty of everyday objects. She is fascinated by how visual repetition and structure can tell complex cultural stories. Her ability to find unexpected patterns in urban landscapes, natural elements, and human interactions makes her work distinct and captivating. Amara frequently experiments with different perspectives and macro photography to highlight details often overlooked by the untrained eye. Her deep understanding of cultural motifs and historical patterns allows her to create images that not only showcase beauty but also communicate deeper narratives about tradition and modernity. She believes that patterns exist as a universal language, connecting art, nature, and human design in profound ways. Through her lens, she encourages viewers to slow down and observe the rhythmic harmony present in the world around them."
  },
    {
      id: 8,
      name: "Giovanni Russo",
      countryBorn: "Italy",
      yearBorn: 1973,
      preferredMedium: "Photography",
      style: "Cinematic lighting and storytelling in documentary-style photography.",
      quote: "Photography is poetry without words.",
      currentlyExhibited: "Venice Art Festival",
      mostFamousPiece: "assets/upwards.png",
      bio: "Giovanni Russo blends cinematic lighting and storytelling to create stunning imagery of Italian life. His work celebrates the charm of daily routines, from quiet moments in a café to the bustling energy of street markets. Through carefully composed shots and rich color grading, he brings out the beauty of everyday moments, making the mundane feel extraordinary. His passion for visual storytelling allows him to create deeply immersive narratives that highlight the cultural vibrancy of Italy. His work is influenced by classic cinema, with a focus on evocative lighting and composition. He continuously seeks to document the passage of time in a way that feels both timeless and nostalgic. His ability to capture the intersection of history and modernity has earned him international acclaim, with his work being featured in various art publications and galleries worldwide."
    },
  {
    id: 9,
    name: "Isla Thompson",
    countryBorn: "UK",
    yearBorn: 1984,
    preferredMedium: "Photography",
    style: "Intimate portrait photography emphasizing natural lighting and emotional depth.",
    quote: "A portrait is not just a face; it’s a soul captured in an image.",
    currentlyExhibited: "London National Gallery",
    mostFamousPiece: "assets/figure.png",
    bio: "Isla Thompson’s portrait photography is a window into the soul, capturing raw emotion through natural lighting and subtle expressions. She creates deep, personal connections with her subjects, drawing out their authentic selves. Her portraits tell rich stories of identity, vulnerability, and strength, making each image a deeply personal narrative. She uses soft, diffused light to enhance the depth of emotion in her subjects, often allowing their gaze and body language to communicate what words cannot. Her work has been widely praised for its honesty and ability to convey complex emotions in a single frame. Isla often works with individuals from diverse backgrounds, exploring themes of identity, self-discovery, and resilience. Her dedication to capturing genuine human experiences has made her one of the most sought-after portrait photographers of her generation."
  },
  {
    id: 10,
    name: "Noah Fischer",
    countryBorn: "Germany",
    yearBorn: 1981,
    preferredMedium: "Mixed Media",
    style: "Experimental photography blending digital techniques with mixed media installations.",
    quote: "The future of photography lies in breaking the rules.",
    currentlyExhibited: "Berlin Art Week",
    mostFamousPiece: "assets/lights.png",
    bio: "Noah Fischer challenges the boundaries of photography, merging digital art with physical installations. His work is a fusion of urban landscapes, technology, and experimental techniques, creating multi-layered visual experiences that push artistic conventions forward. His innovative use of augmented reality and interactive elements adds an immersive dimension to his installations, making viewers active participants in the artwork. Noah’s creations often reflect themes of technological evolution and the impact of digital culture on modern society. He continually experiments with unconventional materials, using everything from projection mapping to layered printing techniques to construct his visually striking pieces. His work is a testament to the intersection of photography and technology, offering a glimpse into the future of visual art. With each project, he strives to redefine the possibilities of artistic expression, inspiring audiences and fellow artists to rethink the role of photography in the digital era."
  }
];

  
const artistGallery = document.getElementById('artist-gallery')

artists.forEach((artist) => {
    artistGallery.innerHTML += `
        <div class="flex flex-col border-b border-b-slate-200 py-6 text-lg w-10/12 mx-auto last:border-b-0">
          <div class="flex flex-col lg:flex-row md:justify-between">
              <div>
                  <p><span class="font-medium">Name:</span> <span class="italic font-thin">${artist.name}</span></p>
                  <p><span class="font-medium">Nationality:</span> <span class="italic font-thin">${artist.countryBorn}</span></p>
                  <p><span class="font-medium">Year Born:</span> <span class="italic font-thin">${artist.yearBorn}</span></p>
                  <p><span class="font-medium">Medium:</span> <span class="italic font-thin">${artist.preferredMedium}</span></p>
                  <p><span class="font-medium">Currently being exhibeted at:</span> <span class="italic font-thin">${artist.currentlyExhibited}</span></p>
                  <p class="line-clamp-2" id="bio-${artist.id}"><span class="font-medium">Bio:</span> <span class="italic font-thin">${artist.bio}</span></p>
              </div>
              <img src="${artist.mostFamousPiece}" class="w-full md:h-[200px] md:w-auto rounded-md border border-slate-200 p-1 shadow-2xl md:ml-4">
            </div>
            <div class="flex flex-col w-full items-center pt-2 mt-2 md:mt-0 ">
              <i class="fa-solid fa-angle-down text-xl text-slate-400 hover:text-yellow-950 duration-300 cursor-pointer px-3" id="see-more" data-index="${artist.id}"></i>
              <p class="text-slate-400 text-xs cursor-pointer hover:text-yellow-950 duration-300" id="see-more-text" data-index="${artist.id}">See More</p>
            </div>
        </div>
    `
}) 

// thank ChatGPT for tweaks
artistGallery.addEventListener('click', function(e) {
  if (e.target.id === "see-more-text" || e.target.tagName === "I") {
    let artistIndex = Number(e.target.dataset.index ); // Ensure we get the correct data-index  
    const currentArtist = artists.find(artist => artist.id === artistIndex);    
    if (currentArtist) {
      const artistBio = document.querySelector(`#bio-${artistIndex}`);
      if (artistBio) {
        // console.log('Bio found:', artistBio); // Log bio element
        artistBio.classList.toggle('line-clamp-2');
      }
    }
  }
})



  