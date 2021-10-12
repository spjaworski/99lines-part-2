document.addEventListener('DOMContentLoaded', function(){
    let singBtn = document.createElement('button');
    let singBtnText = document.createTextNode('Sing!');
    singBtn.appendChild(singBtnText);
    document.body.appendChild(singBtn);

    singBtn.onclick = singing;

    function singing() {

        const friends = ["Sarah", "Alice", "Ben", "Dylan", "Amanda"]

        for (let i = 0; i < friends.length; i++) {
            let friendDiv = document.createElement('div');
            friendDiv.className = 'friend';
            document.body.appendChild(friendDiv);
            for (let line = 99; line >= 1; line--) {
                if (line == 99) {
                    let friendHeader = document.createElement('h3');
                    let headerText = document.createTextNode(friends[i])
                    friendHeader.appendChild(headerText);
                    friendDiv.appendChild(friendHeader);
                    let friendPara = document.createElement('p');
                    let paraText = document.createTextNode("99 lines of code in the file, 99 lines of code, " + friends[i] + " strikes one oue, clears it all out, 98 lines of code in the file");
                    friendPara.appendChild(paraText);
                    friendDiv.appendChild(friendPara);

                } else if (line < 99 && line > 2) {
                    let friendPara = document.createElement('p');
                    let paraText = document.createTextNode(line + " lines of code in the file, " + line + " lines of code, " + friends[i] + " strikes one out, clears it all out, " +(line-1) + " lines of code in the file")
                    friendPara.appendChild(paraText);
                    friendDiv.appendChild(friendPara);
                } else if (line == 2) {
                    let friendPara = document.createElement('p');
                    let paraText = document.createTextNode("2 lines of code in the file, 2 lines of code, " + friends[i] + " strikes one out, clears it all out, 1 more line of code in the file")
                    friendPara.appendChild(paraText);
                    friendDiv.appendChild(friendPara);
                } else if (line == 1) {
                    let friendPara = document.createElement('p');
                    let paraText = document.createTextNode("1 line of code in the file, 1 line of code, " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
                    friendPara.appendChild(paraText);
                    friendDiv.appendChild(friendPara);
                }
            }
        };
    }
});