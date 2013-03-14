function RunTest(TestNumber, problem, f) {
                var report = TestProblem(problem.tests[TestNumber], f);
                PrintResultsTable(problem.tests[TestNumber], report, TestNumber);
                //if (TestNumber === problems[id].tests.length - 1) {TestProcess.innerHTML = 'Done.';}
}
            
function TestProblem (test, f) {
    var StartTime = new Date;
    var user_answer = f(test.data);
    if (user_answer === test.answer) {
        var result = 'OK';
    } else {
        var result = 'NO';
    }
    var EndTime = new Date;
    
    return {"result":result, "user_answer":user_answer, "TestTime":EndTime - StartTime};
}