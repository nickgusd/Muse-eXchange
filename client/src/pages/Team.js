import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'

const team = ["nickgusd","juhee-k","Dscroggins123","rbraun04","edwardreyes29"];

const styles ={
  // textDecoration: "none",
  fontWeight: "bold",
  color: "black"
}

function GitHubUser({login}) {
  const [data, setData] = useState(null);
  // useEffect will fetch from url
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json()) // convert data response to json
      .then(setData) // call setData function -> call function with new value of data -> passing in the function
      .catch(console.error);
  }, []);

  if(data) { // if we have some data
    return (
      <>
        <Col>
          <div className="text-center">
            <a href={data.html_url} target="_blank" style={styles}>
              <Image src={data.avatar_url} roundedCircle width={200}/>
            </a>
            <h3 style={{color: "white"}}>{data.login}</h3>
            <p>{data.bio}</p>
            <div>
              <a href={data.html_url} target="_blank" style={styles}>
                GitHub <img className="mb-1" src="https://raw.githubusercontent.com/edwardreyes29/edwardreyes29.github.io/85326db4462a0c61c3e45988cdc77e2666406e66/assets/icons/github.svg"/>
              </a>
            </div>
            <a href={data.blog} target="_blank">Portfolio</a>
          </div> 
        </Col>
      </>
    )
  }
  return null;
}

function Team(props) {
  console.log(props.user)
  return (
    <Container fluid className="mt-4">
      <Jumbotron style={{backgroundImage: `url("https://i.imgur.com/ClmgbAV.jpg")`}}>
        <h1 style={{color: "white"}} className="font-weight-bold">Meet the Development Team!</h1>
      </Jumbotron>
      <Row>
        {team.map(member => 
          <GitHubUser login={member}/>
        )}
      </Row>
    </Container>
    
  )
}
export default Team;