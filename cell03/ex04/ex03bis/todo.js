let todoArray = [];

function readCookie()
{
    let name = "todo=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            const stringData = c.substring(name.length, c.length);
            const arrayData = stringData
                .replace("[", "")
                .replace("]", "")
                .replaceAll('"', '')
                .split(',');
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
        tempArr.push(todoArray[i]);
    }

    const todoJson = JSON.stringify(tempArr);
    document.cookie = "todo=" + todoJson + "; expires=Thu, 25 Sep 2025 23:59:59 UTC";
}
let rawCookieArray = readCookie();

function arrageTodo() {
    let containerHeight = +($("#ft_list").css("height").replace("px", ""));
    console.log(todoArray);

    for (let i = 0; i < todoArray.length; i++) {
        let targetTop = (i / 10 * containerHeight) + "px";
        $("div").filter(function() {
            return $(this).text() == todoArray[i];
        }).css({
            "top" : targetTop
        });
    }
}
function generateDiv(text) {
    $("<div>" + text + "</div>").appendTo("#ft_list").on("click", function(event) {
        console.log("Nigga");
        const idx = +($(this).css("top").replace("px", "")) / +($("#ft_list").css("height").replace("px", "")) * 10;
        if (idx == 0) todoArray.splice(0, 1);
        else todoArray.splice(idx, idx);
        $(this).remove();
        arrageTodo();

        saveCookie();
    });

    todoArray.unshift(text);
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