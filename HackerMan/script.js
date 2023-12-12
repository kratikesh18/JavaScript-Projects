let messages = [
    'Initializing Hacktool ...',
    "Connecting to server1 ....",
    "Connection successfull ...",
    "Fetching data ....",
    "Tried 300 passwords .....",
    "Connecting to server 2 ......",
    "Connection sucessfull ....",
    "Tried 400 passwords ...",
    'Hacking successful ...'
]

const sleep = async(seconds)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(true)
        }, seconds * 1000)
    })
}

let element = document.getElementsByClassName('mainContainer')[0];
const funcMain = async(messages)=>{
    await sleep(3)
    element.innerHTML = element.innerHTML + messages + '<br>'
    // console.log(messages)
}

const mainFun = async() =>{
    for(let i = 0 ;i<messages.length ; i++){
       await funcMain(messages[i])
    }
}
mainFun()