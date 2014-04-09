function TestProblem(id, Code) {
    observable.publish({'message':'Start compile'});

//TODO убрать все комментарии
    //viewPrepareBeforeTest()
    var countTest = {
        'complete': 0,
        'all': problems[id].tests.length,
        'success': 0,
        'unsuccess': 0,
        'error': 0
    }
    var func = Compile(Code);
    if (func) {
        observable.publish({'message':'Start testing'});
        //viewTestProcessRuntimeTest()
        //PrintTableHead();
        var problemReport = [];
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            problemReport[TestNumber] = setTimeout(RunTest, 0, TestNumber, problems[id].tests[TestNumber], func, countTest)
        }
        setTimeout(function() {
            observable.publish({'message':'Done', 'countTest':countTest});
            //viewTestProcessAfterTest()
        }, 0);
    }
    //setTimeout(function () {
    //    viewPrepareAfterTest()
    //}, 0);
    return problemReport;
}

//TODO result.result - переделать нормально

function Compile(Code) {
    try {
        eval(Code);
    } catch(error) {
        if (error) {
            observable.publish({'message':'ERROR', 'error':error});
            //PrintCompilationError(error);
            return false;
        }
    }
    try {
        var f = eval('(' + Code + ')');
    } catch(error) {
        if (error) {
            observable.publish({'message':'ERROR', 'error':error});
            return false;
        }
    }
    return f;
}

function RunTest(TestNumber, test, func, countTest) {
    var testReport = RunFunction(test.data, func);
    if (testReport.result !== 'ERROR') {
        testReport.result = CheckResult(testReport.user_answer, test.answer, countTest);
    } else {
        countTest.error = countTest.error + 1;
    }
    observable.publish({'message':'Finish one test', 'TestNumber':TestNumber, 'testReport':testReport, 'test':test});
    //PrintTestResult(TestNumber, testReport, test);
    return {'testReport':testReport, 'countTest':countTest};
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

function CheckResult(user_answer, answer, countTest) {
    if (user_answer === answer) {
        var result = 'OK';
        countTest.success = countTest.success + 1;
    } else {
        var result = 'NO';
        countTest.unsuccess = countTest.unsuccess + 1;
    }
    return {'result':result, 'countTest':countTest};
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