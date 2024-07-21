import React from "react";
type Props = {
    scroll?:boolean
  };

const BackToTop:React.FC<Props> = ({scroll}) => {
  return (
    <>
    {scroll && (
        <a className="progress-wrap active-progress" href="#top">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </a>
    )}
</>
)
};

export default BackToTop