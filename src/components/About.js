import React from 'react';

export default function About({ mode}) {
    const myStyle = (mode === 'dark') ? {
        color: 'white',
        backgroundColor: 'grey',
        border: '1px solid white'
    } : {
        color: 'black',
        backgroundColor: 'white'
    }
    return (
        <div className="container" style={{color: mode === 'dark' ? 'white': 'black'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus autem, ipsam cumque, fuga sed eligendi laudantium corporis beatae ab quisquam incidunt quos a quod quia repudiandae iure facilis quibusdam.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores atque unde, sint quae in soluta deserunt! Expedita nam vero tenetur assumenda, sed quas velit sit aliquam iusto corrupti magni exercitationem consequuntur nobis odit aliquid voluptatibus repudiandae quos totam impedit maxime?</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aliquam rem perferendis fugiat veritatis. Perspiciatis atque maiores repellendus, neque minima aliquam, reprehenderit labore, iure natus odio in rerum doloribus qui ea! Asperiores corporis temporibus ipsa odit eum quo, reiciendis repellendus possimus quia. Velit repellendus nesciunt, tempora ab voluptas consequatur sint.</strong>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}