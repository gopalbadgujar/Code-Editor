function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);


}
// <h1>Gopal</h1>           h1{ color:Red; font-size:100px;} 
//