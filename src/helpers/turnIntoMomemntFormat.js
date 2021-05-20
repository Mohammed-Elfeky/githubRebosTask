const turnIntoMomemntFormat = (theDate) => {
    let theDatePart = theDate.substr(0, 10)
    let theresult = ''

    for (let i = 0; i < theDatePart.length; i++) {
        if (theDatePart[i] !== '-') {
            theresult = theresult + theDatePart[i]
        }
    }

    return theresult;
}

export default turnIntoMomemntFormat;