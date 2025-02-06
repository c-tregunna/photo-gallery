const images = [
  {
    index: "725",
    src: "assets/blur_person.png",
    artist: "John Doe",
    camera: "Canon EOS R5",
    year: 2022,
    description: "A blurred portrait of a person, evoking a sense of mystery and movement."
  },
  {
    index: "482",
    src: "assets/car_light.png",
    artist: "Jane Smith",
    camera: "Nikon Z9",
    year: 2021,
    description: "A dynamic shot of a car's lights, capturing motion and energy."
  },
  {
    index: "319",
    src: "assets/cards.png",
    artist: "Michael Lee",
    camera: "Sony A7 IV",
    year: 2020,
    description: "A close-up of playing cards, symbolizing chance and strategy."
  },
  {
    index: "906",
    src: "assets/couple.png",
    artist: "Emily Brown",
    camera: "Fujifilm X-T4",
    year: 2023,
    description: "A romantic scene of a couple, depicting love and companionship."
  },
  {
    index: "150",
    src: "assets/figure.png",
    artist: "David Wilson",
    camera: "Leica Q2",
    year: 2019,
    description: "A silhouetted figure standing alone, creating an air of mystery."
  },
  {
    index: "874",
    src: "assets/flower.png",
    artist: "Sophia Martinez",
    camera: "Olympus OM-D E-M1",
    year: 2022,
    description: "A delicate flower in full bloom, showcasing nature's beauty."
  },
  {
    index: "263",
    src: "assets/hat.png",
    artist: "Liam Johnson",
    camera: "Panasonic Lumix S5",
    year: 2021,
    description: "A stylish hat resting on a table, hinting at a fashionable presence."
  },
  {
    index: "531",
    src: "assets/heart.png",
    artist: "Olivia Davis",
    camera: "Canon EOS R6",
    year: 2023,
    description: "A heart-shaped object, symbolizing love and affection."
  },
  {
    index: "798",
    src: "assets/lights.png",
    artist: "Noah White",
    camera: "Sony A6400",
    year: 2020,
    description: "A stunning display of lights, creating a warm and inviting atmosphere."
  },
  {
    index: "047",
    src: "assets/lines.png",
    artist: "Emma Garcia",
    camera: "Nikon D750",
    year: 2018,
    description: "An abstract composition of lines, playing with form and perspective."
  },
  {
    index: "655",
    src: "assets/puffball.png",
    artist: "Ethan Miller",
    camera: "Fujifilm GFX 50S",
    year: 2019,
    description: "A soft puffball, showcasing delicate textures and intricate details."
  },
  {
    index: "380",
    src: "assets/road.png",
    artist: "Ava Wilson",
    camera: "Canon 5D Mark IV",
    year: 2017,
    description: "A long road stretching into the horizon, symbolizing journeys and adventure."
  },
  {
    index: "215",
    src: "assets/sea.png",
    artist: "William Turner",
    camera: "Sony A7 III",
    year: 2022,
    description: "A breathtaking view of the sea, evoking a sense of calm and vastness."
  },
  {
    index: "992",
    src: "assets/shadows.png",
    artist: "Isabella Scott",
    camera: "Pentax K-1",
    year: 2021,
    description: "Intriguing shadows cast across a surface, adding depth and contrast."
  },
  {
    index: "567",
    src: "assets/stairs.png",
    artist: "Lucas Adams",
    camera: "Leica M10",
    year: 2019,
    description: "A stairway leading upwards, symbolizing progress and elevation."
  },
  {
    index: "412",
    src: "assets/sunglasses.png",
    artist: "Charlotte Thompson",
    camera: "Ricoh GR III",
    year: 2023,
    description: "A pair of stylish sunglasses, representing coolness and confidence."
  },
  {
    index: "681",
    src: "assets/swirl.png",
    artist: "Mason Baker",
    camera: "Hasselblad X1D",
    year: 2020,
    description: "An abstract swirl pattern, creating a mesmerizing visual effect."
  },
  {
    index: "789",
    src: "assets/television.png",
    artist: "Mia Robinson",
    camera: "Canon Rebel T7i",
    year: 2018,
    description: "An old television set, evoking nostalgia and vintage aesthetics."
  },
  {
    index: "356",
    src: "assets/two_tone.png",
    artist: "Henry Cooper",
    camera: "Sony A9 II",
    year: 2021,
    description: "A two-toned image, playing with contrast and color balance."
  },
  {
    index: "903",
    src: "assets/upwards.png",
    artist: "Amelia Harris",
    camera: "Nikon Z6 II",
    year: 2022,
    description: "An upward perspective shot, symbolizing ambition and aspiration."
  }
];


const exhibitionGalleryContainer = document.getElementById('exhibition-gallery-outer')
const exhibitionGallery = document.getElementById('exhibition-gallery')
const modalCloseBtn = document.getElementById('modal-close')
const modalContainer = document.getElementById('modal')
const modalContent = document.getElementById('modal-content')

// removes the scroll bar from the gallery - thanks ChatGPT
document.addEventListener("wheel", (event) => {
  if (window.innerWidth >= 768) {
    if (event.deltaY !== 0) { //detects vertical scroll
      event.preventDefault();
      exhibitionGalleryContainer.scrollLeft += event.deltaY;
    }
  }
  }, { passive: false });

// Adds photos to the gallery on exhibition page
  images.forEach((image) => {
    exhibitionGallery.innerHTML +=`
    <div class="self-center flex flex-col" >
      <img src="${image.src}" alt="${image.description}" class="rounded-md border border-slate-200 p-1 shadow-lg md:max-h-[310px] cursor-pointer" data-index="${image.index}">
    </div>`
  })


  // modal - when click image open up modal with more information in image
exhibitionGallery.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG') {
    modalContainer.classList.remove('hidden')
    modalContainer.classList.add('flex')
    let imageIndex = e.target.dataset.index // store the index in a variable
    // console.log(imageIndex)
    const currentImage = images.find(image => image.index === imageIndex) //find the index of the current image clicked by searching through the array, fuind the image with the image.index that matches imageIndex set previously. then store in variable to add below
    modalContent.innerHTML = `
        <div class="flex flex-col py-6 text-lg md:justify-between w-10/12 mx-auto max-w-[600px]">
            <div>
                <p class="mb-4"><span class="font-medium">Artist:</span> <span class="italic font-thin">${currentImage.artist}</span></p>
                <p class="mb-4"><span class="font-medium">Year:</span> <span class="italic font-thin">${currentImage.year}</span></p>
                <p class="mb-4"><span class="font-medium">Camera:</span> <span class="italic font-thin">${currentImage.camera}</span></p>
                <p class="mb-4"><span class="font-medium">Description:</span> <span class="italic font-thin">${currentImage.description}</span></p>
            </div>
            <img src="${currentImage.src}" class=" max-h-[600px] rounded-md border border-slate-200 p-1 shadow-2xl">
        </div>
    `
  }
})

modalCloseBtn.addEventListener('click', ()=> {
  modalContainer.classList.add('hidden')
})