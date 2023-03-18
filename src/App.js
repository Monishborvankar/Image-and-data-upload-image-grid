import logo from './logo.svg';
import './App.css';
import DOata  from './DOata';
import { useState } from 'react';
import { storage } from './firebase';
import { dataref } from './firebase'
import  React from 'react';


function App() {
  
  const [nama,SetNama] = useState('')
  const [loca, SetLoca,] = useState('')
  const [adr,SetAdr] = useState('')
  const [bhk,SetBhk] = useState('')
  const [rent,SetRent] = useState('')
  const [dis,SetDis] = useState('')
  const [image ,setImage] = useState('');
  const [image2 ,setImage2] = useState('');
  const [image3 ,setImage3] = useState('');
  const [image4 ,setImage4] = useState('');
  const [Url , setUrl] = useState('');
  const [Url2 , setUrl2] = useState('');
  const [Url3 , setUrl3] = useState('');
  const [Url4 , setUrl4] = useState('');
  

function myFunction (imgs) {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
  
  const upload = () =>{
    if(image == null)
    return;
    setUrl("gettingg urls...")
      // first image
      storage.ref('/images/'+image.name).put(image)
    // .on("state_changed", alert("success"), alert , () => {

    storage.ref("images").child(image.name).getDownloadURL()
    .then((url) =>{
      // seconnd image
      storage.ref('/images/'+image2.name).put(image2)
    // .on("state_changed", alert("success"), alert , () => {

    storage.ref("images").child(image2.name).getDownloadURL()
    .then((url2) =>{
      
     //third image
     storage.ref('/images/'+image3.name).put(image3)
    //  .on("state_changed", alert("success"), alert , () => {
 
     storage.ref("images").child(image3.name).getDownloadURL()
     .then((url3) =>{

      //forth image
      storage.ref('/images/'+image4.name).put(image4)
     .on("state_changed", alert("Data is uploaded successfuly"), alert , () => {
 
     storage.ref("images").child(image4.name).getDownloadURL()
     .then((url4) =>{

      dataref.ref("user").push().set({
        nama: nama,
        loca: loca,
        adr: adr,
        bhk : bhk,
        rent : rent,
        dis : dis,
        url : url,
        url2: url2,
        url3 : url3,
        url4 : url4,
      }).catch(alert);

      setUrl(url);
      setUrl2(url2);
      setUrl3(url3);
      setUrl4(url4);
    })
  // })
})
// })
});
    // });
})
});
}
  return (
   
    <div className="App">
   
    <input value={nama} onChange={(e) => {SetNama(e.target.value)}}></input>
            <br/>
            <input value={loca} onChange={(e) => {SetLoca(e.target.value)}}></input>
            <br/>
            <input value={adr} onChange={(e) => {SetAdr(e.target.value)}}></input>
            <br/>
            <input value={bhk} onChange={(e) => {SetBhk(e.target.value)}}></input>
            <br/>
            <input value={rent} onChange={(e) => {SetRent(e.target.value)}}></input>
            <br/>
            <input value={dis} onChange={(e) => {SetDis(e.target.value)}}></input>
            <br/>
       

    <input type="file" onChange={(e) => {setImage2(e.target.files[0])
    }}></input>
    <br/>
    <input type="file" onChange={(e) => {setImage(e.target.files[0])
    }}></input>
    <br/>
    <input type="file" onChange={(e) => {setImage3(e.target.files[0])
    }}></input>
    <br/>
     <input type="file" onChange={(e) => {setImage4(e.target.files[0])
    }}></input>
    <br/>
    <button onClick={upload}> upload</button>
    <br/>
    <p><a href={Url}> {Url}</a></p>
    <p><a href={Url2}> {Url2}</a></p>
    <p><a href={Url3}> {Url3}</a></p>
    <p><a href={Url4}> {Url4}</a></p>



    <div style={{textAlign:"center"}}>
  <h2>Tabbed Image Gallery</h2>
  <p>Click on the images below:</p>
</div>
<div className="container">
  {/* <span onclick="this.parentElement.style.display='none'" className="closebtn">&times;</span> */}
  <img id="expandedImg" style={{width:"100%" }}/>
  <div id="imgtext"></div>
</div>

<div className="row">
  <div className="column">
    <img src="https://firebasestorage.googleapis.com/v0/b/fir-6485e.appspot.com/o/images%2Fzooor.png?alt=media&token=cde9e3c9-4e31-4cee-aac0-1e7a8c646577" alt="Nature" style={{width:"100%" }} onload={myFunction(this)} onclick={myFunction(this)}/>
  </div>
  <div className="column">
    <img src="https://firebasestorage.googleapis.com/v0/b/fir-6485e.appspot.com/o/images%2Fanime.jpg?alt=media&token=79248bb9-9944-4b13-8455-40abf0fce50c" alt="Snow" style={{width:"100%" }} onload={myFunction(this)} />
  </div>
  <div className="column">
    <img src="https://firebasestorage.googleapis.com/v0/b/fir-6485e.appspot.com/o/images%2Fzoro.png?alt=media&token=d31e89af-1071-4ca8-9a8c-41eaf3f6c66a" alt="Mountains" style={{width:"100%" }} onload={myFunction(this)} />
  </div>
  <div className="column">
    <img src="https://firebasestorage.googleapis.com/v0/b/fir-6485e.appspot.com/o/images%2Fop.png?alt=media&token=ba3c4fac-cbb5-41cd-a7d6-e7dee2c729e1" alt="Lights"style={{width:"100%" }}  onload={myFunction(this)}/>
  </div>
</div>
    </div>
  

  
  );
}

export default App;
