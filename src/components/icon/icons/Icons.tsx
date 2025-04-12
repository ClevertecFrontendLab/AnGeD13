interface IconProps {
    size: number | undefined;
    id?: string;
    color?: string;
}

export const SaladsIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5009_4505${id})`} />
        <defs>
            <pattern
                id={`pattern0_5009_4505${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5009_4505${id}`}
                    transform='translate(0.161085 0.153364) scale(0.00751704)'
                />
            </pattern>
            <image
                id={`image0_5009_4505${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGW0lEQVR4nO2deaiVRRTAfz5NzeyZ9VArLG2xKMj6QwTb07KwRStKKcsKg0KIDFqoVFo10ldmpWlUSqstQlGZlBktUiBa2Z4pmWnaU+tp6ktvTJwHj8s98917vTPfNj84IHjH78yZ75s5c+acEQKBQCAQCAQCgUAgEEgJdXErkFf2A+YA/wDNwAygU9xK5YlZQKFIGuNWKk80lxiAbcD+cSuWF7aUGAAj18StWF6YqwzA+3ErlhfOUgZgpyzQAQ/u56/KIAx1/fCs0BGYAqwDNsif96mg/WxlACY61DlTPFTCeA9W0P4KZQDmOdQ5U2woYbztwIFltj9RGYBPHOudGdYpBryvzPYNSvvljvXODI8oBjThhf5ltK9X2n/jQfdM0Av4SzHiT8ChEe2PVtp+5kn/THCzYsTWQTje0naU0m6+R/1TTwfgY8sg7AAmAN1LtF2ktLk7hn6kmt7AJssgtK4LLwI3AoOBEZbfnhF3h9JCPTAaeLaMAShXfgPax92xpHMwMA3YWiOjt5VJcXcu6YwBmhwYviAbO/NVBZTgmRa7qZWcXerBAf73dJ53bPyCnBEHSrz52uFJseypwSDcWaxAnmkHzIww2A75zSDxXsxhyh17OQiNFYa1M8u0CEN9DvQr0W5pDb6Er2Sn3JMc0gl4LsJAi5Wjw5MjXMyNVQzGZskb2pcc0CMitNAar++qtNcGbpn8vdnl/lvlV2GmukxzLrA6wghfAN0s/4a2RxjZ5jdPVTkA27KayngI8EoZBlgRcdplFu2/S7QzIevObX7XF9gdBgCOkbm1lNGK5VOZnqKYU6Lt9AoW6lWWwXmSjEQuxwLvVuC3zy16g210lXVgl7ios5XFc4byrNvloGYq8KWkMDbJIKZuEe4KDASulw5/XeFnb97EW/di92xE41rlmY+TAoz7dxhwEnCO+Ms3AQ9LzN14MWuqnGdbZbXE7V1xqfLc10gQZrG6CngU+AD4XjyBgkPZJRsw11nKI5Xnv0QC5uh7gJWODV0oEuObvyALsw+uVvR4hpg4VlzBajcphSplo7zxR3nu7wRFH+9FGl1khW/xaPSVsl4MkfzOOJin6GbOjL1hkpd+dGzsNcCbwAPA5cDhJIOlcR/KDCtzA6RlGKwVP3kx8KpsUiZKhYnxjI5LcLlPnSWhq48PBYZKIUKUoXdLyPd+4BIxqi0Okxb6Kf3d6iPW018pUGsrTeIJGY8oi4xU+m2+ZqfUiy+vGd6EBp5QssiyRKPSf+MYOGW6xfjbJFssDyxXbGCcBGecYPHxTVHDaeSDBiVEssf18eN8y9tvwg15YZRiA+PROeNIS2BsAfniZcUOZjfujEnKQ5tzdurf2eL/n+nywd8pDzVno3niMsUOf7jMiO5jmftNlWCeWBjHizjGEhDLE30t6+CpcVQS5m36eUyxw7eSTeH9s8vTtSwNlpM8U+TnFO1kawD5Yapigy0+got/Kg83e4O8zP07FBtUcq9E1WxXHl7ufQpp53VL7MsUejtHi//YcmaywnCLC36vLyW0nZ+WXZwVelou81jv87RuraKE7ywEn5hTrfcsb79JSfHGR4oSF5JdpliMv8i131+MVmNlXLMsMtZifDMdH+FboSstadh1GQy2tVgGwNjCO70sMZDzyA5jIrL6Yg29aNeyLPU9HzqgnVwvY6s1WBJjBp41Dm7kBtLtar5j6ZuRH4CD4la0vdyDpmW5nUL6GGzx89umRXrJdCuHiy2KbpLs6LRcVTO7jPKmXyQOlCgWWBT+PeGpKV2Au8rMZ10hlZeJo5fcCKUpbly48QlzT3vIBRo2vdvK28ABJJhBMu/bOrEs5gus6+SYcJ4llFwsuyWfNUkvj8oFUosV1aklkrRV76nw7yLgaclSKFRY0Hc6KeP8MrKkW2W7VA/eInctdKvBEeFA4DrZIK2osjRqp4RUUpsyP0BctUIVsl6SXN+S26xmSRBscpHMlGy0hTK11eqivTekoDr1dC/znoakyIeus9jiYpiHerFCldIsX5jJ8M40HWRethVx+JIW+Q91xiXdrXQV4Boil2Rs9mj09VLwNzpHSQORdBQXb4KUm66qwe2ELcDPcmzYKDVbiYnZpGVQesumbricsY6T2wony871NpHxkoU3QhZPcxYdbiQMBAKBQCAQCAQCgQB7xX/OFL4L7aDoZwAAAABJRU5ErkJggg=='
            />
        </defs>
    </svg>
);

export const SnacksIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5009_4576${id})`} />
        <defs>
            <pattern
                id={`pattern0_5009_4576${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5009_4576${id}`}
                    transform='translate(0.125 0.125) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5009_4576${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,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'
            />
        </defs>
    </svg>
);

export const FirstCourseIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_14947${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_14947${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_14947${id}`}
                    transform='translate(0.166667 0.166667) scale(0.00694444)'
                />
            </pattern>
            <image
                id={`image0_5067_14947${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2cy28OYRSHn6pbaZWN0A1BLQRhI00TBFvWjcsf4bqhexa0LhUkiK6UhWuEsiHp30AICbuicWtokPaVN86Kznzz9evMO9/M70lO0vQyc875zZz3zPtNDwghhBBCCCGEEFUwo5pfFtNHE9AHfDE7Z98TGXEacP9Yj7KfHcOTCPBeAmSHizAhAcqB0x0gAUqN0x2QLouBDmAP0A30Av3AfWAoRoAh+51++5tuO0aHHVNMwmpgnyXsGfA1JsG1mj/2U3tm8OdsL6MiC4Au4DLwLsVkJ7W35ov3qYWCMhfYDdwGxnKQdBdh3rdbJsYcCsBy4ATwMQfJdVXaB+A4sIw6xDt9Cfidg0S6Gm0cuFkv68VC25n8VUPAE8Ab4I4tzAetk9kMrAVWAEuARcAsYLZ93WY/WwdsAfYCh+0Yd+2YEzX45WM6YzHmkq6ITbJK9tkStB/YBMxP0cdma0kPAPfs3NX6O2yx5oYW67ur7TxOAZ1AY0DfG82Hnil0ZNfy0DX52/11FbfwDSsPDeSPBmCr+Zi0hL62shiEHfZpVCUnf1gd9jW6XmizD32StMy+jG3P2sFdwM8Ei+kVYCn1SxtwNcHi7XOxMyuntiW4Ml5ZbS0KnRZTXMxjVsJSf7AaqeDIY6CV4tEKPKkQ+4jlqCbmAecT1ncZiVvtvqRvblxUYknrwvK5rfiik+9adGWTSg6+V3qZTAIQVgCVIFIV4EKSNaDJNtSmsk8iY9IcfALO6vVJIYQQtRK10JYNFyoPEuAvEiAwEqCoAkx1N7RsuLzthpYNl7fd0LLh8rYbWjZcGgJ4VILSEyDV3dCy4ULthkqAwHmQAH+RAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAGUV4FvEif0kkjKNXXMRM+lS52XEyddTHjZE5OBFFieP+m/xo5SH7ogcDGZx8iMxg4zKUIZabFL7ZDk4lIUD7TEL0PWczgKaLnxsAzHxryQjBiuI0FzQK38gJu6HWS9C4zHO+HJ0DNhY52I0WwzdMWXHWS4yb0J6q3w9r8h2kkAD7x7kIHgX2Px8pJkEHGIUtx4U3R7ZQ1lQZtrYx7g1oWg2bmUn5MjN/1hjI35dwe2JNSG5ZZWNDPal6TkwmoOkuSnaqMUwaA9ZmfX5QgghhBBCCCGEEILC8QcO4lKLjoWFSAAAAABJRU5ErkJggg=='
            />
        </defs>
    </svg>
);

export const SecondCourseIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15003${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15003${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15003${id}`}
                    transform='translate(0.153895 0.125) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15003${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR4nO3aPa9MURSH8cdLaBSIaIWKQkOjuqFQUOjFTSQKnUIkEoX4BkSLRqIUiU/gpaUVEoVvQMKNCGHLSeaWe27BnLXWOc8vWd1ksvf6zz5rzpwBSZIkSZIkSZIkSZI0aa1TMoB5aJ4AA5i15gkwgFl/otuKXz87BhDMAIIZQDADCGYAwQwgmAEEM4BgBhDMAIIZQDADCGYAwQwgmAEEM4BgBhDMAIIZQDADCFYlgN3AryXv9z9rVFUCODlS8w2g48pUA6jivgHEemkAcbYBnw0gzqFO838AOwPXNRsXOgG8iV7YXNzuBPCIBO6OeG1syeoaCVxK0IgWVGskcDRBI1pA/QH2ksB24GuChrSR6xOJvE7QkDZyPSORewka0kauOySy3lnkK+p739nbWRI51lnkt8WMqGoP8LuztwMksmwQD9+SqlqrMIC3GsTDfUJV1zt7ekpCvUE83ClX9aSzp1skNMVB/KHCAN5qEA+zYRf17KsygDftWDKIL1PPzUoDeNPzzqI3gKvAfvI7CNwAfnb28oDELia4Q20rrjMkNlyG3iVoUltRDQ/m0zuxeFbaJlZfgMMUcQ74PrHmn6KY48DbBM1r/1gvgCMU/j/NeeAx8LHIqdhY/AL6EDgd3UBJkiRJkiRJkiSJ2fgLtf6eqlr3ZxsAAAAASUVORK5CYII='
            />
        </defs>
    </svg>
);

export const DessertIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15059${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15059${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15059${id}`}
                    transform='translate(0.125 0.125) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15059${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,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'
            />
        </defs>
    </svg>
);

export const GrillIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15115${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15115${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15115${id}`}
                    transform='translate(0.125 0.125) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15115${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO2dTU8UQRCGX5RgDIv6A+QkiB+JICc9+pdQSFTurJEInNSLNwUMiQejgtz8DcaPs65iokaEhHjQNpPUJmQy3Tuw3ds1Pe+T1AWKUFVvb3XP7HQPQAghhBBCCCGEED+cBTADYBPAewC7AExFbFdizmKfBjBapUFxEcBzBUU0ni0TYxKK6QewBOCvgmKZQJbltiC5quKUjBBTE9sAcBJKOArgpYKimB7bay2fhCUFxTCR7F7s4k926PlfAdwEMA5gENVhUGK+BWDLkV+W+0TMQF19/0nFim6jAWDZkec6Iq7zbUE9BtCHdOjrIMJIjKBmHG0nGzWp0XC0oxua2k/W81PltmNZ2nM+WoK5hHQZt+T8IUYwvy3B2NrPAIA7AL4AaAFoys8O6+eDYQBrkktmzwCMOfyHLDlnf9tzbBOSjWaBb7MLPx/F/1Hwv37K73zlHYyDBtIq8G114dcta44cnjr+jgIEbqGZbacoQFFrmevCL6QAv1IUYECK2yoxCTdL+HXLM0cOqykKoI0xmXDz8X8HcLoKeasJpAuGZcLdFlvtUHxVeasJpK55qwmkrnmrCaSueasJpK55H2YZ2r7HY5Raq8Syt7ICFF1gGaXWTFEAzSPfFHyp5CvvYBw0EFMxs0EBQAEONRJij2jDT4CS3pmj9i0oNhQgMhQgMhQgxzEAd+W+fLZT5T6A4wH9KECOhwVFeRDQjwLs4yqAfyWeu/HpRwH28abkl+Q+/SiAcL7kRgjffhRAmLIU41Nu0vTtRwE6PKmWvzXs248CCG8txbjWdgjkRwGEogdlMzvTdgjkRwGEP5Zi5PeZ+fajAB0Klt9v4NuPAnRoGfkNcL79KIDASfiA+B45a1yGxhVgquSFEy/EAglwzuGzGNCPc0CJm2c7uZ33Pv0owD6uWG4f7wE4EsiPApT4AuVRQD8KUPAV4qK0iT0pViOgHwWw0FfyxJVu/ShAZChAZChAZGovgFFqvgQLhq/AjVLzlXcwKACqJUDRMTRGqX32mHcwUt6kN+cxb1VHlrVPQTEV3aY6pOnIsjoe2jdhyTl714CaYyuz435TZVbTsZXTlmC2Ej24dQjAN0vO12MENOropcsJHl284sg3/7BXz9joIEIjkZG/4sjzVexJyXV8/ZYc93u5YmI0JOZZR9sxknv0RceCguWjiWTzUPIKkxcKimHq+goTyAttXPNBarYO4ASU0S9bf1J/jdW8fOrVckGOgjSJ2Wbs98UclBF5s0TWmt7JUwmmIrYjMW/IRVa0dT4hhBBCCCGEEIKk+A84sduiCdYsdwAAAABJRU5ErkJggg=='
            />
        </defs>
    </svg>
);

export const VeganIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15171${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15171${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15171${id}`}
                    transform='translate(0.125 0.125) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15171${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,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'
            />
        </defs>
    </svg>
);

export const ChildIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15179${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15179${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15179${id}`}
                    transform='translate(0.125 0.125) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15179${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,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'
            />
        </defs>
    </svg>
);

export const MedicalIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M12.5006 5.5623C12.5006 6.00302 12.5006 6.44374 12.5006 6.89781C12.7692 6.88232 12.7692 6.88232 13.0432 6.86651C14.6997 6.87529 16.1844 7.41893 17.5088 8.40026C17.6216 8.51841 17.7343 8.63655 17.8505 8.75827C18.3094 9.19425 18.7293 9.18759 19.3451 9.23496C19.5329 9.86098 19.5329 9.86098 19.3451 10.2366C14.4972 10.2366 9.64931 10.2366 4.6545 10.2366C4.48756 9.56884 4.48756 9.56884 4.6545 9.23496C4.82321 9.22463 4.99193 9.2143 5.16575 9.20366C5.76284 9.13799 6.03643 8.92337 6.46996 8.51503C7.68204 7.37535 9.27347 6.88276 10.9251 6.87695C11.1145 6.88383 11.3039 6.89072 11.499 6.89781C11.499 6.4571 11.499 6.01638 11.499 5.5623C11.9148 5.35439 12.0684 5.43263 12.5006 5.5623ZM7.6594 9.23496C10.5241 9.23496 13.3887 9.23496 16.3402 9.23496C15.1618 8.05655 13.5855 7.99467 11.9998 7.98292C10.4141 7.99467 8.8378 8.05655 7.6594 9.23496Z'
            fill='black'
        />
        <path
            d='M5.99004 10.9043C6.32058 10.9043 6.65111 10.9043 6.99167 10.9043C6.9941 11.0466 6.99654 11.1889 6.99905 11.3355C7.00927 11.866 7.02166 12.3964 7.03548 12.9269C7.04102 13.156 7.0457 13.3851 7.0495 13.6142C7.05513 13.9445 7.06412 14.2748 7.07318 14.605C7.07755 14.8035 7.08193 15.0019 7.08643 15.2064C7.16491 15.7927 7.29857 16.1148 7.65943 16.5803C8.12882 16.7367 8.42254 16.7699 8.90878 16.7741C9.13529 16.7765 9.13529 16.7765 9.36639 16.779C9.61054 16.78 9.61054 16.78 9.85963 16.7811C10.0274 16.7821 10.1951 16.783 10.368 16.784C10.723 16.7856 11.078 16.7867 11.4331 16.7873C11.9757 16.7889 12.5182 16.7941 13.0608 16.7994C13.4058 16.8005 13.7507 16.8013 14.0957 16.802C14.2578 16.804 14.4199 16.8061 14.5869 16.8082C15.7163 16.809 15.7163 16.809 16.6741 16.2464C16.8614 15.6846 16.8758 15.2296 16.8939 14.6376C16.9009 14.4208 16.9079 14.204 16.9151 13.9806C16.9217 13.7517 16.9284 13.5227 16.935 13.2937C16.9422 13.0627 16.9495 12.8317 16.9568 12.6008C16.9745 12.0353 16.9916 11.4698 17.008 10.9043C17.3385 10.9043 17.6691 10.9043 18.0096 10.9043C18.0096 11.1247 18.0096 11.3451 18.0096 11.5721C18.4504 11.5721 18.8911 11.5721 19.3451 11.5721C19.5329 12.1981 19.5329 12.1981 19.3451 12.5737C18.9044 12.5737 18.4637 12.5737 18.0096 12.5737C18.0149 12.7479 18.0149 12.7479 18.0202 12.9256C18.0342 13.4552 18.0428 13.9847 18.0514 14.5144C18.057 14.6971 18.0626 14.8798 18.0683 15.068C18.0811 16.1205 18.0839 16.8009 17.3419 17.5819C16.8062 17.9186 16.3833 17.9593 15.756 17.9643C15.5722 17.9664 15.3883 17.9685 15.1988 17.9707C15.0009 17.9711 14.803 17.9715 14.5991 17.9719C14.3949 17.973 14.1908 17.9741 13.9804 17.9752C13.5485 17.9769 13.1165 17.9777 12.6846 17.9776C12.0244 17.9784 11.3643 17.9844 10.7041 17.9908C10.2844 17.9917 9.86463 17.9924 9.44489 17.9927C9.24766 17.9951 9.05044 17.9975 8.84724 18C7.79835 17.9942 7.10157 17.9889 6.32391 17.248C5.94852 16.7253 5.9507 16.2717 5.95743 15.6386C5.95851 15.46 5.95958 15.2814 5.96069 15.0974C5.96349 14.9119 5.96629 14.7264 5.96917 14.5353C5.97068 14.3472 5.97218 14.1591 5.97373 13.9653C5.97767 13.5014 5.98316 13.0376 5.99004 12.5737C5.54932 12.5737 5.1086 12.5737 4.65453 12.5737C4.46672 11.9477 4.46672 11.9477 4.65453 11.5721C5.09525 11.5721 5.53596 11.5721 5.99004 11.5721C5.99004 11.3517 5.99004 11.1314 5.99004 10.9043Z'
            fill='black'
        />
        <path d='M12 11.2382V15.2448' stroke='black' strokeWidth='1.2' />
        <path d='M9.99658 13.2415H14.0031' stroke='black' strokeWidth='1.2' />
    </svg>
);

export const NationalIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15295${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15295${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15295${id}`}
                    transform='translate(0.166667 0.166667) scale(0.00694444)'
                />
            </pattern>
            <image
                id={`image0_5067_15295${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,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'
            />
        </defs>
    </svg>
);

export const SaucesIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15351${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15351${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15351${id}`}
                    transform='translate(0.166667 0.208333) scale(0.00694444)'
                />
            </pattern>
            <image
                id={`image0_5067_15351${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcElEQVR4nO2dW2icRRTH/+sladSisdGYphZbq74UilXUB8UqiiholUYtEqzQgu274IsahVZ88EXbgoo3FG3VJykqPnmnlVgvoV5aaxJp64Maq9KaptpdOXA+2Cw5M/N930x2d+b84Dxk2bnknPnOnDnfzCygKIqiKIqiKEqTuAbACwC+BPATgK8APA1gabM6lApnAXgTQE2QKhvi1GZ3NEZOA/CZQfn18i6AOc3ucGy85Kj8TN5TI/jjjpzKVyN4hPz5aEEDkLyvT0I57jQo9zUAC9jn65wQCCnq+RHA6fydTgDvqBHCcFBQLD0Z9agRAjCHY/tG5f9bN/rrUSN4plsY/X8ayqgRPELKPCGseLst5XRO8MS48BQMWMqpETzximCANxzKqhE8MCAY4C8Ap3g0An1PEZJwRwTFXQI3Oh0Xa2oEgW8FpV0Bd9QIBbkSwHHBABfmrMvFCNsBVIp2Nkb/f1RQ1O8ATipQp4sR7kPiVAA8LKyCM9lcon6bESjPlCxdALZZRiithOeXbMdmBNcJPir6AHxuUT7lgVZ6ao+M8LXQzi1IjOUADliUT+Ho7R7bpITeN2oAGCfbTMg4l+ZU8MnsSi4DcBH/nX1+myG8JbkYCVBxmGxJdrF7cuUCAM/xXFFfD4WzhwBMWdrbiwTocphsSV7P+U53EMA/DvWa5F5ETp/DZEtPxUM5F0WrHZ4mm2yLfSG23HGyXZWz3vmcoCuj/JcBdCBiBgJNtmCfX1Tx9N75HkRMJdBkWz/pSvmiSQBfAPit4fPDnKZeE3sWtIsnUt+Trcvop2hnWd33zgSwCMDZSIQ+x8n2iRIT30JDWPksEmYZgJ8typ/04Hul0X+cR3uSrDK8xcqEFkSXl2xHR38D5EYeFLaS1AudbDkf5Wm50d8D4DH+B20jUAXT1h27WXfziip/5Qy5DxXk1sFhTtTlVr7tsVeBsw5Il7fmcTs68uF9gP3h6o7Ib+noRhAdDLkYgM7IqgEQRAc0MVv5WyhM+2kUN64SdEjZVSvSMjzqtKpnOgUdHnMpPCEUTibh5IEeQYeUQbUyJhRONg9SgMWCDul4rJXdQuEVRXqSKNcJOhx2KbxdKHx/+H5Hw3rDOworjwbYO5kam8usA+4WCo+E73c0jAg6vMt1N4D0pqk3fN/bnnMN76r7XSv5QahgXdi+R8FaQXff56lkq1DJx+H6HQ0fCLrbkqeSFQY3lMQm0xLx/wkfYXyFL6+bqaLni/YuAZ4RdDZe5PiTlJae4pfXynT6Odczk842ogC9hl3BtFhTpvOqoKtjeaKfRrYIlZLcXLTSCLnaEHpSQFOYhYbHasxyw0gqzAWwz+CuaZ9pKUyvKHfEvve9hOsh2QRPm2H3Gxp5BOnygEEvY3wvhRdutGxTSTFTOmjw+9UQx1IfNxjgv8SMMGg4P0DyZIhG6S6dTwyNZu6okoDbqRp0sDPkZd89hkRdJm9H+v54rsPBkNGCJ3JyQe+Gf7F0hJbeNyEerjWEmpn8yoe3Z4WlDkYgectHHNxE+jnMrDoon05rziqL+AS4zQg0Wb3YZreFLObEmrQIbXQ7szbyGzkHwEcOncxCs085WjoPrfkmay2AD3PsDN85Gz7fJTraVGA7+x7ONW0AcD2AJbx7OOQOvA5uYwm3uZ5/omQk54n4KoeaLfXTJjfwzVC1yGW8le/+6eAzXZMtoKiaZ6G57CkAZ6AN6OWzurZrBGptIFN82y65rbajl7OpZX4ypNZEV7PRw11yLUGFfyyNdox91wLKrRm2jmzlhVeRKyzbhj7eJTbEy/th3gQw4XD7VFl3MsFtDXPbQ9yXKEa6oiiKoiiKoiiKoiiKoigKWpL/Acm58JO7a11PAAAAAElFTkSuQmCC'
            />
        </defs>
    </svg>
);

export const DrinksIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15358${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15358${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15358${id}`}
                    transform='translate(0.125 0.144216) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15358${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDklEQVR4nO2deaxdQxjAf31P2yh9/lLkUVpRvCKWILZHqyFiaawJ6V+iiOQJaSyNiJZWiIQIsYTSVPjDUmKPPcQSRaoillIkVKsLSlXx3sgk85Kmud+c23vPnZkz5/sl33/nnG+ZuXNmvvnmXFAURVEURVEURVEURVEURVGK2QmYDXwI/A6YmshvzudrgZ5YHWUqsDqBYJjIsgo4IXTwjwc2J+C8SURsLPpDBX8HYGUCTpvE5EdgTIgGuDwBZ02iMhCiAV5LwFGTqLwaogG+F5SfQn04VYiBjU3HWSUo35X6sIsQg19CKF8uKJ9EfdhXiME3IZQvEZQfTn04QojBJzFfwtOoDycJMXgzhPKnBOXnUB/OFWLwbAjlDwnKL6Q+zBRisCCE8tsF5bOoD1cJMbg5hPLZgvI7qA93CjGwWYKOM0NQ/iT14emY78HjBOV2eloXPhZi8B7wHfAX8AfwBfAIcDYwsizlewrK7d5AXVjTQp7oK+D0MpRvB/zXQMEQsD35M6aF4G8Zo/nAiHaN+EFQsB/509dGAwzLvHaNeKvGi7HzSmiAoXaHo7uFB88lf+aV0ADD74SWX8yXCA9dTP484wmqnQlOdoEdC5wBfO65/qxWjTg6Zjo2MisE3+3EZP8G1/d4GmFRq0b0uHFs6wcOAjuSL2MFv60s9Nw3XbjHrhNK7wm2XihXpnmGk8MKOmyjeza0Y8zjwkNvIF/mCj5/VHCf1ACb2jFmIGZlQCRebzEJN1m476d2jDlYeOifZeY9EsL6tFHw2S7OfFzZic7aBfwqPPhI8uMowdefC1IL3cBnnVoRPy88eA75cZPg62Mt9v5SChlmxawOCMyngq8Xee6ZAvzdyRhNEh5u58p7kA97eXrxRE8Fue/MxGllGfeloOAy8mFA8HGZcP2lBeX7dketNG6LWSMTiLebXPP0et6Lw7IOGF+mcf2eYWgCeQw/Q4KPB2yxSXNNE8e07MLr2LIN7HaHExopvJ7qM8eTTrYr3KvdVNQUyD/tZD+LuEVQuryM7beIWNu/FXxb4VkHNRp2psbapqtyzejJTQbYJ3b6uk/MqukXqC4vtxH4f93IMDqUsRd7Xsa2nr5q9HlevkXyEnBQaIPtTGCtYND9VI8HWwj8O8CJMY2eLxi2uWJT0olu1tJs4J9z27TR6fUY/jDVYWGTgV/iTsskxQOeTeuivHkK9AmVf1vLiyFfsNvCeE8G8I3E1wUjXAqlKPiD7teeLHd5jL+AdJnR5NBjF2BJs5vb8W9k/MqYn3gp+PROMykF43I+lT3GY9wvJDXu2YZZj52iJs8oz15B28WpJTPds+ha5g7fbXIzvEXuizGVYIrHsbXA7rENdDt36wQbbcAPddeNdpnfyiFVUhvg3ciHOqzu9z323UgG2J/r1x4nF0fqWd0Flc5L3TCaBQe6gi3J2UcDF3ONdOUkkj0bYyTTOs2ZbWQXTWA5n0y5NYHgmgKxNmbLzp76SpOA2PO948iUUZ7qYpOQfBDq64ehuTeB4Jom5T4y45AmU7wmERlMMc/fqc3tJyKldnudbsmuV8iECa5HScHvimhbl+eolZ0y700GXCc4uMF9/jE24zyp8xwq+8SZzwLS30bNosC4yp+4X0MGSF/aNRWQ1Tl/3stUQGy2tPIc45kFmYRl0NmeBVdUKBNqnK32dGNW9LtK6fUJBNgIst7ZGOzvSBRFURRFURRFURRFURRqw/8WXTgttYNCMgAAAABJRU5ErkJggg=='
            />
        </defs>
    </svg>
);

export const HomemadeIcon = ({ size, id }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <rect width='24' height='24' fill={`url(#pattern0_5067_15365${id})`} />
        <defs>
            <pattern
                id={`pattern0_5067_15365${id}`}
                patternContentUnits='objectBoundingBox'
                width='1'
                height='1'
            >
                <use
                    xlinkHref={`#image0_5067_15365${id}`}
                    transform='translate(0.151406 0.146862) scale(0.0078125)'
                />
            </pattern>
            <image
                id={`image0_5067_15365${id}`}
                width='96'
                height='96'
                preserveAspectRatio='none'
                xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEm0lEQVR4nO2cS4gdRRSGvzwnOJNkBockRN1kkcdiVmpQhGRW4gPcRd2okyBmNyaaoGSRZBEUNCsVQRARXxsziSJIIC7cRDcSSMjDR2QU4wMlD40ZhVFLCipwGW7V7b79Oqe6Pjibvl19//+cvt11q6saEolEIpFIJBKJRKIcbgEOAmeBGcAojRngDPAicLOWk2Mb8JeA5JkKijGBcCYEJMpUHI8jlJuUX25Mjl+CvcSK46CA5Jia4gUEclZAYkxNcRqB+C4/twbaGE/0oq52t3n2v4ZA+kmKEV6AIt9VO6kADZMK0DCpAA2TCtAwam5WsfpSIzRWX2qExupLjdBYfakRGquvPz1C7d95rdzu8WS9iuN04GyJLU4hkOcFJMbUFAcQyCrgioDkmIrjd2A1QnkY+FdAkkxFYb09iGAWAl8JSJSpKL50HsWyR0CSTMXxLEJZClwOCD8EbAYGkcug03g44OMSMIRAngiI3ok+ntY2NWXKI9Zu18oRj6f3Eci0R+wm9LLZ4+lbBHLNI1bk9TIjQ7HPitCAGl9qhMbqS43QWH1JEboIGANWdvnMblsHzFPoS4XQTcCPHeM2rwDzgWWu63hd00lgjSJfKoQuAX7t8v1vAJ932X5cia/MNC30zoAGXwwr8JWZpoWuzZl825cfUOArMxKETuUogH2Cp8WXGqGLgaMZkv8usECRLxFCh4Gt7qZ6zMXbwI6OHs0K4IcMBfgkx4OV1hdgHrCrx/Pm/4CPgC9yXIKeSwXozcI5/fcy4zuy0epfwEsVJd/GNw36qoSyhU6UlGj7h+vNLtufachXZZQpdEVJc4wOub6+HR/aB3ztltPudkMUdfuqlDKFvhY4nh1WuA/YCEwC3wf2fU+Yr0opS+g64J/Ao8Dlc/YfcV3SbvvPAqNCfFVOWUJfDRzrbk+b0Y5R0LnxiBBflVOG0JHANPePe7Td72ln32FRhFYVYEfgOHaufogHPO3eoRitKsCJwNBBLyY9bd+iGK0pwFjgGPdkuHFf8LTd37Cv2igq9ICn/XSgzz7o+ve+OUllTAxrTQHOedrv9STe3i9+Cnyvccec37Cv2igidEOg/fqO/Va7S8pvPRJ/fYT03oZ91UoRoZOetufdtPct7mnXbIbEh345dfuqlSJCP/S0teNBf+dIunH7lzl9vBUF+DlnkkPLR+8Q5KtW+hV6YwmJ/wXYnuM5bx2+aqdfoesLLpp7ErhBoK/a6VfoypxJ/wN4HbiLeoi+APRYFGfcKzFtL+ihBhb5taIAQ27QbLYj4XaGw8vA/Q2vrGxFATonVo1UdDPtl1YVQCJqfKkRGqsvNUJj9aVGaKy+1AiN1dfVCBdqLwu8tEkcvvcE2eX+WhkPDIGIw/dv1m7XygeBKY/ieCxwvbSvftHG7oCfopO9KmHYvczIJ/qI+0lLf2HTeODMt3Gxy/RIFWdNLLETwQx4FkXHEsfdeJVoVgVe3qQ5pj3vnxCJna38qYCkmZLiM3diqWKx6/1cFJBA02dY7U9puOyEsD2GR90TrXOBf8xGQFx1S5imXFdTbG8nkUgkEolEIpFIoJb/AVxf/H3EuTZKAAAAAElFTkSuQmCC'
            />
        </defs>
    </svg>
);

export const FilterIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
            fill='black'
        />
    </svg>
);

export const BookmarkHeartIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.99985 3.30749C7.0401 2.23874 9.64035 4.10999 5.99985 6.51524C2.35935 4.10999 4.9596 2.23949 5.99985 3.30899V3.30749Z'
            fill='black'
        />
        <path
            d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
            fill='black'
        />
    </svg>
);

export const EmojiHeartEyesIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z'
            fill='black'
        />
        <path
            d='M8.48629 7.51048C8.55748 7.49371 8.63202 7.49814 8.70074 7.5232C8.76945 7.54827 8.82933 7.59288 8.87301 7.65154C8.91669 7.71021 8.94226 7.78037 8.94657 7.85338C8.95089 7.92639 8.93375 7.99908 8.89729 8.06248C8.60113 8.57574 8.175 9.00194 7.66178 9.29818C7.14856 9.59442 6.56636 9.75025 5.97379 9.74998C5.38121 9.75025 4.79901 9.59442 4.28579 9.29818C3.77258 9.00194 3.34644 8.57574 3.05029 8.06248C3.01382 7.99908 2.99668 7.92639 3.001 7.85338C3.00531 7.78037 3.03088 7.71021 3.07456 7.65154C3.11824 7.59288 3.17812 7.54827 3.24684 7.5232C3.31555 7.49814 3.39009 7.49371 3.46129 7.51048H3.46504L3.47779 7.51423L3.52804 7.52548L3.71704 7.56673C3.87829 7.60123 4.10329 7.64773 4.35979 7.69348C4.87954 7.78648 5.50129 7.87498 5.97379 7.87498C6.44629 7.87498 7.06879 7.78648 7.58779 7.69348C7.8662 7.64338 8.14351 7.58737 8.41954 7.52548L8.46979 7.51423L8.48254 7.51123L8.48629 7.50973V7.51048ZM3.56704 3.42448C4.13929 2.35648 6.58204 3.33448 4.28104 5.99998C0.909036 4.80298 2.51854 2.77648 3.56704 3.42448ZM8.43304 3.42448C9.48154 2.77648 11.091 4.80298 7.71904 5.99998C5.41879 3.33448 7.86154 2.35648 8.43304 3.42448Z'
            fill='black'
        />
    </svg>
);

export const CustomArrowBackIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M22.4999 12C22.4999 11.8011 22.4209 11.6103 22.2802 11.4697C22.1396 11.329 21.9488 11.25 21.7499 11.25H4.06038L8.78088 6.531C8.85061 6.46127 8.90592 6.37849 8.94366 6.28738C8.9814 6.19627 9.00082 6.09862 9.00082 6C9.00082 5.90139 8.9814 5.80374 8.94366 5.71263C8.90592 5.62152 8.85061 5.53873 8.78088 5.469C8.71114 5.39927 8.62836 5.34396 8.53725 5.30622C8.44614 5.26848 8.34849 5.24905 8.24988 5.24905C8.15126 5.24905 8.05361 5.26848 7.9625 5.30622C7.87139 5.34396 7.78861 5.39927 7.71888 5.469L1.71888 11.469C1.64903 11.5387 1.59362 11.6214 1.55581 11.7126C1.518 11.8037 1.49854 11.9014 1.49854 12C1.49854 12.0987 1.518 12.1963 1.55581 12.2875C1.59362 12.3786 1.64903 12.4613 1.71888 12.531L7.71888 18.531C7.78861 18.6007 7.87139 18.656 7.9625 18.6938C8.05361 18.7315 8.15126 18.7509 8.24988 18.7509C8.34849 18.7509 8.44614 18.7315 8.53725 18.6938C8.62836 18.656 8.71114 18.6007 8.78088 18.531C8.85061 18.4613 8.90592 18.3785 8.94366 18.2874C8.9814 18.1963 9.00082 18.0986 9.00082 18C9.00082 17.9014 8.9814 17.8037 8.94366 17.7126C8.90592 17.6215 8.85061 17.5387 8.78088 17.469L4.06038 12.75H21.7499C21.9488 12.75 22.1396 12.671 22.2802 12.5303C22.4209 12.3897 22.4999 12.1989 22.4999 12Z'
            fill='#FFFFD3'
        />
    </svg>
);

export const CustomArrowForwardIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.531C15.0782 6.39017 14.9991 6.19916 14.9991 6C14.9991 5.80084 15.0782 5.60983 15.219 5.469C15.3598 5.32817 15.5508 5.24905 15.75 5.24905C15.9492 5.24905 16.1402 5.32817 16.281 5.469L22.281 11.469C22.3508 11.5387 22.4063 11.6214 22.4441 11.7126C22.4819 11.8037 22.5013 11.9014 22.5013 12C22.5013 12.0987 22.4819 12.1963 22.4441 12.2875C22.4063 12.3786 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3902 14.9991 18.1992 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12Z'
            fill='#FFFFD3'
        />
    </svg>
);

export const CustomPeopleIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7ZM11 8C11.7956 8 12.5587 7.68393 13.1213 7.12132C13.6839 6.55871 14 5.79565 14 5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2C10.2044 2 9.44129 2.31607 8.87868 2.87868C8.31607 3.44129 8 4.20435 8 5C8 5.79565 8.31607 6.55871 8.87868 7.12132C9.44129 7.68393 10.2044 8 11 8V8Z'
            fill='black'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.216 13.9999C5.06775 13.6878 4.99382 13.3455 5 12.9999C5 11.6449 5.68 10.2499 6.936 9.27994C6.30909 9.08677 5.65595 8.99231 5 8.99994C1 8.99994 0 11.9999 0 12.9999C0 13.9999 1 13.9999 1 13.9999H5.216Z'
            fill='black'
        />
        <path
            d='M4.5 8C5.16304 8 5.79893 7.73661 6.26777 7.26777C6.73661 6.79893 7 6.16304 7 5.5C7 4.83696 6.73661 4.20107 6.26777 3.73223C5.79893 3.26339 5.16304 3 4.5 3C3.83696 3 3.20107 3.26339 2.73223 3.73223C2.26339 4.20107 2 4.83696 2 5.5C2 6.16304 2.26339 6.79893 2.73223 7.26777C3.20107 7.73661 3.83696 8 4.5 8V8Z'
            fill='black'
        />
    </svg>
);

export const WriteRecipeIcon = ({ size, color }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill={color}
            d='M23.2529 2.91C23.3931 3.05059 23.4718 3.241 23.4718 3.4395C23.4718 3.63801 23.3931 3.82842 23.2529 3.969L21.6884 5.535L18.6884 2.535L20.2529 0.969002C20.3936 0.828399 20.5843 0.749413 20.7832 0.749413C20.9821 0.749413 21.1728 0.828399 21.3134 0.969002L23.2529 2.9085V2.91ZM20.6279 6.594L17.6279 3.594L7.40844 13.815C7.32588 13.8975 7.26373 13.9982 7.22694 14.109L6.01944 17.73C5.99754 17.796 5.99443 17.8668 6.01046 17.9345C6.02649 18.0022 6.06102 18.0641 6.1102 18.1132C6.15938 18.1624 6.22127 18.197 6.28895 18.213C6.35663 18.229 6.42743 18.2259 6.49344 18.204L10.1144 16.9965C10.2251 16.9601 10.3257 16.8985 10.4084 16.8165L20.6279 6.5955V6.594Z'
        />
        <path
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1.5 20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V11.25C22.5 11.0511 22.421 10.8603 22.2803 10.7197C22.1397 10.579 21.9489 10.5 21.75 10.5C21.5511 10.5 21.3603 10.579 21.2197 10.7197C21.079 10.8603 21 11.0511 21 11.25V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H13.5C13.6989 3 13.8897 2.92098 14.0303 2.78033C14.171 2.63968 14.25 2.44891 14.25 2.25C14.25 2.05109 14.171 1.86032 14.0303 1.71967C13.8897 1.57902 13.6989 1.5 13.5 1.5H3.75C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75V20.25Z'
        />
    </svg>
);

export const ExpandedMenuIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.64614 4.64592C7.69259 4.59935 7.74776 4.56241 7.80851 4.5372C7.86926 4.512 7.93438 4.49902 8.00014 4.49902C8.06591 4.49902 8.13103 4.512 8.19178 4.5372C8.25252 4.56241 8.3077 4.59935 8.35414 4.64592L14.3541 10.6459C14.448 10.7398 14.5008 10.8671 14.5008 10.9999C14.5008 11.1327 14.448 11.26 14.3541 11.3539C14.2603 11.4478 14.1329 11.5005 14.0001 11.5005C13.8674 11.5005 13.74 11.4478 13.6461 11.3539L8.00014 5.70692L2.35414 11.3539C2.26026 11.4478 2.13292 11.5005 2.00014 11.5005C1.86737 11.5005 1.74003 11.4478 1.64614 11.3539C1.55226 11.26 1.49951 11.1327 1.49951 10.9999C1.49951 10.8671 1.55226 10.7398 1.64614 10.6459L7.64614 4.64592Z'
            fill='black'
        />
    </svg>
);

export const NotExpandedMenuIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1.64598 4.646C1.69242 4.59944 1.7476 4.56249 1.80834 4.53729C1.86909 4.51208 1.93421 4.49911 1.99998 4.49911C2.06575 4.49911 2.13087 4.51208 2.19161 4.53729C2.25236 4.56249 2.30753 4.59944 2.35398 4.646L7.99998 10.293L13.646 4.646C13.6925 4.59951 13.7477 4.56264 13.8084 4.53748C13.8691 4.51232 13.9342 4.49937 14 4.49937C14.0657 4.49937 14.1308 4.51232 14.1916 4.53748C14.2523 4.56264 14.3075 4.59951 14.354 4.646C14.4005 4.69249 14.4373 4.74768 14.4625 4.80842C14.4877 4.86916 14.5006 4.93426 14.5006 5C14.5006 5.06574 14.4877 5.13085 14.4625 5.19158C14.4373 5.25232 14.4005 5.30751 14.354 5.354L8.35398 11.354C8.30753 11.4006 8.25236 11.4375 8.19161 11.4627C8.13087 11.4879 8.06574 11.5009 7.99998 11.5009C7.93421 11.5009 7.86909 11.4879 7.80834 11.4627C7.7476 11.4375 7.69242 11.4006 7.64598 11.354L1.64598 5.354C1.59942 5.30756 1.56247 5.25238 1.53727 5.19163C1.51206 5.13089 1.49908 5.06577 1.49908 5C1.49908 4.93423 1.51206 4.86911 1.53727 4.80837C1.56247 4.74762 1.59942 4.69245 1.64598 4.646Z'
            fill='black'
        />
    </svg>
);

export const ExitIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M8 6.5V5.5H3.5V4L1 6L3.5 8V6.5H8Z' fill='black' />
        <path
            d='M10 1.5H5.5C4.9485 1.5 4.5 1.9485 4.5 2.5V4.5H5.5V2.5H10V9.5H5.5V7.5H4.5V9.5C4.5 10.0515 4.9485 10.5 5.5 10.5H10C10.5515 10.5 11 10.0515 11 9.5V2.5C11 1.9485 10.5515 1.5 10 1.5Z'
            fill='black'
        />
    </svg>
);

export const HomeIcon = ({ size }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2 13.5V7H3V13.5C3 13.6326 3.05268 13.7598 3.14645 13.8536C3.24021 13.9473 3.36739 14 3.5 14H12.5C12.6326 14 12.7598 13.9473 12.8536 13.8536C12.9473 13.7598 13 13.6326 13 13.5V7H14V13.5C14 13.8978 13.842 14.2794 13.5607 14.5607C13.2794 14.842 12.8978 15 12.5 15H3.5C3.10218 15 2.72064 14.842 2.43934 14.5607C2.15804 14.2794 2 13.8978 2 13.5ZM13 2.5V6L11 4V2.5C11 2.36739 11.0527 2.24021 11.1464 2.14645C11.2402 2.05268 11.3674 2 11.5 2H12.5C12.6326 2 12.7598 2.05268 12.8536 2.14645C12.9473 2.24021 13 2.36739 13 2.5Z'
            fill='#FFFFD3'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.29266 1.49982C7.48018 1.31235 7.73449 1.20703 7.99966 1.20703C8.26482 1.20703 8.51913 1.31235 8.70665 1.49982L15.3537 8.14582C15.4475 8.2397 15.5003 8.36704 15.5003 8.49982C15.5003 8.63259 15.4475 8.75993 15.3537 8.85382C15.2598 8.9477 15.1324 9.00045 14.9997 9.00045C14.8669 9.00045 14.7395 8.9477 14.6457 8.85382L7.99966 2.20682L1.35365 8.85382C1.25977 8.9477 1.13243 9.00045 0.999655 9.00045C0.866879 9.00045 0.739542 8.9477 0.645655 8.85382C0.551768 8.75993 0.499023 8.63259 0.499023 8.49982C0.499023 8.36704 0.551768 8.2397 0.645655 8.14582L7.29266 1.49982Z'
            fill='#FFFFD3'
        />
    </svg>
);
