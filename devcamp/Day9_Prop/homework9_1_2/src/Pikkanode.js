import React from 'react';
import PictureCard from './PictureCard'

let PikkanodeReact = () => {

    let colors = ['red', 'blue', 'green', 'purple', 'pink'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];

//navbar

    //picture

    let peaple = [{
        id: 0,
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        createBy: "Willy",
        likeCount: 0, 
        CommentCount: 0,
    }, {
        id: 2,
        img: "https://thumbs.dreamstime.com/z/tourist-retro-camera-travel-photographer-happy-young-31655903.jpg",
        createBy: "Wilson",
        likeCount: 0,
        CommentCount: 0,
    }, {
        id: 3,
        img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2020/05/Frame-9.png",
        createBy: "Katina",
        likeCount: 0,
        CommentCount: 0,
    }, {
        id: 4,
        img: "https://www.inpixio.com/remove-background/images/main-after.jpg",
        createBy: "Oilly",
        likeCount: 0,
        CommentCount: 0,
    }, {
        id: 5,
        img: "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg",
        createBy: "Kristin",
        likeCount: 0,
        CommentCount: 0,
    }, {
        id: 6,
        img: "https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg",
        createBy: "Selena",
        likeCount: 0,
        CommentCount: 0,
    }, {
        id: 7,
        img: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
        createBy: "SailorMoon",
        likeCount: 0,
        CommentCount: 0,
    }, {
        id: 8,
        img: "https://blog.hubspot.com/hubfs/Developer%20centering%20images%20in%20HTML.jpg",
        createBy: "Tom",
        likeCount: 0,
        CommentCount: 0,
    },
    ];

    const message = peaple.map((x, i, a) => {
        return (
            <div style={{ 
                backgroundColor: "#0dcaf0",
                display:"inline-block", 
                height: 300, 
                padding:"10px",
                margin:"10px",
                borderRadius: "10px"  }} 
                
                key={`picture${i}`}>

                <div style={{ 
                    padding: "10px"}}>
                    <img style={{ 
                        height: "150px",
                        width:"200px",
                        borderRadius: "5px" }} 
                        src={x.img} 
                        alt={x.createBy} />
                </div>
                <div>
                    <h3>{x.createBy}</h3>
                    <h5></h5>
                    <PictureCard
                        key={x.id}
                        likeCount={x.likeCount} 
                        CommentCount={x.CommentCount}/>
                </div>
            </div>
        );
    });


    return (
        <div style={{
            // display: 'inline-block',
            color: 'white',
            textAlign: "center",
            padding: '1rem',
            // margin: '2rem', 
            // backgroundColor: `${random_color}`,
        }}>

                {/* <div style={{padding:"10px"}}> */}
                {message}
                {/* </div> */}
        </div>
    );
};


export default PikkanodeReact;