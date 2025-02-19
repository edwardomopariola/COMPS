import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';


function ButtonPage() {
    const handleClick = () => {
        console.log('Button Clicked!!!');
    };

    return(
        <div>
            <div>
                <h1>App!!!</h1>
            </div>

            <div>
                <Button danger="true" className="mb-5" onClick={handleClick}> 
                    {/* adding a react icon */}
                    <GoBell className="mr-2.5" />
                    Click Me!!!
                </Button>
            </div>

            <div>
                <Button danger="true" onClick={handleClick}> 
                    {/* adding a react icon */}
                    <GoBell className="mr-2.5" />
                    Click Me!!!
                </Button>
            </div>

            <div>
                <Button secondry="true" onClick={handleClick}> 
                    {/* adding a react icon */}
                    <GoCloudDownload  className="mr-2.5"/>
                    Now!!
                </Button>
            </div>

            <div>
                <Button warning="true" onClick={handleClick}> 
                    {/* add a react icon */}
                    <GoDatabase  className="mr-2.5"/> 
                    See Deal!
                </Button>
            </div>

            <div>
                <Button success="true" onClick={handleClick}>
                {/* add a react icon */}
                <GoDatabase  className="mr-2.5"/> 
                Hide ads
                </Button>
            </div>

        </div>

    );
};



export default ButtonPage;