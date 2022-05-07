import React, { useState } from 'react';



const PictureCard = (props) => {
    const [like, setLike] = useState(props.likeCount);
    const onClickFunc = () => {

        console.log(like);
        setLike(like + 1)
    }
    const [CommentCount,setCommentCount] =useState(props.CommentCount)
    const onKeyPressFunc = (e) => {
        if (e.which===13){
        console.log(CommentCount);
        setCommentCount(CommentCount + 1)
        alert("Thank You For Comment")
    }
}


    console.log(props);
    console.log(props.likeCount);
    return (
        <>
            {/* <p>ID : {props.id}</p>
            <p>Name : {props.name}</p> */}
            {/* {like >0 && <p>Like : {like}</p>} */}
            <p>
            <input type="button" value="like" onClick={onClickFunc} />
            Like : {like}</p>
            <p><input type="text"  onKeyPress={onKeyPressFunc}/>
            </p>
            <p>Comment : {CommentCount}</p>
        </>
    )
}

export default PictureCard;