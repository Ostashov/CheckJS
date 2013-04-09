TestCase("CheckResult", {
    testOK:function() {
        var result = CheckResult(100,100);
        assertEquals("OK", result);
    },
    testNO:function() {
        var result = CheckResult(1,2);
        assertEquals("NO", result);
    },
    'test not strict equality':function() {
        var result = CheckResult(0,"0");
        assertEquals("NO", result);
    }
});

TestCase("RunFunction", {
    'test OK with time':function() {
        var result = RunFunction([1,2], function(data) {var result = data[0] + data[1]; return result;});
        assertEquals(3, result.user_answer);
        assertNotUndefined(result.testTime);
        assertUndefined(result.result);
    },
    'test runtime error':function() {
        var result = RunFunction([1,2], function(data) {var result = data[0] + ata[1]; return result;});
        assertUndefined(result.testTime);
        assertUndefined(result.user_answer);
        assertEquals('ERROR', result.result);
    }
});

TestCase("RunTest", {
    setUp:function() {
        this.tmpRunFunction = RunFunction;
        RunFunction = sinon.stub();
        PrintTestResult = sinon.stub();
        this.tmpCheckResult = CheckResult;
        CheckResult = sinon.stub();
    },
    tearDown:function() {
        RunFunction = this.tmpRunFunction;
        CheckResult = this.tmpCheckResult;
    },
    
    'test ERROR':function() {
        RunFunction.returns({"result":'ERROR'});
        var report = RunTest(1, {'data':2, 'answer':3}, function(data) {return 2;});
        assertEquals('ERROR', report.result);
    },
    
    'test without ERROR':function() {
        RunFunction.returns({"user_answer":99});
        CheckResult.returns('OK');
        var report = RunTest(1, {'data':2, 'answer':3}, function(data) {return 99;});
        assertEquals(99, report.user_answer);
        assertEquals('OK', report.result);
    }
});

TestCase("Compile", {
    setUp:function() {
        PrintCompilationError = sinon.stub();
    },
    
    'test ERROR':function() {
        var code = 'function() {var a = 5; var s = a + ;}';
        var reportCompile = Compile(code);
        assertEquals(false, reportCompile);
    },
    'test without ERROR':function() {
        var code = 'function() {var a = 5; var s = a;}';
        var reportCompile = Compile(code);
        assertNotUndefined(reportCompile);
    }
});

TestCase("TestProblem", {
    setUp:function() {
        viewPrepareBeforeTest = sinon.stub();
        viewTestProcessRuntimeTest = sinon.stub();
        PrintTableHead = sinon.stub();
        this.tmpRunTest = RunTest;
        RunTest = sinon.stub();
        viewTestProcessAfterTest = sinon.stub();
        viewPrepareAfterTest = sinon.stub();
    },
    tearDown:function() {
        RunTest = this.tmpRunTest;
    },
    
    'test without ERROR':function() {
        var id = 1;
        var code = 'function() {var a = 5; return a;}';
        var reportTestProblem = TestProblem(id, code);
        assertNotUndefined(reportTestProblem[0]);
    },
    
    'test with ERROR':function () {
        var id = 1;
        var code = 'function() {var a = 5 + ; return a;}';
        var reportTestProblem = TestProblem(id, code);
        assertUndefined(reportTestProblem);
    }
});