//VAR//
//VAR//


function RunTest(TestNumber, problems, id, f) {
                var report = TestProblem(problems[id].tests[TestNumber], f);
                PrintResultsTable(problems[id].tests[TestNumber], report, TestNumber);
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