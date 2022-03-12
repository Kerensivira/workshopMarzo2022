axios.get('https://workshopdev.herokuapp.com/api')
    .then(res => {
        const filter = (name) => {
            let result = [];
            res.data.forEach((element) => {
              if (element.name.includes(name)) {
                result.push(element);
              }
            });
            return result;
        };
        const data = res.data;
        let item = data.find(element => element.id === parseInt(localStorage.getItem('item')));
        let images = data.filter(element => element.name.includes(item.name));

        let smallImages = document.querySelector('.small-img-container');
        let bigImages = document.querySelector('.big-img-container');
        let infoContainer = document.querySelector('.info-container');

        images.forEach(element => {
            smallImages.innerHTML+=`<img width="50px" src="${element.imgUrl}" alt="">`;
            bigImages.innerHTML+=`<img width="450px" src="${element.imgUrl}" alt="">`;
        });

        infoContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 id="title" style="font-size: 45px;" class="card-title">${item.name}</h5>
            <p class="card-text" style="font-size: 25px;" >$ ${item.price} USD</p>
            <a href="#" class="btn btn-primary">ADD TO CART</a>
            <a href="#" class="btn btn-dark">BUY IT NOW</a>
            </div>
        </div>
        `
        console.log(item,images);
    })