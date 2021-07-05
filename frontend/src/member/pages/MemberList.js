import React from 'react'
import {MemberListComponent} from 'member'
import {MemberMenu as Menu} from 'common'
import {MemberNav as Nav} from 'member'

const MemberList = () => {
    return (<>
    <Nav/>
    <table style={{width: '100%', height: '100%'}}>
        <tr>
            <td style={{width: '25%'}}> <Menu/> </td>
            <td style={{width: '75%'}}> <MemberListComponent/> </td>
        </tr>
    </table>
    </>)
}

export default MemberList