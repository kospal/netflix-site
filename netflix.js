const div_originals = document.getElementById("originals");
      const div_trending = document.getElementById("trending");
      const div_popular = document.getElementById("popular");
      const video = document.getElementById("videos");
      const videos11 = document.getElementById("videos11")
      const URL =
        "https://api.themoviedb.org/3/discover/movie?api_key=0e9a66f6cc0cd5043641b3a6f97726d2"
      const URL2 =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=0e9a66f6cc0cd5043641b3a6f97726d2"
      const URL3 =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0e9a66f6cc0cd5043641b3a6f97726d2"
      const standar_image = "https://image.tmdb.org/t/p/w500"
      
        

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTlhNjZmNmNjMGNkNTA0MzY0MWIzYTZmOTc3MjZkMiIsInN1YiI6IjY0NjAxM2Y3ZGJiYjQyMDBmYzg3MjJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bjFyAYEo78B_dmBlrUUUntCUjd7FBj_zSfI3oB4Uzb0",
        },
      }

      const originals = () =>
        fetch(`${URL}`, options)
          .then((response) => response.json())
          .then((json) => {
            const movie = json
            call_originals(movie);
  
            
          })
          .catch((error) => {
            console.log(error)
          })

      originals()

      function call_originals(movie) {
        const array1 = Object.values(movie.results)
        // console.log(typeof(array1));

        const original_res = () => {
          array1.forEach((value, index) => {
            
            // div_originals.innerHTML+=`<p>${JSON. stringify(value)}</p>
            div_originals.innerHTML += `<div class = "div-originals" id ="${movie.results[index].id}">
            <img 
            id= "imchange" class = "img-originals" onclick = "videos(${movie.results[index].id})" //εμφανίζει το trailer!!!!!   
            src="${standar_image}${movie.results[index].poster_path}" ></div>`

           $(".div-originals").on("click", function() {
           
              $(".videos11").show();
              $(".xbutton").show();
              $("#videos11")[0].scrollIntoView(); //για να πηγαινει η οθονη στα βιντεο
            });
            
          
          }) /*onclick = "${get_if(movie,index)}" δεν ειχε bkeys ιδιοτητα για τα trailer*/ 

          

          $(".img-originals").mouseover(function () {
            this.style.width = "180px"
            this.style.height = "260px"
          })

          $(".img-originals").mouseout(function () {
            this.style.width = "170px"
            this.style.height = "250px"
          })
        }

       
        original_res();
        
      }

      
      //////////////////////////////////////////////// Originals

      const trending_now = () =>
        fetch(`${URL3}`, options)
          .then((response) => response.json())
          .then((json) => {
            const movie = json
            call_trending(movie)
          })
          .catch((error) => {
            console.log(error)
          })

      trending_now()

      function call_trending(movie) {
        const array2 = Object.values(movie.results)

        const trending_res = () => {
          array2.forEach((value, index) => {
            // div_originals.innerHTML+=`<p>${JSON. stringify(value)}</p>
            div_trending.innerHTML += `<div class = "div-trending" id ="${movie.results[index].id}"><img class = "img-trending" onclick = "videos(${movie.results[index].id})" src="${standar_image}${movie.results[index].backdrop_path}"></div>`
          })

          $(".div-trending").on("click", function() {
           
            $(".videos11").show();
            $(".xbutton").show();
            $("#videos11")[0].scrollIntoView();
           
          });

          $(".img-trending").mouseover(function () {
            this.style.width = "190px"
            this.style.height = "160px"
          })

          $(".img-trending").mouseout(function () {
            this.style.width = "170px"
            this.style.height = "150px"
          })
        }

        trending_res();
      }

      ////////////////////////////////////////trending

      const popular_now = () =>
        fetch(`${URL2}`, options)
          .then((response) => response.json())
          .then((json) => {
            const movies = json
            call_popular(movies)
          })
          .catch((error) => {
            console.log(error)
          })

      popular_now();

      function call_popular(movies) {
        const array3 = Object.values(movies.results)

        const popular_res = () => {
          array3.forEach((value, index) => {
            // div_originals.innerHTML+=`<p>${JSON. stringify(value)}</p>
            div_popular.innerHTML += `<div class = "div-popular" id ="${movies.results[index].id}"><img class = "img-popular" onclick = "videos(${movies.results[index].id})" src="${standar_image}${movies.results[index].backdrop_path}"></div>`
          })

          $(".div-popular").on("click", function() {
           
            $(".videos11").show();
            $(".xbutton").show();
            $("#videos11")[0].scrollIntoView();
           
          });

          $(".img-popular").mouseover(function () {
            this.style.width = "190px"
            this.style.height = "160px"
          })

          $(".img-popular").mouseout(function () {
            this.style.width = "170px"
            this.style.height = "150px"
          })
        }

        popular_res();
      }

     const videos = (movie_id) =>{

      fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=0e9a66f6cc0cd5043641b3a6f97726d2&language=en-US`, options)
      .then((response) => response.json())
      .then((json) => {
        
        const array4 =  Object.values(json.results);
        
        
       // array4.forEach((value, index) => {
         
          // div_originals.innerHTML+=`<p>${JSON. stringify(value)}</p>
          videos11.innerHTML = `<div><button id = "xbutton" class="xbutton">X</button><iframe class="if-div" target="_blank" src='${'https://www.youtube.com/embed/'}${json.results[0].key}'>youtube</iframe></div>`
          console.log(json);
          
          $(".xbutton").on("click", function() {
           
            $(".videos11").css("display","none");
            $('.if-div').attr('src',''); //για να κλεινει το βιντεο
          });


       // })
      })
      .catch((error) => {
        console.log(error)
      })
    }

    
        
    
       $(".play-btn").on("click", function() {
           
        videos11.innerHTML =`<div><button id = "xbutton" class="xbutton">X</button> <iframe class="if-div" target="_blank" src='https://www.youtube.com/embed/_uza_APFdFo'></iframe></div>`
         
            $(".videos11").show();
            $(".xbutton").show();
            $("#videos11")[0].scrollIntoView();
            
            $(".xbutton").on("click", function() {
                $(".videos11").css("display","none");
                $('.if-div').attr('src',''); //για να κλεινει
          });
      });
  

   
/////////////////////////////////////////////// scrollbar originals      
      $(".bi-arrow-left-circle-fill").on( "click",function () {
        
        let leftPos = $(".originals").scrollLeft();
        $(".originals").animate({
        scrollLeft: leftPos - 500
        }, 100);
      });


      $(".bi-arrow-right-circle-fill").on( "click",function () {
        
        let leftPos = $(".originals").scrollLeft();
        $(".originals").animate({
        scrollLeft: leftPos + 500
        }, 100);
      });
//////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////// scrollbar trending    
      $(".arrow-left-circle-fill").on( "click",function () {
              
        let leftPos = $(".trending").scrollLeft();
        $(".trending").animate({
        scrollLeft: leftPos - 500
        }, 100);
      });


      $(".arrow-right-circle-fill").on( "click",function () {
        
        let leftPos = $(".trending").scrollLeft();
        $(".trending").animate({
        scrollLeft: leftPos + 500
        }, 100);
      });
//////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////// scrollbar popular   
$(".rrow-left-circle-fill").on( "click",function () {
              
  let leftPos = $(".popular").scrollLeft();
  $(".popular").animate({
  scrollLeft: leftPos - 500
  }, 100);
});


$(".rrow-right-circle-fill").on( "click",function () {
  
  let leftPos = $(".popular").scrollLeft();
  $(".popular").animate({
  scrollLeft: leftPos + 500
  }, 100);
});
//////////////////////////////////////////////////////////////////////////////

if (window.innerWidth > 768) { // Adjust the screen width condition as needed
  $("#videos11")[0].scrollIntoView();
}


