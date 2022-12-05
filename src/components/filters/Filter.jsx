import { useState } from 'react'
import './Filter.scss'

export default function Filter({ filtersEffect }) {
    const [theme, setTheme] = useState({
        filter: '',
        apply: false
    })
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

    function ConvertToStyle(theme) {
        let length = Object.keys(theme).length
        let dim = "%"
        let newTheme = ''

        for (let i = 0; i < length; i++) {
            let filter = Object.keys(theme)[i]
            let x = ''
            if (filter == "blur") {
                dim = 'px'
            }

            x = `${filter}(${theme[filter]}${dim}) `
            if (filter == "rotate") {
                x = `hue-rotate(${theme[filter]}deg) `
            }

            newTheme += x
        }
        setTheme({ filter: newTheme, apply: false })
        filtersEffect({ filter: newTheme, apply: false })

    }

    function handleFilters(e) {
        const filter = e.target.id
        let newFiltersTheme = { ...filtersValue, [filter]: e.target.value }
        setfiltersValue(newFiltersTheme)

        ConvertToStyle(newFiltersTheme)
    }

    function HandleReset() {
        setfiltersValue(initialValue)
        ConvertToStyle(initialValue)
    }

    return (
        <div className='filters '>
            <h2>Filters</h2>
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
                    <button onClick={HandleReset}>Reset</button>
                </li>
            </ul>
        </div>
    )
}

