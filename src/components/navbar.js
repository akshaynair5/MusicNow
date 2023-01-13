import react from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Navbar(){
    const [searchbarvis,setsearchvis] = useState("hidden")
    const Search = () =>{
        setsearchvis("visible")
    }
    // const [songs,setSongs] = useState([]);
    //     const options = {
    //         method: 'GET',
    //         url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    //         params: {key: '484129036', locale: 'en-US'},
    //         headers: {
    //           'X-RapidAPI-Key': 'c83210c3fdmsh36782caf2862e4cp179581jsn5c571e58597e',
    //           'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    //         }
    //       };
          
    //       axios.request(options).then(function (response) {
    //         //   console.log(response.data.tracks)

    //           setSongs((response.data.tracks).json)
    //           console.log(songs)

    //       }).catch(function (error) {
    //           console.error(error);
    //       });
    return(
        <div className='hero'>
        {/* code for sidebar */}
            <div className='navbar'>
                <div className='inputs'>
                    <input value="Home" type="button"></input>
                    <input value="Search" type="button" onClick={()=>Search()}></input>
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
                <div className='searchbox' >
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{position:"absolute",top:"40%",width:"60%",left:"20%",height:"20%",fontSize:"20px",visibility:searchbarvis}}/>
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