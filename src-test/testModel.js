TestCase("CheckResult", {
    test1:function() {
        var result = CheckResult(100,100);
        assertEquals("OK", result);
    },
    test2:function() {
        var result = CheckResult(1,2);
        assertEquals("NO", result);
    },
    test3:function() {
        var result = CheckResult(0,"0");
        assertEquals("NO", result);
    }
});

TestCase("RunFunction", {
    test1:function() {
        var result = RunFunction([1,2], function(data) {var result = data[0] + data[1]; return result;});
        assertEquals(3, result.user_answer);
        assertNotUndefined(result.testTime);
    }
});