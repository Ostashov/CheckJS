function ShowStatement(id) {
	var statement = document.getElementsByClassName('ProblemStatement')[0];
	if (id > 0) {
		statement.innerHTML = statement.innerHTML + problems[id].statement;
		table.innerHTML = '';
	} else {
		statement.innerHTML = '';
	}
}

var select = document.getElementsByName('ProblemId')[0];
for (var i = 1; i < problems.length; i++) {
	select.innerHTML = select.innerHTML + '<option value="' + i + '">' + i + '</option>';
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
		table.innerHTML = '* Select problem.';
	}
	
	return false;
}

function PrintResultsTable(tests, report) {
	table.innerHTML = "<tr>\
		<td class='TableHead'>Test</td>\
		<td class='TableHead'>Data</td>\
		<td class='TableHead'>User response</td>\
		<td class='TableHead'>Answer</td>\
		<td class='TableHead'>Result</td>\
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