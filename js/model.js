function TestProblem(id, Code) {
    viewPrepareBeforeTest()
    
    var func = Compile(Code);
    if (func) {
        viewTestProcessRuntimeTest()
        PrintTableHead();
        var problemReport = [];
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            problemReport[TestNumber] = setTimeout(RunTest, 0, TestNumber, problems[id].tests[TestNumber], func)
        }
        setTimeout(function() {
            viewTestProcessAfterTest()
        }, 0);
    }
    setTimeout(function () {
        viewPrepareAfterTest()
    }, 0);
    return problemReport;
}

function Compile(Code) {
    try {
        var f = eval('(' + Code + ')');
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