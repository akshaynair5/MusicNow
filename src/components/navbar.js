import react from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Navbar(){
    const [onLoadsongs,setOnLoadSongs] = useState([])
    const [searchbarvis,setSearchvis] = useState("hidden")
    const [searchfor,setSearchfor] = useState("")
    const [searchRes,setSearchRes] = useState("")
    const [searchImg,setSearchImg] = useState("")
    const [Favorites,setFavorites] = useState([])

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/charts/track',
            params: {locale: 'en-US', pageSize: '5', startFrom: '0'},
            headers: {
              'X-RapidAPI-Key': 'cd28ad8b44mshcc1effd9b5e2cdfp126aedjsn8167bffaf849',
              'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setOnLoadSongs(response.data.tracks)
            //   console.log(response.data.tracks);
          }).catch(function (error) {
              console.error(error);
          });

        // trending playlists being called


    },[])
    const SearchPop = () =>{
        if(searchbarvis == "hidden"){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
            setSearchvis("visible")
        }
        else if(searchbarvis == "visible"){
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
            setSearchvis("hidden")
            document.getElementById('srres').style.visibility = "hidden";
        }
    }
    const HandleEnterKeyPress = async (e) => {
        if(e.keyCode === 13){
              const options = {
                method: 'GET',
                url: 'https://spotify23.p.rapidapi.com/search/',
                params: {
                  q: `${searchfor}`,
                  type: 'multi',
                  offset: '0',
                  limit: '10',
                  numberOfTopResults: '5'
                },
                headers: {
                  'X-RapidAPI-Key': 'cd28ad8b44mshcc1effd9b5e2cdfp126aedjsn8167bffaf849',
                  'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                  setSearchImg(response.data.topResults.items[0].data.visuals.avatarImage.sources[0].url)
                  setSearchRes(response.data.topResults.items[0].data.profile.name)
                  console.log(response.data.topResults.items[0].data);
              }).catch(function (error) {
                  console.error(error);
              });
              document.getElementById('srres').style.visibility = "visible";
        }
    }
    const addToFavs = (i)=>{
        const s = onLoadsongs[i].title;
        const img = onLoadsongs[i].images.coverart;
        const newList = Favorites.concat({'name':s,'coverart':img});
        setFavorites(newList);
        alert(`${s} Added to favorites`);
    }
    const SearchFavs = () =>{
        const newList = Favorites.concat({'name':searchRes,'coverart':searchImg});
        setFavorites(newList);
    }
    const toFavourites = ()=>{
        window.scrollTo({
            top: 700,
            behavior: 'smooth',
        });
    }
    const toPlaylists = ()=>{
        window.scrollTo({
            top: 800,
            behavior: 'smooth',
        });
    }
    const toTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <div className='hero'>
        {/* code for sidebar */}
            <div className='navbar'>
                <div className='inputs'>
                    <input value="Home" type="button" onClick={()=>toTop()}></input>
                    <input value="Search" type="button" onClick={()=>SearchPop()}></input>
                    <input value="Favorites" type="button" onClick={()=>toFavourites()}></input>
                    <input value="PlayLists" type="button" onClick={()=>toPlaylists()}></input>
                </div>
            </div>
            <div className='content'>
                <div className='searchbox' onChange={(e)=>{setSearchfor(e.target.value)}} onKeyUp={HandleEnterKeyPress}>
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{position:"absolute",top:"7%",width:"60%",left:"20%",height:"20%",fontSize:"20px",visibility:searchbarvis,TransitionEvent:'0.5s'}}/>
                    <div className='searchResultTab' style={{visibility:searchbarvis}}>
                        <div className='songCard' id="srres" style={{backgroundColor:'white',padding:'1%',visibility:'hidden'}}>
                            <input className="AddFavs" type ="button" onClick={()=>{SearchFavs()}} value="★"></input>
                            <img src={`${searchImg}`} style={{ width:'90%',height:'80%'}}></img>
                            <p>{searchRes}</p>
                        </div>
                    </div>
                </div>
                {/* <h2 className='headings'>New Releases</h2> */}
                <div className='latestsongs'>
                    <h1 className='lsh'>New Releases</h1>
                    {
                        onLoadsongs.map((songs,i)=>(
                            <div className='songCard'>
                                <input className="AddFavs" type ="button" onClick={()=>{addToFavs(i)}} value="★"></input>
                                <img src={`${songs.images.coverart}`}></img>
                                <p>{songs.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='favouritesongs'>
                    <h1 className='lsh'>Your favorites</h1>       
                    {
                        Favorites.map((songs,i)=>(
                            <div className='songCard'>
                                <img src={`${songs.coverart}`}></img>
                                <p>{songs.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='Playlists'>
                    <h1 className='lsh'>Your PlayLists</h1>
                    <input className='create_playslist'></input> 
                </div>
            </div>
        </div>

    )
}

export default Navbar