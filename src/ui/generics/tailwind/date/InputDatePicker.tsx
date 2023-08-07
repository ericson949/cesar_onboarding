import {useEffect, useRef} from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState, FocusEvent} from "react";
import fr from 'date-fns/locale/fr';
import CalendarIcon from "./CalendarIcon";
import {LabelForm} from "../../forms/LabelForm";
import useClickOutside from "../../../../shared/helpers/hooks/useClickOutside";

registerLocale('fr', fr)

const InputDatePicker = ({onFuture = true, label, required = false, name, max, onChange, value, errorMessage}: {
    onFuture?: boolean, max?: string,
    value?: string | null,
    label?: string,
    required?: boolean,
    name?: string,
    errorMessage?: string
    onChange: (str: string | null) => void
}) => {

    const formatValue = value?.includes('/') ?
        value?.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2-$1-$3") : value
    const startDate = formatValue ? new Date(formatValue) : null
    const [open, setOpen] = useState<boolean>(false)
    const maxDate =
        max ? new Date(max) :
            !onFuture ? new Date() : undefined

    const maxString = maxDate !== undefined ?
        maxDate.getDate().toString().padStart(2, '0')
        + "/" +
        (maxDate.getMonth() + 1).toString().padStart(2, '0')
        + "/" + maxDate.getFullYear() : ""
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClickedOutside = () => {
        setOpen(false);
    }
    useClickOutside({
        ref: wrapperRef,
        handleClickedOutside: handleClickedOutside
    })

    useEffect(() => {
        if (maxDate && startDate) {
            if(startDate > maxDate){
                onChange(maxString)
            }
        }
            }, [maxDate?.getDate()])
    const handleChange = (date: Date | null) => {
        try {
            const val = date ?
                new Intl.DateTimeFormat("fr-Fr", {})
                    .format(date).replace(/\//g, '-')
                    .replace(/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3") : null
            onChange(val)
        } catch (error) {
            console.log(error)
        } finally {
            setOpen(false);
        }
    }
    const onChangeRaw = (e: FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const val = e.target.value.replace(/[^0-9 ]/g, '')
            let dd = val.substring(0, 2)
            let mm = val.substring(2, 4)
            const yyyy = val.substring(4, 8);
            let result = parseInt(dd) <= 31 ? dd : "28"
            if (dd.length === 2) {
                result += "/"
            }
            if (mm.length !== 0) {
                result += parseInt(mm) < 13 ? mm : "12"
            }
            if (mm.length === 2) {
                result += "/"
            }
            if (yyyy.length !== 0) {
                result += yyyy
            }
            const isValid = isNaN(Date.parse(mm + "-" + dd + "-" + yyyy))
            if (!isValid) {
                if (yyyy.length !== 0) {

                    const newDate = new Date(mm + "-" + dd + "-" + yyyy.padEnd(4, "0"));
                    dd = newDate.getDate().toString().padStart(2, "0")
                    mm = (newDate.getMonth() + 1).toString().padStart(2, "0")
                    const dateString = (maxDate !== undefined && maxDate <= newDate) ? maxString as string :
                        mm + "/" + dd + "/" + yyyy
                    const dateString2 = (maxDate !== undefined && maxDate <= newDate) ? maxString as string :
                        dd + "/" + mm + "/" + yyyy
                    onChange(dateString)
                    e.target.value = dateString2
                    return;
                }
                e.target.value = result
                return
            }

            if (yyyy.length === 4) {
                e.target.value = "01/01/" + yyyy
                return;
            }
            e.target.value = result
        }
    }
    return (
        <div ref={wrapperRef} className={"w-full flex flex-wrap space-y-1 text-left"}>
            {label && <LabelForm label={label} required={required} name={name}/>}
            <div className={"flex  relative items-center w-full"}>
                <div className={"flex w-full h-[48px]"}>
                    <DatePicker
                        locale={"fr"}
                        closeOnScroll={true}
                        onKeyDown={(e) => {
                            if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !open) {
                                e.stopPropagation();
                                e.nativeEvent.stopImmediatePropagation();
                                e.nativeEvent.stopPropagation();
                                e.nativeEvent.preventDefault();
                                e.stopPropagation();
                                e.preventDefault();
                            }
                        }}
                        dateFormat={"dd/MM/yyyy"}
                        placeholderText={"DD/MM/YYYY"}
                        selected={startDate}
                        onChange={handleChange}
                        onChangeRaw={onChangeRaw}
                        open={open}
                        maxDate={maxDate}
                        popperPlacement={"bottom-end"}
                    />
                </div>
                <button className={"absolute right-0 -mt-1 pr-4"} onClick={(e) => {
                    setOpen(open => !open)
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    e.nativeEvent.stopPropagation();
                    e.nativeEvent.preventDefault();
                }}>
                    <CalendarIcon/>
                </button>
            </div>
            <span className=" left-0 right-0 bottom-[-18px] text-xs text-red">
                {errorMessage}
            </span>
        </div>
    );
};

export default InputDatePicker;
