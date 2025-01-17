

export default function (props) {

    const hiddenCard = (cc) => {
        const newStr = cc.split('');
        for (let i = 0; i < newStr.length - 4; i++) {
            newStr[i] = '•';
        }
        return newStr.join('')
    };

    const result = hiddenCard(props.number)

    return (
        <div className='carddiv' style={{ backgroundColor: `${props.bgColor}` }}>
            <div className='logoC'>
                {props.type === 'Visa' ? <img src='/img/visa.png' alt="" /> : <img src='/img/master-card.svg' alt="" />}
            </div>
            <p style={{ color: `${props.color}` }}>{result}</p>
            <div>
                <p style={{ color: `${props.color}` }}>Expires: {props.expirationMonth}/{props.expirationYear}     {props.bank}</p>
                <p style={{ color: `${props.color}` }}>{props.owner}</p>
            </div>
        </div>
    )
}

