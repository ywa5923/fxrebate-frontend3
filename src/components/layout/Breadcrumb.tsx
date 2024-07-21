import React from 'react'

type Props={
    breadcrumbTitle?:string
}
const Breadcrumb:React.FC<Props> = ({ breadcrumbTitle }) => {
  return (
    <>
    <div className="inner-1 bg-13" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 m-auto">
                    <div className="inner-title text-center">
                        <p>{breadcrumbTitle}</p>
                        <h2>We’re making work meaningful for everyone, everywhere.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default Breadcrumb