const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=64882efd57be44d49fdaa8098c97fc40'


const ulForHeading = document.getElementsByClassName('news-headings')[0]

const fetchData = fetch(url).then((response)=>{
        return response.json()
})

let  newsArray;
fetchData.then((data)=>{
    return data.articles
})  
.then((newss)=>{
    console.log(Array.from(newss).forEach((element)=>{
           let liItem = document.createElement('li')
           liItem.textContent = element.title
            ulForHeading.appendChild(liItem)
    }))
})
