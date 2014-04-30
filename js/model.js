function testProblem(id, Code) {
    observable.publish({'message':'Start compile'});

    var countTest = {
        'complete': 0,
        'all': problems[id].tests.length,
        'success': 0,
        'unsuccess': 0,
        'error': 0
    }
    var func = compile(Code);
    if (func) {
        observable.publish({'message':'Start testing'});
        var problemReport = [];
        for (testNumber = 0; testNumber < problems[id].tests.length; testNumber++) {
            problemReport[testNumber] = setTimeout(runTest, 0, testNumber, problems[id].tests[testNumber], func, countTest)
        }
        setTimeout(function() {
            observable.publish({'message':'Done', 'countTest':countTest});
        }, 0);
    }
    return problemReport;
}

//TODO result.result - переделать нормально

function compile(Code) {
    try {
        eval(Code);
    } catch(error) {
        if (error) {
            observable.publish({'message':'ERROR', 'error':error});
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

function runTest(testNumber, test, func, countTest) {
    var testReport = runFunction(test.data, func);
    if (!('result' in testReport)) {
        testReport.result = checkResult(testReport.user_answer, test.answer, countTest);
    } else {
        countTest.error = countTest.error + 1;
        testReport.result = {'result': 'ERROR'};
    }
    observable.publish({'message':'Finish one test', 'testNumber':testNumber, 'testReport':testReport, 'test':test});
    return {'testReport':testReport, 'countTest':countTest};
}

function runFunction(data, func) {
    var startTime = new Date;
    try {
        var user_answer = func(data);
    } catch(error) {
        return {"result": 'ERROR'}; // testReport.result.result = 'ERROR' in runTest()
    }
    var endTime = new Date;
    
    return {"user_answer":user_answer, "testTime":endTime - startTime};
}

function checkResult(user_answer, answer, countTest) {
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