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

