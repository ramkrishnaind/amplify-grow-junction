import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

NavLink.defaultProps = {
  exact: false,
}

export default function NavLink({
  href,
  exact,
  children,
  setActive,
  ...props
}) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
    if (setActive) setActive(isActive)
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
