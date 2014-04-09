$(document).ready(function() {
//TODO
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
//TODO hide
        $('#howWork').attr('hidden', 'true');
        $('#ResultTable').html('');
        $('#TestProcess').html('');
        $('#Error').html('');
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        var ProblemId = $('#ProblemId').val();
        var Code = $('#Code').val();
        if (!Code) {
            observable.publish({'message':'noCode'});
        } else {
            TestProblem(ProblemId, Code);
        }
        return false;
    });
    
    $('#ProblemId').focus(function() {
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        problems[$('#ProblemId').val()].code = $('#Code').val();
    });
    
    $('#ProblemId').change(function() {
        ShowStatement(problems[this.value]);
//TODO unhide
        $('#howWork').removeAttr('hidden');
//TODO hide
        $("#counterTest").attr('hidden', 'true');
        $('#TestProcess').attr('hidden', 'true');
    });
});