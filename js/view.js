$(document).ready(function() {
    var TextArea = $('#Code');
    var myCodeMirror = CodeMirror.fromTextArea(TextArea[0], {
        lineNumbers: true,
        height: "dynamic",
        enterMode: "keep",
        value: TextArea.innerHTML,
        mode: "javascript",
        tabSize: 4,
        indentUnit: 4
    });
    var select = $('#problemId');
    for (var problemNumber = 1; problemNumber < problems.length; problemNumber++) {
        select.append($('<option value="' + problemNumber + '">' + problemNumber + '. ' + problems[problemNumber].name + '</option>'));
    }
    showStatement(problems[1]);
});


function showTask(problem) {
    var task = $('#problemTask');
    task.html(problem.statement);
}

<<<<<<< HEAD
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
=======
function showSamples(problem) {
    var samples = $('#problemSamples');
    samples.show();
    var Sample = $("#sampleTable");
    Sample.html("<tr>\
                    <td class='tableHead'>Data</td>\
                    <td class='tableHead'>Answer</td>\
                </tr>");
    for (testNumber = 0; testNumber < problem.tests.length; testNumber++) {
        if (problem.tests[testNumber].sample === true) {
            Sample.append('<tr><td>' + problem.tests[testNumber].data + '</td><td>' + problem.tests[testNumber].answer + '</td></tr>');
>>>>>>> master
        }
    }
    Sample.append('</tbody>')
}

function showCode(problem) {
    var myCodeMirror = $('.CodeMirror')[0];
    myCodeMirror.CodeMirror.setValue(problem.code);
}

function showStatement(problem) {
    $('#Error').html('');
    showTask(problem);
    showSamples(problem);
    showCode(problem);
    var testProcess = $('#testProcess');
    testProcess.html('');
    $('#resultTable').html('');
    
    
}


observable.subscribe(function Commander(data) {
    if (data.message === 'Start compile') {
        viewPrepareBeforeTest()
    } else if (data.message === 'Start testing') {
        viewTestProcessRuntimeTest();
        printTableHead()
    } else if (data.message === 'Done') {
        viewTestProcessAfterTest();
        viewPrepareAfterTest(data.countTest);
    } else if (data.message === 'ERROR') {
        printCompilationError(data.error);
    } else if (data.message === 'Finish one test') {
        printTestResult(data.testNumber, data.testReport, data.test);
    } else if (data.message === 'noCode') {
        printNoCode();
    }
});

function printNoCode() {
    $('#Error').html('Введите код');
    $('#howWork').show();
}

function printCompilationError(error) {
    $('#Error').html(error);
<<<<<<< HEAD
<<<<<<< HEAD
    $('#SubmitButton').removeClass('disabled');
    $('#SubmitButton').removeAttr('disabled');
=======
>>>>>>> parent of 87e5a8d... All refactor
}

function viewPrepareBeforeTest() {
    $('#howWork').attr('hidden');
   //$("#SubmitButton").attr('src', 'img/buttons/Submit_active.png');
=======
    $('#howWork').show();
}

function viewPrepareBeforeTest() {
    $('#howWork').hide();
//TODO class
    $("#submitButton").attr('src', 'img/buttons/Submit_active.png');
>>>>>>> master
};

function viewTestProcessRuntimeTest() {
    var testProcess = $('#testProcess');
    testProcess.show();
    testProcess.html('Testing... Do not close the page.');
};

function viewTestProcessAfterTest() {
    var testProcess = $('#testProcess');
    testProcess.html('Done.');
};

<<<<<<< HEAD
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
    
=======
function viewPrepareAfterTest(countTest) {
//TODO
    $("#submitButton").attr('src', 'img/buttons/Submit_default.png');
    countTest.complete = countTest.error + countTest.success + countTest.unsuccess;
    $("#counterTest").html(countTest.complete + '/' + countTest.all + ' succeeded' + '<br/>OK: ' + countTest.success + '&#32;&#32;&#32;&#32;NO: ' + countTest.unsuccess + '&#32;&#32;&#32;&#32;FAIL: ' + countTest.error);
    $("#counterTest").show();
};

function printTableHead() {
    var resultTable = $('#resultTable');
//TODO hide/unhide
    resultTable.html("<tr>\
        <td class='tableHead'>Test</td>\
        <td class='tableHead'>Data</td>\
        <td class='tableHead'>User response</td>\
        <td class='tableHead'>Answer</td>\
        <td class='tableHead'>Result</td>\
        <td class='tableHead'>Time, ms</td>\
        </tr>");
}

function printTestResult(testNumber, testReport, test) {
    var resultTable = $('#resultTable');
    resultTable.append("<tr class='result" + testReport.result.result + "'>\
    <td><center>" + (testNumber+1) + "</center></td>\
    <td>" + test.data + "</td>\
    <td>" + testReport.user_answer + "</td>\
    <td>" + test.answer + "</td>\
    <td><center>" + testReport.result.result + "</center></td>\
    <td><text>" + testReport.testTime + "</text></td>\
    </tr>");
>>>>>>> master
}