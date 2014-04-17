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
//TODO в html
    samples.html('<div class="blockName">Sample:</div>' + "<table id='SampleTable'><tr>\
    <td class='TableHead'>Data</td>\
    <td class='TableHead'>Answer</td>\
    </tr></table>");
    var Sample = $("#SampleTable");
    for (testNumber = 0; testNumber < problem.tests.length; testNumber++) {
        if (problem.tests[testNumber].sample === true) {
            Sample.append('<tr><td>' + problem.tests[testNumber].data + '</td><td>' + problem.tests[testNumber].answer + '</td></tr>');
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


observable.subscribe(function Commander(data) {
    if (data.message === 'Start compile') {
        viewPrepareBeforeTest()
    } else if (data.message === 'Start testing') {
        viewTestProcessRuntimeTest();
        PrintTableHead()
    } else if (data.message === 'Done') {
        viewTestProcessAfterTest();
        viewPrepareAfterTest(data.countTest);
    } else if (data.message === 'ERROR') {
        PrintCompilationError(data.error);
    } else if (data.message === 'Finish one test') {
        PrintTestResult(data.testNumber, data.testReport, data.test);
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
    $('#howWork').hide();
//TODO class
    $("#SubmitButton").attr('src', 'img/buttons/Submit_active.png');
};

function viewTestProcessRuntimeTest() {
    var TestProcess = $('#TestProcess');
    TestProcess.show();
    TestProcess.html('Testing... Do not close the page.');
};

function viewTestProcessAfterTest() {
    var TestProcess = $('#TestProcess');
    TestProcess.html('Done.');
};

function viewPrepareAfterTest(countTest) {
//TODO
    $("#SubmitButton").attr('src', 'img/buttons/Submit_default.png');
    countTest.complete = countTest.error + countTest.success + countTest.unsuccess;
//TODO design
// OK:     NO:     ERROR: 
    $("#counterTest").html(countTest.complete + '/' + countTest.all + ' succeeded' + '<br>OK: ' + countTest.success + '<br>NO: ' + countTest.unsuccess + '<br>FAIL: ' + countTest.error);
    $("#counterTest").show();
};

function PrintTableHead() {
    var ResultTable = $('#ResultTable');
//TODO hide/unhide
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
    ResultTable.append("<tr class='Result" + testReport.result.result + "'>\
    <td><center>" + (testNumber+1) + "</center></td>\
    <td>" + test.data + "</td>\
    <td>" + testReport.user_answer + "</td>\
    <td>" + test.answer + "</td>\
    <td><center>" + testReport.result.result + "</center></td>\
    <td>" + testReport.testTime + "</td>\
    </tr>");
}