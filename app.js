import { artists } from "./artists.js";

console.log(artists);

const artistGallery = document.getElementById('artist-gallery')

artists.forEach((artist) => {
    artistGallery.innerHTML += `
        <div class="flex flex-col border-b border-b-slate-200 py-6 text-lg md:flex-row md:justify-between w-10/12 mx-auto">
            <div>
                <p><span class="font-semibold">Name:</span> <span class="italic">${artist.name}</span></p>
                <p><span class="font-semibold">Born:</span> <span class="italic">${artist.countryBorn}</span></p>
                <p><span class="font-semibold">Medium:</span> <span class="italic">${artist.preferredMedium}</span></p>
                <p><span class="font-semibold">Currently being exhibeted at:</span> <span class="italic">${artist.currentlyExhibited}</span></p>
            </div>
            <img src="${artist.mostFamousPiece}" class="w-full md:h-[200px] md:w-auto rounded-md border border-slate-200 p-1 shadow-2xl">
        </div>
    `
}) 