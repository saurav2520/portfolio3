import React from 'react'

export default function Education() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center" id='education'>
  <div className="list-group list-group-checkable d-grid gap-2 border-0">
   
    <label
      className="list-group-item rounded-3 py-3"
      htmlFor="listGroupCheckableRadios1"
    >
     B.Tech
      <span className="d-block small opacity-50">
      Gandhi Engineering College , Bhubaneswar
      </span>
    </label>
    
    <label
      className="list-group-item rounded-3 py-3"
      htmlFor="listGroupCheckableRadios2"
    >
      Intermediate
      <span className="d-block small opacity-50">
        T.S. College , Bihar
      </span>
    </label>
    
    <label
      className="list-group-item rounded-3 py-3"
      htmlFor="listGroupCheckableRadios3"
    >
      Matriculation
      <span className="d-block small opacity-50">
        +2 Inter School , Bihar
      </span>
    </label>
    
    
  </div>
</div>


    </div>
  )
}
