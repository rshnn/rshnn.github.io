import React from 'react';



function Post({title, url, imgname, classNames}){

	const css_classes = 'postimg ' + classNames

	return(
		<div className='post'>
			<a href={url}>
				<h3>{title}</h3>
				<img className={css_classes} src={imgname}>  
				</img>
			</a>
		</div>
	);

}


export default Post;  