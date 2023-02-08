function slideshow(){
    let movieData=[
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/2465/1000172465/1000172465-h",
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/242/1310242-h-fbc62635a3a0",
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2694/1082694-h-026122fa9b81",
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7116/517116-h"      
    ]
    
    let div = document.getElementById("slideshow");
    div.innerHTML=null;

    let i=0;
    let img = document.createElement("img");
    img.src=movieData[0];
            
    div.append(img);
    i++;

    setInterval(function(){
        if(i==4){
            i = 0;
        }
    img.src=movieData[i];
    div.append(img);
    i = i + 1;

    },3000);
    
}
slideshow()

async function searchMovie(){
    try{
        let query=document.getElementById("query").value;
        let res=await fetch(`http://www.omdbapi.com/?apikey=fa678e7&s=${query}`);
        let data = await res.json();
        console.log("data:",data);
        getMovieData(data.Search);
    }
    catch(err){
        console.log("err:",err);
    }
}
function getMovieData(data){
    let data_div=document.getElementById("container");
    data_div.innerHTML=null;
    if(data===undefined){
        return false;
    }
    data.forEach(function(el){
        let div=document.createElement("div");

        let name=document.createElement("p");
        name.innerText= `Title: ${el.Title}`;

        let year=document.createElement("p");
        year.innerText= ` Year: ${el.Year}`

        let poster=document.createElement("img");
        poster.src=el.Poster;
        
        div.append(poster,name,year);
        data_div.append(div);
    })
}
let id;
function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        func()
    },delay);


}
