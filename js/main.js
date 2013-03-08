function ShowStatement(id) {
	var statement = document.getElementsByClassName('ProblemStatement')[0];
	TestProcess.innerHTML = '';
	if (id > 0) {
		var id = select.value;
		var SelectProblem = document.getElementById('SelectProblem');
		remove = remove + 1;
		if (remove === 1) {
			select.removeChild(SelectProblem);
		}
		statement.innerHTML = problems[id].statement + '<br><br><i>Sample:</i><br>' + "<table id='SampleTable'><tr>\
		<td class='TableHead'>Data</td>\
		<td class='TableHead'>Answer</td>\
		</tr></table>";
		var Sample = document.getElementById("SampleTable");
		for (i = 0; i < problems[id].tests.length; i++) {
			if (problems[id].tests[i].sample === true) {
				Sample.innerHTML = Sample.innerHTML + '<tr><td>' + problems[id].tests[i].data + '</td><td>' + problems[id].tests[i].answer + '</td></tr>';
			}
		}
		table.innerHTML = '';
	} else {
		statement.innerHTML = '';
		table.innerHTML = '';
	}
}

var remove = 0;
var select = document.getElementsByName('ProblemId')[0];
for (var i = 1; i < problems.length; i++) {
	select.innerHTML = select.innerHTML + '<option value="' + i + '">' + i + '</option>';
}
			
function TestProblem (test, code) {
	//var user_answer =[];
	//var result = [];
	eval(code);
	
	if (sum(test.data) === test.answer) {
		var result = 'OK';
	} else {
		var result = 'NO';
	}
	user_answer = sum(test.data);
	
	return {"result":result, "user_answer":user_answer};
}

var TestProcess = document.getElementById("TestProcess");
var button = document.getElementsByTagName('input')[0];
var table = document.getElementsByTagName('table')[0];

button.onclick = function() {
	var id = select.value;
	var code = document.getElementsByName('content')[0].value;
	TestProcess.innerHTML = 'Tested ... Please do not close the page.';
	if (id > 0) {
		PrintTableHead();
		for (i = 0; i < problems[id].tests.length; i++) {
			function doo(i, problems) {var report = TestProblem(problems[id].tests[i], code);
			PrintResultsTable(problems[id].tests[i], report, i);
			if (i === problems[id].tests.length - 1) {TestProcess.innerHTML = 'Done.';}
			}
                        setTimeout(doo, 0, i, problems)
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
		
function PrintResultsTable(test, report, i) {
	table.innerHTML = table.innerHTML + "<tr>\
	<td><center>" + (i+1) + "</center></td>\
	<td>" + test.data + "</td>\
	<td>" + report.user_answer + "</td>\
	<td>" + test.answer + "</td>\
	<td><center>" + report.result + "</center></td>\
	</tr>";
}