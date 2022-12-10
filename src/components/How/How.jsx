import './How.scss'

export default function How({ upload }) {

    return (
        <div className='how'>
            <div className='container first'>
                <h2>How to edit photos</h2>
                <span>
                    There are only 4 simple steps between you and creating beautiful
                    images like a professional photographer.
                </span>
                <div className='boxContainer'>
                    <div className='box'>
                        <img className='upload'
                            src="https://lh3.googleusercontent.com/pw/AL9nZEW4oSOMotXtZsdda38i5VhsnJinv4MhESir1VRGJyYjl7hcmvc_WxMq0cGMyoTmOVATuKh2EuMSRbNGwshDPScr1t2QJN-euFDGZa2jNFLo80BOrsMKLKFacK2DoTU3F4IWaws_6QyOgr9Op4FKpOTu=w532-h412-no?authuser=0" referrerPolicy='no-referrer' alt="" onClick={() => upload(true)} />
                        <div>
                            <h4>1. Upload an image</h4>
                            <p>Upload an image to canvas to get started editing
                                with this awesome tools.
                            </p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src="https://lh3.googleusercontent.com/pw/AL9nZEX2GBswWdr3cz8PWpgeQ8RKT5rorbDXtO3QseeGeKpgzQrkTvxCkH53lZRSIwncft9lLguFsRdLlSPf51AWPUI8vXPYspZgdtRsLVSsyvIJUIs9J_vRsLqZbEq5gFefV4u16p8S-ZqmJt1NazbHlSvD=w532-h412-no?authuser=0" referrerPolicy='no-referrer' alt="" />
                        <div>
                            <h4>2. Select a feature</h4>
                            <p>
                                After the image is loaded choose the feature
                                you want from the toolBar.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src="https://lh3.googleusercontent.com/pw/AL9nZEX2GBswWdr3cz8PWpgeQ8RKT5rorbDXtO3QseeGeKpgzQrkTvxCkH53lZRSIwncft9lLguFsRdLlSPf51AWPUI8vXPYspZgdtRsLVSsyvIJUIs9J_vRsLqZbEq5gFefV4u16p8S-ZqmJt1NazbHlSvD=w532-h412-no?authuser=0" referrerPolicy='no-referrer' alt="" />
                        <div><h4>3. Adjust and preview</h4>
                            <p>
                                Edit images online with free online photoShop
                                in just a few clicks.
                            </p></div>
                    </div>
                    <div className='box'>
                        <img src="https://lh3.googleusercontent.com/pw/AL9nZEX2GBswWdr3cz8PWpgeQ8RKT5rorbDXtO3QseeGeKpgzQrkTvxCkH53lZRSIwncft9lLguFsRdLlSPf51AWPUI8vXPYspZgdtRsLVSsyvIJUIs9J_vRsLqZbEq5gFefV4u16p8S-ZqmJt1NazbHlSvD=w532-h412-no?authuser=0" referrerPolicy='no-referrer' alt="" />
                        <div><h4>4. Download</h4>
                            <p>After editing applications, download the beautiful images
                                you have edited.
                            </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
