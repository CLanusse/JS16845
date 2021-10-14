// ============

$('#slideup').click( () => {
    $('#texto').slideUp(1000)
})
$('#slidedown').click( () => {
    $('#texto').slideDown(1000)
})

$('#acordeon h3').click( () => {
    $('#acordeon p').slideToggle(300)
})
