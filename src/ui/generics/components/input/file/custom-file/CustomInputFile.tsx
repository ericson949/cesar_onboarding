import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
    icon?: JSX.Element;
    name?: string;
    multiple?: boolean;
    children: string;
    setFileForm?:(file:any[])=> void
}

export const CustomFileUpload: React.FC<Props> = ({ icon,
                                                      name,
                                                      multiple,
                                                      children,
                                                      setFileForm }):
    JSX.Element => {

    const [files, setFile] = useState<Array<any>>([]);

    useEffect(()=> {
        if(setFileForm !== undefined && files.length>0){
            setFileForm(files);
            setFile([]);
        }
    },[files.length]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(
            acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
        );
      }, []);

    const {getRootProps, getInputProps, open, isDragActive, isDragAccept, isDragReject} = useDropzone({
        multiple: multiple ? multiple : true,
        accept: {
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
            "image/png": [ ".png",],
            "image/webp": [".webp"]
           // 'application/zip,application/octet-stream,application/x-zip-compressed,multipart/x-zip,.zip': ['.zip,.rar,.7zip']
        },
        onDrop
    });

    const file = files.map((file:{path:string; name:string; size:number}) => (
        <p key={file.path}>{file.name} - {file.size} bytes</p>
    ));
  return (
    <div className="sm:items-start flex h-full">
        <div className="mt-1 sm:mt-0 flex h-full bg-white md:bg-oplirisGris p-4"  {...getRootProps()}>
            <div className={`
                ${isDragAccept ? "border-blue-400" : ""}
                ${isDragReject ? "border-red-400" : ""}
                max-w-[282px] md:max-w-lg flex justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed
                border-[#2A3950] rounded-md`}>
                <div className="space-y-1 text-center justify-center flex flex-wrap h-fit">
                    <div className={"w-full flex justify-center"}>
                        {icon}
                    </div>

                    <div className="flex text-sm text-[#2A3950] flex-wrap md:flex-nowrap">
                        <label
                        htmlFor={name ? name : "file-upload"}
                        className="w-full md:w-fit relative cursor-pointer
                        outline-none focus:outline-none
                        rounded-md font-medium text-[#2A3950]
                        focus-within:outline-none focus-within:ring-0
                        focus-within:ring-offset-0 focus-within:ring-transparent"
                        onClick={(event)=> {event.stopPropagation();}}
                        >
                         <button type="button" className={"bg-transparent"} onClick={open}>{children}</button>
                        <input
                            id="file-upload"
                            name={name ? name : "file-upload"}
                            type="file"
                            className="sr-only"
                            {...getInputProps()}

                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
