$(function() {
	//szülöelem és a sablon elem meghatározása
	const szuloElem = $('article');
	const sablonElem = $('.lampa');
	const hany = 3;
	const meret = hany * hany;
	const lampaTomb = [];
	var szam;

	/* $('#harom').on('click', () => {
		szam = 3;
		console.log(szam);
		szuloElem.empty();
		palya(szam * szam);
		szuloElem.css('grid-template-columns', '1fr 1fr 1fr');
		szuloElem.css('grid-template-rows', '1fr 1fr 1fr');
		szuloElem.css('width', '162px');
	});
	$('#negy').on('click', () => {
		szam = 4;
		console.log(szam);
		szuloElem.empty();
		palya(szam * szam);
		szuloElem.css('grid-template-columns', '1fr 1fr 1fr 1fr');
		szuloElem.css('grid-template-rows', '1fr 1fr 1fr 1fr');
		szuloElem.css('width', '216px');
    hany=4;
	});
	$('#ot').on('click', () => {
		szam = 5;
		console.log(szam);
		szuloElem.empty();
		palya(szam * szam);
		szuloElem.css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr');
		szuloElem.css('grid-template-rows', '1fr 1fr 1fr 1fr 1fr');
		szuloElem.css('width', '270px');
	});
	$('#hat').on('click', () => {
		szam = 6;
		console.log(szam);
		szuloElem.empty();
		palya(szam * szam);
		szuloElem.css('grid-template-columns', '1fr 1fr 1fr 1fr 1fr 1fr');
		szuloElem.css('grid-template-rows', '1fr 1fr 1fr 1fr 1fr 1fr');
		szuloElem.css('width', '324px');
	}); */

	palya();
	function palya() {
		$('section').empty();
		for (let i = 0; i < meret; i++) {
			// A sablonelem klónozása és a szülőelemhez csatolása
			const ujElem = sablonElem.clone().appendTo(szuloElem);
			//pédányosítás
			const lampa = new Lampa(ujElem, i);
			//az objektumokat beletesszük egy tömbbe
			lampaTomb.push(lampa);
		}
		sablonElem.remove();
		//console.log(lampaTomb);
	}

	$(window).on('lampaKattintas', (event) => {
		console.log(event.detail);
		let id = Number(event.detail.index);
		if (id % hany !== 0) {
			lampaTomb[id - 1].fordit();
		}
		if (id % hany !== hany - 1) {
			lampaTomb[id + 1].fordit();
		}
		if (id >= hany) {
			lampaTomb[id - hany].fordit();
		}
		if (id <= meret - hany - 1) {
			lampaTomb[id + hany].fordit();
		}
		var db = 0;
		for (let i = 0; i < lampaTomb.length; i++) {
			if (lampaTomb[i].allapot == true) {
				db++;
			}
		}
		if (db > meret - 1) {
			szuloElem.empty();
			$('section').append("<h1>You won!!!</h1><br><input type='submit' value='NewGame' id='NewGame'>");
			$('#NewGame').on('click', () => {
				//palya();
			});
		}
	});
});
