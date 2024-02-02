/* eslint-disable react/prop-types */

export default function Text({type,className,children}) {
  let styleClass=" ";
  if(type==="title"){
    styleClass=` title `
  }
  if(type==="text"){
    styleClass===" text "
  }
  return (
    <>
        <div className={` ${className} ${styleClass}`}>
            {children}
        </div>
    </>
  )
}
