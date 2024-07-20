import React, { useState } from 'react'
import s from './DartsGame.module.css'

export default function Numbers() {

    const [balance, setBalance] = useState(60)
    const [checkOuts, setCheckOuts] = useState([])
    const [double, setDouble] = useState(false)
    const [btn_check, setBtn_check] = useState(false)
    const [check, setСheck] = useState(true)
    const [opacityNoCheck, setOpacityNoCheck] = useState(false)

    const sumDartsForDouble = checkOuts.reduce((acc, el) => acc + el.throwToDouble, 0)
    const sumDouble = checkOuts.filter(el => el.checkOut === 1).length

    function newLeg() {
        setBalance(60)
        setCheckOuts([])
        setDouble(false)
        setBtn_check(false)
        setOpacityNoCheck(false)
    }

    const exception1 = [153, 156]
    const exception2 = [149, 152, 155, 158]
    const exception3 = [160, 163, 166, 169]
    const exception4 = [164, 167, 170]
    const exception5 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 50]
    const exception6 = [99, 102, 103, 105, 106, 108, 109]

    const doublePlus = () => {
        setСheck(true)
        let new_balance = balance
        if (new_balance === exception1.find(el => el === new_balance)) {
            new_balance += 8
        } else if (new_balance === exception2.find(el => el === new_balance)) {
            new_balance += 9
        } else if (new_balance > 160) {
            new_balance = new_balance + (170 - new_balance)
        }
        else {
            new_balance += 10
        }
        return new_balance
    }

    const doubleMinus = () => {
        let new_balance = balance
        if (balance === exception3.find(el => el === balance)) {
            new_balance -= 2
        } else if (balance === exception4.find(el => el === balance)) {
            new_balance -= 3
        } else {
            new_balance -= 1
        }
        return new_balance
        setBalance(new_balance)
    }

    const minus = () => {
        setСheck(false)
        setOpacityNoCheck(true)
        setBtn_check(true) // скрываем кнопку "Сheck Out"
        setDouble(true); // показываем кнопки "количество дротиков на дабл"
        setСheck(false) // идентификатор добавления или вычитания
    }

    const doubleCheck = (amount) => {
        setBalance(check ? doublePlus() : doubleMinus())
        const obj = { id: Date.now(), item: balance, throwToDouble: amount, checkOut: check ? 1 : 0 }
        setCheckOuts([...checkOuts, obj])
        setDouble(false) // прячем кнопки "количество дротиков на дабл"
        setBtn_check(false) // показываем кнопку "Сheck Out"
        setOpacityNoCheck(false)
    }

    const plus = () => {
        setСheck(true)
        if (balance === exception6.find(el => el === balance) || balance > 110) {
            setBalance(doublePlus())
            const obj = { id: Date.now(), item: balance, throwToDouble: 1, checkOut: 1 }
            setCheckOuts([...checkOuts, obj])

        } else {
            setDouble(true); // показываем кнопки "количество дротиков на дабл"
            setBtn_check(true) // скрываем кнопку "Сheck Out"
            setСheck(true) // идентификатор добавления или вычитания
        }
    }

    const undo = () => {
        if (checkOuts.length > 1) {
            const obj = checkOuts.pop()
            setCheckOuts(checkOuts.filter(el => el.id !== obj.id))
            setBalance(obj.item)
            setDouble(false)
            setBtn_check(false)
            setOpacityNoCheck(false)
        } else {
            newLeg()
        }
    }

    console.log(checkOuts);

    return (
        <div className={s.section}>
            <h1>Check out for 3 darts</h1>
            <div className={s.balance}>
                <p>{balance}</p>
                <button onClick={newLeg}>New Leg</button>
            </div>
            <div className={s.check_cont}>
                <button
                    className={s.no} onClick={minus}
                    style={{ opacity: opacityNoCheck ? '0.5' : '1' }}
                    disabled={opacityNoCheck ? true : false}
                >No Double!</button>
                <div onClick={undo} className={s.undo}>UNDO</div>
                <div className={s.check} onClick={plus} style={{ display: btn_check ? 'none' : 'flex' }}>Checkout!</div>
                <div className={s.darts} style={{ display: double ? 'grid' : 'none' }}>
                    <p className='blinking-button'>Throw to Double</p>
                    <div>
                        <div
                            style={{ display: !check && balance !== exception5.find(el => el === balance) ? 'flex' : 'none' }}
                            onClick={() => doubleCheck(0)}
                        >0</div>
                        <div onClick={() => doubleCheck(1)}
                        >1</div>
                        <div
                            style={{ display: balance === exception6.find(el => el === balance) || balance > 110 ? 'none' : 'flex' }}
                            onClick={() => doubleCheck(2)}
                        >2</div>
                        <div style={{ display: balance !== exception5.find(el => el === balance) ? 'none' : 'flex' }}
                            onClick={() => doubleCheck(3)}
                        >3</div>
                    </div>
                </div>
            </div>
            <div className={s.static}>
                <div className={s.big_double}>
                    <p>Checkout</p>
                    <div style={{ opacity: checkOuts.length === 0 ? '0' : '1', alignSelf: 'center' }}
                    >{`${Math.round(sumDouble / sumDartsForDouble * 100)}% (${sumDouble}/${sumDartsForDouble})`}</div>
                </div>
                <div className={s.two_columns}>
                    <div className={s.big_double}>
                        <p>Checkouts</p>
                        <div className={s.data}>{checkOuts.filter(el => el.checkOut === 1).map(el => el.item).join(', ')}</div>
                    </div>
                    <div className={s.big_double}>
                        <p>100+</p>
                        <div>{checkOuts.filter(el => el.item >= 100 && el.checkOut === 1).map(el => el.item).join(', ')}</div>
                    </div>
                </div>
            </div>
            <a href="mailto:andreipopkov353@gmail.com">Write a review</a>
        </div>
    )
}
