var random=Math.floor(Math.random()*6+1);
if(random==1||random==3||random==5)
{
    var randomImageSource="images/head.jpeg";
    document.querySelector("img").setAttribute("src",randomImageSource);
    document.querySelector("h3").innerHTML="HEADS";
}
else
{
    var randomImageSource1="images/tail.jpeg";
    document.querySelector("img").setAttribute("src",randomImageSource1);
    document.querySelector("h3").innerHTML="TAILS";
}