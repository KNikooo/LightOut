$(function() {
		/* if (id === 'harom') {
			hany = 3;
      console.log(hany);
		} else if (id === 'negy') {
			hany = 4;
      console.log(hany);
		} else if (id === 'ot') {
			hany = 5;
      console.log(hany);
		} else if (id === 'hat') {
			hany = 6;
		} */
	
    $(".multi-button button").click(()=>{
      var id=$(this).attr('id');
      console.log(id);
      if (id === '3') {
        hany = 5;
        console.log(hany);
      }
    });

	//szülöelem és a sablon elem meghatározása
	const szuloElem = $('article');
	const sablonElem = $('.lampa');
	const hany = 3;
	const meret = hany * hany;
	const lampaTomb = [];

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
		let index = Number(event.detail.id);
		if (index % hany !== 0) {
			lampaTomb[index - 1].fordit();
		}
		if (index % hany !== hany - 1) {
			lampaTomb[index + 1].fordit();
		}
		if (index >= hany) {
			lampaTomb[index - hany].fordit();
		}
		if (index <= meret - hany - 1) {
			lampaTomb[index + hany].fordit();
		}
		var szam = 0;
		for (let i = 0; i < lampaTomb.length; i++) {
			if (lampaTomb[i].allapot == true) {
				szam++;
			}
		}
		if (szam > meret - 1) {
			szuloElem.empty();
			$('section').append("<h1>You won!!!</h1><br><input type='submit' value='NewGame' id='NewGame'>");
			$('#NewGame').on('click', () => {
				palya();
			});
		}
	});
});
