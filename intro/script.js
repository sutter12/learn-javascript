function changeText(ID) {
    var text = document.getElementById(ID);
    text.innerHTML = "This is what is setup :)";
}//end changeText

function largeText() {
    var text = document.getElementById("demo1");
    text.style.fontSize = "35px";

    // document.getElementById("demo1").style.fontSize = "35px";
}//end largeText

function hideText(hide, show) {
    var hideText = document.getElementById(hide);
    hideText.style.display = "none";

    var showText = document.getElementById(show);
    showText.style.display = "block"
}//end hideText

const ids = ["change", "test1", "test2"];
function showAllText() {
    for(let i=0; i<ids.length; i++) {
        document.getElementById(ids[i]).style.display = "block";
    }//end for i loop
}//end showAllText

function hideAllText() {
    for(let i=0; i<ids.length; i++) {
        document.getElementById(ids[i]).style.display = "none";
    }//end for i loop
}//end hideAllText