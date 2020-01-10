function moveright(y) {
   y=document.getElementById(y);
   y.style.cssText=("position: absolute;left:0;");

    var x=document.getElementById("back");
    x.style.cssText=("position: absolute;left:-1120px;");
}

function  goback(y) {
    y=document.getElementById(y);
    y.style.cssText=("position: absolute;left:1120px;");
    var x=document.getElementById("back");
    x.style.cssText=("position: absolute;left:0px;");
}
var stat=0;
function mplay(x) {
    var y;
    if(stat==0)
    {
        x=document.getElementById(x);
        x.play();
        y=document.getElementById("pic");
       y.style.animationPlayState="running";
       y=document.getElementById("bottom-play");
        y.style.backgroundImage="url(photo/暂停.svg)";
        y=document.getElementById("player");
        y.style.animationPlayState="running";

        y=document.getElementById("control-2");
        y.style.backgroundImage="url(photo/暂停.svg)";
        y.style.backgroundSize="40px 40px";



        y=document.getElementById("p_b_play");
        y.style.backgroundImage="url(items/pause.svg)";
        stat=1;
        return;
    }
    if(stat==1)
    {
        x=document.getElementById(x);
        x.pause();
        y=document.getElementById("pic");
        y.style.animationPlayState="paused";
        y=document.getElementById("bottom-play");
        y.style.backgroundImage="url(photo/播放.svg)";
        y=document.getElementById("player");

        y.style.animationPlayState="paused";

        y=document.getElementById("control-2");
        y.style.backgroundImage="url(photo/播放.svg)";



        y=document.getElementById("p_b_play");
        y.style.backgroundImage="url(items/play-g.svg)";
        stat=0;
        return;
    }

}

var now=0;
var all=6;
var list=Array();
list[0]=new Object();
list[0].src="music/沙龙.mp3";
list[0].css=" background: url(\"photo/bgcyx.jpg\") no-repeat;\n" +
    "    background-size: 1120px 630px; filter: blur(1px);  ";
list[0].CD=" url(photo/陈奕迅.gif)";
list[0].word="word0";
list[0].name="陈奕迅";
list[0].singer="沙龙";

list[1]=new Object();
list[1].src="music/突然好想你.mp3";
list[1].css="   background: url(\"photo/古巨基.jpg\") no-repeat;\n" +
    "    background-size: 1120px 630px;filter: blur(2px);   ";
list[1].CD=" url(photo/我是歌手.jpg)";
list[1].word="word1";
list[1].name="突然好想你";
list[1].singer="古巨基";

list[2]=new Object();
list[2].src="music/纸短情长.mp3";
list[2].css="    background: url(\"photo/bg烟把儿.jpg\") no-repeat;\n" +
    "    background-size: 1120px 630px;filter: blur（2px); ";
list[2].CD=" url(photo/cd纸短情长.jpg)";
list[2].word="word2";
list[2].name="纸短情长";
list[2].singer="烟把儿乐队";

list[3]=new Object();
list[3].src="music/岁月如歌.mp3";
list[3].css="   background: url(\"photo/bg岁月如歌(1).jpg\") no-repeat;\n" +
    "    background-size: 1120px 630px;filter: blur（5px);  ";
list[3].CD=" url(photo/cd岁月如歌.jpg)";
list[3].word="word3";
list[3].name="岁月如歌";
list[3].singer="陈奕迅";

list[4]=new Object();
list[4].src="music/outbreak.mp3";
list[4].css="   background: url(\"photo/OUTBREAK-.jpg\") no-repeat;\n" +
    "    background-size: 1120px 630px;filter: blur（50px);  ";
list[4].CD=" url(photo/outbreak.jpg)";
list[4].word="word4";
list[4].name="Outbreak";
list[4].singer="Monster Cat-Feint / MYLK";

list[5]=new Object();
list[5].src="music/ADPIANOIV.mp3";
list[5].css="   background: url(\"photo/AD-.jpg\") no-repeat;\n" +
    "   background-size: 1120px 630px;filter: blur（50px);  ";
list[5].CD=" url(photo/AD.jpg)";
list[5].word="word5";
list[5].name="Monochrome Re.Surgence";
list[5].singer="Feryquitous Vo.F9";

function next(x) {
    now++;
    x=document.getElementById(x);
    x.src=list[now%all].src;
    x=document.getElementById("bg");
    x.style.cssText=list[now%all].css;

    stat=0;
    mplay("bgmusic");

    x=document.getElementById("CD");
    x.style.backgroundImage=list[now%all].CD;
    x.backgroundPosition="no-repeat";

    x=document.getElementById("player_in");
    x.style.backgroundImage=list[now%all].CD;


    x=document.getElementById("name");
    x.innerText=list[now%all].name;
    x=document.getElementById("psinger");
    x.innerText=list[now%all].singer;

    x=document.getElementById(list[(now-1)%all].word);
    x.style.display="none";
    x=document.getElementById(list[now%all].word);
    x.style.display="block";



}



function last(x) {
    now--;
    if(now<0)
        now=all-1;
    x=document.getElementById(x);
    x.src=list[now%all].src;
    x=document.getElementById("bg");
    x.style.cssText=list[now%all].css;

    stat=0;
    mplay("bgmusic");

    x=document.getElementById("CD");
    x.style.backgroundImage=list[now%all].CD;

    x=document.getElementById("player");
    x.style.backgroundImage=list[now%all].CD;

    x=document.getElementById("name");
    x.innerText=list[now%all].name;
    x=document.getElementById("psinger");
    x.innerText=list[now%all].singer;

    x=document.getElementById(list[(now+1)%all].word);
    x.style.display="none";
    x=document.getElementById(list[now%all].word);
    x.style.display="block";

}

function stop(x) {
    x=document.getElementById(x);
    x.currentTime = 0;
    stat=1;
    mplay("bgmusic");
}
document.addEventListener("DOMContentLoaded", function(){
    document.body.style.display = "block";
});