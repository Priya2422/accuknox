function toggleBold(id) {
    var sentence = document.getElementById("sentence" + id);
    sentence.style.fontWeight = (sentence.style.fontWeight === "bold") ? "normal" : "bold";
  }
  
  function toggleItalic(id) {
    var sentence = document.getElementById("sentence" + id);
    sentence.style.fontStyle = (sentence.style.fontStyle === "italic") ? "normal" : "italic";
  }
  
  function toggleUnderline(id) {
    var sentence = document.getElementById("sentence" + id);
    sentence.style.textDecoration = (sentence.style.textDecoration === "underline") ? "none" : "underline";
  }
  
  function changeFontSize(id) {
    var fontSize = document.getElementById("fontSizeInput" + id).value;
    var sentence = document.getElementById("sentence" + id);
    sentence.style.fontSize = fontSize + "px";
  }
  
  function changeColor(id) {
    var color = document.getElementById("colorInput" + id).value;
    var sentence = document.getElementById("sentence" + id);
    sentence.style.color = color;
  }
  