import React from 'react'

const Temp = ({ data }) => {
    return (
            <div className='section-center'>
                {data.map((d) => {
                    const { id, user, details, date } = d;
                    return (
                        <article key={id} className='menu-item'>
                            <div className='item-info'>
                                <header>
                                    <h4>{user}</h4>
                                    <h4 className='price'>{date}</h4>
                                </header>
                                <p className='item-text'>{details}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
    )
}

export default Temp
