import React, {useState, useEffect} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles';
import { postList } from 'api'

const PostList = () => {

    const classes = makeStyles({
        table: {
            minWidth: 800,
        },
    });

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postList().
        then(res => {
            setPosts(res.data)
        }).
        catch(err => {
            console.log(err)
        })
    }, [])

    return(<>
        <form method='get'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.length != 0 ?
              posts.map((post) => (
                <TableRow key={post.title}>
                  <TableCell align="center" component="th" scope="post">
                    {post.title}
                  </TableCell>
                  <TableCell align="left">{post.content}</TableCell>
                </TableRow>
              )):
                    <h3>등록된 데이터가 없습니다.</h3>
              }
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.root}>
            <Pagination count={10} color="primary" />
        </div>
        </form>
    </>)
}

export default PostList