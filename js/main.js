function ShowStatement(id) {
	var statement = document.getElementsByClassName('ProblemStatement')[0];
	if (id > 0) {
		var SelectProblem = document.getElementById('SelectProblem');
		select.removeChild(SelectProblem);
		statement.innerHTML = problems[id].statement;
		table.innerHTML = '';
	} else {
		statement.innerHTML = '';
		table.innerHTML = '';
	}
}

var select = document.getElementsByName('ProblemId')[0];
for (var i = 1; i < problems.length; i++) {
	select.innerHTML = select.innerHTML + '<option value="' + i + '">' + i + '</option>';
}
			
function TestProblem (test, code) {
	var user_answer =[];
	var result = [];
	eval(code);
	
	if (sum(test.data) === test.answer) {
		result[i] = 'OK';
	} else {
		result[i] = 'NO';
	}
	user_answer[i] = sum(test.data);
	
	return {"result":result, "user_answer":user_answer};
}

var button = document.getElementsByTagName('input')[0];
var table = document.getElementsByTagName('table')[0];

button.onclick = function() {
	var id = select.value;
	var code = document.getElementsByName('content')[0].value;
	if (id > 0) {
		PrintTableHead();
		for (i = 0; i < problems[id].tests.length; i++) {
			var report = TestProblem(problems[id].tests[i], code);
			function tmp() {PrintResultsTable(problems[id].tests[i], report);};
			setTimeout(tmp, 1);
		}
	} else {
		table.innerHTML = '* Select problem.';
	}
	
	return false;
}

function PrintTableHead() {
	table.innerHTML = "<tr>\
		<td class='TableHead'>Test</td>\
		<td class='TableHead'>Data</td>\
		<td class='TableHead'>User response</td>\
		<td class='TableHead'>Answer</td>\
		<td class='TableHead'>Result</td>\
		</tr>";
}
		
function PrintResultsTable(test, report) {
	table.innerHTML = table.innerHTML + "<tr>\
	<td><center>" + (i+1) + "</center></td>\
	<td>" + test.data + "</td>\
	<td>" + report.user_answer[i] + "</td>\
	<td>" + test.answer + "</td>\
	<td><center>" + report.result[i] + "</center></td>\
	</tr>";
	document.body.appendChild(table);
}