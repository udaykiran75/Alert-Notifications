import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notification-div">
    <h1 className="heading">Alert Notifications</h1>

    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div className="alert-msg-div">
        <h1 className="success-title">Success</h1>
        <p className="alert-msg">You can access all the files in the folder</p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="alert-msg-div">
        <h1 className="error-title">Error</h1>
        <p className="alert-msg">
          Sorry, you are not authorized to have access to delete the files
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="warning-icon" />
      <div className="alert-msg-div">
        <h1 className="warning-title">Warning</h1>
        <p className="alert-msg">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="info-icon" />
      <div className="alert-msg-div">
        <h1 className="info-title">Info</h1>
        <p className="alert-msg">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
