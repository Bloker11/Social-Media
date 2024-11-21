

export default function Card({children, noPadding}) {

  let classes = "bg-white shadow-lg shadow-gray-200 rounded-2xl mb-4"

  if(!noPadding){
    classes += "p-4"
  }

  return (
    <div className={classes}>{children}</div>
  )
}