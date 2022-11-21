import { useContext, useEffect, useState } from 'react'
import './Filter.scss'
import { ThemeContext } from '../../../context/ThemeContext'

export default function Filter() {
    const [theme, setTheme] = useContext(ThemeContext)

    console.log("theme",theme)
    const initialValue = {
        saturate: 100,
        contrast: 100,
        brightness: 100,
        sepia: 0,
        grayscale: 0,
        blur: 0,
        rotate: 0,
    }
    const [filtersValue, setfiltersValue] = useState(initialValue)

    function test() {
        let length = Object.keys(filtersValue).length
        let dim = "%"
        let newTheme = ''

        for (let i = 0; i < length; i++) {
            let filter = Object.keys(filtersValue)[i]
            let x = ''
            if (filter == "blur") {
                dim = 'px'
            }

            x = `${filter}(${filtersValue[filter]}${dim}) `
            if (filter == "rotate") {
                x = `hue-rotate(${filtersValue[filter]}deg) `
            }

            newTheme += x
        }
        setTheme({...theme,filters:newTheme})
    }

    useEffect(() => {
        if (theme.filters == '') handleReset()
    }, [theme])
    useEffect(() => {
        test();
        console.log(theme.filters, typeof theme.filters)
    }, [filtersValue])

    function handleFilters(e) {
        let filter = e.target.id
        setfiltersValue({ ...filtersValue,[filter]: e.target.value })
    }

    function handleReset() {
        setfiltersValue(initialValue)
    }

    return (
        <div className='filters'>
            <ul>
                <li>
                    <label htmlFor="saturate">saturate</label>
                    <input type="range" id="saturate" min='0' max='200' value={filtersValue.saturate} onChange={handleFilters} />
                </li>
                <li>
                    <label htmlFor="contrast">contrast</label>
                    <input type="range" id="contrast" min='0' max='200' value={filtersValue.contrast} onChange={handleFilters} />
                </li>
                <li>
                    <label htmlFor="brightness">brightness</label>
                    <input type="range" id="brightness" min='0' max='200' value={filtersValue.brightness} onChange={handleFilters} />
                </li>
                <li>
                    <label htmlFor="sepia">sepia</label>
                    <input type="range" id="sepia" min='0' max='200' value={filtersValue.sepia} onChange={handleFilters} />
                </li>
                <li>
                    <label htmlFor="grayscale">grayscale</label>
                    <input type="range" id="grayscale" step="0.1" min='0' max='1' value={filtersValue.grayscale} onChange={handleFilters} />
                </li>
                <li>
                    <label htmlFor="blur">blur</label>
                    <input type="range" id="blur" step="0.1" min='0' max='10' value={filtersValue.blur} onChange={handleFilters} />
                </li>
                <li>
                    <label htmlFor="rotate">Hue Rotate</label>
                    <input type="range" id="rotate" min='0' max='350' value={filtersValue.rotate} onChange={handleFilters} />
                </li>
                <li>
                    <button onClick={handleReset}>Reset</button>
                    <button>Apply</button>
                </li>
            </ul>
        </div>
    )
}

