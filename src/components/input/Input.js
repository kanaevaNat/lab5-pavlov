import './Input.css'
import {useState} from "react";
import {getContextWithMistakes, getDefaultContext, getWordSentenceContext} from "../../contextholder/contextHolder";
import {askQuestion} from "../../api/deeppavlovApi";

function Input() {
    const [question, setQuestion] = useState("")
    const [context, setContext] = useState(getDefaultContext())
    const [answer, setAnswer] = useState()

    function chooseContext(value) {
        if(value === 'default') {
            setContext(getDefaultContext())
        } else if(value === 'withMistakes') {
            setContext(getContextWithMistakes())
        } else {
            setContext(getWordSentenceContext())
        }
    }

    function callDeepPavlov() {
        askQuestion(context, question)
            .then(result => setAnswer(result[0]))
    }

    return(
        <div className={'input-container'}>
            <div className={'input-field-container input-container-item'}>
                <textarea className={'input-textarea'} onChange={(e) => setQuestion(e.currentTarget.value)}/>
            </div>
            <div align="center" className={'send-container input-container-item'}>
                <div align="center" className={'choose-context-container send-container-item'}>
                    <div className={'radio-container'}>
                        <input type={'radio'} name={'context'} value={'default'} onChange={(e) => chooseContext(e.currentTarget.value)}/>
                        <p className={'radio-label'}>Обычный текст</p>
                    </div>
                    <div className={'radio-container'}>
                        <input type={'radio'} name={'context'} value={'withMistakes'} onChange={(e) => chooseContext(e.currentTarget.value)}/>
                        <p className={'radio-label'}>Текст с ошибками</p>
                    </div>
                    <div className={'radio-container'}>
                        <input type={'radio'} name={'context'} value={'wordSentence'} onChange={(e) => chooseContext(e.currentTarget.value)}/>
                        <p className={'radio-label'}>Текст со скобками</p>
                    </div>
                </div>
            </div>
            <div align="center" className={'send-button-container send-container-item'}>
            <button  className={'app-button'} onClick={callDeepPavlov}>Отправить</button>
            </div>
            <div className={'answer-container input-container-item'}>
                <p className={'answer-container-paragraph'}>{answer}</p>
            </div>
        </div>
    )
}


export default Input