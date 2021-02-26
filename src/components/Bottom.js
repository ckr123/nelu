import linkedin from './../assets/linkedin.svg'
import github from './../assets/github.svg'

import Obfuscate from 'react-obfuscate';

function Bottom() {
return (
    <div class="grid grid-cols-3 bg-gray-800 min-h-screen text-center m-auto text-white py-20 font-thin">
        <div class="col-start-2 flex flex-col">
            <div class="border-b-2 border-solid w-40 place-self-center border-primary">
                <div class="mb-5 inline-flex">
                    <a href="https://www.linkedin.com/in/christoffer-kristensen-73131261/" target="_blank" ><img class="w-7 mr-5" src={linkedin}></img></a>
                    <a href="https://github.com/ckr123" target="_blank"><img class="w-7" src={github}></img></a>
                </div>
            </div>
            <div>
                <Obfuscate email="christofferfk@nelu.dk"></Obfuscate>    
            </div>
            
        </div>
    </div>
);
}

export default Bottom;