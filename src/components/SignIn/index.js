import React from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormLabel,FormInput,FormH1,FormButton} from './SignIn'



const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dataSpec</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor ='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor ='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type ='submit'>Continue</FormButton>
                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
