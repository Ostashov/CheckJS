$(document).ready(function() {
    var TextArea = $('#Code');
    var myCodeMirror = CodeMirror.fromTextArea(TextArea[0], {
        lineNumbers: true,
        height: "dynamic",
        enterMode: "keep",
        value: TextArea.innerHTML,
        mode: "javascript"
    });
    var select = $('#ProblemId');
    for (var ProblemNumber = 1; ProblemNumber < problems.length; ProblemNumber++) {
        select.append($('<option value="' + ProblemNumber + '">' + ProblemNumber + '. ' + problems[ProblemNumber].name + '</option>'));
    }
    ShowStatement(problems[1]);
});


function ShowTask(problem) {
    var task = $('#ProblemTask');
    task.html(problem.statement);
}

function ShowSamples(problem) {
    var samples = $('#ProblemSamples');
    samples.html('<div class="BlockName">Sample:</div>' + "<table id='SampleTable'><tr>\
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
    var myCodeMirror = $('.CodeMirror')[0];
    myCodeMirror.CodeMirror.setValue(problem.code);
}

function ShowStatement(problem) {
    $('#Error').html('');
    ShowTask(problem);
    ShowSamples(problem);
    ShowCode(problem);
    var TestProcess = $('#TestProcess');
    TestProcess.html('');
    $('#ResultTable').html('');
    
    
}

function PrintCompilationError(error) {
    $('#Error').html(error);
}

function PrintTableHead() {
    var ResultTable = $('#ResultTable');
    ResultTable.html("<tr>\
        <td class='TableHead'>Test</td>\
        <td class='TableHead'>Data</td>\
        <td class='TableHead'>User response</td>\
        <td class='TableHead'>Answer</td>\
        <td class='TableHead'>Result</td>\
        <td class='TableHead'>Time, ms</td>\
        </tr>");
}

function PrintTestResult(testNumber, testReport, test) {
    var ResultTable = $('#ResultTable');
    ResultTable.append("<tr class='Result" + testReport.result + "'>\
    <td><center>" + (testNumber+1) + "</center></td>\
    <td>" + test.data + "</td>\
    <td>" + testReport.user_answer + "</td>\
    <td>" + test.answer + "</td>\
    <td><center>" + testReport.result + "</center></td>\
    <td>" + testReport.testTime + "</td>\
    </tr>");
}