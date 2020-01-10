function direct() {
    var a=document.getElementById("welcome");
    a.setAttribute("id","dir");
    setTimeout(" window.location.href=\"pages/firstpage.html\"","500")
}
document.addEventListener("DOMContentLoaded", function(){
    document.body.style.display = "block";
});