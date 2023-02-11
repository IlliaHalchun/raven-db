import {DetailedHTMLProps, HTMLAttributes, ReactElement, useState} from "react"
import { closeModal } from "../../../../redux/general/general.redux.slice"
import {useTypedDispatch, useTypedSelector} from "../../../../redux/store"
import {Appearance, Button} from "../../../../UI/Button/Button"
import {Div} from "../../../../UI/Div/Div"
import {Input} from "../../../../UI/Input/Input"
import { ModalWrapper } from "../ModalWrapper"
import styles from "./CalculateModal.module.css"
import Select from 'react-select';
import { parse, differenceInBusinessDays, differenceInDays } from "date-fns"
import axios from "axios"

export interface CalculateModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

interface IPrices {
    weekDaysPrice: number
    weekEndsPrice: number
    totalPrice: number
}

const API_KEY = "Y2ns7JDGo0Ofx91eKCjX4902SCi42VmK";

const selectOptions = [
    { value: 'USD', label: 'American Dollars (USD)' },
    { value: 'PLN', label: 'Polish Zloty (PLN)' },
    { value: 'EUR', label: 'Euro (EUR)' },
];

// TODO: Implement useCalculate
export function CalculateModal( {children, ...props}: CalculateModalProps): ReactElement {
    
    const dispatch = useTypedDispatch();

    const [selectedOption, setSelectedOption] = useState(selectOptions[0]);
    const [startDate, setStateDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const currentParking = useTypedSelector(state => state.parking.currentParking.data);
    const [prices, setPrices] = useState<IPrices | null>(null);
    
    const submitHandle = async (e) => {
        e.preventDefault();

        const start = parse(startDate, "yyyy/MM/dd", new Date());
        const end = parse(endDate, "yyyy/MM/dd", new Date());
        const diffDays = differenceInDays(end, start);
        const diffBusiness = differenceInBusinessDays(end, start);
        const diffWeekEnds = diffDays - diffBusiness;

        const pricesPerDay = currentParking.reduce((prev, parkingArea) => {
            if(!parkingArea.data) return prev;
            return {
                weekends: parkingArea.data?.weekEndRate + prev.weekends,
                weekdays: parkingArea.data.weekDaysRate + prev.weekdays
            };
        }, {weekends: 0, weekdays: 0});

        // TODO: Cant get access to API
        // const currencyRates = await axios
        //     .get(`https://api.exchangeratesapi.io/v1/timeseries?access_key=${API_KEY}&start_date=${startDate.split("/").join("-")}&end_date=${endDate.split("/").join("-")}&base=USD&symbols=EUR,PLN`)

        const pricesForAllDays = {
            weekDaysPrice: pricesPerDay.weekdays * diffBusiness,
            weekEndsPrice: pricesPerDay.weekends * diffWeekEnds,
            totalPrice: pricesPerDay.weekdays * diffBusiness + pricesPerDay.weekends * diffWeekEnds
        }

        setPrices(pricesForAllDays) 
    }

    const selectChangeHandle = (selectedOption) => setSelectedOption(selectedOption);

    const onWrapperClick = () => {
        dispatch(closeModal())
    }

    return <>
        <ModalWrapper {...props} closeHandler={onWrapperClick}> 
            <Div className={styles.Modal} appearance={Appearance.Dark}>
                <Input value={startDate} onChange={(e) => setStateDate(e.target.value)} placeholder="Start Date yyyy/mm/dd"/> 
                <Input value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date yyyy/mm/dd"/> 
                <Select 
                    className={styles.Select} 
                    placeholder={"Choose currency"}
                    value={selectedOption} 
                    onChange={selectChangeHandle}
                    options={selectOptions}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderRadius: "25px",
                            height: "100%",
                            backgroundColor: "#EFFAFD"
                        }),
                    }}
                />
                <Button 
                    onClick={submitHandle} 
                    className={styles.Button} 
                    appearance={Appearance.Light}
                >
                    CALCULATE
                </Button>
                {
                    prices
                    ? <Div className={styles.PricesArea} appearance={Appearance.Light}>
                        <p>Week days price:<br/>{prices.weekDaysPrice} <span>{selectedOption.value}</span></p>
                        <p>Week ends price:<br/>{prices.weekEndsPrice} <span>{selectedOption.value}</span></p>
                        <p>Total price:<br/>{prices.totalPrice} <span>{selectedOption.value}</span></p>
                    </Div>
                    : null
                }
            </Div>
        </ModalWrapper>

     </>
}
