function openVersion(evt, versionName) {
    var i, labtabcontent, labtablinks;
    labtabcontent = document.getElementsByClassName("labtabcontent");
    for (i = 0; i < labtabcontent.length; i++) {
        labtabcontent[i].style.display = "none";
    }
    labtablinks = document.getElementsByClassName("labtablinks");
    for (i = 0; i < labtablinks.length; i++) {
        labtablinks[i].className = labtablinks[i].className.replace(" active", "");
    }
    document.getElementById(versionName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
