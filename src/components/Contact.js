import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 60px auto;
    margin-bottom: 120px;

    display: grid;
    grid-template-rows: repeat(2, auto);

    /* background-color: green; */
`

const Content = styled.div`
    align-self: center;
    margin-top: 60px;
    margin-left: 15px;
    margin-right: 15px;

    /* background-color: red; */

    & h2 {
        margin: 0 15px;
        text-align: center;
    }

    & p {
        margin: 0 15px;
        text-align: center;
    }
    
    & div {
        display: grid;
        margin-top: 10px;
        margin-bottom: 0;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 480px) {
        margin: 30px auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }    
`

const FormContainer = styled.div`
    max-width: 500px;
    width: 100%;
    padding: 15px;

    & label {
        text-align: left;
        color: black;
    }

    & input {
        border: 2px solid black;
        border-radius: 8px;
        display: grid;
        max-width: auto;
        width: 100%;
        /* margin: auto 10px; */
        height: 25px;
        /* padding: 12px 20px; */
    }

    & textarea[type=message] {
        border: 2px solid black;
        border-radius: 8px;
        display: grid;
        max-width: auto;
        width: 100%;
        height: 100px;
        resize: vertical;
    }

    & button {
        margin-top: 30px;
    }

`


const Contact = () => (
    <Container id="contact">
        <Content>
            <h2>Contact us</h2>
            <p>Have questions or comments? Let us know! We'll get back with you as quickly as we can.</p>
        
        <FormContainer>
            <form name="RushNet-Contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                    <div>
                        <label htmlFor="name">Name</label>    
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" name="name" id="phone"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea type="message" name="message" id="message" required/>
                    </div>
                    <div>
                        <button type="submit" value="Send Message">Send</button>
                    </div>
            </form>
        </FormContainer>
        </Content>
    </Container>
)

export default Contact