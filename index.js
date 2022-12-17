function changeStyles({color,fontsize}) {
   
    const elements = documents.querySelectorAll('.changestyle');

    elements.forEach(element=>{
        element.style.color=color;
        element.style.fontsize=fontsize;

    })


}
module.exports.changeStyle = changeStyle;