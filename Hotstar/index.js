function slideShow() {
    const movieData=[
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/2465/1000172465/1000172465-h",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/242/1310242-h-fbc62635a3a0",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2694/1082694-h-026122fa9b81",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7116/517116-h"      
        ]

    let i=0;
    let div=document.getElementById("slider");
    let img = document.createElement("img");
    img.src=movieData[0];
    div.append(img);
    i = i + 1;
    setInterval(function () {
        if(i == 4){
            i=0;
        }
        img.src = movieData[i];
        i = i + 1;
        div.append(img);
    },2000);
}
slideShow();


const movies = [
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9120/1329120-v-9e795ba36f30",
      name: "CUTTPUTLLI",
      release_date:2022,
      IMDB_rating: 8,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1213/871213-v",
      name: "ARTIMUS FOWL",
      release_date:2020,
      IMDB_rating: 7,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5517/675517-v",
      name: "TRON",
      release_date:2010,
      IMDB_rating: 8.5,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4310/674310-v",
      name: "PRINCE OF PERSIA",
      release_date:2010,
      IMDB_rating: 8,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5908/1075908-v-74780cbd6355",
      name: "JUNGLE CRUISE",
      release_date:2021,
      IMDB_rating: 7,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5559/675559-v",
      name: "THOR: RAGNAROK",
      release_date:2017,
      IMDB_rating: 9,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3150/813150-v",
      name: "FORD v FERRARI",
      release_date:2019,
      IMDB_rating: 9.5,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3676/1313676-v-718f7e304c7b",
      name: "I AM GROOT",
      release_date:2022,
      IMDB_rating: 8.5,
    },
    {
      image_url:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9946/1279946-v-e840df4196c6",
      name: "DOCTOR STRANGE",
      release_date:2022,
      IMDB_rating: 8,
    }
  ];
localStorage.setItem("movies",JSON.stringify(movies));

let data = JSON.parse(localStorage.getItem("movies"));

function appendMovies(){
    let data_div = document.getElementById("container") || document.getElementById("movies");
    data_div.id="movies";
    data_div.innerHTML = null;

    data.forEach(function (el){
        let div = document.createElement("div");
        let name = document.createElement("p");
        name.innerHTML = `Name: ${el.name}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating ${el.IMDB_rating}`;

        let year = document.createElement("p");
        year.innerHTML = `Year ${el.release_date}`

        let img = document.createElement("img");
        img.id="poster";
        img.src = el.image_url;
        div.append(img, name, rating, year);
        data_div.append(div);
    })
}


let mypromise=new Promise(function(resolve,reject){

    setTimeout(function(){
        let data = movies;
        if(data != null){
            resolve(data)
        }else{
            reject(`Issue with server`)
        }

    },1000);
});

async function main(){
    try{
        let response = await mypromise
        appendMovies(response)
    }
    catch(error){
        console.log("error:",error)
    }

}
main();

function sortLH(){
    let newData = JSON.parse(localStorage.getItem("movies"));
    newData = newData.sort((a, b) => a.IMDB_rating - b.IMDB_rating);
    console.log(newData);
    appendMovies(arr[0]);
}
function sortHL(){
    let data = JSON.parse(localStorage.getItem("movies"));
    data = data.sort((a, b) => b.IMDB_rating - a.IMDB_rating);
    appendMovies(data);
}
