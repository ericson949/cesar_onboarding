
export enum POSITION_HELD {
    FONT_END="FRONT_END",
    BACK_END="BACK_END",
     FULL_STACK="FULL_STACK"
}
export const POSITION_HELD_OPTIONS_DATA = [
    {
        id:'0',
        value:"Veuillez un poste pour lutilisateur",
        text:"Veuillez un poste pour l'utilisateur"
    },
    {
        id:'1',
        value:POSITION_HELD.FONT_END,
        text:"Developpeur Front-END"
    },
    {
        id:'2',
        value:POSITION_HELD.BACK_END,
        text:"Developpeur Back-END"
    },
    {
        id:'3',
        value:POSITION_HELD.FULL_STACK,
        text:"Developpeur Full-Stack"
    }
]