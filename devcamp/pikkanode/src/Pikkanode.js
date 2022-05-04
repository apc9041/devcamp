import React from 'react';

let PikkanodeReact = () => {

    let colors = ['red', 'blue', 'green', 'purple', 'pink'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];

//navbar

    //picture

    let peaple = [{
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        name: "Willy",
    }, {
        id: 2,
        img: "https://thumbs.dreamstime.com/z/tourist-retro-camera-travel-photographer-happy-young-31655903.jpg",
        name: "Wilson",
    }, {
        id: 3,
        img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2020/05/Frame-9.png",
        name: "Katina",
    }, {
        id: 4,
        img: "https://www.inpixio.com/remove-background/images/main-after.jpg",
        name: "Oilly",
    }, {
        id: 5,
        img: "https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg",
        name: "Kristin",
    }, {
        id: 6,
        img: "https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg",
        name: "Selena",
    }, {
        id: 7,
        img: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
        name: "SailorMoon",
    }, {
        id: 8,
        img: "https://blog.hubspot.com/hubfs/Developer%20centering%20images%20in%20HTML.jpg",
        name: "Tom",
    },
    ];

    const message = peaple.map((x, i, a) => {
        return (
            <div style={{ backgroundColor: "#0dcaf0", display:"inline-block", height: 250, padding:"10px",margin:"10px",borderRadius: "10px"  }} key={`picture${i}`}>
                <div style={{ padding: "10px"}}>
                    <img style={{ height: "150px",width:"200px",borderRadius: "5px" }} src={x.img} alt={x.name} />
                </div>
                <div>
                    <h3>{x.name}</h3>
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