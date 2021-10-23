let newsAccordian = document.getElementById('containerNews');

let source = 'the-times-of-india';
let apiKey = '35f8498746684954afcc7780fd86323c';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?lang=en&country=in&q=sports&token=be3d5b0e883f00ffabb233f6f7032716`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        let newsHtml = '';

        articles.forEach(element => {
            //console.log(articles[element]);
            let news = `
            <div class="newsBox">
                        <img src="${element["image"]}" alt="image">
                        <div class="author">
                            <div class="time">2021-10-23T03:34:13Z</div>
                            <a href="${element["source"]["url"]}" "target="_blank">${element["source"]["name"]}</a>
                        </div>
                        <div class="title">${element["title"]}</div>
                        <div class="description">
                            <p>${element["content"]} ...<a href="${element["url"]}" target="_blank">read more</a></p>
                        </div>
                    </div>`;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

// <img src="" alt"there is img">


/*
<div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    
                    <div class="accordion-body"></div>
                </div>
            </div>
*/