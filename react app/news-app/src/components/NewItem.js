


import React, { Component } from 'react'

export class NewItem extends Component {

  render() {
    let {title, description, imgURL, NewsUrl} = this.props;
    return (
      <div><div className="card my-3" style={{width: "18rem"}}>
        <img src={imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={NewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More...</a>
        </div>
      </div>
    </div>
    )
  }
}

export default NewItem