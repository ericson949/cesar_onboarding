import React, {useCallback} from 'react';
import {IconCloud} from "../../../../Icons/IconCloud";
import {useDropzone} from "react-dropzone";

export interface FilePreview {
    file:File;
    preview:string
}
const LineFileInput = ({handleChange, currentFile}:{
    handleChange:(file:FilePreview)=>void;
    currentFile?:FilePreview
}) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        handleChange(
            {
                file:acceptedFiles[0],
                preview: URL.createObjectURL(acceptedFiles[0])
            }
        );
    }, []);
    const {getRootProps, getInputProps, open, isDragActive, isDragAccept, isDragReject} = useDropzone({
        multiple: false,
        accept: {
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
            "image/png": [ ".png",],
            "image/webp": [".webp"],
            "application/pdf":[".pdf"],
            "application/word":[".doc"],
            "application/wordx":[".docx"]
            // 'application/zip,application/octet-stream,application/x-zip-compressed,multipart/x-zip,.zip': ['.zip,.rar,.7zip']
        },
        onDrop
    });
    return (
        <label
            htmlFor={"file-upload-pdf"}
            className="w-full h-11 py-2 bg-white flex justify-between items-center
            border-inputBorder border-2 rounded-xl focus:border-accent
                    focus:outline-none text-title font-medium placeholder-textColor/50 placeholder:font-normal
                    px-4
                    "
            onClick={(event)=> {event.stopPropagation();}}
        >
            <span className={"max-w-[80%] truncate "}>{currentFile?.file.name}</span>
            <input
                id="file-upload-pdf"
                name={"file-upload-pdf"}
                accept={".pdf, .jpeg, .jpg, .png, .webp, .doc, .docx  "}
                type="file"
                className="sr-only"
                onChange={(e)=>{
                    handleChange(
                        {
                            file:e.target.files![0],
                            preview: URL.createObjectURL(e.target.files![0])
                        }
                    );
                }}
            />
            <button type="button" className={"bg-transparent"} onClick={open}>
                <IconCloud />
            </button>
        </label>
    );
};

export default LineFileInput;
