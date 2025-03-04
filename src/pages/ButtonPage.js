import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';


function ButtonPage() {
    const handleClick = () => {};

    return(
        <div>
            <div>
                <h1 className="text-green-500">App!!!</h1>
            </div>

            <div>
                <Button danger="true" className="mb-5" onClick={handleClick}> 
                    {/* adding a react icon */}
                    <GoBell className="mr-2.5" />
                    Click Me!!!
                </Button>
            </div>

            <div>
                <Button rounded danger="true" onClick={handleClick}> 
                    {/* adding a react icon */}
                    <GoBell className="mr-2.5" />
                    Click Me!!!
                </Button>
            </div>

            <div>
                <Button outline rounded secondry="true" onClick={handleClick}> 
                    {/* adding a react icon */}
                    <GoCloudDownload  className="mr-2.5"/>
                    Now!!
                </Button>
            </div>

            <div>
                <Button rounded warning="true" onClick={handleClick}> 
                    {/* add a react icon */}
                    <GoDatabase  className="mr-2.5"/> 
                    See Deal!
                </Button>
            </div>

            <div>
                <Button rounded success="true" onClick={handleClick}>
                {/* add a react icon */}
                <GoDatabase  className="mr-2.5"/> 
                Hide ads
                </Button>
            </div>

        </div>

    );
};



export default ButtonPage;