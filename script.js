
		const date = document.getElementById("date");
		const button = document.querySelector('.button');
		const year = document.getElementById('year');
		const month = document.getElementById('month');
		const day = document.getElementById('day');
	
		button.addEventListener ( 'click', function () {
		let today = new Date();
		let currentYear = today.getFullYear();
		let currentMonth = today.getMonth() + 1;
		let currentDate = today.getDate();

		var string = date.value.split('-');
		let _year = +string[0];
		let _month = +string[1];
		let _day = +string[2];

		if 	 ( 
			_year > currentYear ||
			( _month > currentMonth && _year == currentYear) ||
			( _day > currentDate && _month == currentMonth && _year == currentYear )
		 )
			{
			year.innerHTML = '-';
			month.innerHTML = '-';
			day.innerHTML = '-';
			alert('Not Born Yet');
			date.value = "2021-04-15";
			return;
		}

		if ( _day > currentDate) {
			_month += 1;
			day.innerHTML = currentDate - _day + 30;
		}
		else {
			day.innerHTML = currentDate - _day;
		}

		if (_month > currentMonth) {
			year.innerHTML = currentYear - _year - 1;
			month.innerHTML = currentMonth - _month + 12;
		}
		else {
			year.innerHTML = currentYear - _year;
			month.innerHTML = currentMonth - _month;
		}

		

	} )
