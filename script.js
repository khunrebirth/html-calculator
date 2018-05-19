/**
 * TODO:: Fix bug
 * 1.overflow - x
 * 2.when select symbol again, have a problem.
 */

$(document).ready(function() {
    $(".button.so").on('click', function() {
        $("#screen").append($(this).html())
    })

    $(".button.dau").on('click', function() {
        $("#screen").append($(this).html())
    })

    $(".button.del").on('click', function() {
        $("#screen").html($("#screen").html().slice(0, -1))
    })

    $(".button.ac").on('click', function() {
        $("#screen").html('')
    })

    $(".button.equal").on('click', function() {
        let x = $("#screen").html()
        x = x.replace('x', '*').replace('÷', '/')

        // debug
        console.log('x = ' + x)

        // show result
        $("#screen").html(eval(x))
    })
})
