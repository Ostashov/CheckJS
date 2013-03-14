$(document).ready(function() {
    //var TextArea = document.getElementsByName('content')[0]
    //var myCodeMirror = CodeMirror.fromTextArea(TextArea, {
    //    lineNumbers: true,
    //    height: "dynamic",
    //    enterMode: "keep",
    //    value: TextArea.innerHTML,
    //    mode: "javascript"
    //});
    var select = $('#ProblemId');
    for (var ProblemNumber = 1; ProblemNumber < problems.length; ProblemNumber++) {
        select.append($('<option value="' + ProblemNumber + '">' + ProblemNumber + ' ' + problems[ProblemNumber].name + '</option>'));
    }
    ShowStatement(problems[1]);
});


function ShowTask(problem) {
    var task = $('#ProblemTask');
    task.html(problem.statement);
}

function ShowSamples(problem) {
    var samples = $('#ProblemSamples');
    samples.html('<br><br><TestNumber>Sample:</TestNumber><br>' + "<table id='SampleTable'><tr>\
    <td class='TableHead'>Data</td>\
    <td class='TableHead'>Answer</td>\
    </tr></table>");
    var Sample = $("#SampleTable");
    for (TestNumber = 0; TestNumber < problem.tests.length; TestNumber++) {
        if (problem.tests[TestNumber].sample === true) {
            Sample.append('<tr><td>' + problem.tests[TestNumber].data + '</td><td>' + problem.tests[TestNumber].answer + '</td></tr>');
        }
    }
}

function ShowCode(problem) {
    var code = $('#Code');
    code.html(problem.code);
}

function ShowStatement(problem) {
    ShowTask(problem);
    ShowSamples(problem);
    ShowCode(problem);
    var TestProcess = $('#TestProcess');
    //var myCodeMirror = $('.CodeMirror');
    //myCodeMirror.value(TextArea.value);
    TestProcess.html('');
    $('#ResultTable').html('');
    
    
}

function PrintTableHead() {
    ResultTable.innerHTML = "<tr>\
        <td class='TableHead'>Test</td>\
        <td class='TableHead'>Data</td>\
        <td class='TableHead'>User response</td>\
        <td class='TableHead'>Answer</td>\
        <td class='TableHead'>Result</td>\
        <td class='TableHead'>Time, ms</td>\
        </tr>";
}

function PrintResultsTable(test, report, TestNumber) {
    ResultTable.innerHTML = ResultTable.innerHTML + "<tr>\
    <td><center>" + (TestNumber+1) + "</center></td>\
    <td>" + test.data + "</td>\
    <td>" + report.user_answer + "</td>\
    <td>" + test.answer + "</td>\
    <td><center>" + report.result + "</center></td>\
    <td>" + report.TestTime + "</td>\
    </tr>";
}