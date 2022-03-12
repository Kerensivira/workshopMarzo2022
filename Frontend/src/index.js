// GET ALL
axios
  .get(`https://workshopdev.herokuapp.com/api`)
  .then((res) => {
    {
      const filter = (name) => {
        let result = [];
        res.data.forEach((element) => {
          if (element.name.includes(name)) {
            result.push(element);
          }
        });
        return result;
      };
      const allImages = () =>{
          let result = [];
          res.data.forEach(element => {
              if(element.hasOwnProperty(`price`)){
                result.push(element.imgUrl)
              }
          });
          return result
      }
      const allItems = () => {
          let result = [];
        res.data.forEach(element => {
            if(element.id===1||element.id===5||element.id===8||element.id===11){
                result.push(element);
            }
        });
        return result
      }
      let imagenes = allImages();
      //Filters
      let items = [
        `Crown Sweatshirt`,
        `fresh black tie-dye hoodie`,
        `fresh stripe sweater`,
        `fresh white coat`,
      ];
      let todos = allItems();
      todos.forEach(element => {
          const { imgUrl, name, price } = element;
          let html = document.querySelector('#container_CARDS');
          html.innerHTML+=`
          <div class="card" style="width: 18rem;">
            <img src="${imgUrl}"
              class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="price"> ${price} USD </p>
                <a href="#" class="btn btn-warning">Comprar</a>
            </div>
          </div>
          `
      });

      console.log(todos);

    }
  })
  .catch((err) => console.log("hubo un error", err));


