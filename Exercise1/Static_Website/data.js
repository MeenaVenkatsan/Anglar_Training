data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]
    },
    {
        name: "Testing Services",
        image: "images/testing.png",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/IT.png",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}

function featureAlert(feature){
alert(feature)
}
function hideSlide()
{
    document.getElementById("down").style.display="inline"
    document.getElementById("up").style.display="none"
    $('#slide-area').hide('slow');

}
function showSlide()
{
    document.getElementById("down").style.display="none"
    document.getElementById("up").style.display="inline"
    $('#slide-area').show('slow');
    
}
let code =""

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img id='service-box-image' src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
        code+="<li onClick="+'"'+"featureAlert("+"'"+feature+"'"+")"+'"'+">"
        code+=feature+"</li>"
    }
    code+="</ul></div></div>"
}
document.getElementById("services-wrapper").innerHTML=code