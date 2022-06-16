console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded',()=>{
    dogsUrl();
    urlBreeds();
  })

//challenge 1
function dogsUrl(){
   fetch (imgUrl)
   .then (response => response.json())
   .then((data) => {
    data.message.forEach(dog=> {
        const contain = document.getElementById('dog-image-container');
        const img = document.createElement('img'); 
        img.setAttribute("src",dog )
        contain.appendChild(img);
    });
   })

  }




//challenge 2 ,3

function urlBreeds(){
const renderImages=(images) => {
    const ul = document.getElementById('dog-breeds');
    loadAllBreeds(results,ul);
    document.getElementById('breed-dropdown').addEventListener("change",()=>{
        let dropdownValue = document.getElementById('breed-dropdown').value;
        let filterDog = result.filter((array)=>{
            return array.startsWith(dropdownValue);
         })
         console.log(filterDog);
         loadAllBreeds(filterDog,ul);

    })
   };


const fetchImages = async ()=> {
    const response = await fetch(breedUrl);
    const data = await response.json ()
    console.log (data)
    const results = data.results;

    results.map((images) => renderImages(images));
    console.log (results);

}

fetchImages();

}
