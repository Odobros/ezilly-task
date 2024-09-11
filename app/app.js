const {createApp, ref, onMounted} = Vue;

createApp({
	setup() {
		const api = 'https://asstatic.solocoo.tv/v1/showcase/Home?app=as';
		const oldImgUrlDomain = 'https://static-originals.solocoo.tv/';
		const newImgUrlDomain = 'https://static-content.solocoo.tv/';
		const fetchedData = ref(null);

		const fetchData = async () => {
			try {
				const response = await fetch(api);

				const data = await response.json();

				if (!response.ok) {
					console.log('Could not fetch new data!');
				}

				const fetchedDataArray = data.showcase.slice(0, 3);

				fetchedData.value = {
					spotlight: {
						data: fetchedDataArray[0],
						imageType: 1
					},
					best: {
						data: fetchedDataArray[1],
						imageType: 0
					},
					topWeek: {
						data: fetchedDataArray[2],
						imageType: 0
					}
				};
			} catch (error) {
				console.log(`An error occured: ${error}`);
				throw new Error(`An error occured: ${error}`);
			}
		};

		const initSlider = () => {
			Object.keys(fetchedData.value).forEach((key) => {
				const scrollElement = document.querySelector(`#${key} .c-section__slider`);
				const chevronRight = document.querySelector(`#${key} .chevron-right`);
				const chevronLeft = document.querySelector(`#${key} .chevron-left`);

				const initScroll = () => {
					const {scrollWidth, scrollLeft, offsetWidth} = scrollElement;

					if (scrollLeft === 0) {
						chevronLeft.classList.add('hidden');
					} else {
						chevronLeft.classList.remove('hidden');
					}
					if ((scrollLeft + offsetWidth) >= scrollWidth) {
						chevronRight.classList.add('hidden');
					} else {
						chevronRight.classList.remove('hidden');
					}
				};

				chevronRight.addEventListener('click', (e) => {
					scrollElement.scrollTo({
						left: scrollElement.offsetWidth + scrollElement.scrollLeft,
						behavior: 'smooth'
					});
				});

				chevronLeft.addEventListener('click', (e) => {
					scrollElement.scrollTo({
						left: -1 * scrollElement.offsetWidth + scrollElement.scrollLeft,
						behavior: 'smooth'
					});
				});

				scrollElement.addEventListener('scroll', (e) => {
					initScroll();
				});

				window.addEventListener('resize', (e) => {
					initScroll();
				});

				initScroll();
			});
		};

		const handleImageUrl = (url) => url.replace(oldImgUrlDomain, newImgUrlDomain);

		onMounted(async () => {
			await fetchData();
			initSlider();
		});

		return {
			fetchedData,
			handleImageUrl
		};
	}
}).mount('#app');
