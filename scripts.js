document.addEventListener('DOMContentLoaded', function(){
    let singBtn = document.createElement('button');
    let singBtnText = document.createTextNode('Sing!');
    singBtn.appendChild(singBtnText);
    document.body.appendChild(singBtn);

    

    singBtn.onclick = singing;

    function singing() {

        const friends = ["Sarah", "Alice", "Ben", "Dylan", "Amanda"]

        for (let i = 0; i < friends.length; i++) {
            for (let line = 99; line >= 1; line--) {
                if (line > 2) {
                    console.log(line + " lines of code in the file, " + line + " lines of code, " + friends[i] + " strikes one out, clears it all out, " +(line-1) + " lines of code in the file")
                } else if (line == 2) {
                    console.log(line + " lines of code in the file, " + line + " lines of code, " + friends[i] + " strikes one out, clears it all out, 1 more line of code in the file")
                } else if (line == 1) {
                    console.log("1 line of code in the file, 1 line of code, " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
                }
            }
        };
    }
});