import React from 'react'

const Temp = ({ data }) => {
    return (
            <div className='section-center'>
                {data.map((d) => {
                    const { id, donor, reciever, pin, wheat, rice, milk, fruits } = d;
                    // const {id, user, details} = d;
                    return (
                        <article key={id} className='menu-item'>
                            <div className='item-info'>
                                <header>
                                    <h4>{donor}</h4>
                                </header>
                                {/* <p className='item-text'>{details}</p> */}
                            </div>
                        </article>
                    );
                })}
            </div>
    )
}

export default Temp
