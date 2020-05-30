import React from 'react';

function Posts({data}){ 

    const posts = data.map( (post, index) => {
       
        const css_classes = 'postimg ' + post.classNames  

        return(
            <div key={index} className='post'>
                <a href={post.url}>
                    <h3>{post.title}</h3>
                    <img className={css_classes} src={post.imgname}>  
                    </img>
                </a>
            </div>
        );       
    })     

    return(posts);
}

export default Posts;  