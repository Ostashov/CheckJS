function ShowStatement(id) {
	var statement = document.getElementsByClassName('ProblemStatement')[0];
	if (id > 0) {
		statement.innerHTML = statement.innerHTML + problems[id].statement;
	} else {
		statement.innerHTML = '';
	}
}

function TestProblem (tests, code) {
	var user_answer =[];
	var result = [];
	eval(code);
	for (var i = 0; i < tests.length; i++) {
		if (sum(tests[i].data) === tests[i].answer) {
			result[i] = 'OK';
		} else {
			result[i] = 'NO';
		}
		user_answer[i] = sum(tests[i].data);
	}
	return {"result":result, "user_answer":user_answer};
}

var button = document.getElementsByTagName('input')[0];
var table = document.getElementsByTagName('table')[0];

button.onclick = function() {
	var id = select.value;
	var code = document.getElementsByName('content')[0].value;
	if (id > 0) {
		var report = TestProblem(problems[id].tests, code);
		PrintResultsTable(problems[id].tests, report);
	} else {
		table.innerHTML = '* Выберите задачу.';
	}
	
	return false;
}

function PrintResultsTable(tests, report) {
	table.innerHTML = "<tr>\
		<td style='background: #e5e5e5;'><center>Тест</center></td>\
		<td style='background: #e5e5e5;'><center>Вводные данные</center></td>\
		<td style='background: #e5e5e5;'><center>Ответ</center></td>\
		<td style='background: #e5e5e5;'><center>Правильный ответ</center></td>\
		<td style='background: #e5e5e5;'><center>Результат</center></td>\
		</tr>";
		for (i = 0; i < tests.length; i++) {
			table.innerHTML = table.innerHTML + "<tr>\
		<td>" + (i+1) + "</td>\
		<td>" + tests[i].data + "</td>\
		<td>" + report.user_answer[i] + "</td>\
		<td>" + tests[i].answer + "</td>\
		<td><center>" + report.result[i] + "</center></td>\
		</tr>";
		}
	document.body.appendChild(table);
}