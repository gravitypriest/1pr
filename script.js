$(document).ready(function() {
    function setDarkTheme() {
        $('body').addClass('dark');
        $('#dark-button').hide();
        $('#light-button').show();
        localStorage.setItem('darkThemeEnabled', 1);
    }

    function setLightTheme() {
        $('body').removeClass('dark');
        $('#dark-button').show();
        $('#light-button').hide();
        localStorage.setItem('darkThemeEnabled', 0);
    }

    if (localStorage.getItem('darkThemeEnabled')
        && localStorage.getItem('darkThemeEnabled') === '1') {
        setDarkTheme();
    } else {
        setLightTheme();
    }

    $('#light-button').click(setLightTheme);
    $('#dark-button').click(setDarkTheme);
});
