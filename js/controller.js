$(document).ready(function() {
    $('#SubmitButton').mouseover(function() {
        $('#SubmitButton').attr('src', 'img/buttons/Submit_hover.png')
    });
    $('#SubmitButton').mouseout(function() {
        $('#SubmitButton').attr('src', 'img/buttons/Submit_default.png')
    });
    $('#SubmitButton').mousedown(function() {
        $('#SubmitButton').attr('src', 'img/buttons/Submit_active.png')
    });
    $('#SubmitButton').mouseup(function() {
        $('#SubmitButton').attr('src', 'img/buttons/Submit_hover.png')
    });
    $('#SubmitButton').click(function() {
        //myCodeMirror.save();
        $("#SubmitButton").attr('disabled',true);
        var id = $('#ProblemId').val();
        var code = $('#Code').val();
        var TestProcess = $('#TestProcess');
        f = eval('(' + code + ')');
        TestProcess.html('Testing... Do not close the page.');
        PrintTableHead();
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            setTimeout(RunTest, 0, TestNumber, problems[id], f)
        }
        setTimeout(function () {
            TestProcess.html('Done.');
            $("#SubmitButton").removeAttr('disabled');
        }, 0);
        return false;
    });
    
    $('#ProblemId').change(function() {ShowStatement(problems[this.value]);});
});