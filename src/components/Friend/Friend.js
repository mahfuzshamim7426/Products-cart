import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Friend</h3>
            <section>
                <p><small>Money: {money}</small></p>
                <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
            </section>
        </div>
    );
};

export default Friend;