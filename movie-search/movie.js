let arr=[];
let btn1=document.getElementById('adding');
let btn2=document.getElementById('watch');
btn1.addEventListener("click",addmovie);
function addmovie()
{
    const moviename=document.getElementById('moviename').value.trim();
    if(moviename=='')
        alert("movie name required");
    else if(arr.includes(moviename))
        alert("the movie already exists!");
    else{
        arr.push(moviename);
        console.log(moviename+" is successfully added");
        document.getElementById('moviename').value='';
    }
}
btn2.addEventListener("click",searchmovie);
function searchmovie()
{
    const watchmovie=document.getElementById('watchmovie').value;
    if(watchmovie=='')
        alert("enter the starting letter");
    else{
        displaymovie();
    }
}
function displaymovie()
{
    const watchmovie=document.getElementById('watchmovie').value;
    const movielist=document.getElementById('movielist');
     const found=arr.filter(movie=>movie.startsWith(watchmovie));
         if(found.length>0)
         {
            let ul=document.createElement("ul");
            found.forEach(movie=>{
                   let li=document.createElement("li");
                   li.textContent=movie;
            ul.appendChild(li);
            });
            movielist.appendChild(ul);
              movielist.style.display="inline-block";
         }
         else
         {
             alert("movie not found!");
             movielist.style.display="none";
         }
        
}