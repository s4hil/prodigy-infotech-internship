	function interval() {
		let ms = document.querySelector("#ms");
		msVal = ms.textContent;
		ms.textContent = Number(msVal) + 1;
		if (msVal == 99) {
			let secs = document.querySelector("#secs");
			secsVal = secs.textContent
			secs.textContent = Number(secsVal) + 1;
			ms.textContent = 0;
			if (secsVal == 59) {
				let mins = document.querySelector("#mins");
				let minsVal = mins.textContent;
				mins.textContent = Number(minsVal) + 1;
				secs.textContent = 0;
				if (minsVal == 59) {
					let hours = document.querySelector("#hours");
					let hoursVal = hours.textContent;
					hours.textContent = Number(hours)+1;
					mins.textContent = 0;
				}
			}
		}
	}

		function startTimer(d) {
			if (d.interval) {
				clearInterval(d.interval);
				d.textContent = "Start";
				d.interval = undefined;
				window.globalInterval = undefined;
			}
			else {
				window.globalInterval = setInterval(interval, 10);
				d.interval = window.globalInterval;
				d.textContent = "Pause";
			}
		}

		function resetTimer() {
			clearInterval(window.globalInterval);
			document.querySelector("#start").textContent = "Retry";
			document.querySelector("#ms").textContent = "000";
			document.querySelector("#secs").textContent = "00";
			document.querySelector("#mins").textContent = "00";
			document.querySelector("#hours").textContent = "00";
		}
