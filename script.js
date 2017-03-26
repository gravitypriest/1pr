var themes = [
    { id: 'default', label: 'Default' },
    { id: 'dark',  label: 'Dark' }
    /*
     *   Add more themes here. Match 'id' property
     *   with the class name in the CSS file. See
     *   1pr/stylesheets/themes/dark.css for example.
     */
];

// aggregate string to remove all theme classes on theme change
var allThemeClasses = '';
themes.forEach(function(theme) {
    allThemeClasses = allThemeClasses + ' ' + theme.id;
});

function setTheme(theme) {
    $('body').removeClass(allThemeClasses);
    $('.theme-buttons > button').removeClass('selected-theme');
    if (theme !== 'default') {
        $('body').addClass(theme);
    }
    localStorage.setItem('theme', theme);
    $('#theme-select-' + theme).addClass('selected-theme');
}

$(document).ready(function() {
    themes.forEach(function(theme) {
        var themeButton = document.createElement('button');
        themeButton.id = 'theme-select-' + theme.id;
        themeButton.innerHTML = theme.label;
        themeButton.onclick = function() {
            setTheme(theme.id);
        };
        $('.theme-buttons').append(themeButton);
    });

    if (localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'));
    } else {
        setTheme('default');
    }
});
