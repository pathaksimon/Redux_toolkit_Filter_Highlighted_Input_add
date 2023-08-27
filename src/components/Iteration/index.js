import './index.css'

const Iteration = props => {
  const {first2, third1} = props
  const {name1, id, isLiked} = first2
  const clicking = () => {
    third1(id)
  }

  const acess = () => {
    if (isLiked) {
      return 'orange'
    }
    return ''
  }

  return (
    <div className="lista">
      <li>{name1}</li>
      <button className={acess()} onClick={clicking}>
        Highlight
      </button>
    </div>
  )
}

export default Iteration
