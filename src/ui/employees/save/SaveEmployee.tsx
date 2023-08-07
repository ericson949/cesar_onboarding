import {InputForm} from "../../generics/form/InputForm.tsx";
import InputDatePicker from "../../generics/tailwind/date/InputDatePicker.tsx";
import {InputSelectForm} from "../../generics/forms/InputSelectForm.tsx";
import useSaveEmployee from "./useSaveEmployee.ts";
import {Loader} from "../../generics/loader/Loader.tsx";
import {PrimaryButton} from "../../generics/components/buttons/PrimaryButton.tsx";
import {POSITION_HELD_OPTIONS_DATA} from "../../../shared/helpers/employee/utils.ts";

const SaveEmployee = () => {
    const saveEmployeeBehaviour = useSaveEmployee();

    const {
        formState,
        register,
        setValue,
        watch,
        clearErrors,
        handleSubmit
    } = saveEmployeeBehaviour.form
    const {errors} = formState
    return (
        <form
            onSubmit={handleSubmit(saveEmployeeBehaviour.onSubmit)}
            className={"h-full w-full flex justify-center" +
                " bg-gradient-to-r from-primary to-secondary items-center "}>
            <div className={"bg-white rounded-2xl w-[475px] h-fit  flex flex-wrap py-6 px-6 "}>
                <div className={'flex h-fit flex-wrap'}>
                    <div className={"h-fit w-full flex relative justify-center text-center items-center"
                    }>

                  <span className={" font-bold text-[32px] text-black flex items-center w-fit " +
                      " before:content-['']  before:absolute before:h-[36px]   " +
                      " before:w-1.5 before:ml-[-16px]  before:bg-secondary "}> CRINA EMPLOYEES </span>
                    </div>
                    <div className={"w-full mt-[43px] text-black text-[22px] font-semibold uppercase" +
                        " flex text-center items-center justify-center"}>
                        <span>SAVE EMPLOYEE</span>
                    </div>
                    <div className={"w-full text-black text-[14px] mt-[9px] flex items-center justify-center"}>
                        <span className={"w-fit"}>Enter your credentials to access your account</span>
                    </div>
                    <div className={"mt-[40px] grid grid-cols-1 w-full gap-1.5"}>
                        <div>
                            <InputForm
                                // icon={<IconLock />}
                                placeholder="Entrez le nom du collaborateur"
                                type="text"
                                name="first_name"
                                label={"Noms"}
                                errorMessage={errors.first_name?.message}
                                registerValidate={register}
                                onChange={()=>{
                                    clearErrors("first_name")
                                }}
                            />
                        </div>
                        <div>
                            <InputForm

                                // icon={<IconLock />}
                                placeholder="Entrez le prénom du collaborateur"
                                type="text"
                                name="last_name"
                                label={"Prénom"}
                                onChange={()=>{
                                    clearErrors("last_name")
                                }}
                                errorMessage={errors.last_name?.message}
                                registerValidate={register}
                            />
                        </div>
                        <div>
                            <InputForm

                                // icon={<IconLock />}
                                placeholder="Entrez le pseudo du collaborateur"
                                type="text"
                                name="user_name"
                                label={"Pseudonyme"}
                                errorMessage={errors.user_name?.message}
                                registerValidate={register}
                                onChange={()=>{
                                    clearErrors("user_name")
                                }}
                            />
                        </div>
                        <div>
                            <InputDatePicker
                                label="Date de naissance"
                                required
                                onFuture={false}
                                // max={maxDate}
                                name={"birthday"}
                                errorMessage={errors.birthday?.message}
                                onChange={(value) => {
                                    setValue("birthday", value ?? "")
                                    clearErrors('birthday')
                                }}
                               value={watch( 'birthday')}
                            />
                        </div>
                        <div>
                            <InputDatePicker
                                label="Date de prise de service"
                                required
                                onFuture={false}
                                // max={maxDate}
                                name={"start_date"}
                                errorMessage={errors.start_date?.message}
                                onChange={(value) => {
                                    setValue("start_date", value ?? "")
                                    clearErrors('start_date')
                                }}
                                value={watch("start_date")}
                            />
                        </div>
                        <div>
                            <InputSelectForm
                                label="Poste occupé"
                                required
                                errorMessage={errors.position_held?.message}
                                onChange={(e) => {
                                    setValue("position_held", e.value)
                                    clearErrors("position_held")
                                }}
                                options={POSITION_HELD_OPTIONS_DATA}
                                selectedOption={
                                    POSITION_HELD_OPTIONS_DATA.find(
                                        position => position.value === watch("position_held")
                                    ) ??
                                    POSITION_HELD_OPTIONS_DATA[0]}
                                className="bg-white"
                            />
                        </div>
                        <div className={"pt-8"}>
                            <PrimaryButton className="w-full mb-8" type="submit">
                                {
                                    // loading === "pending"
                                    false ? <Loader/> : "Enregister"}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default SaveEmployee;