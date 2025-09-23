let todoArray = [];

function readCookie()
{
    let name = "todo=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            const stringData = c.substring(name.length, c.length);
            const arrayData = stringData.replace("[", "").replace("]", "").replaceAll('"', '').split(',');
            return arrayData;
        }
    }
    return "";
}
function saveCookie()
{
    let tempArr = [];
    for (let i = 0; i < todoArray.length; i++)
    {
        tempArr.push(todoArray[i].textContent);
    }

    const todoJson = JSON.stringify(tempArr);
    document.cookie = "todo=" + todoJson + "; expires=Thu, 25 Sep 2025 23:59:59 UTC";
}
let rawCookieArray = readCookie();

function arrageTodo() {
    for (let i = 0; i < todoArray.length; i++) {
        todoArray[i].style.top = i * 10 + "%";
    }
}
function generateDiv(text) {
    const newDiv = document.createElement("div");
    newDiv.textContent = text;

    newDiv.addEventListener("click", function() {
        const idx = parseInt(newDiv.offsetTop / $("#ft_list").offsetHeight * 10);
        if (idx == 0) todoArray.splice(0, 1);
        else todoArray.splice(idx, idx);
        newDiv.remove();
        arrageTodo();

        saveCookie();
    });

    $("#ft_list").appendChild(newDiv);
    todoArray.unshift(newDiv);
    arrageTodo();
}
function generateCookieDiv() {
    const reverseArray = rawCookieArray.slice().reverse();
    for (let i = 0; i < reverseArray.length; i++) {
        if (reverseArray[i] == "") continue;
        generateDiv(reverseArray[i]);
    }
};
function creationPrompt() {
    let todo = prompt("Enter somthing to do.", "")
    if (todo != null && todo != "") {
        generateDiv(todo);

        saveCookie();
        console.log(readCookie());
    }
}

generateCookieDiv();
console.log(rawCookieArray);