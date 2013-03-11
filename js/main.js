function ShowStatement(id) {
	var statement = document.getElementsByClassName('ProblemStatement')[0];
	TestProcess.innerHTML = '';
	if (id > 0) {
		TextArea.value = problems[id].code;
		myCodeMirror.setValue(TextArea.value);
		TestProcess.innerHTML = '';
		var id = select.value;
		var SelectProblem = document.getElementById('SelectProblem');
		remove = remove + 1;
		if (remove === 1) {
			select.removeChild(SelectProblem);
		}
		statement.innerHTML = problems[id].statement + '<br><br><TestNumber>Sample:</TestNumber><br>' + "<table id='SampleTable'><tr>\
		<td class='TableHead'>Data</td>\
		<td class='TableHead'>Answer</td>\
		</tr></table>";
		var Sample = document.getElementById("SampleTable");
		for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
			if (problems[id].tests[TestNumber].sample === true) {
				Sample.innerHTML = Sample.innerHTML + '<tr><td>' + problems[id].tests[TestNumber].data + '</td><td>' + problems[id].tests[TestNumber].answer + '</td></tr>';
			}
		}
		table.innerHTML = '';
	} else {
		TextArea.value = '';
		myCodeMirror.setValue();
		TestProcess.innerHTML = '';
		statement.innerHTML = '';
		table.innerHTML = '';
	}
}

var remove = 0;
var TextArea = document.getElementsByName('content')[0]
var myCodeMirror = CodeMirror.fromTextArea(TextArea, {
	lineNumbers: true,
	height: "dynamic",
	enterMode: "keep",
	value: TextArea.innerHTML,
	mode: "javascript"
});
var select = document.getElementsByName('ProblemId')[0];
for (var TestNumber = 1; TestNumber < problems.length; TestNumber++) {
	select.innerHTML = select.innerHTML + '<option value="' + TestNumber + '">' + TestNumber + '</option>';
}

function RunTest(TestNumber, problems, id, f) {
				var report = TestProblem(problems[id].tests[TestNumber], f);
				PrintResultsTable(problems[id].tests[TestNumber], report, TestNumber);
				//if (TestNumber === problems[id].tests.length - 1) {TestProcess.innerHTML = 'Done.';}
}
			
function TestProblem (test, f) {
	var StartTime = new Date;
	var user_answer = f(test.data);
	if (user_answer === test.answer) {
		var result = 'OK';
	} else {
		var result = 'NO';
	}
	var EndTime = new Date;
	
	return {"result":result, "user_answer":user_answer, "TestTime":EndTime - StartTime};
}

var TestProcess = document.getElementById("TestProcess");
var button = document.getElementsByTagName('input')[0];
var table = document.getElementsByTagName('table')[0];

button.onclick = function() {
	myCodeMirror.save();
	var id = select.value;
	var code = TextArea.value;
	f = eval('(' + code + ')');
	if (id > 0) {
		TestProcess.innerHTML = 'Testing ... Please do not close the page.';
		PrintTableHead();
		for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            setTimeout(RunTest, 0, TestNumber, problems, id, f)
		}
	} else {
		table.innerHTML = '* Select problem.';
	}
	setTimeout(function () {TestProcess.innerHTML = 'Done.'}, 0);
	return false;
}

function PrintTableHead() {
	table.innerHTML = "<tr>\
		<td class='TableHead'>Test</td>\
		<td class='TableHead'>Data</td>\
		<td class='TableHead'>User response</td>\
		<td class='TableHead'>Answer</td>\
		<td class='TableHead'>Result</td>\
		<td class='TableHead'>Time, ms</td>\
		</tr>";
}
		
function PrintResultsTable(test, report, TestNumber) {
	table.innerHTML = table.innerHTML + "<tr>\
	<td><center>" + (TestNumber+1) + "</center></td>\
	<td>" + test.data + "</td>\
	<td>" + report.user_answer + "</td>\
	<td>" + test.answer + "</td>\
	<td><center>" + report.result + "</center></td>\
	<td>" + report.TestTime + "</td>\
	</tr>";
}