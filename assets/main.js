const API = 'https://spotify23.p.rapidapi.com/artists/?ids=0du5cEVh5yTK9QJze8zA0C%2C1KCSPY1glIKqW2TotWuXOR%2C1yxSLGMDHlW21z4YXirZDS%2C2cCUtGK9sDU2EoElnk0GNB%2C3fMbdgg4jU18AjLCKBhRSm';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '479bf6ff2dmsh4feb0e254e3e7f7p197403jsn8255fae34985',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const artistMusic = await fetchData(API);
        let view = `${artistMusic.artists.map(artist => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${artist.images[0].url}" alt="" class="w-full">
                </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${artist.name}
                        </h3>
                    </div>
                </div>
            `)}
        `;
        content.innerHTML = view;
    } catch(err) {
        console.log(err);
    }
})(); // Anonymous function that call automatic this function