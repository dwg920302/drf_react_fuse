import React from 'react'
import {MemberRegisterForm} from 'member'
import {MemberMenu as Menu} from 'common'
import {MemberNav as Nav} from 'member'

const MemberRegister = () => {
    return (<>
    <Nav/>
    <table style={{width: '100%', height: '100%'}}>
        <tr>
            <td style={{width: '25%'}}> <Menu/> </td>
            <td style={{width: '75%'}}> <MemberRegisterForm/> </td>
        </tr>
    </table>
    </>)
}

export default MemberRegister