import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import {submitting1, clicking1, clicking2} from '../../features/Action'
import Iteration from '../Iteration/index'

const Input = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const news1 = useSelector(state => state.First1.lista)
  const news2 = useSelector(state => state.First1)
  const changing = event => {
    const sami = event.target.value
    setName(sami)
  }

  const submitting = event => {
    event.preventDefault()
    const newList = {
      name1: name,
      id: news1.length + 1,
      isLiked: false,
    }
    dispatch(submitting1(newList))
    setName('')
  }

  console.log(news2)
  const third1 = mid => {
    dispatch(clicking1(mid))
  }

  const clickingHighlight = () => {
    dispatch(clicking2())
  }

  const Filteringhighlighted = () => {
    if (news2.ishighlight === true) {
      return news1.filter(each1 => each1.isLiked === true)
    }
    return news1
  }
  console.log(news2.ishighlight)
  return (
    <>
      <form onSubmit={submitting}>
        <input value={name} onChange={changing} type="text" />
        <button type="submit">Add on</button>
      </form>
      <button onClick={clickingHighlight}>Filter Highlighted</button>
      <ul>
        {Filteringhighlighted().map(each => (
          <Iteration first2={each} key={each.id} third1={third1} />
        ))}
      </ul>
    </>
  )
}

export default Input
