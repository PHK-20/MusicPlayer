var t=0;
var p=0;
var x;
function music(){

    if (t == 0) {
        t = document.getElementById("m_text");
        p = document.getElementById("s_music");
        x="s_music";
        t.style.display="block";
        p.setAttribute("id","m_big");
    }
    else{
        t.style.display="none";
        p.setAttribute("id",x);
        t=document.getElementById("m_text");
        p = document.getElementById("s_music");
        t.style.display="block";
        p.setAttribute("id","m_big");
        x = "s_music";
    }
}
function  account() {
    if (t == 0) {
        t = document.getElementById("a_text");
        p = document.getElementById("s_account");
        x="s_account";
        t.style.display="block";
        p.setAttribute("id","a_big");
    }
    else
    {
        t.style.display="none";
        p.setAttribute("id",x);
        t = document.getElementById("a_text");
        p = document.getElementById("s_account");
        t.style.display="block";
        p.setAttribute("id","a_big");
        x="s_account";
    }
}

function download(){
    if (t == 0) {
        t = document.getElementById("d_text");
        p = document.getElementById("s_download");
        x="s_download";
        t.style.display="block";
        p.setAttribute("id","d_big");
    }
    else{
        t.style.display="none";
        p.setAttribute("id",x);
        t=document.getElementById("d_text");
        p = document.getElementById("s_download");
        t.style.display="block";
        p.setAttribute("id","d_big");
        x = "s_download";
    }
}
function info() {
    if (t == 0) {
        t = document.getElementById("i_text");
        p = document.getElementById("s_info");
        x="s_info";
        t.style.display="block";
        p.setAttribute("id","i_big");
    }
    else{
        t.style.display="none";
        p.setAttribute("id",x);
        t=document.getElementById("i_text");
        p = document.getElementById("s_info");
        t.style.display="block";
        p.setAttribute("id","i_big");
        x = "s_info";
    }
}
function returned() {
    if(t!=0)
    {
        t.style.display="none";
        p.setAttribute("id",x);
    }
}