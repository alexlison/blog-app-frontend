import React from 'react'

const CreatePost = () => {
  return (
    <div>
      <div className="container">
        <h4 className="m-4 text-center">Post a Message</h4>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post Message</label>
                <textarea name="" id="" className="input-control"></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost