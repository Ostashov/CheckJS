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
        $('#howWork').attr('hidden', 'true');
        $('#ResultTable').html('');
        $('#TestProcess').html('');
        $('#Error').html('');
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        var ProblemId = $('#ProblemId').val();
        var Code = $('#Code').val();
        
        $.post('http://contest.mccme.ru:8080', {'ProblemId':ProblemId, 'Code':Code}, function() {observable.publish({'message':'Done'});}, 'json');
        //TestProblem(ProblemId, Code);
        return false;
    });
    
    $('#ProblemId').focus(function() {
        var myCodeMirror = $('.CodeMirror')[0];
        myCodeMirror.CodeMirror.save();
        problems[$('#ProblemId').val()].code = $('#Code').val();
    });
    
    $('#ProblemId').change(function() {
        ShowStatement(problems[this.value]);
        $('#howWork').removeAttr('hidden');
        $('#TestProcess').attr('hidden', 'true');
    });
});