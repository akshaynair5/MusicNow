import react from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Navbar(){
    const [searchbarvis,setSearchvis] = useState("hidden")
    const [searchfor,setSearchfor] = useState("")
    const [searchRes,setSearchRes] = useState("")
    const [searchImg,setSearchImg] = useState("")
    const SearchPop = () =>{
        if(searchbarvis == "hidden"){
            setSearchvis("visible")
        }
        else if(searchbarvis == "visible"){
            setSearchvis("hidden")
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
        }
    }
    return(
        <div className='hero'>
        {/* code for sidebar */}
            <div className='navbar'>
                <div className='inputs'>
                    <input value="Home" type="button"></input>
                    <input value="Search" type="button" onClick={()=>SearchPop()}></input>
                    <input value="Favorites" type="button"></input>
                    <input value="PlayLists" type="button" ></input>
                </div>
            </div>
            {/* <div className='content'>
                {
                    songs.tracks?.map((tracks)=>(
                            <div className='songCard'>
                                <image src={tracks.images.background}></image>
                            </div>
                    ))
                }
            </div> */}
            <div className='content'>
                <div className='searchbox' onChange={(e)=>{setSearchfor(e.target.value)}} onKeyUp={HandleEnterKeyPress}>
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{position:"absolute",top:"7%",width:"60%",left:"20%",height:"20%",fontSize:"20px",visibility:searchbarvis,TransitionEvent:'0.5s'}}/>
                    <div className='searchResultTab' style={{visibility:searchbarvis}}>
                        <div className='songCard' style={{backgroundColor:'white',padding:'1%'}}>
                            <img src={`${searchImg}`} style={{ width:'90%',height:'80%'}}></img>
                            <p>{searchRes}</p>
                        </div>
                    </div>
                </div>
                {/* <h2 className='headings'>New Releases</h2> */}
                <div className='latestsongs'>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                </div>
                <div className='playlistsongs'>
                {/* <h2 className='headings'>Featured PlayLists</h2> */}
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                    <div className='songCard'>
                        <img src="th.jpeg"></img>
                        <p>Song</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar