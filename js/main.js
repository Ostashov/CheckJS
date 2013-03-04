	var button = document.getElementsByTagName('input')[0];
	//alert(button[0].value);
	button.onclick = function() {
		var content = document.getElementsByName('content')[0].value;
		
		eval(content);
		var data = ['11', '990', '1', '1010101'];
		var answer = [2, 18, 1, 4];
		var user_answer =[];
		var result = [];
		
		for (var i = 0; i < 4; i++) {
			if (sum(data[i]) === answer[i]) {
				result[i] = 'OK';
			} else {
				result[i] = 'NO';
			}
			user_answer[i] = sum(data[i]);
		}	

		var table = document.getElementsByTagName('table')[0];
		table.setAttribute('border', '1');
		table.innerHTML = "<tr>\
			<td>#</td>\
			<td>Вводные данные</td>\
			<td>Ответ</td>\
			<td>Правильный ответ</td>\
			<td>Результат</td>\
			</tr>";
			for (i = 0; i < 4; i++) {
				table.innerHTML = table.innerHTML + "<tr>\
			<td>" + (i+1) + "</td>\
			<td>" + data[i] + "</td>\
			<td>" + user_answer[i] + "</td>\
			<td>" + answer[i] + "</td>\
			<td>" + result[i] + "</td>\
			</tr>";
			}
		document.body.appendChild(table);
		
		
		return false;
	}