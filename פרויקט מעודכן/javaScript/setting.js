//============================================================================
//setting background color.
//=========================
let backgroundColor = document.getElementsByTagName('body')[0];
function pink() {
    backgroundColor.style.backgroundColor = "pink"
}
function black() {
    backgroundColor.style.backgroundColor = "black"
}
function blue() {
    backgroundColor.style.backgroundColor = "rgb(46, 180, 224)";
}
function orange() {
    backgroundColor.style.backgroundColor = " rgb(241, 216, 75)";
}
function green() {
    backgroundColor.style.backgroundColor = " rgb(28, 204, 145)";

}
function gray() {
    backgroundColor.style.backgroundColor = "gray";
}
//============================================================================

//============================================================================
//show/hid setting.
//================
let flagSetting = 0;
function showSetting() {

    let setting = document.getElementById('setting');

    if (flagSetting === 1) {
        flagSetting = 0;
        setting.style.display = "none";

    }
    else {

        let setting = document.getElementById('setting');
        setting.style.display = "inherit";
        flagSetting = 1;
    }
}
//============================================================================



