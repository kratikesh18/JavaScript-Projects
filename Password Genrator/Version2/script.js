function genratePass() {
    let dictionary = "";
    if (document.getElementById("lowerCaseCB").checked) {
        dictionary += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("upperCaseCB").checked) {
        dictionary += "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    }
    if (document.getElementById("numbersCB").checked) {
        dictionary += "0123456789";
    }
    if (document.getElementById("symbolsCB").checked) {
        dictionary += "!@#$%^&*()-_=+<>,.";
    }

    const length = document.querySelector('input[type="range"]').value;

    if (length < 1 || dictionary.length === 0) {
        return;
    }

    //creating password
    let pass = "";
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        pass += dictionary[pos];
    }

    document.querySelector("input[type='text']").value = pass;
}


[...document.querySelectorAll('input[type="checkbox"] , button.genrateBtn')].forEach((element) => {
    element.addEventListener("click", genratePass);
    
});

document.querySelector('input[type="range"]').addEventListener("input", (e) => {
    document.querySelector("div.range span").innerHTML = e.target.value;
    genratePass();
});

//copy button
document.querySelector(".password button").addEventListener("click", () => {
    let passText = document.querySelector('input[type="text"]').value;

    navigator.clipboard.writeText(passText).then(() => {
        document.querySelector(".password button").innerHTML = "copied!";

        setTimeout(() => {
            document.querySelector(".password button").innerHTML = "copy";
        }, 3000);
    });
});
genratePass();
