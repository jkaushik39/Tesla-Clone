import React from 'react'
import Section from "./Section"
import styled from "styled-components"

function Home() {
  return (
    <Container>
        <Section 
            title = "Model S"
            description= "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom order"
            rightBtnText = "Existing inventory"
        
        />

        <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText= "Custom order"
            rightBtnText= "Existing inventory"
        />

        <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText= "Custom order"
            rightBtnText= "Existing inventory"
        />

        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText= "Custom order"
            rightBtnText= "Existing inventory"
        />

        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money Back Guarantee"
            backgroundImg = "solar-panel.jpg"
            leftBtnText= "Order Now"
            rightBtnText= "Learn more"
        />

        <Section
            title="Solar for new Roofs"
            description="Solar roofs costs less than a new roof plus solar panels"
            backgroundImg = "solar-roof.jpg"
            leftBtnText= "Order Now"
            rightBtnText= "Learn More"
        />

        <Section
            title="Accessories"
            description=""
            backgroundImg = "accessories.jpg"
            leftBtnText= "Shop now"
            rightBtnText= ""
        />
    
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;

`

