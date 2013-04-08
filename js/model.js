function TestProblem() {
    var TestProcess = $('#TestProcess');
    setTimeout(function() {
        $("#SubmitButton").attr('disabled', true);
        $("#SubmitButton").css('opacity', '0.5');
    });
    
    var func = Compile();
    if (func) {
        setTimeout(function() {
            TestProcess.removeAttr('hidden');
            TestProcess.html('Testing... Do not close the page.');
        });
        PrintTableHead();
        var id = $('#ProblemId').val();
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            setTimeout(RunTest, 0, TestNumber, problems[id].tests[TestNumber], func)
        }
        setTimeout(function () {
            TestProcess.html('Done.');
        }, 0);
    }
    setTimeout(function () {
        $("#SubmitButton").removeAttr('disabled');
        $("#SubmitButton").css('opacity', '1');
    }, 0);
}

function Compile() {
    var code = $('#Code').val();
    try {
        var f = eval('(' + code + ')');
    } catch(error) {
        PrintCompilationError(error);
        return false;
    }
    return f;
}

function RunTest(TestNumber, test, func) {
    var testReport = RunFunction(test.data, func);
    if (testReport.result !== 'ERROR') {
        testReport.result = CheckResult(testReport.user_answer, test.answer);
    }
    PrintTestResult(TestNumber, testReport, test);
    return testReport;
}

function RunFunction(data, func) {
    var StartTime = new Date;
    try {
        var user_answer = func(data);
    } catch(error) {
        return {"result":'ERROR'};
    }
    var EndTime = new Date;
    
    return {"user_answer":user_answer, "testTime":EndTime - StartTime};
}

function CheckResult(user_answer, answer) {
    if (user_answer === answer) {
        var result = 'OK';
    } else {
        var result = 'NO';
    }
    return result;
}