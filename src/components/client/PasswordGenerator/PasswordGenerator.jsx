import { useState, useCallback, useEffect, useRef } from "react";
import "./passwordStyle.css";
export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const buttonRef = useRef(null);
  const countdownRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_-+~`"

    for(let i=1;i<=length;i++){
        let char = (Math.random()*str.length+1)
        pass += str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword]);

  const copyPasswordToclip = useCallback(()=>{
     const buttonElement = buttonRef.current;
    
     if (buttonElement) {    
        
       countdownRef.current = 3;
       

          // Timer to revert the text after 3 seconds
      const timerId = setInterval(() => {
      
        buttonElement.textContent = `Copied! (${countdownRef.current}s)`;
        if (countdownRef.current === 0) {
          clearInterval(timerId);
          buttonElement.textContent = 'Copy password';
        }
        countdownRef.current -= 1;
      }, 1000);

     }
     
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])



  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator]);

  return (
    <>
      <div>
        <div>Password generator</div>
        <div className="input-box">
          <input type="text" className="password-input" value={password} readOnly ref={passwordRef} />
          <div className="options">
           
              <div className="slidecontainer">
                <input
                  className="slider"
                  type="range"
                  min="6"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <p>Length ({length})</p>
              </div>
        
            <div>
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>setNumberAllowed(prev=>!prev)} />
              Numbers
            </div>
            <div>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>setCharAllowed(prev=>!prev)} />
              Characters
            </div>
          </div>
          <button ref={buttonRef} onClick={copyPasswordToclip}>Copy password</button>
        </div>
      </div>
    </>
  );
}
