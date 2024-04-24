import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div className="nitification-container">
      <div className="notification">{children}</div>
      <GrFormClose className="cancel-icon" />
    </div>
  )
}
export default Notification
