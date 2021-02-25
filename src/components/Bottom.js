import linkedin from './../assets/linkedin.svg'

import Obfuscate from 'react-obfuscate';

function Bottom() {
return (
    <div class="grid grid-cols-3 bg-gray-800 min-h-screen text-center m-auto text-white py-20 font-thin">
        <div class="col-start-2">
            <div class="border-b-2 border-solid w-40 m-auto border-primary mb-5">
                <a href="https://www.linkedin.com/in/christoffer-kristensen-73131261/" target="_blank" ><img class="w-7 m-auto mb-5" src={linkedin}></img></a>
            </div>
            <Obfuscate email="christoffer@nelu.dk"></Obfuscate>
        </div>
    </div>
);
}

export default Bottom;