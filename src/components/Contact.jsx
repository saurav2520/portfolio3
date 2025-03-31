import React from 'react'

export default function Contact() {
  return (
    <div>
      <>
  <div
    className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-m-5"
    tabIndex={-1}
    role="dialog"
    id="modalSignin"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Contact me</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body p-5 pt-0">
          <form className="">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control rounded-3"
                id="floatingInput"
                placeholder="name@example.com"
                style={{
                  backgroundImage: 'url("data:image/png',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: 100,
                  backgroundPosition: "97% center",
                  cursor: "auto"
                }}
                data-temp-mail-org={0}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            
            <button
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
             Send
            </button>
            <small className="text-body-secondary">
              I will reach out as soon as possible.
            </small>
            <hr className="my-4" />
            <h2 className="fs-5 fw-bold mb-3">Or visit my other handles</h2>
            <button
              className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
              type="submit"
            >
              <svg className="bi me-1" width={16} height={16}>
                <use xlinkHref="#twitter" />
              </svg>
              Twitter
            </button>
            <button
              className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
              type="submit"
            >
              <svg className="bi me-1" width={16} height={16}>
                <use xlinkHref="#facebook" />
              </svg>
              Facebook
            </button>
            <button
              className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
              type="submit"
            >
              <svg className="bi me-1" width={16} height={16}>
                <use xlinkHref="#github" />
              </svg>
              GitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</>

    </div>
  )
}
