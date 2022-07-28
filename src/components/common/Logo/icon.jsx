import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LogoIcon = ({ className }) => {
  return (
    <FontAwesomeIcon icon={faMountainSun} className={'text-nord10 ' + className} />
  )
}

export default LogoIcon
