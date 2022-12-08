import React from 'react'
import { useState } from 'react'
import FirstSection from '../../components/FirstSection/FirstSection'
import How from '../../components/How/How'

export default function Home() {
    const [upload, setUpload] = useState(false)
    return (
        <div>
            <FirstSection upload={upload} />
            <How upload={setUpload} />
        </div>
    )
}
