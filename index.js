function changeThemeLight(){
    const mode = document.getElementById('toggle');
    mode.innerHTML = `<img onclick="changeThemeDark()"  id="theme" class="light-theme-mode" src="svgfile/light-mode.svg" alt="light-mode">`;
}
function changeThemeDark(){
    const mode = document.getElementById('toggle');
    mode.innerHTML = `<img onclick="changeThemeLight()" id="theme" class="dark-theme-mode" src="svgfile/dark-mode.svg" alt="dark-mode">`;
}
