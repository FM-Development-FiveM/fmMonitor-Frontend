'use client'

import { redirect } from 'next/navigation'
import * as Form from '@rebass/forms'
import * as Rebass from 'rebass'
import * as Icons from "@heroicons/react/24/outline";
import React from 'react';

const fmMonitorAlreadySetup: boolean = false;

export default function Page() {
    if (fmMonitorAlreadySetup) {
        redirect('/auth/login');
    }

    const [getPasswordType, setPasswordType] = React.useState("password");
    const [getPasswordVisibility, setPasswordVisibility] = React.useState(false);

    function togglePasswordVisibility(elementInput: string, elementInputIcon: string) {
        if (!getPasswordVisibility) {
            setPasswordVisibility(true);
            setPasswordType("text");
        } else {
            setPasswordVisibility(false);
            setPasswordType("password");
        }
    }

    return (
        <main className="fmScreen fmCenterScreen fmFirstSetupScreen">
            <div className="fmCenterContent">
                <span className="fmCenterContentTitleSm">
                    Thank you for using fmMonitor! We appreciate you!
                </span><br></br><br></br>
                <span className="fmCenterContentSubtitleSm canSelectText">In order to start using fmMonitor, You will need to setup an admin account!</span><br></br>

                <div className="fmCenterLoginForm">
                    <h1 className="fmCenterLoginFormTitle">Admin Account</h1><br></br>
                    <Form.Label mb="5px" fontSize="18px" htmlFor="fmUsernameInput">Username</Form.Label>
                    <Form.Input backgroundColor="rgba(217, 217, 217, 30%)" style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} type="text" autoComplete="on" spellCheck="false" id="fmUsernameInput" name="fmUsernameInput"/>
                    <br></br>
                    <Form.Label mb="5px" fontSize="18px" htmlFor="fmPasswordInput">Password</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Form.Input  width="450px" backgroundColor="rgba(217, 217, 217, 30%)" style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} type="password" autoComplete="on" spellCheck="false" id="fmPasswordInput" name="fmPasswordInput" />
                    </div>
                    <br></br>
                    <Form.Label mb="5px" fontSize="18px" htmlFor="fmRepeatPasswordInput">Repeat Password</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Form.Input  width="450px" backgroundColor="rgba(217, 217, 217, 30%)" style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} type={getPasswordType} autoComplete="on" spellCheck="false" id="fmRepeatPasswordInput" name="fmRepeatPasswordInput" />
                        <Rebass.Button style={{ outline: "3px solid rgba(255, 255, 255, 0.44)", border: "none" }} onClick={() => togglePasswordVisibility("fmRepeatPasswordInput", "fmRepeatPasswordInputIconBtn")} id="fmRepeatPasswordInputIconBtn" backgroundColor="rgba(217, 217, 217, 30%)" width="auto" marginLeft="15px" htmlFor="fmRepeatPasswordInput">{getPasswordType === "text" ? <Icons.EyeSlashIcon width="30px" style={{ margin: "-10px" }} /> : <Icons.EyeIcon width="30px" style={{ margin: "-10px" }} />}</Rebass.Button>
                    </div>
                    <br></br>
                    <Rebass.Button type="submit" mb="15px" fontSize="20px" style={{ border: "3px solid rgba(255, 255, 255, 0.45)" }} backgroundColor="rgba(183, 181, 166, 3%)" width="100%">Create Admin Account</Rebass.Button>
                    <br></br>
                    <h1 style={{ marginBottom: "20px" }}>You can create more admin accounts in the dashboard!</h1><br></br>
                </div>
            </div>

            <footer className="fmCopyrightFooter">© 2023 FM Development. All rights reserved.</footer>
        </main>
    )
}