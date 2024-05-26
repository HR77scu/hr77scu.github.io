document.addEventListener('DOMContentLoaded', function() {
    // JSON data
    const data = [
        {
            "image": "img/1.png",
            "text": "WEb Pena kartini"
        },
        {
            "image": "img/2.png",
            "text": "System Loundry"
        },
        {
            "image": "img/3.png",
            "text": "SIM carting mobil"
        },
        {
            "image": "img/4.png",
            "text": "project Point of sales"
        },
        {
            "image": "img/5.png",
            "text": "Web desa jugo"
        },
        {
            "image": "img/6.png",
            "text": "PPDB Sekolah"
        }
    ];

    // Insert portfolio items into the HTML
    const portfolioContainer = document.getElementById('portfolio-items');
    let portfolioHTML = '';

    data.forEach(item => {
        portfolioHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.text}">
                    <div class="card-body">
                        <p class="card-text">${item.text}</p>
                    </div>
                </div>
            </div>
        `;
    });

    portfolioContainer.innerHTML = portfolioHTML;
});