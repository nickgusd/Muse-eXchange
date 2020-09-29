import React, { Component } from 'react';
import Container from '../components/Container';
import ProfilePic from '../components/ProfilePic';
import API from '../utils/API';

class Profile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    profilePic: "",
    songs: [],

  }
  componentDidMount() {
    document.title = "Request Line | Songs";
    const username = this.props.match.params.username
    this.setState({ username: username });
    console.log(username);
    this.getUserInfo(username);
    
  }

  getUserInfo = username => {
    API.getUserInfo(username)
      .then(res =>
        this.setState(
          {
            id: res.data._id,
            songs: res.data.profile.songs,
            email: res.data.email,
            profilePic: res.data.profile.profilePic
          }
        ))
        .then(dbData => {
          console.log(this.state.id)
       this.getSongsByQuery(this.state.id)
        })
      .catch(err => console.log(err));
  }

 AddSongs = id => {
   API.AddSongs(id)
   .then(res => 
    
    console.log(res.data)
   
    )
    .catch(err => console.log(err))
 }

getSongsByQuery = id => {
  API.getSongsByQuery(id)
  .then(res => 
   
   console.log(res)
  
   )
   .catch(err => console.log(err))
}

  render() {
    return (<Container fluid>
    <main className="profile-page">

    <section className="relative block" style={{ height: "500px" }}>
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
    <section className="relative py-16 bg-gray-300">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
      <div className="px-6">
      <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
      <div className="relative">
      <ProfilePic 
              profilePic={this.state.profilePic}
      />
      </div>
      </div>
      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
        <div className="py-6 px-3 mt-32 sm:mt-0">
          <button
            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
          Add Songs
          </button>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-4 lg:order-1">
        <div className="flex justify-center py-4 lg:pt-4 pt-8">
        
        <div className="mr-4 p-3 text-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
          22
        </span>
        <span className="text-sm text-gray-500">
          Friends
        </span>
        </div>
        
        <div className="mr-4 p-3 text-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
        10
        </span>
        <span className="text-sm text-gray-500">
          Photos
        </span>
        </div>
        
        <div className="lg:mr-4 p-3 text-center">
        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
          89
        </span>
        <span className="text-sm text-gray-500">
          Comments
        </span>
        </div>
        
          </div>
        </div>
              
      </div>
      
      <div className="text-center mt-12">            
        <h1 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">{this.state.username}'s Song List</h1>            
      <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
        <h2>Contact: {this.state.email}</h2>
      </div>
      <div className="row mt-4">
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    <div className="col-8">
                    {this.state.songs 
                    ? <div>
                    <p>No songs</p>
                    <a href="#" className="btn btn-primary">+ Add Song</a>
                  </div>
                  : <div>
                  Here's a list
                  </div>}
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div></div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
 
      
      <div className="row mt-4">
        <div className="col-4">
          <ProfilePic 
              profilePic={this.state.profilePic}
            />
          <p>Id: {this.state.id}</p>
          <h1>{this.state.username}'s Song List</h1>
          <h2>Contact: {this.state.email}</h2>
        </div>
        <div className="col-8">
          {this.state.songs 
            ? <div>
                <p>No songs</p>
                <a href="#" className="btn btn-primary">+ Add Song</a>
              </div>
            : <div>
                Here's a list
              </div>}
              <div className="mt-4">
                <h4>Songs</h4>
                <hr className="my-4" />
              </div>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Song 1</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Song 2</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Song 3</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
              </ul>
              <div className="mt-4">
                <h4>Tutorials</h4>
                <hr className="my-4" />
              </div>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Tutorial 1</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Tutorial 2</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
                <li class="list-group-item d-flex justify-content-between">
                  <span className="mr-auto">Tutorial 3</span>
                  <a href="#" className="btn btn-secondary">Buy</a>
                </li> 
              </ul>
        </div>
      </div>
      
      </main>
    </Container>)
  }
}
export default Profile;