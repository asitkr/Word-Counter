let textbox = document.getElementById("textbox");

textbox.addEventListener("input", () => {
    var text = textbox.value;
    let char = text.length;

    //character count
    document.getElementById("char").innerHTML = char;

    //word count
    text = text.trim();
    let words = text.split(" ");
    let filterWords = words.filter((element) => {
        return element != "";
    })

    document.getElementById("word").innerHTML = filterWords.length;
});