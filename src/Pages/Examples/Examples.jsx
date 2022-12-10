import './Examples.scss'

export default function Examples() {
    return (
        <div className='examples'>
            <div className='container'>
                <h1>Examples Page</h1>
                <p>
                    Below are some nice examples which were created with
                    the Free PhotoShop.
                </p>
                <div>
                    <p>This is just a small part of what we have to offer.</p>
                    <p>
                        You can make combinations of all the examples
                        and you will get marvellous images.
                        Just use your imagination and be creative.</p>
                </div>
                <section>
                    <h2>Filter Effects</h2>
                    <div className='box'>
                        <figure>
                            <img src="/example.png" alt="" />
                            <span>Original Picture</span>
                        </figure>
                        <div className='imagesContainer'>
                            <img src="/filter-0.png" alt="" />
                            <img src="/filter-1.png" alt="" />
                            <img src="/filter-2.png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Rotate Effects</h2>
                    <div className='box'>
                        <figure>
                            <img src="/example-r.png" alt="" />
                            <span>Original Picture</span>
                        </figure>
                        <div className='imagesContainer'>
                            <img src="/rotate-0.png" alt="" />
                            <img src="/rotate-1.png" alt="" />
                            <img src="/rotate-2.png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>shape Effects</h2>
                    <div className='box'>
                        <figure>
                            <img src="/example.png" alt="" />
                            <span>Original Picture</span>
                        </figure>
                        <div className='imagesContainer'>
                            <img src="/example-s-1.png" alt="" />
                            <img src="/example-s-2.png" alt="" />
                            <img src="/example-s-3.png" alt="" />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Frame Effects</h2>
                    <div className='box'>
                        <figure>
                            <img src="/example-f.jpg" alt="" />
                            <span>Original Picture</span>
                        </figure>
                        <div className='imagesContainer'>
                            <img src="/example-f-1.png" alt="" />
                            <img src="/example-f-2.png" alt="" />
                            <img src="/example-f-3.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}