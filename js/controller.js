$(document).ready(function() {
    $('#SubmitButton').mouseover(function() {
        $(this).attr('src', 'img/buttons/Submit_hover.png')
    });
    $('#SubmitButton').mouseout(function() {
        $(this).attr('src', 'img/buttons/Submit_default.png')
    });
    $('#SubmitButton').mousedown(function() {
        $(this).attr('src', 'img/buttons/Submit_active.png')
    });
    $('#SubmitButton').mouseup(function() {
        $(this).attr('src', 'img/buttons/Submit_hover.png')
    });
    
    $('#SubmitButton').click(function() {
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        var TestProcess = $('#TestProcess');
        setTimeout(function() {
            TestProcess.html('Testing... Do not close the page.');
            $("#SubmitButton").attr('disabled', true);
            $("#SubmitButton").css('opacity', '0.5');
        });
        var id = $('#ProblemId').val();
        var code = $('#Code').val();
        f = eval('(' + code + ')');
        PrintTableHead();
        for (TestNumber = 0; TestNumber < problems[id].tests.length; TestNumber++) {
            setTimeout(RunTest, 0, TestNumber, problems[id], f)
        }
        setTimeout(function () {
            TestProcess.html('Done.');
            $("#SubmitButton").removeAttr('disabled');
            $("#SubmitButton").css('opacity', '1');
        }, 0);
        return false;
    });
    
    $('#ProblemId').change(function() {ShowStatement(problems[this.value]);});
});