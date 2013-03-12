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
var TestProcess = document.getElementById("TestProcess");
var table = document.getElementsByTagName('table')[0];


for (var ProblemNumber = 1; ProblemNumber < problems.length; ProblemNumber++) {
    select.innerHTML = select.innerHTML + '<option value="' + ProblemNumber + '">' + ProblemNumber + ' ' + problems[ProblemNumber].name + '</option>';
}


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