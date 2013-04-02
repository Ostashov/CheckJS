TestCase("CheckResult", {
    testOK:function() {
        var result = CheckResult(100,100);
        assertEquals("OK", result);
    },
    testNO:function() {
        var result = CheckResult(1,2);
        assertEquals("NO", result);
    }
});