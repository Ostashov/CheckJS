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
    samples.html('<h5>Sample:</h5>' + "<table id='SampleTable' class='table table-condensed table-bordered'>\
        <thead>\
            <tr>\
                <th>Data</th>\
                <th>Answer</th>\
            </tr>\
        </thead></table>");
    var Sample = $("#SampleTable");
    Sample.append('<tbody>')
    for (TestNumber = 0; TestNumber < problem.tests.length; TestNumber++) {
        if (problem.tests[TestNumber].sample === true) {
            Sample.append('<tr><td>' + problem.tests[TestNumber].data + '</td><td>' + problem.tests[TestNumber].answer + '</td></tr>');
        }
    }
    Sample.append('</tbody>')
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


observable.subscribe(function Commander(data) {
    if (data.message === 'Start compile') {
        viewPrepareBeforeTest()
    } else if (data.message === 'Start testing') {
        viewTestProcessRuntimeTest();
        PrintTableHead()
    } else if (data.message === 'Done') {
        viewTestProcessAfterTest();
        viewPrepareAfterTest();
    } else if (data.message === 'ERROR') {
        PrintCompilationError(data.error);
    } else if (data.message === 'Finish one test') {
        PrintTestResult(data.TestNumber, data.testReport, data.test);
    } else if (data.message === 'noCode') {
        PrintNoCode();
    }
});

function PrintNoCode() {
    $('#Error').html('Введите код');
}

function PrintCompilationError(error) {
    $('#Error').html(error);
}

function viewPrepareBeforeTest() {
    $('#howWork').attr('hidden');
   //$("#SubmitButton").attr('src', 'img/buttons/Submit_active.png');
};

function viewTestProcessRuntimeTest() {
    var TestProcess = $('#TestProcess');
    TestProcess.removeAttr('hidden');
    TestProcess.html('Testing... Do not close the page.');
};

function viewTestProcessAfterTest() {
    var TestProcess = $('#TestProcess');
    TestProcess.html('Done.');
};

function viewPrepareAfterTest() {
    $('#SubmitButton').removeClass('disabled');
    $('#SubmitButton').removeAttr('disabled');
    //$("#SubmitButton").attr('src', 'img/buttons/Submit_default.png');
};

function PrintTableHead() {
    var ResultTable = $('#ResultTable');
    ResultTable.removeClass('hide');
    ResultTable.html("<thead><tr>\
        <th>Test</th>\
        <th>Data</th>\
        <th>User response</th>\
        <th>Answer</th>\
        <th>Result</th>\
        <th>Time, ms</th>\
        </tr>");
}

function PrintTestResult(testNumber, testReport, test) {
    var ResultTable = $('#ResultTable');
    if (testReport.result === 'OK') {
        ResultTable.append("<tr class='success'>\
        <td>" + (testNumber+1) + "</td>\
        <td>" + test.data + "</td>\
        <td>" + testReport.user_answer + "</td>\
        <td>" + test.answer + "</td>\
        <td>" + testReport.result + "</td>\
        <td>" + testReport.testTime + "</td>\
        </tr>")
    } else {
        ResultTable.append("<tr class='error'>\
        <td>" + (testNumber+1) + "</td>\
        <td>" + test.data + "</td>\
        <td>" + testReport.user_answer + "</td>\
        <td>" + test.answer + "</td>\
        <td>" + testReport.result + "</td>\
        <td>" + testReport.testTime + "</td>\
        </tr>");
    }
    
}