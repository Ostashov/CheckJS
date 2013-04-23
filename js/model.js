function TestProblem(id, Code) {
    observable.publish({'message':'Start compile'});
    //viewPrepareBeforeTest()
    
    var func = Compile(Code);
    if (func) {
        observable.publish({'message':'Start testing'});
        //viewTestProcessRuntimeTest()
        //PrintTableHead();
        var problemReport = [];
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            problemReport[TestNumber] = $.post('http://contest.mccme.ru:8080', {'a':'a'});
            //{"TestNumber":TestNumber, "test":problems[id].tests[TestNumber], "func":func});
            //setTimeout(RunTest, 0, TestNumber, problems[id].tests[TestNumber], func)
        }
        setTimeout(function() {
            observable.publish({'message':'Done'});
            //viewTestProcessAfterTest()
        }, 0);
    }
    //setTimeout(function () {
    //    viewPrepareAfterTest()
    //}, 0);
    return problemReport;
}

function Compile(Code) {
    try {
        var f = eval('(' + Code + ')');
    } catch(error) {
        observable.publish({'message':'ERROR', 'error':error});
        //PrintCompilationError(error);
        return false;
    }
    return f;
}

function RunTest(TestNumber, test, func) {
    var testReport = RunFunction(test.data, func);
    if (testReport.result !== 'ERROR') {
        testReport.result = CheckResult(testReport.user_answer, test.answer);
    }
    observable.publish({'message':'Finish one test', 'TestNumber':TestNumber, 'testReport':testReport, 'test':test});
    //PrintTestResult(TestNumber, testReport, test);
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

var observable = {
    observers: [],
    
    subscribe: function(observer) {
        observable.observers.push(observer);
    },
    
    publish: function(data) {
        for (var i = 0; i < observable.observers.length; i++) {
            observable.observers[i](data);
        }
    }
};