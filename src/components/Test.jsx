import React, { useState } from 'react'

export default function Test() {
    const g = {
        first: {
            huh: "ddjdd",
            gg: "wtf"
        },
        second: {
            ok: "lets go ",
            no: "finally"
        }
    }
    // const { obj, setobj } = useState(g)
const ff = {
    ok: "lets go ",
    no: "finally"
}
    console.log("g", {...g,first:ff})

    return (
        <div>

        </div>
    )
}
