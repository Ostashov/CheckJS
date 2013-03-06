function ShowStatement(id) {
	var statement = document.getElementsByClassName('ProblemStatement')[0];
	statement.innerHTML = statement.innerHTML + problems[id].statement;
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
var id = 1;
button.onclick = function() {
	var code = document.getElementsByName('content')[0].value;
	var report = TestProblem(problems[id].tests, code);
	PrintResultsTable(problems[id].tests, report);
	
	return false;
}

function PrintResultsTable(tests, report) {
	var table = document.getElementsByTagName('table')[0];
	//table.setAttribute('border', '1');
	table.innerHTML = "<tr>\
		<td>#</td>\
		<td>Вводные данные</td>\
		<td>Ответ</td>\
		<td>Правильный ответ</td>\
		<td>Результат</td>\
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