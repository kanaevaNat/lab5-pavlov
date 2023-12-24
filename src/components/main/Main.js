import './Main.css'
import Input from "../input/Input";
import ShowContext from "../showcontext/ShowContext";

function Main() {
    return(
        <div className={'main-container'}>
            <div className={'main-container-item input-container-outer'}>
                <Input/>
            </div>
        </div>
    )
}

export default Main