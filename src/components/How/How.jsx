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
                            src="https://lh3.googleusercontent.com/fj77KNHtnLdZ-WZgqCEJ1DHHH3Gw1ab5FGjw9BhWe6E2OBBjqWtYx2b4P0uyV_kfBBbidd4YVdM97oS9yxu1GqXZkbryqMyH2f8wvjG71Vm3AigqaS0HqvnzpPcHlDAnH70AdKCycaz7k2uMPHYJ7fT8uVi9UYKwf7q_DrPUA71-0cBtkdhM43rBqwAfvmwhwmTCqqxlZRU74qtU48kt_kllGOHLG3atDEYbbDVlxL6EMq7Lev3Y-7XQaG4jIhpYn9bVi83svWwpfRxdnNMV15Byt3KcmjNbJtTCGszYtP1wOI2U1Ld04YZRStEzUOXXvFqk31wweZs-uhiKyx00GEGnwiFElYHwCQyE1Gxi9H1aEFEm9L4qsVWBZH2mIOy4Pra7afpqjdvqrC0FdNp9h1xOcyOQeSftULiXsKBrzL7BJrdy-jXRo4j6Z_wp-Ip4zOU3kJjdzrk3PiKICZu7-oydIm3MsUGEKo_2hBWKEu_yoO5WV0uMf1gCObLQB6x6PfG1uety16-wg9kw25uqA0cQMbrpflyvT_jQFrlexmYEug0KZ-tqP5-O7INpMg9xS1OYE8qkBOhmZEZNFNXUZly0Gp8Q-Dd1s81tWHW4UiDKQVrRwaAhtUkHUaZ6dzZA1ne_3ahbCHPqLYQMdZMxz0h5Z16lxOm01Sb4cL6NJV46F8NQpyBpgGxAfeCxeTDSJiITBnHubTdteNovqLPOL4fCHRZVbLBIt3k43RrpJGrSJMbX1Qwdzf95USSr35OTIOUpWw8QXrG20PaXF51csvrT3B--SXbxiA6Shd7HSCmH1xyJtSrJUu728KllqWNtEH4mmMr2KnlPW9fsHrjDYr4-mxkiRld1AU4otwdT1prKlfkzdroec-g46QoI5XJ0SRbqdXvQWvyXryYb32jMPBnaWMi5LpUXO8xhfvAWfuyhi3pT=w532-h412-no?authuser=0" alt="" onClick={() => upload(true)} />
                        <div>
                            <h4>1. Upload an image</h4>
                            <p>Upload an image to canvas to get started editing
                                with this awesome tools.
                            </p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src="https://lh3.googleusercontent.com/oqDv45t1wE8E-YlWzCvat6-2bmgIJjGesPY5vtSSMzoLluCg6a8CxnhW6UFOaWWsCIOXSq9ShMzLBT8568ICkNGTM9D6tnH-3i8U9aiiP2ChLtlFnG2RIDUdL_-BJK26FOdiFXDFI2RHqVjIepA6xdxISIKr8dDzIks9NFj1VPou65Nq5jJ4v19VL12vbYJBzLyhsZp5b3jgX9PzrSnLqSvMLKgE8BpeX5zZHJY_VRuiLQhVzbc5DcauZ7TeB4KDKjSm3CQWb8BAkyoLdHmYO4s63YXG4FCMr0xeB_jGqRSrDJXNICVvaxv29PlEf5i35hDC3QDstA5NGBkAF2sG7BPLoRzDbT-IT3H9kR5nwaVo9RCapPTb1IQg7W3yvRjLpVpZqHlLES_cJEeQihR9zmyheCGNEvgKsTV0fe4fvosS_YlI__WmzhhaHwVInIWrmU3dLM8p_AvlmSvwNTea64ikmCY51U7PPZv1_vw83Ci4u5vgvxKDZZqE2h8XbzFAERfoW77hhJMaXAPuEdwvbpIU-cSsbxvxPqLWkg411TGrdXXt0NshnY-v4xL4S2ZdragOJDOSzPnv3BzahdPNrx8NgBaj-QAQqYcIuDE-35y1iR241_pwjXns1lFPzHa0ZyMndKh96k1fgyAVjb3usCUNPVY9A-vgcldSHNs_-pMnuFIVr3oXxftVyZCK6cjgfiKcve2hDoZ6zCxubgOwp1Gq5b0Cdedygva0iDi840aoSXqXZYqt1ivYyOfBzf2N1MS3oVbI0rsDODGpS_pLEs7tNz8MtSpiG6cFLhVH8WTqhzCDFMyIVTjv8bM3EG724Qzz6z4vwoyVClYHEYkQn7U8Ei90wsbAhZKagtS83oi3CmosS5Vj7ayZ7s3KCdZ65rjD5gX1dmtZMTdkEf7m90FBOAydHIhNEHzcXEQhjFl0N3T-=w532-h412-no?authuser=0" alt="" />
                        <div>
                            <h4>2. Select a feature</h4>
                            <p>
                                After the image is loaded choose the feature
                                you want from the toolBar.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img src="https://lh3.googleusercontent.com/T7AEBfPgEr7ZDVF6kWMOP0ds5sjHsDRPbJHVCkLjzVWUGn7vCotB6lIRNirHq0nk3d-NLbR7La5PC0-FJ-zLP2BRJrVl2nsPSBZUSI_o9GaUTrYvcEbv76Dg3KgEqUbQD1tZm1HVBchuf8vFMK-DTuyRhVX8NDgd9xrR9bM6LwPW3mVylHvw-mI2MGLEGUE5LNT3Ee3STZ63uluu5fV1grP0CiXfP6dUS8j71l2yF6ya8fdJJ2CZRIt7jzAyUSOqYB36O6Ue6IWeWwWlwnpgqJtXTsctmIBe7KrW9ZbB35w3ziYsE6vQp5X-CrxnhUBNIxqfN7oLlvbV2oB1UVLKpl7iGpMTr5ggfK9U0AOyCegE7Q5Rug1PknGytWNPSRh0egm9Dwi4Qg-cEGb00qOpAYbbftKxjErIP2dmLJGRiN3XHfiw_NTJ64OnOYxGkQZvdrZwiPmmgIqiVvoRQv9Fby9t993NtFWjCpgKK_lVKrS2G4qYblHByuo6TPacby-wf2JmeUevJj2ObKbpx_ezJlamf8UzLWp0FlJcwujpHlXK2u0jF8QOngXd_oWJ_Nz8weDpGNNBqcpGDSKB4Ll-Mv7x0sotytvdDoOkXWFT94vKM2pQv_unyDsq7MkYwef3F5wHYBU4qyyMZ3JBst6ELz0h-E-MyKITUeHafMNJXQyaWMdil0DE98ngPP3Aw5o4j0g1aHzTk6hcxvzus8Z87MasOxSN65BdfLUKOCPH4BOzTwUKrIgm0VZYSlHS99mQoGiBUS97xF5Ht7EyOccaIKaGcS_CmQuiZk-a64OHtTMpNo4XJ9fYfTlQxhozHncTXXGmU3UMfi32NsnGnLORNIaDTepEggDyhXXnxtfj0U_sV6lce5yaz2HW3qNgVXHAK4-4NAuqDF5MkgSvOj43jEECbjWUXRLyHuy4MjsYus5Zbhy0=w532-h412-no?authuser=0" alt="" />
                        <div><h4>3. Adjust and preview</h4>
                            <p>
                                Edit images online with free online photoShop
                                in just a few clicks.
                            </p></div>
                    </div>
                    <div className='box'>
                        <img src="https://lh3.googleusercontent.com/bdD_PZj-dFGSIAesSeva7Hy8l_hdB0nQxbjpl-pLupJGtipFpbcISzL8ZyZf1QFYaF_LQk1YVWvGvdTodrT44F4DBrSJvnAZKXTx9B3mqnUeHeN4U74kztBExOg3wNAuEDgvWuVFPeXrCiS3A4_8IdWm5DUGcK9EZ_fPNmtosq9lyun5K7Ep0NcRxFMb5FxEpPf8vW-Jbdf0IkTRYTxno3XFnjtlwbDidS4ukjYaHQ3HV12DJm3VDKP5I-gBh53x8TLORUZGsxDiJYDkq6HlY_hj5TZ33FhBXcpzMVoeTuaYrFbgYHGsFREjTFpHsqDshw3qkSw3BtIaICzpj39HH7BJsfihriEOZSjKbaCGu7x9AN1u2ojzIrxuanQRH8KNxT6Jy6v5yakcLMZAXBKdZdOwbyRbBjwJd7moaMtkbkNk__1ntdIH9ezlLD6tloEkc7w2sUq-RGOYYIvbTEpq8BDMQjJu6jNXaXDopYT2VwRJOeN4vfg_Jf1OfMWKYNXc9OQzTNWPR9O-9KkCkIEJjvbM5P6Q0aXWfMzVRICapWE3X8XPNpT94fdCgNr4NtTB3qAXOxJiXEwwdfPh30ICIHEpao4PHQ-twNk7IfyL5ozsmHR7pUL91usOjJEUNAOhwhoIov88w0i3jbAdf7Q88KRHmc79BJcvlel7Us8GXZxnSEDTeXkpgPLzpOjy3o7EEiLFLeBQl6QYAOf3mHISO0lpHZolw_Nl2Xl4xPLAfLtxAdzr7dwBoiwX59ShMKLUTJPsKi9vbeFqhNovSqtwZmXnSAgmT74P1v1LCC7RYmqZF4u8Vx8ZmVzyVZYCFBiNqtBKB8Gt89LI9hyAJ_93Q3eQ3-Lsb6OK30iaBghlFcmv7YB7xLAkDaLG2xc8s9DBgr_J0B_LWg9Y6INyKGB43PNaAAebT7Cn8mFljpI168rKEtUx=w532-h412-no?authuser=0" alt="" />
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
