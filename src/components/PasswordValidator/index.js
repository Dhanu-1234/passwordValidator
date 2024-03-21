import {useState} from 'react'

import {
  BgContainer,
  ValidatorCard,
  Heading,
  Paragraph,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, changePassword] = useState('')
  const showErrorMsg = passwordInput.length < 8

  const onPasswdChange = event => {
    changePassword(event.target.value)
  }

  return (
    <BgContainer>
      <ValidatorCard>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput
          type="password"
          value={passwordInput}
          onChange={onPasswdChange}
        />
        {showErrorMsg === true && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </ValidatorCard>
    </BgContainer>
  )
}

export default PasswordValidator
