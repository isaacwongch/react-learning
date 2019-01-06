import React from 'react';

const Content = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about')
    },2000)
    return (
        <div className="container">
            <h4 className="center">Content</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae saepe ut, quaerat eum eos quae debitis laudantium odio enim facere. Et nemo fugiat quidem officiis aliquam sapiente, ipsam eveniet explicabo!</p>
        </div>
    )
}

export default Content;