import React, { useState, useRef} from "react";

const OTPLogin = () => {
    const [otp, setOTP] = useState(['', '' , '' , '']); // array to store otp digits
    const otpInputs = Array.from({ length: 4}); // Array to map through for rendering OTP input fields
    const inputRefs = useRef(otpInputs.map(() => React.createRef())); // Refs for input fields

    const handleChange = (index, value) => {
        // Update the OTP array with the entered digit

        const newOTP = [...otp];
        newOTP[index] = value;

        // Update state and move focus to the next input

        setOTP(newOTP);

        if(index < otp.length - 1 && value  != ''){
            inputRefs.current[index + 1 ].current.focus();
        }
    };
const handleKeyDown = (index, event) => {
    // Move focus to the previous input on backspace if the current input is empty
    if(event.key === 'Backspace' && index > 0 && otp[index] === ''){
        inputRefs.current[index - 1].current.focus();
    }
}   ;

const handleSubmit = () => {
    // Perform authentication or verification with the entered OTP
    // Actually not required for this assignment


    const enteredOTP = otp.join('');
    console.log('Entered OTP:', enteredOTP);

    // you can add your auth logic here
    

}



    return (
        <div>
            <h2>OTP Login</h2>
            <div>
                {otpInputs.map((_, index) => (
                    <input
                      key = {index}
                      type = "text"
                      maxLength="1"
                      value = {otp[index]}
                      onChange={(e)=> handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref= {inputRefs.current[index]}
                      
                    
                    
                    />
                ))}
            </div>
            <button onClick={handleSubmit}>Submit OTP</button>
        </div>
    );
};


export default OTPLogin;