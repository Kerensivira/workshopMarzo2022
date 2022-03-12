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
      let imagenes = allImages();

      imagenes.forEach(element => {
        
      });

      //Filters
      let items = [
        `Crown Sweatshirt`,
        `fresh black tie-dye hoodie`,
        `fresh stripe sweater`,
        `fresh white coat`,
      ];
      let primero = filter(items[0]);
      console.log(primero);
      console.log(imagenes);
    }
  })
  .catch((err) => console.log("hubo un error", err));




      //   let todos = res.data;
    //   console.log(todos);
      //   // Main Images
      //   let html = document.querySelector("#html");
      //   html.innerHTML = `
      //         <img src="${res.data[1].imgUrl}" alt="">
      //         <img src="${res.data[5].imgUrl}" alt="">
      //         <img src="${res.data[8].imgUrl}" alt="">
      //         <img src="${res.data[11].imgUrl}" alt="">
      //         `;
