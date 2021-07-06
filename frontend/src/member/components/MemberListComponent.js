import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination'
import { Link } from 'react-router-dom'
import { memberList } from 'api'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const usePageStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const MemberListComponent = () => {
    const classes = useStyles();
    const pageClasses = usePageStyles();

    const [members, setMembers] = useState([])
    
      useEffect(() => {
        memberList().
        then(res => {
            setMembers(res.data)
        }).
        catch(err => {
            console.log(err)
        })
      }, [])

      const handleClick = member => {
        localStorage.setItem("selectedMember", member)
      }
    
  return (<>
    <form method='get'>
    <TableContainer component={Paper}>
    <div className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.length != 0 ?
          members.map(({username, password, name, email}) => (
            <TableRow key={username}>
              <TableCell align='right'>{username}</TableCell>
              <TableCell align="right"><Link to={`/member/detail/${ username }`} 
                onClick={ () => handleClick( JSON.stringify({ username, password, name, email }) )}>{ name }</Link></TableCell>
              <TableCell align="right">{ email }</TableCell>
            </TableRow>
          )):
                <h3>등록된 데이터가 없습니다.</h3>
          }
            <Pagination defaultPage={1} count={5} boundaryCount={2} color="primary" />
        </TableBody>
      </Table>
      </div>
    </TableContainer>
    </form>
  </>);
}

export default MemberListComponent