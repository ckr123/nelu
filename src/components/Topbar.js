
import React from 'react';

import Christoffer from './../assets/christoffer.jpeg'
import logo from './../assets/logo.jpeg'

class Topbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            value: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080")
          .then(res => res.json())
          .then(
            (result) => {
                console.log("FEST")
              this.setState({
                value: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("HEST")
              this.setState({
                error
              });
            }
          )
      }
  

    render() {
        return (
            <div class="grid grid-rows-1 lg:grid-cols-3 gap-4 bg-white items-baseline">
                <div class="relative md:pl-60 col-span-2 ">
                    <div class="top-1/2 left-32 text-right max-w-sm m-10 lg:m-0 lg:absolute">
                        <div class="text-4xl font-thin">
                            <p class="">CHRISTOFFER</p>
                            <p class="border-b-2 border-solid border-primary">FRYDKJÆR</p>
                        </div>
                        
                        <p class="text-sm font-thin">Software Developer</p>
                    </div>
                    <img class="md:max-w-md md:m-0" src={Christoffer} />
                </div>
                <div class="lg:col-start-3 col-span-2 m-auto xl:-ml-20 lg:-ml-10 lg:mt-32">
                    <div class="max-w-xs ">
                        <p class="">Skal jeg hjælpe dig?</p>
                        <p class="text-sm font-thin">
                            Jeg kan hjælpe dig med din udviklingsopgave,
                            da jeg er vant til at udvikle komplekse løsninger. 
                            Jeg behersker forskellige sprog der gør at jeg både kan hjælpe dig hvis du har brug for en webbaseret løsning
                            eller du har behov for at få integreret dine nye microservices ind i en eksisterende løsning.
                            Kontakt mig for at finde ud af hvordan jeg kan hjælpe dig.
                        </p>
                        
                        <img class="w-20 mt-5 mb-5 m-auto " src={logo} />
                    </div>
                </div>
            </div>
        );
        }
}


export default Topbar