"use client"

import { redirect } from 'next/navigation'
import * as Form from '@rebass/forms'
import * as Rebass from 'rebass'
import * as Icons from "@heroicons/react/24/outline";
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const isAlreadyLoggedIn: boolean = false;

export default function Page() {
    React.useEffect(()=> {
        if (isAlreadyLoggedIn) redirect('/dash/home');
    });

    const [getPasswordType, setPasswordType] = React.useState("password");
    const [getPasswordVisibility, setPasswordVisibility] = React.useState(false);

    const [getUsernameField, setUsernameField] = React.useState("");
    const [getPasswordField, setPasswordField] = React.useState("");

    function togglePasswordVisibility(elementInput: string, elementInputIcon: string) {
        if (!getPasswordVisibility) {
            setPasswordVisibility(true);
            setPasswordType("text");
        } else {
            setPasswordVisibility(false);
            setPasswordType("password");
        }
    }

    const loginUser = () => {
        console.log(`Username: ${getUsernameField} | Password: ${getPasswordField}`);
    }

    return (
        <main className="fmScreen fmCenterScreen fmLoginScreen">
            <div className="fmCenterContent">
                <span className="fmCenterContentTitleSm">
                    <b>fmMonitor</b>
                </span><br></br>
                <span className="fmCenterContentSubtitleSm">The All In One FiveM Server Manager Tool</span><br></br>

                <div className="fmCenterLoginForm">
                    <h1 className="fmCenterLoginFormTitle">Admin Login</h1><br></br>
                    <Form.Label mb="5px" fontSize="18px" htmlFor="fmUsernameInput">Username</Form.Label>
                    <Form.Input required={true} onChange={(e) => setUsernameField(e.target.value)} backgroundColor="rgba(217, 217, 217, 30%)" style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} type="text" autoComplete="on" spellCheck="false" id="fmUsernameInput" name="fmUsernameInput"/>
                    <br></br>
                    <Form.Label mb="5px" fontSize="18px" htmlFor="fmPasswordInput">Password</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Form.Input required={true} onChange={(e) => setPasswordField(e.target.value)}  width="450px" backgroundColor="rgba(217, 217, 217, 30%)" style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} type={getPasswordType} autoComplete="new-password" spellCheck="false" id="fmPasswordInput" name="fmPasswordInput" />
                        <Rebass.Button style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} onClick={() => togglePasswordVisibility("fmPasswordInput", "fmPasswordInputIconBtn")} id="fmPasswordInputIconBtn" backgroundColor="rgba(217, 217, 217, 30%)" width="auto" marginLeft="15px" htmlFor="fmPasswordInput">{getPasswordType === "text" ? <Icons.EyeSlashIcon width="30px" style={{ margin: "-10px" }} /> : <Icons.EyeIcon width="30px" style={{ margin: "-10px" }} />}</Rebass.Button>
                    </div>
                    <br></br>
                    <Rebass.Button type="submit" onClick={loginUser} mb="15px" fontSize="20px" style={{ border: "3px solid rgba(255, 255, 255, 0.45)" }} backgroundColor="rgba(183, 181, 166, 3%)" width="100%">Login to fmMonitor</Rebass.Button>
                    <div className="fmDivider" style={{ marginBottom: "15px", marginTop: "5px" }}>Other Ways To Login</div>
                    <Rebass.Button type="submit" onClick={loginUser} mb="15px" fontSize="20px" style={{ border: "3px solid rgba(255, 255, 255, 0.45)" }} backgroundColor="rgba(183, 181, 166, 3%)" width="100%"><SocialIcon network="discord" className="fmLoginBtnPlatformIcon" /><span className="fmLoginBtnPlatformText">Login with Discord</span></Rebass.Button>
                </div>
            </div>

            <span className="fmCopyrightFooter">© 2023 FM Development. All rights reserved</span>
        </main>
    )
}