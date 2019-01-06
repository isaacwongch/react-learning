import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect } from 'react-redux';
//Functional component cannot use lifecycle hook
// const Home = () => {
//     return (
//         <div className="container">
//             <h4 className="center">Home</h4>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae saepe ut, quaerat eum eos quae debitis laudantium odio enim facere. Et nemo fugiat quidem officiis aliquam sapiente, ipsam eveniet explicabo!</p>
//         </div>
//     )
// }

class Home extends Component {
    state ={
        posts: []
    }

    //lifecycle hook
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         })
    //     })
    // }

   render(){
       console.log(this.props);
       //const {posts} = this.state;
       const {posts} = this.props;
       const postList = posts.length ? (
           posts.map(post => {
               return (
                   <div className="post card" key={post.id}>
                       <img src={Pokeball} alt="a pokeball"/>
                       <div className="card-content">
                            <Link to={'/' + post.id} >
                           <span className="card-title red-text">{post.title}</span>
                           </Link>
                           <p>{post.body}</p>
                       </div>
                   </div>
               )
           })
       ) :(
           <div className="center">No posts yet</div>
       )

       return (
           <div className="container home">
               <h4 className="center">Home</h4>
               {postList}
           </div>
       )
   }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);