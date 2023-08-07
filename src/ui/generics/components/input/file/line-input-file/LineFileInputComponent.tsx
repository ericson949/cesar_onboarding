import React, {useState} from 'react';
import {SubmitButton} from "../../../../forms/SubmitButton";
import {IconPlus} from "../../../../Icons/IconPlus";
import LineFileInput, {FilePreview} from "./LineFileInput";
import {InputText} from "../../text/InputText";
import {formatSpecialCharacters} from "../../../../../../shared/helpers/formatText";
import ManageFile from "../ManageFile";
import {Notify} from "../../../../../../config/Dependencies";
import {AlertType} from "../../../../../../shared/lib/Notify";
import {classNames} from "../../../../../../shared/helpers/utils";

const LineFileInputComponent = ({links, handleChange, AddDeleteComingFileName}: {
    AddDeleteComingFileName: (name: string) => void
    links: { title: string; name: string; link: string; }[];
    handleChange: (file: { file: File; title: string }[]) => void
}) => {

    const [currentFile, setCurrentFile] =
        useState<FilePreview>()

    const [title, setTitle] = useState<string>("")

    const [localFileLinks, setLocalFileLinks] = useState<{
        link: string
        title: string
    }[]>([]);
    const [errorTitle, setErrorTitle] = useState<string>()
    const [files, setFiles] =
        useState<{ file: File; title: string }[]>([]);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();

        const localLinkFile = [...localFileLinks]
        localLinkFile.splice(id, 1);
        setLocalFileLinks(localLinkFile)

        const localFiles = [...files]
        localFiles.splice(id, 1);
        setFiles(localFiles);
        handleChange(localFiles)

    }

    const handleUpdateFile = (file: FilePreview) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file.file)
        setCurrentFile(file)
    }

    const handleDeleteComingFile= (e:React.MouseEvent, id:number)=> {
        e.preventDefault();

        const files =  [...links]
        const fileToDelete = files[id];

        AddDeleteComingFileName(fileToDelete.name)
    }

    const handleAddFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(currentFile === undefined) {
            setErrorTitle("Veuillez sélectionner un document");
            return;
        }
        if(title ===""){
            setErrorTitle("Veuillez renseigner un titre pour le document");
            return;
        }
        let isExist =  links.
        filter((file)=> file.name===currentFile.file.name).length>0 ||
            files.filter
            ((file)=> file.file.name===currentFile.file.name).length>0
        if(isExist){
            Notify.alert('Un fichier avec le même nom est déjà enregistré.',
                AlertType.WARNING, "administrative-document")
            return
        }
        const linkFIle = [...localFileLinks]
        linkFIle.unshift({
            title:title,
            link:currentFile.preview
        })
        setLocalFileLinks(linkFIle)

        const localFile = [...files]
        localFile.unshift({
            title: title,
            file: currentFile.file!
        })

        setFiles(localFile)
        handleChange(localFile);

        setTitle("");
        setCurrentFile(undefined);
    }
    return (
        <div className={
            classNames("w-full grid-cols-1 md:grid-cols-3 grid gap-5",
                " md:gap-x-6 xl:gap-x-10",
                errorTitle ? "items-center":"items-end")}>
            <InputText
                label="Titre du document "
                placeholder={"Entrer le nom du document"}
                value={title}
                errorMessage={errorTitle}
                onChange={(e) => {
                    setErrorTitle(undefined);
                    setTitle(formatSpecialCharacters(e.target.value))
                }
            }
            />
            <LineFileInput
                handleChange={(file) => handleUpdateFile(file)}
                currentFile={currentFile}
            />
            <div className="mb-[0.5px] md:mb-0">
                <SubmitButton
                    type="button"
                    onClick={handleAddFile}
                    className="md:gap-2 bg-primary text-white font-normal md:w-[140px] text-sm md:px-6 fill-red w-10 h-10 md:h-11"
                >
                    <div>
                        <IconPlus className="w-5 h-5"/>
                    </div>
                    <span className="hidden md:block">Ajouter</span>
                </SubmitButton>
            </div>
            <div className={"col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 " +
                " 2xl:grid-cols-4" +
                " gap-4"}>
                {
                    links.map((link, id) => <React.Fragment key={link.link}>
                        <ManageFile id={id} link={link.link} handleDelete={handleDeleteComingFile} title={link.title}/>
                    </React.Fragment>)
                }
                {
                    localFileLinks.map((link, id) => <React.Fragment key={link.title}>
                        <ManageFile id={id} link={link.link} handleDelete={handleDelete} title={link.title}/>
                    </React.Fragment>)
                }
            </div>
        </div>
    );
};

export default LineFileInputComponent;
