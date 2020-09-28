import React from 'react';

const styles = {
  card: {
    width: "18rem"
  },
  image: {
    width: "100%"
  },
  container: {
    padding: "2px 16px"
  }
}


const Card = ({username, email}) => {
  return (<div className="col">
    <div className="card" style={styles.card}>
      <img className="card-img-top" src="https://i.redd.it/8osvgu0j8qp51.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <a href="api/users">{email}</a>
        <div>
          <a href={`/profile/${username}`} className="btn btn-success">See Profile</a>
        </div>
      </div>
    </div>
  </div>)
}

export default Card;