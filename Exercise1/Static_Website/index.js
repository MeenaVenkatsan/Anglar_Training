// var color=["red","yellow","blue","green","aqua"]
// function colorModif(x)
// {
//     // alert(x)
//     document.getElementById("header").style.backgroundColor=color[x]
// }
// for(let i in color)
// {
//     alert(i)
//     colorModif(i)
// }


images=["first.jpg","two.jpg","three.jpg","four.jpg",
"five.jpg",
"six.jpg"]
currentIndex=0
setInterval(
    function() {
        currentIndex= Math.round(Math.random()*5)
     document.getElementById("img1").src = images[currentIndex]
    },5000
)

function changeImage(arrowtype){
    if(arrowtype=="right"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="left"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    // alert(images[currentIndex])
    document.getElementById("img1").src=images[currentIndex]
}