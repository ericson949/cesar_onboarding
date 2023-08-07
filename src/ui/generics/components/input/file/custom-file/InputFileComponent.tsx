import React, {useState} from "react";
import { UseFormRegister } from "react-hook-form";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import  { CustomFileUpload } from "./CustomInputFile";
import {IconCloud} from "../../../../Icons/IconCloud";
import {classNames} from "../../../../../../shared/helpers/utils";
import ManageImg from "../ManageImg";
import {ComingImage} from "../../../../../../domain/old-real-estate/ComingFile";

type InputType = "text" | "password" | "email" | "date" | "number";


export interface PropsInput {
    className?: string;
    icon?: JSX.Element;
    suffixIcon?: JSX.Element;
    type?: React.HTMLInputTypeAttribute;

    id?: string;
    value?: string | number;
    placeholder?: string;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    registerValidate?: UseFormRegister<any>;
    optionsValidate?: RegisterOptions;
    customClass?: string;
    maxLength?: number | string;
    minLength?: number | string;
    disabled?: boolean;
    errorMessage?: string;


    required?: boolean;
    label?: string;
    name: string;
    links?:ComingImage[];
    handleChangeImage:(files:File[])=>void;
    AddDeleteComingFileName:(name:string)=>void;
}


export const InputFileComponent: React.FC<PropsInput> = ({
                                                             AddDeleteComingFileName,
                                                             handleChangeImage,
                                                             links,
    name,
    label,
    required,
}): JSX.Element => {
    const comingImage = links ??[]

    const [localFileImageLink, setLocalFileImageLink]= useState<ComingImage[]>([]);
    const [localFileToUpload, setLocalFileToUpload] =
        useState<File[]>([])
    const handleDeleteComingImage = (e:React.MouseEvent, id:number)=> {
        e.preventDefault();

        const files =  [...comingImage]
        const fileToDelete = files[id];

        AddDeleteComingFileName(fileToDelete.name)
    }
    const loadImageURl =  (file:File)=>{
        const fileReader = new FileReader();

        fileReader.onload = function (){
            setLocalFileImageLink(localFileImageLink=> [
                ...localFileImageLink,
                {
                    name:file.name,
                    link:fileReader.result as string
                }])
        }
        fileReader.readAsDataURL(file)
    }
    const handleAddLocalFile =(files:File[])=>{
        const filesRest =  files.map((file)=> {
            const isFileExist = !!localFileImageLink.find(filTemp=>filTemp.name === file.name)
            return isFileExist? undefined: file
        }).filter(file=> file!==undefined) as File[]
        if(filesRest.length===0){
            return;
        }
        const fileLocal = [...localFileToUpload]

        filesRest.forEach(async (file)=>
             loadImageURl(file!)
        )

        fileLocal.unshift(...filesRest)
        setLocalFileToUpload(fileLocal)

        handleChangeImage(fileLocal);
    }
    const handleDelete= (e:React.MouseEvent<HTMLButtonElement>, id:number)=>{
        e.preventDefault();

        const tempLocalLink = [...localFileImageLink];
        tempLocalLink.splice(id, 1);

        const tempLocalFile = [...localFileToUpload];
        tempLocalFile.splice(id, 1);

        handleChangeImage(tempLocalFile);

        setLocalFileToUpload(tempLocalFile);
        setLocalFileImageLink(tempLocalLink);
    }
    return (
        <div className="w-full">
            {" "}
                <label
                    htmlFor={name}
                    className={`w-full font-medium text-md text-textColor ${
                        required ? "after:content-['*']" : ""
                    } after:ml-0.5 after:text-orange`}
                >
                    {label}
                </label>
            <div
                className={
                classNames("w-full h-fit  mt-1 border min-h-[350px] rounded-[5px]",
                    "gap-5 border-[#E6EAEF] p-3 grid grid-cols-2  1.5sm:grid-cols-3 ls:grid-cols-4",
                 " md:grid-cols-5 xl:grid-cols-8",
                    (localFileImageLink.length +
                        comingImage.length) ===0?"items-center" : ""

                )}
            >
                <div className={
                    classNames(` w-full h-[156px] flex`,
                        (localFileImageLink.length +
                            comingImage.length) ===0?"col-span-12 justify-center" : "col-span-2"
                        )}>
                    <CustomFileUpload

                        icon={<IconCloud
                        className="w-12 h-12 mx-auto text-gray-600" />}
                                      name="joint_file"
                                      multiple={false}
                        setFileForm={handleAddLocalFile}
                    >
                        Importer vos images
                    </CustomFileUpload>
                </div>
                {
                    comingImage.map((image, id)=><React.Fragment
                        key={image.name}>
                        <ManageImg id={id} image={image.link} handleDelete={handleDeleteComingImage} />
                    </React.Fragment>)
                }
                {
                    localFileImageLink.map((image, id)=><React.Fragment
                        key={image.name}>
                        <ManageImg id={id} image={image.link} handleDelete={handleDelete} />
                    </React.Fragment>)
                }

            </div>
        </div>
    );
};
