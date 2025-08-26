import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsHatch - Top Headlines</h2>
        <div className='row'>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
            <div className='col-md-3'>
                <NewItem title="My Title" description="My Description"/>
            </div>
        </div>
    </div>
    )
  }
}

export default News