import React, { Component } from 'react';
import PurchaseBtn from "../components/PurchaseBtn"
import Container from '../components/Container';
import ProfilePic from '../components/ProfilePic';
import API from '../utils/API';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Favorite from "@material-ui/icons/Favorite";
import EventIcon from '@material-ui/icons/Event';

import GridContainer from "../components/Profile/Grid/GridContainer";
import GridItem from "../components/Profile/Grid/GridItem";
import NavPills from "../components/Profile/NavPills/NavPills";

import { InlineWidget } from "react-calendly"
// import Calendly from "../components/Calendly/Calendly"

/** ===== Music Player ===== */
import MusicPlayer from '../components/Music/MusicPlayer';

class Profile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    profilePic: "",
    songs: [],
    songInfo: [],
    tutorials:[],
    tutorialInfo:[]
  }
  componentDidMount() {
    const username = this.props.match.params.username;
    document.title = `Music eXchange | ${username}`;
    this.setState({...this.state, username: username, test: "test" });
    console.log(username);
    this.getUserInfo(username);
    
  }

  componentDidUpdate(_, prevState) {
    const username = this.props.match.params.username
    if(prevState.username !== username) {
      return API.getUserByUsername(username).then(res => {
        console.log(res.data.profile.profilePic)
      this.setState({...this.state, 
      id: res.data._id,
      songs: res.data.profile.songs,
      tutorials: res.data.profile.tutorials,
      email: res.data.email,
      profilePic: res.data.profile.profilePic,
      username: res.data.username,
    })
    // this.getSongsByQuery(this.state.id)
  }).then(() =>{
    if(prevState.songInfo === this.state.songInfo) {
      this.state.songs.map(songid => {
        API.getSongsByQuery(songid).then(
          (res) => {
            this.setState({...this.state, songsInfo: [...this.state.songInfo, res.data]})
            this.setState({...this.state, songs: this.state.songInfo})
          }
        )
      })
      
    }
    

  }
  )
    
  }
}


  getUserInfo = username => {
    API.getUserByUsername(username)
      .then(res =>
        this.setState(
          { ...this.state,
            id: res.data._id,
            songs: res.data.profile.songs,
            tutorials: res.data.profile.tutorials,
            email: res.data.email,
            profilePic: res.data.profile.profilePic
          }
        ))
        .then(() => {
          this.state.songs.map(songid => {
            this.getSongsByQuery(songid)
          })
        }).then(() => {
          this.state.tutorials.map(tutorialid =>{
            this.getTutorialsByQuery(tutorialid)
          })
        })
      .catch(err => console.log(err));
  }

 

getSongsByQuery = id => {
  
  
  API.getSongsByQuery(id)
  .then(res => {
    this.setState({...this.state, songInfo: [...this.state.songInfo, res.data[0]] })
    this.setState({...this.state, songs: this.state.songInfo})
  }
   

  
   )
   .catch(err => console.log(err))
}
getTutorialsByQuery = id => {
  API.getTutorialsByQuery(id)
  .then(res => {
    this.setState({...this.state, tutorialInfo: [...this.state.tutorialInfo, res.data[0]] })
    this.setState({...this.state, tutorials: this.state.tutorialInfo})
  })
   .catch(err => console.log(err))
}

  render() {
    console.log(this.state.tutorialsInfo)
    if(!this.state.songs) return <h1>Loading...</h1>
    if(!this.state.tutorials) return <h1>Loading...</h1>
    return (<Container fluid>
      {/* {console.log(this.state)} */}
      
    <main className="profile-page">
    
    <section className="relative block" style={{ height: "400px" }}>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_1280.jpg')"
            }}
      >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-50 bg-black"
      ></span>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
        >
      <polygon
        className="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
      </svg>
      </div>
    </section>

    <section className="relative py-10 bg-gray-300">
    <div className="container mx-auto" style={{ marginTop: "0px" }}>
      
      <div className="flex flex-wrap justify-center">
      <ProfilePic 
      profilePic={this.state.profilePic}
      />       
      </div>
      
      <div className="text-center mt-3">            
        <h3 className="text-4xl font-semibold leading-normal text-gray-800">{this.state.username}'s Song List</h3>            
        <div className="text-sm leading-normal text-gray-500 font-bold uppercase">
          <h5>Contact: {this.state.email}</h5>
        </div>
        
          <div className="mt-4 text-gray-700">
          {/* <p>No songs</p> */}
          <a href="#" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1">+ Add Song</a>
          {this.state.songs 
          ? <div>            
            </div>
          : <div className="text-gray-700">
            <p>Here's a list</p>
            </div>}
          </div>
      

      <div className="mt-10 py-2 border-t border-gray-300 text-center"></div>
      <div className="flex flex-wrap justify-center" style={{ marginBottom: "5%" }}>
      
      <GridItem xs={12} sm={12} md={8}>
      <NavPills
        alignCenter
        color="primary"
        tabs={[
        {
        tabButton: "Songs",
        tabIcon: PlayCircleOutlineIcon,
        tabContent: (
        <GridContainer justify="center">
        <GridItem>
        <ul class="list-group" style={{ borderRadius: "0px" }}>
        {this.state.songs.map((song)=>
        <li class="list-group-item d-flex justify-content-between"><span>{song.title}</span> <PurchaseBtn title={song.title} price={song.price} id={song._id}/></li>
        )}
        </ul>
        </GridItem>
        </GridContainer>
        )
        },
        {
        tabButton: "Tutorials",
        tabIcon: VideoLibraryIcon,
        tabContent: (
        <GridContainer justify="center">
        <GridItem>
        <ul class="list-group" style={{ borderRadius: "0px" }}>
        {this.state.tutorials.map((tutorial)=>
        <li class="list-group-item d-flex justify-content-between"><span>{tutorial.title}</span> <PurchaseBtn title={tutorial.title} price={tutorial.price} /></li>
        )}   
        </ul>
        </GridItem>
        </GridContainer>
        )
        },
        {
        tabButton: "Favorite",
        tabIcon: Favorite,
        tabContent: (
        <GridContainer justify="center">
        <GridItem>
          <MusicPlayer />
        </GridItem>
        </GridContainer>
        )
        },
        {
          tabButton: "Tutorial Session",
          tabIcon: EventIcon,
          tabContent: (
          <GridContainer justify="center">
          <GridItem>
          
          <InlineWidget
          color="#00a2ff"
          text="Request a Tutorial Session"
          textColor="#ffffff"
          url="https://calendly.com/museexchange2020"
          />
  
          </GridItem>
          </GridContainer>
          )
          }
        ]}
        />
        </GridItem>
          
        </div>
        
        </div>
        </div>
      </section>

      </main>
    </Container>)
  }
}
export default Profile;