import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";

const cssStyle={};
let currentDate= new Date().getHours();
let greeting= "";
let image="";

if (currentDate>=1 && currentDate<12){
    greeting="G☀☀d M☀rning";
    image="https://th.bing.com/th/id/R.d2b831f724302951edc684bb930b195e?rik=aB39oEWmtkHrUg&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2f359786-Tea-Flower-Good-Morning-Gif.gif&ehk=GMEFpzs7gBxtcPBUNMg%2bHmbT0KrpuR5setbHzzAwYFg%3d&risl=&pid=ImgRaw&r=0";
cssStyle.color="white";
}
else if (currentDate>=12 && currentDate<16){
    greeting="G🌥🌥d Aftern🌥🌥n"
    image="https://th.bing.com/th/id/R.b3995567a5bf74c7a2df1259a55c5dad?rik=Uxrrh%2b7E3EMUVQ&riu=http%3a%2f%2fwww.picgifs.com%2fcomment-gifs%2fg%2fgood-afternoon%2fanimaatjes-good-afternoon-18913.gif&ehk=q94cSsXLlEzO5Bym6oYflx3X7LLIQdvYtRJ4xea5SWQ%3d&risl=&pid=ImgRaw&r=0"
    cssStyle.color="green";
} 
else if (currentDate>=16 && currentDate<20){
    greeting="G🌥🌥d Even🌤ng"
    image="https://oyepaglu.com/wp-content/uploads/2019/12/ezgif.com-optimize-7.gif"
    cssStyle.color="red";

}
else {
    greeting="G🌕🌕d Night"
    image="https://th.bing.com/th/id/OIP.y5LDN95a4PGSrBU1ThADFgHaFi?pid=ImgDet&rs=1"
    cssStyle.color="purple";

}
ReactDOM.render(
<>
<h1>Hello World!,<span style={cssStyle}>{greeting}</span></h1>
<img src={image} alt="greeting"/>
</>,document.getElementById("root"));
