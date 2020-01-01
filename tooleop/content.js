const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
$('input[type=text]').each(function () {
    $(this).val("a");
})

$('ins').each(function () {
    $(this).click();
});
sleep(1000).then(() => {
    $('#dSubmit').click();
    $("#dViewAnswer").click(); //show answer
})
sleep(2000).then(() => {
    var checked = $('.checked ins')
    $("#dViewAnswer").click(); //comeback
    checked.each(function () {
        $(this).click();
        $('input[type=text]').each(function () {
            $(this).val($(this).attr('placeholder'));
        })
    })
    sleep(5000).then(() => {})
})