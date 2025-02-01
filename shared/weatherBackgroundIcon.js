let weatherBackgroundColor = icon => {
    let cardcolor = '';

        switch (icon) {
            case '01d':
            case '01n':
                cardcolor = 'sunny';
                break;
            case '02d':
            case '02n':
            case '10d':
            case '10n':
                cardcolor = 'mixed';
                break;
            case '03d':
            case '03n':
            case '04d':
            case '04n':
            case '09d':
            case '09n':
            case '11d':
            case '11n':
            case '13d':
            case '13n':
            case '50d':
            case '50n':
                cardcolor = 'cloudy';
                break;
            default:
                cardcolor = 'sunny';
                break;
    }

    return cardcolor;
}

export {weatherBackgroundColor};