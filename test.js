async function getACuteDogPhoto(){
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
} 
try {
  getACuteDogPhoto()
} catch (error) {
  console.log(error);
 }